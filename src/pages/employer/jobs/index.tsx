import React from "react";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";
import { MdEditSquare } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import useJob from './usejob'
const theme = createTheme();
function ManageJobs() {
  const {jobs,filteredEmployees,page,rowsPerPage,handleFilter,handleDlete} =useJob()
 
  // const [employees] = useState([
  //   {
  //     id: 1,
  //     title: "Software Engineer",
  //     company: "ABC Tech",
  //     location: "New York",
  //     date: "Dec 15, 2023",
  //   },
  //   {
  //     id: 2,
  //     title: "Marketing Manager",
  //     company: "XYZ Corp",
  //     location: "India",
  //     date: "Dec 18, 2023",
  //   },
  //   {
  //     id: 3,
  //     title: "Accountact",
  //     company: "XYZ Corp",
  //     location: "Japan",
  //     date: "Dec 18, 2023",
  //   },
  //   {
  //     id: 4,
  //     title: "Teacher",
  //     company: "XYZ Corp",
  //     location: "USA",
  //     date: "Dec 18, 2023",
  //   },
  //   {
  //     id: 5,
  //     title: "Ac Machanic",
  //     company: "XYZ Corp",
  //     location: "China",
  //     date: "Dec 18, 2023",
  //   },
  //   {
  //     id: 6,
  //     title: "Web Developer",
  //     company: "XYZ Corp",
  //     location: "Germany",
  //     date: "Dec 18, 2023",
  //   },
  //   {
  //     id: 7,
  //     title: "Graphic Designer",
  //     company: "XYZ Corp",
  //     location: "Spain",
  //     date: "Dec 18, 2023",
  //   },
  //   // Add more employee objects as needed
  // ]);

  // const [filteredEmployees, setFilteredEmployees] = useState<any>(jobs);
  // const [page, setPage] = useState(0);
  // const [rowsPerPage, setRowsPerPage] = useState(5);

  // const handleFilter = (e: any) => {
  //   const searchTerm = e.target.value.toLowerCase();
  //   const filtered = jobs.filter((job:any) =>
  //     Object.values(job).join(" ").toLowerCase().includes(searchTerm)
  //   );
  //   setFilteredEmployees(filtered);
  //   setPage(0); // Reset to first page when filtering
  // };

  // const handleChangePage = (event: any, newPage: any) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (event: any) => {
  //   setRowsPerPage(parseInt(event.target.value, 10));
  //   setPage(0);
  // };

  // const handleClick = (event:any, id:any) => {
  //   const selectedIndex = selectedEmployees.indexOf(id);
  //   let newSelected:any = [];

  //   if (selectedIndex === -1) {
  //     newSelected = newSelected.concat(selectedEmployees, id);
  //   } else if (selectedIndex === 0) {
  //     newSelected = newSelected.concat(selectedEmployees.slice(1));
  //   } else if (selectedIndex === selectedEmployees.length - 1) {
  //     newSelected = newSelected.concat(selectedEmployees.slice(0, -1));
  //   } else if (selectedIndex > 0) {
  //     newSelected = newSelected.concat(
  //       selectedEmployees.slice(0, selectedIndex),
  //       selectedEmployees.slice(selectedIndex + 1)
  //     );
  //   }

  //   setSelectedEmployees(newSelected);
  // };

  // const pageRange = (currentPage: any, totalPages: any) => {
  //   const delta = 2;
  //   const range = [];
  //   for (
  //     let i = Math.max(0, currentPage - delta);
  //     i <= Math.min(totalPages - 1, currentPage + delta);
  //     i++
  //   ) {
  //     range.push(i);
  //   }
  //   return range;
  // };
  
  return (
    <ThemeProvider theme={theme}>
      <div className="lg:col-span-3">
        <div className=" p-3 flex flex-col gap-3">
          <h1 className="text-2xl capitalize font-semibold tracking-wider">
            jobs list
          </h1>
          <div className="flex justify-end w-full">
            <input
              className="p-1 w-full md:w-[50%] lg:w-[30%] text-sm border-2 border-gray-200"
              type="text"
              placeholder="Search...."
              onChange={handleFilter}
            />
          </div>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow className=" bg-zinc-200">
                  <TableCell>Job Title</TableCell>
                  <TableCell>Date</TableCell>
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
                )?.reverse().map((job:any) => {
                  return (
                    
                    <TableRow key={job.id} hover>
                      <TableCell>{job.title}</TableCell>
                      <TableCell>{job.closeDate}</TableCell>
                      <TableCell><MdDelete className="text-lg hover:text-red-600 cursor-pointer" onClick={()=>handleDlete(job?._id)}/></TableCell>
                  
                    </TableRow>
                  );
                })}
                {filteredEmployees && filteredEmployees.length > 0 ? null : (<TableCell>no jobs posted...</TableCell>)}
              </TableBody>
            </Table>
          </TableContainer>
          {/* <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={filteredEmployees.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage="Rows per page:"
        nextIconButtonText="Next"
        backIconButtonText="Previous"
      /> */}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default ManageJobs;
