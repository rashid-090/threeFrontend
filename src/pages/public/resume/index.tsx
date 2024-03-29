import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import ScaleLoader from "react-spinners/ScaleLoader";
import Checkbox from "@mui/material/Checkbox";
import { IoIosSearch } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { ResumeData } from "../../../components/constant";
import { ProfileLogo, compyLogo } from "../../../assets";
import useResume from "./useResume";
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
const theme = createTheme();

const options = [
  { value: "Accounting", label: "Accounting" },
  { value: "Banking", label: "Banking" },
  { value: "Digital Marketing", label: "Digital Marketing" },
  { value: "IT", label: "IT" },
  { value: "Others", label: "Others" },
];

function Resume() {
  const { resume, searchParams, delayedSearch, urlParamsHandler } = useResume();
  const [selectedOption, setSelectedOption] = useState(null);
  console.log(selectedOption);

  const handleChange = (selectedOption: any) => {
    setSelectedOption(selectedOption);
    urlParamsHandler("filter", selectedOption?.value);
    delayedSearch();
  };

  const navigate = useNavigate();
  return (
    <ThemeProvider theme={theme}>
      <section
        className=" bg-search-bg bg-cover w-full h-full bg-top text-black py-10 lg:py-24"
        style={{ height: "40%" }}
      >
        <div className="w-11/12 font-PoppinsRegular lg:w-9/12 mx-auto relative bg-slate-100 shadow-md rounded-xl lg:rounded-full">
          <form className="grid grid-cols-1 md:grid-cols-4 grid-flow-row md:grid-flow-col p-10 md:p-5 lg:p-10 gap-5 ">
            <div className="w-full relative md:col-span-2">
              <input
                className="w-full placeholder:text-sm p-[.35rem] caret-primaryclr pl-6 border-2 border-gray-200"
                type="search"
                placeholder="Search Locations"
                value={searchParams.get("search") || ""}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  urlParamsHandler("search", e?.target?.value);
                  delayedSearch();
                }}
              />
              <IoLocationOutline className="absolute top-3 left-1 text-gray-400" />
            </div>
            <div className="w-full placeholder:text-sm relative md:col-span-2">
              <Select
                className="w-full"
                value={selectedOption}
                onChange={handleChange}
                options={options}
                isSearchable={true}
                placeholder="Search Categories"
              />
            </div>
            {/* <button className="bg-primaryclr hover:bg-secondaryclr duration-200 capitalize text-white w-20% h-fit px-5 lg:px-10 p-[.4rem] shadow-md rounded-sm">
              search
            </button> */}
          </form>
        </div>
      </section>

      <section className="w-11/12 lg:w-9/12 mx-auto font-PoppinsRegular">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 py-5">
          {/* filters */}
          <div className="px-3 py-5 bg-[#f5f5f5] h-fit w-full text-gray-700">
            <form className="w-full flex flex-col gap-5">
              {/*  */}
              <div className="relative w-full">
                <input
                  className="text-sm rounded-3xl placeholder:text-sm w-full py-2 p-1 border-2 pl-6 border-gray-200"
                  type="search"
                  placeholder="Search Location"
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
                <h4 className="text-xs pb-2 uppercase font-semibold tracking-wide">
                  job type
                </h4>
                <div className="flex flex-col gap-1">
                  <span className="flex gap-2 items-center">
                    <input type="checkbox" />
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
                    <input type="checkbox" />
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
            </form>
          </div>
          {/* jobs body */}
          <div className="p-3 flex flex-col gap-3 lg:col-span-3 bg-[#f5f5f5] h-fit w-full">
            {resume && resume.length > 0 ? (
              <>
                {resume?.map((data: any, i: any) => {
                  return (
                    <div
                      key={i}
                      className="border shadow-md flex flex-col md:flex-row gap-2 w-full p-2 lg:p-4"
                    >
                      <div className="w-full md:w-[30%] lg:w-[15%]  p-3 flex items-center">
                        <img
                          className="h-28 w-28 md:w-20 md:h-20 mx-auto lg:w-full  lg:h-full object-cover rounded-full hover:grayscale duration-300 cursor-pointer"
                          src={data?.image || ProfileLogo}
                          alt="logo"
                        />
                      </div>
                      <div className="flex flex-col justify-between text-center md:text-left gap-y-5 md:flex-row items-center w-full md:w-[70%] lg:w-[85%]  p-3 text-gray-700">
                        <div className="flex  flex-col lg:pr-32 lg:py-2">
                          <h1 className="text-base font-semibold tracking-wider uppercase">
                            {data.name}
                          </h1>
                          <p className="text-xs capitalize font-semibold text-gray-500">
                            {data.designation}
                          </p>
                          <p className="text-xs capitalize font-semibold text-gray-500">
                            Experince:{data.workExperince}
                          </p>
                        </div>
                        <div>
                          <button
                            onClick={() =>
                              navigate(`/resume-details/${data?._id}`)
                            }
                            className="lg:hover:translate-y-0.5 bg-slclr hover:bg-green-500 shadow-md text-xs font-bold uppercase duration-200 text-white px-7 rounded-sm py-2 whitespace-nowrap"
                          >
                            view
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </>
            ) : (
              <>
                <>
                  <p>No Datas Found...!</p>
                </>
              </>
            )}
          </div>
        </div>
      </section>
    </ThemeProvider>
  );
}

export default Resume;
