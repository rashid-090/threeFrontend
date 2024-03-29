import React from "react";
import { AdEmployee, AdEmployer } from "../../../assets";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="w-11/12 mx-auto m-10 grid grid-cols-1 gap-y-5">
      <div className="bg-white shadow-md rounded-md  p-5 md:p-10 text-lg capitalize flex justify-between items-center">
        <span className="flex flex-col md:flex-row gap-2 items-center">
          <img
            className="h-24 object-cover hover:saturate-150 duration-200 cursor-pointer"
            src={AdEmployer}
            alt="logo"
          />
          <h1 className="">Employer Data</h1>
        </span>
        <button
          onClick={() => navigate("/superAdmin/employer")}
          className="bg-primaryclr hover:bg-blue-500 hover:-translate-x-1 duration-200 text-white px-10 shadow-md py-1 rounded-md"
        >
          Show
        </button>
      </div>
      <div className="bg-white shadow-md rounded-md  p-5 md:p-10 text-lg capitalize flex justify-between items-center">
        <span className="flex flex-col md:flex-row gap-2 items-center">
          <img
            className="h-24 object-cover hover:saturate-150 duration-200 cursor-pointer"
            src={AdEmployee}
            alt="logo"
          />
          <h1 className="">Employee Data</h1>
        </span>
        <button
          onClick={() => navigate("/superAdmin/employee")}
          className="bg-primaryclr hover:bg-blue-500 hover:-translate-x-1 duration-200 text-white px-10 shadow-md py-1 rounded-md"
        >
          Show
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;
