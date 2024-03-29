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
  let filter = searchParams.get("filter") || "";
  const [page, setPage] = useState(0);
  const [resume, setResume] = useState<any>();
  const getEmployerList = async () => {
    const { data } = await service.get(
      API.LIST_RESUME.replace("search=", `search=${search}`).replace(
        "filters=",
        filter==""?`filters=`:`filters=${`{"category.value":"${filter}"}`}`
      )
    );

    setResume(data?.data?.users);
  };
  const delayedSearch = useDebouncedCallback(
    () => getEmployerList(),
    DELAYTIME
  );
  useEffect(() => {
    getEmployerList();
  }, []);
  useEffect(() => {
    delayedSearch();
  }, [page]);
  return {
    loading,
    resume,
    searchParams,
    delayedSearch,
    urlParamsHandler,
  };
};

export default useRegistrationState;
