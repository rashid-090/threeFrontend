import { toast } from "react-toastify";
import API from "../config/api";
import service from "../utils/service";

const UserService = {
  ListAllUsers: async (search: any, size: string,page:string | any) => {
    try {
      const res = await service.get(
        API.LIST_USERS.replace("search=", `search=${search}`).replace(
          "size=",
          `size=${size}`
        ).replace("page=", `page=${page}`)
      );
      return res.data;
    } catch (err: any) {
      throw Error(err?.message || "Something went wrong.");
    }
  },
  AddUser: async (values: any) => {
    try {
      const { data } = await service.post(API.ADD_USER, values);
      return data;
    } catch (err: any) {
      toast.error(err?.message || "Something went wrong.");
    }
  },
  GetUser: async (id: string) => {
    try {
      const { data } = await service.get(API.GET_USER.replace(":id", id));
      return data;
    } catch (err: any) {
      throw Error(err?.message || "Something went wrong.");
    }
  },
  GetSubscribedUser: async (id: string) => {
    try {
      const { data } = await service.get(API.GET_SUBSCRIBED_USER.replace(":id", id));
      return data;
    } catch (err: any) {
      throw Error(err?.message || "Something went wrong.");
    }
  },
  EditUser: async (id: string, values: any) => {
    try {
      const { data } = await service.put(
        API.EDIT_USER.replace(":id", id),
        values
      );
      return data;
    } catch (err: any) {
      toast.error(err?.message || "Something went wrong.");
    }
  },
  DeleteUser: async (id: string) => {
    try {
      const { data } = await service.delete(API.DELETE_USER.replace(":id", id));
      return data;
    } catch (err: any) {
      toast.error(err?.message || "Something went wrong.");
    }
  },
  GetProfile: async () => {
    try {
      const { data } = await service.get(API.GET_PROFILE);
      return data;
    } catch (err: any) {
      throw Error(err?.message || "Something went wrong.");
    }
  },
  EditProfile: async () => {
    try {
      const { data } = await service.put(API.EDIT_PROFILE);
      return data;
    } catch (err: any) {
      toast.error(err?.message || "Something went wrong.");
    }
  },
  GetLocation: async () => {
    try {
      const { data } = await service.get(API.GET_LOCATION);
      return data;
    } catch (err: any) {
      throw Error(err?.message || "Something went wrong.");
    }
  },
  GetLocationTree: async () => {
    try {
      const { data } = await service.get(API.LIST_LOCATIONS);
      return data;
    } catch (err: any) {
      throw Error(err?.message || "Something went wrong.");
    }
  },
  ChangePassword: async (values: any) => {
    try {
      const { data } = await service.put(API.CHANGE_PASSWORD, values);
      return data;
    } catch (err: any) {
      toast.error(err?.message || "Something went wrong.");
    }
  },
  ForgotPassword: async (email: string) => {
    try {
      const { data } = await service.post(API.FORGOT_PASSWORD, {email});
      return data;
    } catch (err: any) {
      toast.error(err?.message || "Something went wrong.");
    }
  },
  BulkUserDelete: async (values: any) => {
    try {
      const { data } = await service.post(API.BULK_DELETE, values);
      return data;
    } catch (err: any) {
      toast.error(err?.message || "Something went wrong.");
    }
  },
  BulkUserRole: async (values: any) => {
    try {
      const { data } = await service.post(API.BULK_ROLE, values);
      return data;
    } catch (err: any) {
      toast.error(err?.message || "Something went wrong.");
    }
  },
  ListAllNewUsers: async (search: any, size: string,page:string | any, role: string, kycStatus: string) => { 
    try {
      
      const filters: Record<string, any> = {};
      
      if (role) {
        filters.role = role;
      }

      if (kycStatus) {
        filters.kycStatus = kycStatus;
      }
      const filtersString = encodeURIComponent(JSON.stringify(filters));
      const res = await service.get(
        API.LIST_NEW_USER.replace("search=", `search=${search}`).replace("size=",`size=${size}`)
        .replace("page=", `page=${page}`).replace('filters=', `filters=${filtersString}`)
      );
      return res.data;
    } catch (err: any) {
      throw Error(err?.message || "Something went wrong.");
    }
  },
  adminApproveUser: async (id: string) => {
        try {
          const res = await service.put(
            `${API.ADMIN_APPROVE_USER.replace(":id", id)}`,
          );
          return res.data;
        } catch (err: any) {
          throw Error(err?.message || "Something went wrong.");
        }
      },
  adminDeclineUser: async (id: string) => {
        try {
          const res = await service.put(
            `${API.ADMIN_DECLINE_USER.replace(":id", id)}`,
          );
          return res.data;
        } catch (err: any) {
          throw Error(err?.message || "Something went wrong.");
        }
      },
  getUserRoles: async () => {
    try{
      const res = await service.get(`${API.GET_USER_ROLES}`);
      return res.data;
    } catch (err: any) {
      throw Error(err?.message || "Something went wrong.");
    }
  }
      
};

export default UserService;
