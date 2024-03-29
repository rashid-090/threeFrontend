import { useAppSelector } from "../../../store/hooks";
import { useEffect, useState } from "react";
import API from "../../../config/api";
import service from "../../../utils/service";
import ROLES from "../../../config/roles";
import { useParams } from "react-router-dom";

const useEmplyerDetails = () => {
    const { loading } = useAppSelector((state) => state.user);
    let { id } = useParams();
    const [employeeData, setEmployeeData] = useState<any>();
    const getJobdetails = async () => {
      const { data } = await service.get(API.GET_EMPLOYER.replace(":id",id as string));
      setEmployeeData(data?.data);
    };
  
    useEffect(() => {
      getJobdetails();
    }, []);
    return {
      loading,
      employeeData,
    };
  };
export default useEmplyerDetails;
