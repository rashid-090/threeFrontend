import { FormikHelpers, useFormik } from "formik";
import * as Yup from "yup";
import { useDebouncedCallback } from "use-debounce";
import CryptoJS from "crypto-js";

import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { getProfile, login } from "../../../store/slices/user";
import { useEffect, useState } from "react";
import API from "../../../config/api";
import service from "../../../utils/service";
import { toast } from "react-toastify";
import { AUTH, PUBLIC } from "../../../routes/routes";
import { useLocation, useNavigate } from "react-router";
import ROLES from "../../../config/roles";


const useRegistrationState = () => {
  const { loading } = useAppSelector((state) => state.user);

  const [employer, setEmployer] = useState<any>();
  const getEmployerList = async () => {
    const { data } = await service.get(API.LIST_EMPLOYER.replace("role=",`role=${ROLES.EMPLOYEE}`));
    setEmployer(data?.data?.users);
    setFilteredEmployees(data?.data?.users)
  };


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
      const newSelecteds = filteredEmployees?.map((employee: any) => employee?.id);
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

  useEffect(() => {
    getEmployerList();
  }, []);
  const [filteredEmployees, setFilteredEmployees] = useState<any>();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(1000);

  const handleFilter = (e: any) => {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = employer.filter((job: any) =>
      Object.values(job).join(" ").toLowerCase().includes(searchTerm)
    );
    setFilteredEmployees(filtered);
    setPage(0); // Reset to first page when filtering
  };

  const handleExport = async () => {
    if (selectedEmployees.length == 0) {
      toast.error("Please select emplyer data from the table");
    } else {
      const data = await service
        .post(API.GET_EXCEL_EMPLOYEE, { selectedEmployees }, { responseType: "blob" })
        .then((response) => {
          console.log(response?.data);
          
          // Create a Blob from the response data
          const blob = new Blob([response.data], {
            type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          });

          // Create a link element and trigger a download
          const link = document.createElement("a");
          link.href = window.URL.createObjectURL(blob);
          link.download = "exported_data.xlsx";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        });
    }
  };
  return {
    loading,
    employer,
    filteredEmployees,
    page,
    rowsPerPage,
    handleFilter,
    setPage,
    setRowsPerPage,
    handleExport,
    selectedEmployees,
    handleSelectAllClick,
    isSelected,
    handleClick,
    
  };
};

export default useRegistrationState;
