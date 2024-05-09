import { useAppSelector } from "../../../store/hooks";
import { useEffect, useState } from "react";
import API from "../../../config/api";
import service from "../../../utils/service";
import ROLES from "../../../config/roles";


const useRegistrationState = () => {
  const { loading } = useAppSelector((state) => state.user);

  const [employer, setEmployer] = useState<any>();
  const getEmployerList = async () => {
    const { data } = await service.get(API.GET_APPLIEND_JOB);
    setEmployer(data?.data);
    setFilteredEmployees(data?.data)
  };

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
        (employee: any) => employee.id
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
  return {
    loading,
    employer,
    filteredEmployees,
    page,
    rowsPerPage,
    handleFilter,
    setPage,
    setRowsPerPage
  };
};

export default useRegistrationState;
