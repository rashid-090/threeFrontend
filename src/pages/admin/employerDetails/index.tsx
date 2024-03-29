import React from "react";
import { NavLink } from "react-router-dom";
import { BiExport } from "react-icons/bi";
import { BsBuildingsFill } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import useEmployer from "./useEmployer";
import { ProfileLogo } from "../../../assets";
import { load } from "@fingerprintjs/fingerprintjs";

let compLogo =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-rFz0nmN-YbFfvy4KgjQhlnLy7sTJydp1cQ&usqp=CAU";

function EmployerDetail() {
  const { employerData } = useEmployer();
  console.log(employerData);
  
  function createMarkup() {
    return {__html: employerData?.description || loadingText};
  }

  let loadingText = "Not available"
  return (
    <>
      <section className="min-h-screen w-full bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 overflow-hidden">
        <div className="shadow-md m-5 md:m-10 bg-white p-5 md:p-10 lg:mx-40 rounded-2xl capitalize flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <NavLink
              to="/superAdmin/employer"
              className="flex items-center gap-2"
            >
              <IoArrowBackCircleSharp className="text-5xl text-gray-300 hover:text-gray-400 duration-200" />
            </NavLink>
            {/* <button className="bg-gray-300 hover:bg-secondaryclr  rounded-full duration-200 shadow-md text-white h-10 w-10 grid place-items-center text-sm md:text-base">
              <BiExport className="text-xl" />
            </button> */}
          </div>
          <div className="flex gap-y-3 flex-col md:flex-row items-center justify-center text-center md:text-left md:justify-between">
            <div className="flex flex-col gap-1">
              <span className="flex items-center gap-2 text-2xl tracking-wide">
                <BsBuildingsFill />
                <h1 className="font-bold">{employerData?.companyName || loadingText}</h1>
              </span>
              <span className="flex gap-2 items-center text-base">
                <FaUserTie />
                <p>{employerData?.fullName || loadingText}</p>
              </span>
              <p className="text-xs font-medium">
               
              </p>
              <a  className="text-xs font-normal lowercase">
              {employerData?.webUrl || loadingText}
              </a>
              
            </div>
            <img
              className="h-28 w-28 object-cover"
              src={employerData?.image || ProfileLogo}
              alt="logo"
              loading="lazy"
            />
          </div>
          <div className="mt-5 flex flex-col gap-3 text-base font-normal">
            <h3 className="text-2xl font-semibold">Address</h3>
            <p className="text-sm">{employerData?.address || loadingText}</p>
            <h3 className="text-2xl font-semibold">More Details</h3>
            <p className="text-sm" dangerouslySetInnerHTML={createMarkup()}></p>
            
          </div>
        </div>
      </section>
    </>
  );
}

export default EmployerDetail;
