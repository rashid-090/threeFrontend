import { FormikHelpers, useFormik } from "formik";
import * as Yup from "yup";
import { useDebouncedCallback } from "use-debounce";
import CryptoJS from "crypto-js";

import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { getProfile, login } from "../../../../store/slices/user";
import { useEffect, useState } from "react";
import API from "../../../../config/api";
import service from "../../../../utils/service";
import { toast } from "react-toastify";
import { AUTH, PUBLIC } from "../../../../routes/routes";
import { useLocation, useNavigate } from "react-router";

interface ValuesType {
  // fullName:string,
  title: string;
  catogories: string;
  description: string;
  jobType: string;
  salaryOffer: string;
  closeDate: string;
  experience: string;
  gender: string;
  qualification: string;
  country: string;
  state: string;
  district: string;
  place: string;
}

const LoginSchema = Yup.object().shape({
  fullName: Yup.string().trim().required("Full Name is Required"),
  // description: Yup.string().trim().required("description is Required"),
});

const useRegistrationState = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch();
  const debouncedSubmit = useDebouncedCallback(onSubmit, 300);
  const [value, setValue] = useState("");

  const {
    values,
    errors,
    touched,
    handleSubmit,
    isSubmitting,
    handleBlur,
    handleChange,
    setFieldValue,
    setErrors,
    setValues,
  } = useFormik({
    initialValues: {
      title: "",
      catogories: "",
      description: "",
      jobType: "",
      country: "",
      state: "",
      district: "",
      place: "",
      salaryOffer: "",
      closeDate: "",
      experience: "",
      gender: "",
      qualification: "",
    },
    // validationSchema: LoginSchema,
    onSubmit: debouncedSubmit,
  });

  async function onSubmit(
    
    values: ValuesType,
    { setSubmitting }: FormikHelpers<ValuesType>
  ) {
    try {
      console.log(values);
      const obj = {
        ...values,
        description: value,
        catogories:selectedcatgOption,
        jobType:selectedJobTypeOption?.value,
        gender:selectedGenderOption?.value,
        qualification:selectedQualificationOption,
        location:`${values?.country},${values?.state},${values?.district},${values?.place}`
      };
      const { data } = await service.post(API.CREATE_JOB, obj);
      if (data?.statusCode === 200) {
        toast.success(data?.message || "Successful");
        navigate(`/employer/jobs`);
        dispatch(getProfile());
      } else {
        toast.error(data?.message);
        setErrors(data?.errors);
      }
    } catch (error: any) {
      toast.error(error);
    }
    setSubmitting(false);
  }

  const catgoptions = [
    { value: "Accounting", label: "Accounting" },
    { value: "Banking", label: "Banking" },
    { value: "Digital Marketing", label: "Digital Marketing" },
    { value: "IT", label: "IT" },
    { value: "Others", label: "Others" },
  ];
  const jobtypeoptions = [
    { value: "Full Time", label: "Full Time" },
    { value: "Freelance", label: "Freelance" },
    { value: "Part Time", label: "Part Time" },
    { value: "Contract", label: "Contract" },
  ];
  const genderoptions = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    { value: "Other", label: "Other" },
  ];
  const qualificationoptions = [
    { value: "Certificate", label: "Certificate" },
    { value: "Diploma", label: "Diploma" },
    { value: "Associate", label: "Associate" },
    { value: "Degree Bachelor", label: "Degree Bachelor" },
    { value: "Master's Degree", label: "Master's Degree" },
    { value: "Others", label: "Others" },
  ];
  const [selectedcatgOption, setSelectedcatgOption] = useState(null);
  const [selectedJobTypeOption, setSelectedJobTypeOption] = useState<any>(null);
  const [selectedGenderOption, setSelectedGenderOption] = useState<any>(null);
  const [selectedQualificationOption, setSelectedQualificationOption] =
    useState(null);

  const handleCatgChange = (selectedOption: any) => {
    setSelectedcatgOption(selectedOption);
  };
  const handleJobTypeChange = (selectedOption: any) => {
    setSelectedJobTypeOption(selectedOption);
  };
  const handleGenderTypeChange = (selectedOption: any) => {
    setSelectedGenderOption(selectedOption);
  };
  const handleQualificationChange = (selectedOption: any) => {
    setSelectedQualificationOption(selectedOption);
  };
  return {
    values,
    errors,
    touched,
    handleSubmit,
    isSubmitting,
    handleBlur,
    handleChange,
    value,
    setValue,
    catgoptions,
    qualificationoptions,
    genderoptions,
    jobtypeoptions,
    selectedcatgOption,
    selectedJobTypeOption,
    selectedGenderOption,
    selectedQualificationOption,
    handleCatgChange,
    handleJobTypeChange,
    handleGenderTypeChange,
    handleQualificationChange,
  };
};

export default useRegistrationState;
