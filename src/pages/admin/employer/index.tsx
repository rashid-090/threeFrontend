import { useState, ChangeEvent, MouseEvent } from "react";
import { NavLink } from "react-router-dom";
import { BiExport } from "react-icons/bi";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  // Paper,
  TextField,
  TablePagination,
  createTheme, // Import createTheme
  ThemeProvider, // Import ThemeProvider
  Paper,
} from "@mui/material";
import useEmployer from "./useEmployer";
const theme = createTheme();

let Demotitle = 'Not Available'

function EmployerData() {
  const {
    loading,
    employer,
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
  // Sample employee data

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
          <button
            className="bg-primaryclr hover:bg-sky-600 duration-200 shadow-md  text-white px-3 text-sm md:text-base md:px-5 flex items-center gap-2"
            onClick={() => handleExport()}
          >
            <p>Export</p>
            <BiExport className="text-xl" />
          </button>
        </div>
        <div>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow className=" bg-zinc-200">
                  <TableCell>
                    <Checkbox
                      indeterminate={
                        selectedEmployees?.length > 0 &&
                        selectedEmployees?.length < filteredEmployees?.length
                      }
                      checked={
                        selectedEmployees?.length === filteredEmployees?.length
                      }
                      onChange={handleSelectAllClick}
                    />
                  </TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Company Name</TableCell>
                  <TableCell>Email</TableCell>
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
                    <TableRow
                      key={employee?._id}
                      hover
                      onClick={(event) => handleClick(event, employee._id)}
                    >
                      <TableCell>
                        <Checkbox checked={isItemSelected} />
                      </TableCell>
                      <TableCell>{employee?.fullName || Demotitle}</TableCell>
                      <TableCell>{employee?.companyName || Demotitle}</TableCell>
                      <TableCell>{employee?.email || Demotitle}</TableCell>
                      <TableCell>
                        <NavLink
                          to={`/superAdmin/employer-details/${employee?._id}`}
                          className="text-xs tracking-widest uppercase font-light hover:text-blue-400 cursor-pointer duration-200"
                        >
                          view
                        </NavLink>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          {/* <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component='div'
            count={filteredEmployees.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            labelRowsPerPage='Rows per page:'
            nextIconButtonText='Next'
            backIconButtonText='Previous'
          /> */}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default EmployerData;
