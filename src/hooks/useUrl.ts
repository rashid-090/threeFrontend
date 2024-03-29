import React from "react";
import { useNavigate } from "react-router-dom";
import { PRIVATE } from "../routes/routes";
import { useAppSelector } from "../store/hooks";

function useUrl() {
  const { role } = useAppSelector((state: any) => state?.user.user);
  const navigate = useNavigate();
  
  function Toweb(web: string | number) {
    if (typeof web === "number") navigate(web);
    else {
      navigate(`${PRIVATE.BASE_PATH.replace(":userType", role)}/${web}`, {
        replace: true,
      });
    }
  }

  return {
    Toweb,
  };
}

export default useUrl;
