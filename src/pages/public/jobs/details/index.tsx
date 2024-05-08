import { useState } from "react";
import Select from "react-select";
import { pink } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import { ToastContainer, toast } from "react-toastify";
import { IoIosSearch, IoMdClose } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { alljobData } from "../../../../components/constant";
import { motion, AnimatePresence } from "framer-motion";
import { compyLogo } from "../../../../assets";
import useJobDetails from "./useJobDetails";
import { useAppSelector } from "../../../../store/hooks";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { Navigate, useNavigate } from "react-router-dom";
import { AUTH } from "../../../../routes/routes";
import service from "../../../../utils/service";
import API from "../../../../config/api";

let notify = () =>
  toast.success("Applyed !", {
    autoClose: 1500,
    theme: "dark",
    position: "bottom-right",
  });

  const handleGoBack = () => {
    window.history.back();
  };

function Jobsdetails() {
  const { user, isAuthenticated } = useAppSelector((state: any) => state.user);

  const { jobs,id,getJobdetails } = useJobDetails();

  const [loading, setLoading] = useState(false);
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();
  const handleClick = async(id:any) => {
    if (isAuthenticated || user?.role == "Employee") {
      const { data } = await service.post(API.APPLY_JOB,{id});
      console.log(data);
      if(data?.statusCode==200){
      notify();
      getJobdetails()
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setClicked(true);
      }, 500); // Delay of 1 second (1000 milliseconds)
      }else{
        toast.error("Something went wrong")
      }
      
      
    } else {
      navigate(AUTH.BASE_PATH);
    }
  };

  let loadingText = 'Loading...'

  return (
    <>
      <div>
        <div className="font-PoppinsRegular w-11/12 lg:w-10/12 py-10 mx-auto flex flex-col gap-5">
        <button onClick={handleGoBack} className="flex items-center gap-2">
            <IoArrowBackCircleSharp className="text-5xl text-gray-300 hover:text-gray-400 duration-200" />
          </button>
          <h1 className="text-2xl md:text-3xl font-bold tracking-wider uppercase pb-5 text-black">
            {jobs?.title || loadingText}
          </h1>
          <div className="flex justify-between flex-col md:flex-row gap-y-5">
            <div className="flex flex-col md:flex-row md:items-center gap-5 capitalize">
              <img
                className="h-20 w-20 object-cover"
                src={compyLogo}
                alt="logo"
              />
              <div>
                <h4 className="font-semibold">{jobs?.companyName}</h4>
                <span className="flex items-center gap-2 pt-2 pb-1 text-xs font-semibold">
                  <SlCalender />
                  <p>
                    Post Date : {new Date(jobs?.createdAt).toLocaleDateString() || loadingText}
                  </p>
                </span>
                <span className="flex items-center gap-2 text-xs font-semibold">
                  <SlCalender />
                  <p>
                    Apply Before : {new Date(jobs?.closeDate).toLocaleDateString() || loadingText}
                  </p>
                </span>
              </div>
            </div>
            <div>
              {/* Apply button */}
              <button
                onClick={() => handleClick(id)}
                className={`mt-5 border border-slclr py-2 px-5 w-fit flex items-center gap-2 text-black hover:bg-slclr hover:text-white duration-300 uppercase text-xs font-bold group`}
                disabled={jobs?.isApplied}
              >
                {loading ? "Loading..." : jobs?.isApplied ? "Applyed" : "Apply"}
                <IoArrowForwardCircleOutline className="group-hover:translate-x-1 duration-300 text-lg" />
              </button>
            </div>
          </div>
          <hr />
          {/*  */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 gap-20">
            <div className="flex flex-col gap-3">
              <h3 className="text-base font-medium tracking-wide uppercase">
                Job Description
              </h3>
              <p
                className="text-sm text-justify text-gray-500"
                dangerouslySetInnerHTML={{ __html: jobs?.description || loadingText }}
              />

              {/* <h3 className="text-base font-medium tracking-wide uppercase">
                Job Requirements
              </h3>
              <div>
                <ul className="text-sm flex  flex-col gap-1 text-gray-500">
                  <li className="flex  gap-2">
                    <FaLongArrowAltRight className="text-xl" />
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Illo consequatur magni eligendi totam inventore animi
                      error amet non nobis dolores!
                    </p>
                  </li>
                  <li className="flex  gap-2">
                    <FaLongArrowAltRight className="text-xl" />
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Illo consequatur magni eligendi totam inventore animi
                      error amet non nobis dolores!
                    </p>
                  </li>
                  <li className="flex  gap-2">
                    <FaLongArrowAltRight className="text-xl" />
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Illo consequatur magni eligendi totam inventore animi
                      error amet non nobis dolores!
                    </p>
                  </li>
                  <li className="flex  gap-2">
                    <FaLongArrowAltRight className="text-xl" />
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Illo consequatur magni eligendi totam inventore animi
                      error amet non nobis dolores!
                    </p>
                  </li>
                  <li className="flex  gap-2">
                    <FaLongArrowAltRight className="text-xl" />
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Illo consequatur magni eligendi totam inventore animi
                      error amet non nobis dolores!
                    </p>
                  </li>
                </ul>
              </div> */}
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-base font-medium tracking-wide uppercase">
                More Information
              </h3>
              <div>
                <ul className="text-sm flex  flex-col gap-1 text-gray-700 capitalize">
                  <li>
                    <span className="font-bold text-gray-600">Location</span> : {jobs?.location || loadingText}
                  </li>
                  <li>
                    <span className="font-bold text-gray-600">Salary</span> : {jobs?.salaryOffer || loadingText}
                  </li>
                  <li>
                    <span className="font-bold text-gray-600">job type</span> : {jobs?.jobType || loadingText}
                  </li>
                  <li>
                    <span className="font-bold text-gray-600">
                      Experience Level
                    </span>
                    : {jobs?.experience}
                  </li>
                  <li>
                    <span className="font-bold text-gray-600">Gender</span> : {jobs?.gender || loadingText}
                  </li>
                  <li className="flex gap-1">
                    <span className="font-bold text-gray-600">
                      Qualifications
                    </span>
                    : {jobs?.qualification?.map((data:any,i:any)=>(<p>{data?.label} {i !== jobs?.qualification.length - 1 && `,`}</p>))}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Jobsdetails;
