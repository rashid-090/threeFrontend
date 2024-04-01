import { useAppSelector } from "../../../store/hooks";
import { useEffect, useState } from "react";
import API from "../../../config/api";
import service from "../../../utils/service";
import ROLES from "../../../config/roles";
import { ChangeEvent, MouseEvent } from "react";
import { toast } from "react-toastify";

const useRegistrationState = () => {
  const { loading } = useAppSelector((state) => state.user);

  const [employer, setEmployer] = useState<any>();
  const [filteredEmployees, setFilteredEmployees] = useState<any>();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(1000);
  const [selectedEmployees, setSelectedEmployees] = useState<any[]>([]);

  const getEmployerList = async () => {
    const { data } = await service.get(
      API.LIST_EMPLOYER.replace("role=", `role=${ROLES.EMPLOYER}`)
    );
    setEmployer(data?.data?.users);
    setFilteredEmployees(data?.data?.users);
  };

  const handleFilter = (e: any) => {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = employer.filter((job: any) =>
      Object.values(job).join(" ").toLowerCase().includes(searchTerm)
    );
    setFilteredEmployees(filtered);
    setPage(0); // Reset to first page when filtering
  };

  const handleChangePage = (
    event: MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSelectAllClick = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = filteredEmployees?.map(
        (employee: any) => employee?._id
      );
      setSelectedEmployees(newSelecteds);
      return;
    }
    setSelectedEmployees([]);
  };

  const handleClick = (event: MouseEvent<unknown>, id: number) => {
    const selectedIndex = selectedEmployees.indexOf(id);
    let newSelected: any = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selectedEmployees, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selectedEmployees?.slice(1));
    } else if (selectedIndex === selectedEmployees?.length - 1) {
      newSelected = newSelected.concat(selectedEmployees?.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selectedEmployees?.slice(0, selectedIndex),
        selectedEmployees?.slice(selectedIndex + 1)
      );
    }

    setSelectedEmployees(newSelected);
  };

  const handleExport = async () => {
    if (selectedEmployees.length == 0) {
      toast.error("Please select emplyer data from the table");
    } else {
      const data = await service
        .post(API.GET_EXCEL, { selectedEmployees }, { responseType: "blob" })
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

  const isSelected = (id: number) => selectedEmployees.indexOf(id) !== -1;

  useEffect(() => {
    getEmployerList();
  }, []);

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
