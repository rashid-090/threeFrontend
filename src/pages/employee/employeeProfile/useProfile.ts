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
  workExperince: string;
  image: any;
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
  description: Yup.string().trim().required("description is Required"),
});

const useRegistrationState = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { loading } = useAppSelector((state) => state.user);
  const search = useLocation().search;
  const redirect = new URLSearchParams(search).get("redirect");
  const debouncedSubmit = useDebouncedCallback(onSubmit, 300);
  const [value, setValue] = useState("");

  const [selectedOption, setSelectedOption] = useState(null);
  console.log(selectedOption);

  const handleChanges = (selectedOption: any) => {
    setSelectedOption(selectedOption);
  };

  const [fields, setFields] = useState<any>({
    educations: [
      { institution: "", degree: "", startdate: "", enddate: "", notes: "" },
    ],
    experiences: [
      { company: "", position: "", startdate: "", enddate: "", notes: "" },
    ],
    skills: [""],
  });
  //   console.log(fields);

  const handleAddFields = (fieldType: any) => {
    const newFields = { ...fields };
    if (fieldType === "skills") {
      newFields[fieldType].push("");
    } else if (fieldType === "experiences") {
      newFields[fieldType].push({
        company: "",
        position: "",
        startdate: "",
        enddate: "",
        notes: "",
      });
    } else {
      newFields[fieldType].push({
        institution: "",
        degree: "",
        startdate: "",
        enddate: "",
        notes: "",
      });
    }
    setFields(newFields);
  };

  const handleRemoveFields = (fieldType: any, index: any) => {
    if (fields[fieldType].length > 1) {
      const updatedFields = { ...fields };
      updatedFields[fieldType].splice(index, 1);
      setFields(updatedFields);
    }
  };

  const handleFieldChange = (
    fieldType: any,
    index: any,
    fieldName: any,
    value: any
  ) => {
    const updatedFields = { ...fields };
    if (fieldType === "skills") {
      updatedFields[fieldType][index] = value;
    } else {
      updatedFields[fieldType][index][fieldName] = value;
    }
    setFields(updatedFields);
  };

  const {
    values,
    errors,
    touched,
    handleSubmit,
    isSubmitting,
    handleBlur,
    handleChange,
    setFieldValue,
    setFieldTouched,
    setErrors,
    setValues,
  } = useFormik({
    initialValues: {
      email: "",
      fullName: "",
      dob: "",
      designation: "",
      category: "",
      phoneNumber: "",
      country: "",
      city: "",
      experience: "",
      Csalary: "",
      Esalary: "",
      language: "",
      address: "",
      description: "",
      workExperince: "",
      image: "",
    },
    // validationSchema: LoginSchema,
    onSubmit: debouncedSubmit,
  });

  async function onSubmit(
    values: ValuesType,
    { setSubmitting }: FormikHelpers<ValuesType>
  ) {
    try {
      const obj = {
        ...values,
        description: value,
        experience: fields.experiences,
        educations: fields.educations,
        skills: fields.skills,
        category: selectedOption == null ? [] : selectedOption,
      };
      const { data } = await service.put(API.UPDATE_EMPLOYEE_PROFILE, obj);
      if (data?.statusCode === 200) {
        toast.success("Successfully Fill out Profile");
        navigate(`/`);
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
  const getUserProfile = async () => {
    const { data } = await service.get(API.GET_EMPLOYEE_PROFILE);
    setValues({
      email: data?.data?.email,
      fullName: data?.data?.fullName,
      dob: data?.data?.dob,
      designation: data?.data?.designation,
      category: data?.data?.category,
      phoneNumber: data?.data?.phoneNumber,
      country: data?.data?.country,
      city: data?.data?.city,
      experience: data?.data?.experience,
      Csalary: data?.data?.Csalary,
      Esalary: data?.data?.Esalary,
      language: data?.data?.language,
      address: data?.data?.address,
      description: data?.data?.description,
      workExperince: data?.data?.workExperince,
      image: data?.data?.image,
    });
  };

  useEffect(() => {
    getUserProfile();
  }, []);

  return {
    values,
    errors,
    touched,
    handleSubmit,
    isSubmitting,
    handleBlur,
    handleChange,
    loading,
    value,
    setValue,
    selectedOption,
    setSelectedOption,
    handleChanges,
    fields,
    setFields,
    handleAddFields,
    handleRemoveFields,
    handleFieldChange,
    setFieldTouched,
    setFieldValue,
  };
};

export default useRegistrationState;
