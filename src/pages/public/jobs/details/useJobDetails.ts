
import { useAppSelector } from "../../../../store/hooks";
import { useEffect, useState } from "react";
import API from "../../../../config/api";
import service from "../../../../utils/service";
import ROLES from "../../../../config/roles";
import { useParams } from "react-router-dom";


const useRegistrationState = () => {
  const { loading } = useAppSelector((state) => state.user);
  let { id } = useParams();
  const [jobs, setJobs] = useState<any>();
  const getJobdetails = async () => {
    const { data } = await service.get(API.LIST_PUBLIC_JOB_DETAILS.replace(":id",id as string));
    console.log(data?.data);
    setJobs(data?.data);
  };

  useEffect(() => {
    getJobdetails();
  }, []);
  return {
    loading,
    jobs,
    id
  };
};

export default useRegistrationState;
