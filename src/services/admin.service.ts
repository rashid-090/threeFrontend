import { toast } from "react-toastify";
import API from "../config/api";
import service from "../utils/service";

const AdminService = {
  GetProfile: async () => {
    try {
      const { data } = await service.get(API.GET_PROFILE);
      return data;
    } catch (err: any) {
      throw Error(err?.message || "Something went wrong.")
    }
  },
  EditProfile: async (values: any) => {
    try {
      const { data } = await service.put(API.EDIT_ADMIN_PROFILE, values);
      return data;
    } catch (err: any) {
      toast.error(err?.message || "Something went wrong.")
    }
  },
  ListRoles: async () => {
    try {
      const { data } = await service.get(API.LIST_ROLES);
      return data;
    } catch (err: any) {
      throw Error(err?.message || "Something went wrong.")
    }
  },
  AddRoles: async (values: any) => {
    try {
      const { data } = await service.post(API.ADD_ROLE, values);
      return data;
    } catch (err: any) {
      toast.error(err?.message || "Something went wrong.")
    }
  },
  GetRole: async () => {
    try {
      const { data } = await service.post(API.GET_ROLE);
      return data;
    } catch (err: any) {
      toast.error(err?.message || "Something went wrong.")
    }
  },
  EditRole: async (values: any, name: string) => {
    try {
      const { data } = await service.put(
        API.EDIT_ROLE.replace(":name", name),
        values?.permissions
      );
      return data;
    } catch (err: any) {
      toast.error(err?.message || "Something went wrong.")
    }
  },
};

export default AdminService;
