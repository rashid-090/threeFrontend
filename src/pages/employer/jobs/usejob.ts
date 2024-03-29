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

interface ValuesType {
  // fullName:string,
  email: string;
  fullName: string;
  dob: string;
  designation: string;
  category: string;
  phoneNumber: string;
  country: string;
  city: string;
  experience: string;
  Csalary: string;
  Esalary: string;
  language: string;
  address: string;
  description: string;
}

const LoginSchema = Yup.object().shape({
  email: Yup.string().trim().required("Email is Required"),
  fullName: Yup.string().trim().required("Full Name is Required"),
  dob: Yup.string().trim().required("DOB is Required"),
  designation: Yup.string().trim().required("designation is Required"),
  category: Yup.string().trim().required("category is Required"),
  phoneNumber: Yup.string().trim().required("phoneNumber is Required"),
  country: Yup.string().trim().required("country is Required"),
  city: Yup.string().trim().required("city is Required"),
  experience: Yup.string().trim().required("experience is Required"),
  Csalary: Yup.string().trim().required("Csalary is Required"),
  Esalary: Yup.string().trim().required("Esalary is Required"),
  language: Yup.string().trim().required("language is Required"),
  address: Yup.string().trim().required("address is Required"),
  //   description: Yup.string().trim().required("description is Required"),
});

const useRegistrationState = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { loading } = useAppSelector((state) => state.user);
  const search = useLocation().search;
  const redirect = new URLSearchParams(search).get("redirect");

  const [jobs, setJobs] = useState<any>();
  const getJobList = async () => {
    const { data } = await service.get(API.LIST_JOB);
    setJobs(data?.data?.Products);
    setFilteredEmployees(data?.data?.Products)
  };

  useEffect(() => {
    getJobList();
  }, []);
  const [filteredEmployees, setFilteredEmployees] = useState<any>();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(20);

  const handleFilter = (e: any) => {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = jobs.filter((job: any) =>
      Object.values(job).join(" ").toLowerCase().includes(searchTerm)
    );
    setFilteredEmployees(filtered);
    setPage(0); // Reset to first page when filtering
  };
  return {
    loading,
    jobs,
    filteredEmployees,
    page,
    rowsPerPage,
    handleFilter,
  };
};

export default useRegistrationState;
