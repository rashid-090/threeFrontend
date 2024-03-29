import { FormikHelpers, useFormik } from "formik";
import * as Yup from "yup";
import { useDebouncedCallback } from "use-debounce";
import CryptoJS from "crypto-js";

import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { login } from "../../../store/slices/user";
import { useEffect, useState } from "react";
import API from "../../../config/api";
import service from "../../../utils/service";
import { toast } from "react-toastify";
import { AUTH } from "../../../routes/routes";
import { useLocation, useNavigate } from "react-router";

interface ValuesType {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
}

const LoginSchema = Yup.object().shape({
  email: Yup.string().trim().required("Email is Required"),
  name: Yup.string().trim().required("Username is Required"),
  password: Yup.string().trim().required("Password is Required"),
  confirmPassword: Yup.string().trim().required("Confirm Password is Required"),
});

const useRegistrationState = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { loading } = useAppSelector((state) => state.user);
  const search = useLocation().search;
  const redirect = new URLSearchParams(search).get("redirect");
  const debouncedSubmit = useDebouncedCallback(onSubmit, 300);

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
  } = useFormik({
    initialValues: {
      email: "",
      name: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: LoginSchema,
    onSubmit: debouncedSubmit,
  });

  async function onSubmit(
    values: ValuesType,
    { setSubmitting }: FormikHelpers<ValuesType>
  ) {
    try {
      const obj = { ...values, role: "Employer" };
      const { data } = await service.post(API.SIGNUP, obj);
      if (data?.statusCode === 200) {
        toast.success(data?.message || "Successful");
        if (redirect)
          navigate(
            `${AUTH.BASE_PATH + "/" + AUTH.PAGES.LOGIN}?redirect=${redirect}`
          );
        else navigate(`${AUTH.BASE_PATH + "/" + AUTH.PAGES.LOGIN}`);
      } else {
        toast.error(data?.message);
        setErrors(data?.errors);
      }
    } catch (error: any) {
      toast.error(error);
    }
    setSubmitting(false);
  }

  return {
    values,
    errors,
    touched,
    handleSubmit,
    isSubmitting,
    handleBlur,
    handleChange,
    loading,
  };
};

export default useRegistrationState;
