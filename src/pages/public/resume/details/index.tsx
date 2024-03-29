import { useState } from "react";
import Select from "react-select";
import { pink } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import { GrLanguage } from "react-icons/gr";
import { TbPointFilled } from "react-icons/tb";
import { RiBriefcase4Fill, RiShieldUserFill } from "react-icons/ri";
import { FaGraduationCap } from "react-icons/fa";
import { VscGraphLine } from "react-icons/vsc";
import { toast } from "react-toastify";
import { GiBackwardTime, GiDatabase } from "react-icons/gi";
import { IoIosRocket } from "react-icons/io";
import { ProfileLogo } from "../../../../assets";
import useResume from "./useResumeDetails";

let notify = () =>
  toast.success("Shortlisted !", {
    autoClose: 1500,
    theme: "dark",
    position: "bottom-right",
  });

function Resumedetails() {
  const [loading, setLoading] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setClicked(true);
    }, 500); // Delay of 1 second (1000 milliseconds)
  };
  const { resume } = useResume();
  
  function createMarkup() {
    return {__html: resume?.description};
  }
  
  let loadingText = 'Loading...'

  return (
    <>
      <div className="font-PoppinsRegular w-11/12 lg:w-10/12 py-10 mx-auto flex flex-col gap-5">
        <div className="flex justify-between flex-col gap-y-5 text-center md:text-left md:flex-row items-center">
          <div className="flex flex-col md:flex-row gap-5 capitalize">
            <img
              className="h-28 w-28 md:h-28 object-cover rounded-full"
              src={resume?.image || ProfileLogo}
              alt="logo"
            />
            <div className="flex flex-col justify-center">
              <h4 className="font-semibold text-lg">{resume?.fullName || loadingText}</h4>
              <p className="text-xs font-semibold text-gray-700">
                {resume?.designation || loadingText}
              </p>
            </div>
          </div>
          {/* <div>
                <button  onClick={()=>notify() && handleClick()} className="border  border-primaryclr hover:bg-primaryclr px-5 py-1.5 text-gray-700 hover:text-white duration-300 text-sm font-semibold uppercase w-fit">{loading ? 'Loading...' : clicked ? 'Shortlisted' : 'Shortlist'}</button>
              </div> */}
        </div>
        <hr />
        {/*  */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 lg:gap-x-10">
          <div>
            <p className="text-sm text-justify text-gray-600" dangerouslySetInnerHTML={createMarkup()}></p>
          </div>
          <div className="grid text-gray-700 grid-cols-2  lg:grid-cols-3  gap-5">
            <div className="flex gap-3 items-center text-sm font-bold">
              <GiBackwardTime className="text-xl" />
              <div className="flex flex-col gap-1">
                <p className="capitalize text-gray-500">Experince</p>
                <p className="">{resume?.workExperince || loadingText} years</p>
              </div>
            </div>
            <div className="flex gap-3 items-center text-sm font-bold">
              <RiShieldUserFill className="text-xl" />
              <div className="flex flex-col gap-1">
                <p className="capitalize text-gray-500">DOB</p>
                <p className="">{resume?.dob || loadingText}</p>
              </div>
            </div>
            <div className="flex gap-3 items-center text-sm font-bold">
              <GiDatabase className="text-xl" />
              <div className="flex flex-col gap-1">
                <p className="capitalize text-gray-500">currentsalary</p>
                <p className="">{resume?.Csalary || loadingText}</p>
              </div>
            </div>
            <div className="flex gap-3 items-center text-sm font-bold">
              <IoIosRocket className="text-xl" />
              <div className="flex flex-col gap-1">
                <p className="capitalize text-gray-500">expectsalary</p>
                <p className="">{resume?.Esalary || loadingText}</p>
              </div>
            </div>
            <div className="flex gap-3 items-center text-sm font-bold">
              <GrLanguage className="text-xl" />
              <div className="flex flex-col gap-1">
                <p className="capitalize text-gray-500">languages</p>
                <p className="">{resume?.language || loadingText}</p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        {/* Education */}
        <div>
          <span className="flex items-center gap-5">
            <FaGraduationCap className="text-secondaryclr border-thirdclr text-4xl border-2 p-2 rounded-full " />
            <h3 className="text-lg uppercase lg:tracking-wide font-semibold text-gray-800">
              Education
            </h3>
          </span>
          <div className="p-2 mt-2">
            <div className="flex flex-col gap-5">
            {resume ? 
            (
              <>
              {resume?.educations?.map((data:any, i:any)=>(
              <>
              <div className="flex items-start gap-2" key={i}>
                <TbPointFilled className="text-xl" />
                <span className="flex flex-col">
                  <h4 className="text-base font-semibold capitalize text-gray-600">
                  {data?.degree} 
                  </h4>
                  <p className="text-sm">{data?.institution} </p>
                  <p className="text-xs font-medium tracking-wider text-gray-500">
                    {data?.startdate} - {data?.enddate}
                  </p>
                </span>
              </div>
              </>
            ))}
              </>
            ) :
            (
              <>
              {loadingText}
              </>
            )
            }
            </div>
          </div>
        </div>
        <hr />
        {/* Experince */}
        <div>
          <span className="flex items-center gap-5">
            <RiBriefcase4Fill className="text-secondaryclr border-thirdclr text-4xl border-2 p-2 rounded-full " />
            <h3 className="text-lg uppercase lg:tracking-wide font-semibold text-gray-800">
              work experince
            </h3>
          </span>
          <div className="p-2 mt-2">
            <div className="flex flex-col gap-5">
           {resume ?
          (
            <>
             {resume?.experience?.map((data:any, i:any)=>(
              <>
              <div className="flex items-start gap-2" key={i}>
                <TbPointFilled className="text-xl" />
                <span className="flex flex-col">
                  <h4 className="text-base font-semibold capitalize text-gray-600">
                  {data?.position} 
                  </h4>
                  <p className="text-sm">{data?.company} </p>
                  <p className="text-xs font-medium tracking-wider text-gray-500">
                    {data?.startdate} - {data?.enddate}
                  </p>
                </span>
              </div>
              </>
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
        {/* Skill */}
        <div>
          <span className="flex items-center gap-5">
            <VscGraphLine className="text-secondaryclr border-thirdclr text-4xl border-2 p-2 rounded-full " />
            <h3 className="text-lg uppercase lg:tracking-wide font-semibold text-gray-800">
              work experince
            </h3>
          </span>
          <div className="p-2 mt-2">
            <div className="flex flex-col gap-5">
            {resume ? 
          (
            <>
            {resume?.skills?.map((data:any, i:any)=>(
              <>
                <div className="flex items-start gap-2">
                <TbPointFilled className="text-xl" />
                <p className="text-sm font-semibold capitalize text-gray-600">
                  {data}
                </p>
              </div>
              </>
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
    </>
  );
}

export default Resumedetails;
