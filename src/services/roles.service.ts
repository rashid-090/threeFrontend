import { toast } from "react-toastify";
import API from "../config/api";
import service from "../utils/service";

const RolesService = {
  GetRoles: async () => {
    try {
      const { data } = await service.get(API.GET_ROLES);
      return data;
    } catch (err: any) {
      throw Error(err?.message || "Something went wrong.");
    }
  },
  ListRoles: async (page:any|null) => {
    try {
      const { data } = await service.get(
        API.LIST_ROLES.replace("page=", `page=${page}`)
      );
      return data;
    } catch (err: any) {
      throw Error(err?.message || "Something went wrong.");
    }
  },
  GetPermissions: async () => {
    try {
      const { data } = await service.get(API.GET_ROLE_PERMISSION);
      return data;
    } catch (err: any) {
      throw Error(err?.message || "Something went wrong.");
    }
  },
  GetRole: async (name: string) => {
    try {
      const { data } = await service.get(API.GET_ROLE.replace(":name", name));
      return data;
    } catch (err: any) {
      throw Error(err?.message || "Something went wrong.");
    }
  },
  DeleteRole: async (id: string) => {
    try {
      const { data } = await service.delete(API.DELETE_ROLE.replace(":id", id));
      return data;
    } catch (err: any) {
      toast.error(err?.message || "Something went wrong.");
    }
  },
};

export default RolesService;
