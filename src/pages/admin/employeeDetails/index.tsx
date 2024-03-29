import React from "react";
import { NavLink } from "react-router-dom";
import { BiExport } from "react-icons/bi";
import { BsBuildingsFill } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { ProfileLogo } from "../../../assets";
import useEmployeeData from "./useEmplyeeDetails";

function EmployeeDetail() {
  const handleGoBack = () => {
    window.history.back();
  };
  const {employeeData} = useEmployeeData();

  function createMarkup() {
    return {__html: employeeData?.description || loadingText};
  }

  let loadingText = "Not Available..."
  return (
    <>
      <div className="shadow-md m-2 md:m-10 bg-white p-4 pb-10 md:p-10 lg:mx-40 rounded-2xl capitalize flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <button onClick={handleGoBack} className="flex items-center gap-2">
            <IoArrowBackCircleSharp className="text-5xl text-gray-300 hover:text-gray-400 duration-200" />
          </button>
          {/* <button className="bg-gray-300 hover:bg-secondaryclr  rounded-full duration-200 shadow-md text-white h-10 w-10 grid place-items-center text-sm md:text-base">
            <BiExport className="text-xl" />
          </button> */}
        </div>
        <div className="flex flex-col gap-5 md:gap-10">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 gap-x-16">
            <img
              className="h-32 lg:h-40 w-32 lg:w-40 rounded-full hover:saturate-150 duration-200 cursor-pointer"
              src={employeeData?.image || ProfileLogo}
              alt="profile logo"
            />
            <div className="md:col-span-3 flex flex-col gap-2 justify-center">
              <h2 className="font-bold text-5xl">{employeeData?.fullName || loadingText}</h2>
              <p className="text-xl font-light">{employeeData?.designation || loadingText}</p>
              <span className="h-[.090rem] w-full bg-gray-300"></span>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 gap-x-16 lowercase">
            <div className="text-base flex flex-col gap-1 justify-center">
              <span className="flex gap-3 items-center">
                <FaPhone className="text-xs" />
                <a>{employeeData?.phoneNumber || loadingText}</a>
              </span>
              <span className="flex gap-3 items-center">
                <MdEmail className="text-xs" />
                <a>{employeeData?.email || loadingText}</a>
              </span>
              <span className="flex gap-3 items-center">
                <FaLocationDot className="text-xs" />
                <p>{employeeData?.address || loadingText}</p>
              </span>
            </div>
            <div className="lg:col-span-3 flex flex-col gap-4">
              <h4 className="font-bold uppercase text-2xl">About me</h4>
              <p className="text-sm text-justify" dangerouslySetInnerHTML={createMarkup()}></p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 gap-x-16 lowercase">
            <div className="flex flex-col gap-4 capitalize">
              <h4 className="font-bold uppercase text-2xl">Education</h4>
              {employeeData ?
            (
              <>
              {employeeData?.educations?.map((data:any,i:any)=>(
                 <div>
                 <p className="text-base font-bold tracking-wider">
                   {data?.degree}
                 </p>
                 <p className="text-sm font-medium">{data?.institution}</p>
                 <span className="flex text-xs gap-2 font-medium">
                   <p>{data?.startdate}</p>-<p>{data?.enddate}</p>
                 </span>
               </div>
              ))}
              </>
            )
            :
            (
              <>
              {loadingText}
              </>
            )  
            }
            
            </div>
            <div className="lg:col-span-3 flex flex-col gap-4 capitalize">
              <h4 className="font-bold uppercase text-2xl">WORK EXPERIENCE</h4>
              {employeeData ?
            (
              <>
              {employeeData?.experience?.map((data:any,i:any)=>(
                <div>
                  <span className="flex text-xs gap-2 font-medium">
                    <p>{data?.startdate}</p>-<p>{data?.enddate}</p>
                  </span>
                  <p className="text-lg font-bold">{data?.position}</p>
                  <p className="text-sm font-medium tracking-wider py-1">
                    Company : {data?.company}
                  </p>
                  <p className="text-xs">{data?.notes}</p>
              </div>
              ))}
              </>
            )
            : 
            (
              <>
              {loadingText}
              </>
            ) 
            }
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 gap-x-16 lowercase">
            <div className="flex flex-col gap-4 capitalize">
              <h4 className="font-bold uppercase text-2xl">Language</h4>
              <div className="flex flex-col gap-2 text-sm font-medium tracking-widest">
                <p>{employeeData?.language  || loadingText}</p>
              </div>
            </div>
            <div className="lg:col-span-3 flex flex-col gap-4">
              <h4 className="font-bold uppercase text-2xl">skill</h4>
              <div className="flex flex-col gap-2 text-sm font-medium capitalize">
               {employeeData ?
               (
                <>
                 {employeeData?.skills?.map((data:any,i:any)=>(
                  <p key={i}>{data}</p>
                ))}
                </>
               )
                :
                (
                  <>
                  {loadingText}
                  </>
                )
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EmployeeDetail;
