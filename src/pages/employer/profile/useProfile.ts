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
  fullName: string;
  companyName: string;
  description: string;
  address: string;
  webUrl: string;
  image:any
}

const LoginSchema = Yup.object().shape({
  fullName: Yup.string().trim().required("Full Name is Required"),
  // description: Yup.string().trim().required("description is Required"),
});

const useRegistrationState = () => {
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
    setFieldTouched,
    // setFieldValue
  } = useFormik({
    initialValues: {
      fullName: "",
      companyName: "",
      description: "",
      address: "",
      webUrl: "",
      image:""
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
      };
      const { data } = await service.put(API.UPDATE_EMPLOYEE_PROFILE, obj);
      if (data?.statusCode === 200) {
        toast.success(data?.message || "Successful");
        // navigate(`${PUBLIC.PAGES.LANDING}`);
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
    console.log(data);
    setValues({
      fullName: data?.data?.fullName,
      companyName: data?.data?.companyName,
      address: data?.data?.address,
      description: data?.data?.description,
      webUrl: data?.data?.webUrl,
      image:data?.data?.image
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
    value,
    setValue,
    setFieldTouched,
    setFieldValue
  };
};

export default useRegistrationState;
