import { toast } from "react-toastify";
import API from "../config/api";
import service from "../utils/service";

const ComplaintService = {
  ListAllComplaines: async (search: any, size: string,page:string | any) => {
    try {
      const res = await service.get(
        API.LIST_COMPLAINT.replace("search=", `search=${search}`).replace(
          "size=",
          `size=${size}`
        ).replace("page=", `page=${page}`)
      );
      return res.data;
    } catch (err: any) {
      throw Error(err?.message || "Something went wrong.");
    }
  },
  AddComplaines: async (values: any) => {
    try {
      const { data } = await service.post(API.ADD_COMPLAINT, values);
      return data;
    } catch (err: any) {
      toast.error(err?.message || "Something went wrong.");
    }
  },
  GetComplaines: async (id: string) => {
    try {
      const { data } = await service.get(API.GET_COMPLAINT_BY_ID.replace(":id", id));
      return data;
    } catch (err: any) {
      throw Error(err?.message || "Something went wrong.");
    }
  },
  EditComplaines: async (id: any, values: any) => {
    try {
      const { data } = await service.put(
        API.EDIT_COMPLAINT.replace(":id", id),
        values
      );
      return data;
    } catch (err: any) {
      toast.error(err?.message || "Something went wrong.");
    }
  },
  DeleteComplaines: async (id: string) => {
    try {
      const { data } = await service.delete(API.DELETE_COMPLAINT.replace(":id", id));
      return data;
    } catch (err: any) {
      toast.error(err?.message || "Something went wrong.");
    }
  }, 
  GetComplaintCategory: async () => {
    try {
      const { data } = await service.get(API.GET_COMPLAINT_TYPE);
      return data;
    } catch (err: any) {
      throw Error(err?.message || "Something went wrong.");
    }
  },
  GetVehicleType: async () => {
    try {
      const { data } = await service.get(API.GET_VEHICLE_TYPE);
      return data;
    } catch (err: any) {
      throw Error(err?.message || "Something went wrong.");
    }
  },

};

export default ComplaintService;
