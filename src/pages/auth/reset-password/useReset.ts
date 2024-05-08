import { FormikHelpers, useFormik } from "formik";
import * as Yup from "yup";
import { useDebouncedCallback } from "use-debounce";
import CryptoJS from "crypto-js";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { login } from "../../../store/slices/user";
import { useEffect, useState } from "react";
import ROLES from "../../../config/roles";
import { useNavigate } from "react-router-dom";
import { PRIVATE } from "../../../routes/routes";
import UserService from "../../../services/user.service";
import { toast } from "react-toastify";
import { DELAYTIME } from "../../../config/constants";
import service from "../../../utils/service";
import API from "../../../config/api";
import useUrlParams from "../../../hooks/useUrlParams";

interface ValuesType {
  email: string;
  password: string;
  rememberMe: boolean | false;
}

const LoginSchema = Yup.object().shape({
  password: Yup.string().required("password is required"),
});

const ForgotSchema = Yup.object().shape({
  // email: Yup.string().trim().email().required("Email is required."),
});

const useLoginState = () => {
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.user);
  const navigate = useNavigate();
  const { searchParams, urlParamsHandler, resetParamsUrl } = useUrlParams();

  const search = searchParams.get("email")
  console.log(search,"search");
  


  const [show, setShow] = useState<any>({
    _id: "",
    type: "submit",
    title: "",
    description: "",
    submit: () => {},
  });

  const onSubmit = async (
    values: ValuesType,
    { setSubmitting }: FormikHelpers<ValuesType>
  ) => {
    const obj={
      email:search,
      password:values?.password
    }
    // console.log(obj);
    
    const {data} = await service.post(API.RESET_PASSWORD,obj)
    if(data?.statusCode==200){
      toast.success("Password Updated Successfully")
      navigate('/auth/login')

    }else{
      toast.error("User Not Found")

    }
    // const resultAction = await dispatch(login(values));
    // if (
    //   login.fulfilled.match(resultAction) &&
    //   resultAction.payload?.data?.role
    // ) {      
    //   switch (resultAction.payload?.data?.role) {
    //     case ROLES.SUPER_ADMIN:
    //       navigate(
    //         PRIVATE.BASE_PATH.replace(
    //           ":userType",
    //           PRIVATE.ADMIN.SUPER_ADMIN_BASE_PATH
    //         ),
    //         { replace: true }
    //       );
    //       break;
    //     default:
    //       break;
    //   }
    // }
    // setSubmitting(false);
  };

  const debouncedSubmit = useDebouncedCallback(onSubmit, DELAYTIME);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    validationSchema: LoginSchema,
    onSubmit: debouncedSubmit,
  });

  const forgot = useFormik({
    validationSchema: ForgotSchema,
    initialValues: {
      email: "",
    },
    onSubmit: ForgotPassword,
  });

  async function ForgotPassword(
    values: any,
    { setSubmitting, setErrors }: FormikHelpers<any>
  ) {
    const { data, statusCode, message, errors } =
      await UserService.ForgotPassword(values?.email);
    if (statusCode == 200) toast.success(message);
    else {
      setErrors(errors);
      toast.error(message);
    }
    setSubmitting(false);
  }

  function onForgot() {
    setShow({
      _id: "",
      type: "submit",
      title: "Forgot Password",
      description: "",
      submit: () => forgot?.handleSubmit(),
    });
  }

  useEffect(() => {
    try {
      const loginDataStr = localStorage.getItem("login-data");
      if (loginDataStr) {
        const bytes = CryptoJS.AES.decrypt(
          loginDataStr,
          process.env.REACT_APP_PRIVATE_KEY || "iD@dmin2022"
        );
        const bytesStr = bytes.toString(CryptoJS.enc.Utf8);
        if (bytesStr) {
          const loginData = JSON.parse(bytesStr);
          formik?.setErrors(loginData);
        } else {
          localStorage.removeItem("login-data");
        }
      }
    } catch (e) {
      localStorage.removeItem("login-data");
    }
  }, []);

  return {
    formik,
    loading,
    show,
    setShow,
    onForgot,
    forgot,
  };
};

export default useLoginState;
