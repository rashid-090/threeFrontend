import { useAppSelector } from "../../../store/hooks";
import { useEffect, useState } from "react";
import API from "../../../config/api";
import service from "../../../utils/service";
import ROLES from "../../../config/roles";
import useUrlParams from "../../../hooks/useUrlParams";
import { useDebouncedCallback } from "use-debounce";
import { DELAYTIME } from "../../../config/constants";

const useRegistrationState = () => {
  const { loading } = useAppSelector((state) => state.user);
  const { searchParams, resetParamsUrl, urlParamsHandler } = useUrlParams();
  let search = searchParams.get("search") || "";
  let search2 = searchParams.get("search2") || "";
  let search1 = searchParams.get("search1") || "";
  let search3 = searchParams.get("search3") || "";
  const [jobs, setJobs] = useState<any>();
  const getEmployerList = async () => {
    const { data } = await service.get(
      API.LIST_PUBLIC_JOB.replace("search=", `search=${search}&search2=${search2}&search1=${search1}&search3=${search3}`)
    );
    setJobs(data?.data?.Products);
    setFilteredJobs(data?.data?.Products);
  };
  const delayedSearch = useDebouncedCallback(
    () => getEmployerList(),
    DELAYTIME
  );
  useEffect(() => {
    getEmployerList();
  }, []);

  const [filteredJobs, setFilteredJobs] = useState<any>();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleFilter = (e: any) => {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = jobs.filter((job: any) =>
      Object.values(job).join(" ").toLowerCase().includes(searchTerm)
    );
    setFilteredJobs(filtered);
    setPage(0); // Reset to first page when filtering
  };
  useEffect(() => {
    delayedSearch();
  }, [page]);
  return {
    loading,
    jobs,
    filteredJobs,
    page,
    rowsPerPage,
    handleFilter,
    setPage,
    setRowsPerPage,
    delayedSearch,
    searchParams,
    urlParamsHandler,
  };
};

export default useRegistrationState;
