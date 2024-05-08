
import { useAppSelector } from "../../../../store/hooks";
import { useEffect, useState } from "react";
import API from "../../../../config/api";
import service from "../../../../utils/service";
import ROLES from "../../../../config/roles";
import { useParams } from "react-router-dom";


const useRegistrationState = () => {
  const { loading,user,isAuthenticated } = useAppSelector((state) => state.user);
  console.log(user);
  
  let { id } = useParams();
  const [jobs, setJobs] = useState<any>();

  const getJobdetails = async () => {
    if(!isAuthenticated){
      const { data } = await service.get(API.LIST_PUBLIC_JOB_DETAILS.replace(":id",id as string));
      console.log(data?.data);
      setJobs(data?.data);

    }else{
      const { data } = await service.get(API.LIST_PRIVET_JOB_DETAILS.replace(":id",id as string));
      console.log(data?.data);
      setJobs(data?.data);
    }
  };

  useEffect(() => {
    getJobdetails();
  }, []);
  return {
    loading,
    jobs,
    id,getJobdetails
  };
};

export default useRegistrationState;
