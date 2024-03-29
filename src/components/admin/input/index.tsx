import moment from "moment";
import React, { useState } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Error from "../error";

type PropType = {
  id?: string;
  placeholder?: string;
  label?: any;
  value?: string;
  type: string;
  error?: string;
  onChange?: (e: any) => void;
  onBlur?: (e: any) => any;
  className?: string;
  divStyle?: string;
  eyeIconPosition?: { top: string; right: string };
  disabled?: boolean | false;
  name?: string;
  formik?: any;
};
const Input: React.FC<PropType> = ({
  value,
  onChange,
  label,
  error,
  placeholder,
  className,
  type,
  id,
  onBlur,
  divStyle,
  disabled,
  name,
  eyeIconPosition,
  formik,
}) => {
  const [isFocus, setIsFocus] = useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <div className={`form-group form-wrap ${type === "password" && "position-relative"}`}>
      {type === "date" || type === "datetime-local" ? (
        <input
          className={`form-control ${className}`}
          id={id}
          name={name}
          type={isFocus ? type : "text"}
          disabled={disabled}
          placeholder={placeholder}
          value={
            isFocus
              ? (value as string)
              : (value as string)
                ? type === "date"
                  ? moment(formik ? formik?.values[`${name}`] : value).format("DD MMM YYYY")
                  : moment(formik ? formik?.values[`${name}`] : value).format("DD-MMM-YYYY - hh:mm A")
                : ""
          }
          onChange={formik ? formik?.handleChange : onChange}
          onBlur={(e: any) => {
            setIsFocus(false);
            formik ? formik?.onBlur(e) : onBlur && onBlur(e);
          }}
          onFocus={() => setIsFocus(true)}
        />
      ) : type === "password" ? (
        <>
          <input
            className={`form-control ${className}`}
            name={name}
            id={id}
            type={showPassword ? "text" : type}
            disabled={disabled}
            placeholder={placeholder}
            value={formik ? formik?.values[`${name}`] : value as string}
            onChange={formik ? formik?.handleChange : onChange}
            onBlur={formik ? formik?.handleBlur : onBlur}
          />
          <FontAwesomeIcon
            icon={showPassword ? (faEyeSlash as IconProp) : (faEye as IconProp)}
            color="#94aeca"
            size="sm"
            style={{
              position: "absolute",
              right: eyeIconPosition?.right || "5px",
              top: eyeIconPosition?.top || "57px",
              cursor: "pointer",
            }}
            onClick={() => setShowPassword((prevState) => !prevState)}
          />
        </>
      ) : (
        <input
          className={`form-control ${className}`}
          name={name}
          id={id}
          type={type}
          disabled={disabled}
          placeholder={placeholder}
          value={formik ? formik?.values[`${name}`] : value as string}
          onChange={formik ? formik?.handleChange : onChange}
          onBlur={formik ? formik?.handleBlur : onBlur}
        />
      )}
      {formik ? <Error formik={formik} name={`${name}`} /> : error && <span className='info-error'>{error}</span>}
    </div>
  );
};

export default Input;
