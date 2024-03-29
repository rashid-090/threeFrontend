import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ScaleLoader from "react-spinners/ScaleLoader";
import Select from "react-select";
import Checkbox from "@mui/material/Checkbox";
import { IoIosSearch } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import useJobs from "./useJobs";
import { alljobData } from "../../../components/constant";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  TablePagination,
  Button,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { compyLogo } from "../../../assets";

const theme = createTheme();

function Jobs() {
  const navigate = useNavigate();
 
  const { jobs,delayedSearch, searchParams, urlParamsHandler } = useJobs();

  return (
    <ThemeProvider theme={theme}>
      <section
        className=" font-PoppinsRegular bg-search-bg bg-cover w-full lg:h-[40%] bg-center text-black py-10 lg:py-20"
        
      >
        <div className="w-11/12 lg:w-9/12 mx-auto relative bg-slate-100 rounded-xl lg:rounded-full shadow-md">
          <form className="grid grid-cols-1 md:grid-cols-4 grid-flow-row md:grid-flow-col p-10 md:p-5 lg:p-10 gap-5 ">
            <div className="w-full relative md:col-span-2">
              <input
                className="w-full placeholder:text-sm rounded-3xl p-[.33rem] caret-primaryclr pl-6 text-gray-700"
                type="search"
                placeholder="Search keywords e.g. web design"
                value={searchParams.get("search") || ""}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  urlParamsHandler("search", e?.target?.value);
                  delayedSearch();
                }}
              />
              {/* <label className="text-xs font-medium text-gray-400">
                Search keywords e.g. web design
              </label> */}
              <IoIosSearch className="absolute top-3 left-1 text-gray-400" />
            </div>
            {/* <div className='w-full relative'>
                    <Select className='w-full' value={selectedOption} onChange={handleChange} options={options} isSearchable={true} placeholder="Search Categories"/>
                    <label className='text-xs font-medium text-gray-400'>Search keywords e.g. web design</label>
                </div> */}
            <div className="w-full relative md:col-span-2">
              <input
                className="w-full placeholder:text-sm rounded-3xl p-[.33rem] caret-primaryclr pl-6"
                type="search"
                placeholder="Search Locations"
                value={searchParams.get("search2") || ""}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  urlParamsHandler("search2", e?.target?.value);
                  delayedSearch();
                }}
              />
              <IoLocationOutline className="absolute top-3 left-1 text-gray-400" />
            </div>
            {/* <button className="bg-primaryclr hover:bg-secondaryclr duration-200 uppercase text-white w-20% h-fit px-5 lg:px-10 p-[.4rem] shadow-md rounded-sm">
              Find Job
            </button> */}
          </form>
        </div>
      </section>

      {/* job list */}
      <section className="font-PoppinsRegular w-11/12 lg:w-9/12 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 py-5">
          {/* filters */}
          <div className="px-3 py-5 bg-[#f5f5f5] h-fit w-full text-gray-700">
            <form className=" w-full flex flex-col gap-5">
              {/*  */}
              <div className="relative w-full">
                <input
                  className="rounded-3xl placeholder:text-sm text-sm w-full py-2 p-1 border-2 pl-6 border-gray-200"
                  type="search"
                  placeholder="Search Keywords"
                  value={searchParams.get("search3") || ""}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    urlParamsHandler("search3", e?.target?.value);
                    delayedSearch();
                  }}
                />
                <IoIosSearch className="absolute top-3 left-1.5 text-gray-400" />
              </div>
              {/*  */}
              <div className="relative w-full">
                <input
                  className="rounded-3xl placeholder:text-sm text-sm w-full py-2 p-1 border-2 pl-6 border-gray-200"
                  type="search"
                  placeholder="Search Location"
                  value={searchParams.get("search1") || ""}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    urlParamsHandler("search1", e?.target?.value);
                    delayedSearch();
                  }}
                />
                <IoIosSearch className="absolute top-3 left-1.5 text-gray-400" />
              </div>
              {/*  */}
              {/* <div className="w-full relative">
                <Select
                  className="w-full text-sm"
                  value={selectedOption}
                  onChange={handleChange}
                  options={options}
                  isSearchable={true}
                  placeholder="Search Categories"
                />
              </div> */}
              {/*  */}

              <div className="hidden lg:block">
                <h4 className="text-xs pb-2 uppercase font-PoppinsMedium tracking-wide">
                  job type
                </h4>
                <div className="flex flex-col gap-1">
                  <span className="flex gap-2 items-center">
                    <input type="checkbox"  />
                    <label className="text-xs font-medium capitalize">
                      All
                    </label>
                  </span>
                  <span className="flex gap-2 items-center">
                    <input type="checkbox" />
                    <label className="text-xs font-medium capitalize">
                      full time
                    </label>
                  </span>
                  <span className="flex gap-2 items-center">
                    <input type="checkbox" />
                    <label className="text-xs font-medium capitalize">
                      part time
                    </label>
                  </span>
                  <span className="flex gap-2 items-center">
                    <input type="checkbox" />
                    <label className="text-xs font-medium capitalize">
                      freelance
                    </label>
                  </span>
                </div>
              </div>
              {/*  */}
              <div className="hidden lg:block">
                <h4 className="text-xs pb-2 uppercase font-semibold tracking-wide">
                  Experience Level
                </h4>
                <div className="flex flex-col gap-1">
                  <span className="flex gap-2 items-center">
                    <input type="checkbox"  />
                    <label className="text-xs font-medium capitalize">
                      All
                    </label>
                  </span>
                  <span className="flex gap-2 items-center">
                      <input type="checkbox" />
                    <label className="text-xs font-medium capitalize">
                      Internship
                    </label>
                  </span>
                  <span className="flex gap-2 items-center">
                      <input type="checkbox" />
                    <label className="text-xs font-medium capitalize">
                      Intermediate
                    </label>
                  </span>
                  <span className="flex gap-2 items-center">
                      <input type="checkbox" />
                    <label className="text-xs font-medium capitalize">
                      Mid-level
                    </label>
                  </span>
                  <span className="flex gap-2 items-center">
                      <input type="checkbox" />
                    <label className="text-xs font-medium capitalize">
                      Senior or executive-level
                    </label>
                  </span>
                </div>
              </div>
              {/*  */}
            </form>
          </div>
          {/* jobs body */}
          <div className="p-3 flex flex-col gap-3 lg:col-span-3 bg-[#f5f5f5] h-fit w-full">

            {jobs && jobs.length > 0 ? 
            (
              <>
              {jobs?.map((data: any, i: any) => {
              const truncatedDescription = data.description?.slice(0, 150);
              return (
                <div
                  key={i}
                  className="font-PoppinsRegular border shadow-md flex flex-col md:flex-row gap-2 w-full px-1 md:px-5"
                >
                  <div className="w-full md:w-[20%]  p-3 flex items-center justify-center">
                    <img
                      className="object-cover w-20 h-20"
                      src={compyLogo}
                      alt="logo"
                    />
                  </div>
                  <div className="flex flex-col gap-y-5 md:flex-row md:justify-between items-center w-full md:w-[80%]  p-3 text-gray-700">
                    <div className="flex gap-1 flex-col lg:pr-32 lg:py-2">
                      <h1 className="text-lg font-semibold tracking-wide capitalize">
                        {data.title}
                      </h1>
                      <span className=" flex items-center gap-3 text-xs font-bold tracking-wide">
                        <p>{new Date(data.createdAt).toLocaleDateString()}</p>-
                        <p>{new Date(data.closeDate).toLocaleDateString()}</p>
                      </span>
                      <span className="flex flex-col md:flex-row items-center gap-3 md:gap-5">
                        <p className="text-xs font-bold capitalize">
                          Location : {data.location}
                        </p>
                        <p className="text-xs font-bold capitalize">
                        Job type : {data.jobType}
                        </p>
                      </span>
           
                      <p
                        className="text-xs lg:text-sm"
                        dangerouslySetInnerHTML={{
                          __html: truncatedDescription,
                        }}
                      />
                    </div>
                    <div>
                      <button
                        onClick={() => navigate(`/job-details/${data?._id}`)}
                        className="lg:hover:translate-y-0.5 bg-slclr hover:bg-green-500 shadow-md text-xs font-bold uppercase duration-200 text-white px-7 rounded-sm py-2 whitespace-nowrap"
                      >
                        apply
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
              </>
            ) :
            (
              <>
                <p>No Datas Found...!</p>
      

              </>
              
            )
          }


       

          </div>
        </div>
      </section>
    </ThemeProvider>
  );
}

export default Jobs;
