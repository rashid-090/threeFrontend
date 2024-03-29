import React from "react";
import { Link, Navigate, Outlet } from "react-router-dom";

import { PRIVATE, PUBLIC } from "../routes/routes";
import { useAppSelector } from "../store/hooks";

const AuthLayout: React.FC = () => {
  const { user, isAuthenticated } = useAppSelector((state: any) => state.user);

  
  if (isAuthenticated && user?.role) {
    return (
      <Navigate to={`${PRIVATE.BASE_PATH.replace(":userType", user?.role)}`} />
    );
  }

  return (
    <>
      <Outlet />
    </>
  );
};

export default AuthLayout;
