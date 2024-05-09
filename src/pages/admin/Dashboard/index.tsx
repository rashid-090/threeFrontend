import React from "react";
import { AdEmployee, AdEmployer } from "../../../assets";
import { useNavigate } from "react-router-dom";
import useEmployer from "../employer/useEmployer";
import useEmployee from "../employee/useEmplyee";

let Demotitle = 'loading...'
const AdminDashboard = () => {
  const navigate = useNavigate();
  const {filteredEmployees} = useEmployer();
  const {employer} = useEmployee();
  

  

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
        <div className="text-center font-RedHatDisplayMedium text-slclr capitalize">
          <h2>Total Employer</h2>
          <p className="text-2xl font-RedHatDisplayExtraBold">{filteredEmployees?.length || Demotitle}</p>
        </div>
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
        <div className="text-center font-RedHatDisplayMedium text-slclr capitalize">
          <h2>Total Employee</h2>
          <p className="text-2xl font-RedHatDisplayExtraBold">{employer?.length || Demotitle}</p>
        </div>
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
