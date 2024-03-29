import React from "react";
import { useState } from "react";
import Header from "../components/user/header";
import Menu from "../components/user/employeeMenu";
import Select from "react-select";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { ProfileLogo } from "../assets";
import { Navigate, Outlet } from "react-router-dom";
import Footer from "../components/user/footer";
import { useAppSelector } from "../store/hooks";
import { AUTH, PRIVATE } from "../routes/routes";

const catgoptions = [
  { value: "Accounting", label: "Accounting" },
  { value: "Banking", label: "Banking" },
  { value: "Digital Marketing", label: "Digital Marketing" },
];

function CompanyProfile() {
  const { user, isAuthenticated } = useAppSelector((state: any) => state.user);
  
    
  if (!isAuthenticated || user?.role!=="Employee") {
    return (
      <Navigate to={`${AUTH.BASE_PATH}`} />
    );
  }
  return (
    <>
      <Header />
      <section className="relative w-11/12 lg:w-10/12 mx-auto py-10 grid grid-cols-1 lg:grid-cols-4 gap-10 bg-white">
        <div>
          <Menu />
        </div>
        <Outlet />
      </section>
      <Footer />
    </>
  );
}

export default CompanyProfile;
