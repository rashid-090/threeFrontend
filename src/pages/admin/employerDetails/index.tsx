import React from "react";
import { NavLink } from "react-router-dom";
import {
  Checkbox,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { BiExport } from "react-icons/bi";
import { BsBuildingsFill } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import useEmployer from "./useEmployer";
import { ProfileLogo } from "../../../assets";
import { load } from "@fingerprintjs/fingerprintjs";

const theme = createTheme();

function EmployerDetail() {
  const { employerData, employerJobs } = useEmployer();
  console.log(employerData);

  function createMarkup() {
    return { __html: employerData?.description || loadingText };
  }

  let loadingText = "Not available";

  function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number
  ) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];

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
                <h1 className="font-bold">
                  {employerData?.companyName || loadingText}
                </h1>
              </span>
              <span className="flex gap-2 items-center text-base">
                <FaUserTie />
                <p>{employerData?.fullName || loadingText}</p>
              </span>
              <p className="text-xs font-medium"></p>
              <a className="text-xs font-normal lowercase">
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
          {/* applied jobs */}
          <div className="pt-10">
            <h2 className="text-2xl font-semibold">Jobs Posted</h2>
          </div>
          <div className="pt-2 w-[60%]">
            <ThemeProvider theme={theme}>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow className=" bg-zinc-100">
                      <TableCell className="">Job Title</TableCell>
                      <TableCell className="">Posted Date</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {employerJobs?.Products?.length > 0 ? employerJobs?.Products?.map((item:any)=>{
                      return(
                      <TableRow>
                        <TableCell>{item?.title}</TableCell>
                        <TableCell>{new Date(item?.createdAt).toLocaleDateString()}</TableCell>
                      </TableRow>
                      )
                    })
                      
                     : 
                      "No jobs"
                    }
                  </TableBody>
                </Table>
              </TableContainer>
            </ThemeProvider>
          </div>

          {/* applied jobs */}
        </div>
      </section>
    </>
  );
}

export default EmployerDetail;
