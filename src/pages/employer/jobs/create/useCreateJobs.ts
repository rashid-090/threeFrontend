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
      // console.log(values);
      const obj = {
        ...values,
        description: value || " ",
        salaryOffer: value || " ",
        catogories:selectedcatgOption,
        jobType:selectedJobTypeOption?.value,
        gender:selectedGenderOption?.value || " ",
        qualification:selectedQualificationOption,
        location:`${values?.country},${values?.state || " "},${values?.district}`
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
    { value: "Hospitality", label: "Hospitality" },
    { value: "Medical & HealthCare", label: "Medical & HealthCare" },
    { value: "Accounting", label: "Accounting" },
    { value: "Banking & Finance", label: "Banking & Finance" },
    { value: "Digital Marketing", label: "Digital Marketing" },
    { value: "IT & Software", label: "IT & Software" },
    { value: "Finance", label: "Finance" },
    { value: "Journalist", label: "Journalist" },
    { value: "Media & Entertaiment", label: "Media & Entertaiment" },
    { value: "Business", label: "Business" },
    { value: "Education & Training", label: "Education & Training" },
    { value: "Accountant", label: "Accountant" },
    { value: "Human Resources", label: "Human Resources" },
    { value: "Real estate agent", label: "Real estate agent" },
    { value: "Administrative", label: "Administrative" },
    { value: "Agriculture", label: "Agriculture" },
    { value: "Airline", label: "Airline" },
    { value: "Architecture & Design", label: "Architecture & Design" },
    { value: "Journalist", label: "Journalist" },
    { value: "Engineering", label: "Engineering" },
    { value: "Corporate Professionals", label: "Corporate Professionals" },
    { value: "Beauty & Fashion", label: "Beauty & Fashion" },
    { value: "BPO & Customer Service", label: "BPO & Customer Service" },
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
    { value: "Either", label: "Either" },
    { value: "Others", label: "Others" },
  ];
  const currencyoptions = [
    { value: "United States Dollar (USD)", label: "United States Dollar (USD)" },
    { value: "Euro (EUR)", label: "Euro (EUR)" },
    { value: "British Pound Sterling (GBP)", label: "British Pound Sterling (GBP)" },
    { value: "Japanese Yen (JPY)", label: "Japanese Yen (JPY)" },
    { value: "Canadian Dollar (CAD)", label: "Canadian Dollar (CAD)" },
    { value: "Australian Dollar (AUD)", label: "Australian Dollar (AUD)" },
    { value: "Swiss Franc (CHF)", label: "Swiss Franc (CHF)" },
    { value: "Chinese Yuan (CNY)", label: "Chinese Yuan (CNY)" },
    { value: "Indian Rupee (INR)", label: "Indian Rupee (INR)" },
    { value: "Brazilian Real (BRL)", label: "Brazilian Real (BRL)" },
    { value: "Russian Ruble (RUB)", label: "Russian Ruble (RUB)" },
    { value: "South Korean Won (KRW)", label: "South Korean Won (KRW)" },
    { value: "Mexican Peso (MXN)", label: "Mexican Peso (MXN)" },
    { value: "South African Rand (ZAR)", label: "South African Rand (ZAR)" },
    { value: "Saudi Riyal (SAR)", label: "Saudi Riyal (SAR)" },
    { value: "Turkish Lira (TRY)", label: "Turkish Lira (TRY)" },
    { value: "Hong Kong Dollar (HKD)", label: "Hong Kong Dollar (HKD)" },
    { value: "Singapore Dollar (SGD)", label: "Singapore Dollar (SGD)" },
    { value: "New Zealand Dollar (NZD)", label: "New Zealand Dollar (NZD)" },
    { value: "Norwegian Krone (NOK)", label: "Norwegian Krone (NOK)" },
    { value: "Others", label: "Others" },
  ];
  const qualificationoptions = [
    { value: "High School Diploma/GED", label: "High School Diploma/GED" },
    { value: "Bachelor's Degree", label: "Bachelor's Degree" },
    { value: "Master's Degree", label: "Master's Degree" },
    { value: "Doctorate (Ph.D.)", label: "Doctorate (Ph.D.)" },
    { value: "Professional Certifications", label: "Professional Certifications" },
    { value: "Vocational Training", label: "Vocational Training" },
    { value: "Apprenticeships", label: "Apprenticeships" },
    { value: "Licenses", label: "Licenses" },
    { value: "Language Proficiency Certificates", label: "Language Proficiency Certificates" },
    { value: "Industry-Specific Training", label: "Industry-Specific Training" },
    { value: "Soft Skills Development", label: "Soft Skills Development" },
    { value: "Online Courses and MOOCs", label: "Online Courses and MOOCs" },
    { value: "Military Training and Service", label: "Military Training and Service" },
    { value: "Internships", label: "Internships" },
    { value: "Work Experience", label: "Work Experience" },
    { value: "Others", label: "Others" },
  ];
  const [selectedcatgOption, setSelectedcatgOption] = useState(null);
  const [selectedCurrency, setSelectedCurrency] = useState(null);
  const [selectedJobTypeOption, setSelectedJobTypeOption] = useState<any>(null);
  const [selectedGenderOption, setSelectedGenderOption] = useState<any>(null);
  const [selectedQualificationOption, setSelectedQualificationOption] =
    useState(null);

  const handleCatgChange = (selectedOption: any) => {
    setSelectedcatgOption(selectedOption);
  };
  const handleCurrencyChange = (selectedOption: any) => {
    setSelectedCurrency(selectedOption);
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
    currencyoptions,
    jobtypeoptions,
    selectedcatgOption,
    selectedCurrency,
    selectedJobTypeOption,
    selectedGenderOption,
    selectedQualificationOption,
    handleCatgChange,
    handleCurrencyChange,
    handleJobTypeChange,
    handleGenderTypeChange,
    handleQualificationChange,
  };
};

export default useRegistrationState;
