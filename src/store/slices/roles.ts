import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import RolesService from "../../services/roles.service";

export interface roles {
  roles: role[];
  total: string | number;
  loading: boolean;
  error: string;
}

export interface role {
  _id: string;
  name: string;
  label: string;
}

export const initialState: roles = {
  loading: true,
  error: "",
  total: "",
  roles: [],
};

export const ListRoles = createAsyncThunk(
  "user/roles",
  async (page: string | null, { rejectWithValue }) => {
    try {
      const { data, statusCode, message } = await RolesService.ListRoles(page);
      if (statusCode == 200) return data;
      else rejectWithValue(message);
    } catch (error: any) {
      return rejectWithValue(error?.message);
    }
  }
);


const roleSlice = createSlice({
  name: "role",
  initialState,
  reducers: {
    resetRole(state) {
      state.roles = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(ListRoles.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(ListRoles.fulfilled, (state, action) => {
      state.roles = action.payload?.roles || {};
      state.total = action.payload.total || {};
      state.error = "";
      state.loading = false;
    });
    builder.addCase(ListRoles.rejected, (state, action) => {
      state.error = (action?.payload as string) || "";
      state.loading = false;
    });
  },
});

export const roleAction = roleSlice.actions;
export default roleSlice.reducer;
