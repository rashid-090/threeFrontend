import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import CryptoJS from "crypto-js";
import AuthService from "../../services/auth.service";
import { toast } from "react-toastify";
import { BLOCKED_ROLES } from "../../config/roles";
import { roleAction } from "./roles";
import RolesService from "../../services/roles.service";

export interface UserState {
  isAuthenticated: boolean;
  isAppInitialized: boolean;
  user: any;
  menu: any[];
  error: string;
  loading: boolean;
  profile: any;
  profileLoading: boolean;
}

export const initialState: UserState = {
  isAuthenticated: false,
  isAppInitialized: false,
  user: localStorage?.getItem("user") ? localStorage?.getItem("user") : {},
  menu: localStorage?.getItem("menu")
    ? JSON?.parse(localStorage?.getItem("menu") || "")
    : [],
  error: "",
  loading: false,
  profile: {},
  profileLoading: false,
};

export const login = createAsyncThunk(
  "user/login",
  async (params: any, { rejectWithValue, dispatch }) => {
    try {
      const response: any = await AuthService.login(params);
      if (response?.statusCode === 200 && response?.data) {
        if (params.rememberme) {
          localStorage.setItem(
            "login-data",
            CryptoJS.AES.encrypt(
              JSON.stringify(params),
              process.env.REACT_APP_PRIVATE_KEY || "iD@dmin2022"
            ).toString()
          );
        } else {
          localStorage.removeItem("login-data");
        }
        if (BLOCKED_ROLES.includes(response?.data?.role)) {
          toast.error("Login is not permitted for this user.");
          return rejectWithValue("Login is not permitted for this user.");
        }
        return response;
      } else {
        throw new Error(response?.message || "");
      }
    } catch (err: any) {
      toast.error(err.message || "Something went wrong!");
      return rejectWithValue(err.message || "Something went wrong");
    }
  }
);

export const logout = createAsyncThunk(
  "user/logout",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const response = await AuthService.logout();
      if (response.statusCode === 200 || response.statusCode === 401) {
        dispatch(roleAction.resetRole());
        localStorage.removeItem("auth-access-token");
        localStorage.removeItem("auth-refresh-token");
        localStorage.removeItem("user");
        return true;
      } else {
        throw new Error(response?.message || "");
      }
    } catch (err: any) {
      toast.error(err.message || "Something went wrong!");
      return rejectWithValue(err.message || "Something went wrong");
    }
  }
);

export const checkAuthorization = createAsyncThunk(
  "user/checkAuthorization",
  (_, { dispatch, rejectWithValue }) => {
    try {
      //for new sessions is token is available user will be logged in automatically
      const tmpAT = localStorage.getItem("auth-access-token") ?? "";
      const tmpRT = localStorage.getItem("auth-refresh-token") ?? "";
      const tmpUserStr = localStorage.getItem("user") ?? "";
      if (tmpAT && tmpRT && tmpUserStr) {
        let usr = JSON.parse(tmpUserStr);
        return usr;
      } else {
        return rejectWithValue("No token found");
        // throw new Error();
      }
    } catch (err: any) {
      rejectWithValue(err.message || "Something went wrong");
    }
  }
);

export const ListMenu = createAsyncThunk(
  "user/menu",
  async (name: string, { rejectWithValue }) => {
    try {
      const { data, statusCode, message } = await RolesService.GetRole(name);
      if (statusCode == 200) {
        const newArray: any[] = [];
        data?.forEach((n: any) => {
          // if (!n?.permissionDetail[0]?.name.includes("management")) {
          newArray.push({
            ...n,
            name: n.permissionDetail[0]?.name,
            label: n?.permissionDetail[0]?.label,
            parent: n?.permissionDetail[0]?.parent ?? "",
          });
          // }
        });
        localStorage?.setItem("menu", JSON.stringify(newArray));
        return newArray;
      } else rejectWithValue(message);
    } catch (error: any) {
      return rejectWithValue(error?.message);
    }
  }
);

export const getProfile = createAsyncThunk(
  "user/getProfile",
  async (_, { rejectWithValue }) => {
    try {
      const response: any = await AuthService.getProfile();
      if (response?.statusCode === 200 && response?.data) {
        console.log(response?.data);
        const obj = {
          data: {
            role:response?.data?.role,
            profile: {
              _id: response?.data?._id,
              profileStatus: response?.data?.profileStatus,
              email: response?.data?.email,
              name: response?.data?.name,
            }
          },
        };
        console.log(obj);
        
      localStorage.setItem("user",JSON.stringify(obj?.data))
        return obj;
      } else {
        return rejectWithValue(response?.message || "");
      }
    } catch (err: any) {
      return rejectWithValue(err.message || "Something went wrong");
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearError(state) {
      state.error = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(checkAuthorization.pending, (state) => {
      state.isAuthenticated = false;
      state.isAppInitialized = false;
    });
    builder.addCase(checkAuthorization.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.isAppInitialized = true;
    });
    builder.addCase(checkAuthorization.rejected, (state) => {
      state.user = {};
      state.isAuthenticated = false;
      state.isAppInitialized = true;
    });
    builder.addCase(login.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(login.fulfilled, (state, action) => {
      console.log(action.payload);

      state.user = action.payload.data || {};
      state.error = "";
      state.isAuthenticated = true;
      state.isAppInitialized = true;
      state.loading = false;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.error = (action?.payload as string) || "";
      state.isAppInitialized = true;
      state.isAuthenticated = false;
      state.loading = false;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.isAuthenticated = false;
      state.user = {};
      state.profile = {};
    });
    builder.addCase(logout.rejected, (state) => {
      state.error = "something went wrong";
    });
    builder.addCase(ListMenu.pending, (state) => {});
    builder.addCase(ListMenu.fulfilled, (state, action) => {
      state.menu = action?.payload || state?.menu;
    });
    builder.addCase(ListMenu.rejected, (state) => {
      state.error = "something went wrong";
    });
    builder.addCase(getProfile.pending, (state) => {
      state.profileLoading = true;
      state.error = "";
    });
    builder.addCase(getProfile.fulfilled, (state, action) => {
      console.log(action.payload);

      state.user = action.payload.data
      state.error = "";
      state.profileLoading = false;
    });
    builder.addCase(getProfile.rejected, (state, action) => {
      state.error = (action?.payload as string) || "";
      state.profile = {};
      state.profileLoading = false;
    });
  },
});

export const { clearError } = userSlice.actions;
export default userSlice.reducer;
