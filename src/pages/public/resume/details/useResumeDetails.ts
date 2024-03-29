
import { useAppSelector } from "../../../../store/hooks";
import { useEffect, useState } from "react";
import API from "../../../../config/api";
import service from "../../../../utils/service";
import ROLES from "../../../../config/roles";
import { useParams } from "react-router-dom";


const useRegistrationState = () => {
  const { loading } = useAppSelector((state) => state.user);
  let { id } = useParams();
  const [resume, setresume] = useState<any>();
  const getJobdetails = async () => {
    const { data } = await service.get(API.GET_RESUME.replace(":id",id as string));
    console.log(data?.data);
    setresume(data?.data);
  };

  useEffect(() => {
    getJobdetails();
  }, []);
  return {
    loading,
    resume,
  };
};

export default useRegistrationState;
