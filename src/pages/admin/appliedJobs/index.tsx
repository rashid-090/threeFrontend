import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BiExport } from "react-icons/bi";
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
import useEmployer from "./useAppliedJobs";

interface Employee {
  id: number;
  name: string;
  jobTitle: string;
  location: string;
  experience: string;
}

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
  } = useEmployer();

  const [selectedEmployees, setSelectedEmployees] = useState<number[]>([]);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = filteredEmployees?.map(
        (employee: Employee) => employee.id
      );
      setSelectedEmployees(newSelecteds || []);
      return;
    }
    setSelectedEmployees([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, id: number) => {
    const selectedIndex = selectedEmployees.indexOf(id);
    let newSelected: any = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selectedEmployees, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selectedEmployees.slice(1));
    } else if (selectedIndex === selectedEmployees.length - 1) {
      newSelected = newSelected.concat(selectedEmployees.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selectedEmployees.slice(0, selectedIndex),
        selectedEmployees.slice(selectedIndex + 1)
      );
    }

    setSelectedEmployees(newSelected);
  };

  const isSelected = (id: number) => selectedEmployees.indexOf(id) !== -1;

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
          {/* <button className="bg-primaryclr hover:bg-sky-600 duration-200 shadow-md text-white px-3 text-sm md:text-base md:px-5 flex items-center gap-2">
            <p>Export</p>
            <BiExport className="text-xl" />
          </button> */}
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
                        selectedEmployees.length <
                          (filteredEmployees?.length || 0)
                      }
                      checked={
                        selectedEmployees.length ===
                        (filteredEmployees?.length || 0)
                      }
                      onChange={handleSelectAllClick}
                    />
                  </TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Applied job</TableCell>
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
                  const isItemSelected = isSelected(employee.id);
                  return (
                    <>
                      <TableRow
                        key={employee?.id}
                        hover
                        onClick={(event) => handleClick(event, employee?.id)}
                      >
                        <TableCell>
                          <Checkbox checked={isItemSelected} />
                        </TableCell>
                        <TableCell>{employee?.userId?.fullName}</TableCell>
                        <TableCell>{employee?.itemId?.title}</TableCell>
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
