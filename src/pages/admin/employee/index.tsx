import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BiExport } from "react-icons/bi";
import { Checkbox, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, ThemeProvider, createTheme } from "@mui/material";
import useEmployer from "./useEmplyee";

interface Employee {
  id: number;
  name: string;
  jobTitle: string;
  location: string;
  experience: string;
}

let Demotitle = 'Not Available'

const theme = createTheme();

function EmployeeData() {
  const {
    loading,
    filteredEmployees,
    page,
    rowsPerPage,
    setRowsPerPage,
    handleFilter,
    setPage,
    handleExport,
    selectedEmployees,
    handleSelectAllClick,
    isSelected,
    handleClick,
  } = useEmployer();

  return (
    <ThemeProvider theme={theme}>
      <div className="w-11/12 mx-auto m-10 flex flex-col gap-3">
        <div className="flex gap-2 md:gap-5">
          <input
            className="rounded-full px-4 w-full p-2 bg-transparent border-2 border-gray-100 capitalize placeholder:text-white"
            type="search"
            placeholder="Search name, title, location..."
            onChange={handleFilter}
          />
          <button className="bg-primaryclr hover:bg-sky-600 duration-200 shadow-md text-white px-3 text-sm md:text-base md:px-5 flex items-center gap-2" onClick={()=>handleExport()}>
            <p>Export</p>
            <BiExport className="text-xl" />
          </button>
        </div>
        <div>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow className="bg-zinc-200">
                  <TableCell>
                    <Checkbox
                      indeterminate={
                        selectedEmployees.length > 0 &&
                        selectedEmployees.length < (filteredEmployees?.length || 0)
                      }
                      checked={selectedEmployees.length === (filteredEmployees?.length || 0)}
                      onChange={handleSelectAllClick}
                    />
                  </TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Mobile</TableCell>
                  <TableCell>Location</TableCell>
                  <TableCell>Experience</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {(rowsPerPage > 0
                  ? filteredEmployees?.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                  : filteredEmployees
                )?.map((employee: any) => {
                  const isItemSelected = isSelected(employee._id);
                  return (
                    <>
                    
                    <TableRow
                      key={employee?._id}
                      hover
                      onClick={(event) => handleClick(event, employee?._id)}
                    >
                      <TableCell>
                        <Checkbox checked={isItemSelected} />
                      </TableCell>
                      <TableCell>{employee?.name || Demotitle}</TableCell>
                      <TableCell>{employee?.phoneNumber || Demotitle}</TableCell>
                      <TableCell>{employee?.country || Demotitle}</TableCell>
                      <TableCell>{employee?.workExperince || Demotitle}</TableCell>
                      <TableCell>
                        <NavLink
                          to={`/superAdmin/employee-details/${employee?._id}`}
                          className="text-xs tracking-widest uppercase font-light hover:text-blue-400 cursor-pointer duration-200"
                        >
                          view
                        </NavLink>
                      </TableCell>
                    </TableRow>
                    </>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default EmployeeData;
