import React from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import Header from '../components/user/header'
import Footer from "../components/user/footer";

const PublicLayout: React.FC = () => {

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default PublicLayout;
