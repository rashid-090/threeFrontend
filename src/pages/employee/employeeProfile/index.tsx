import React from "react";
import { useState } from "react";
// import Menu from "./menu";
import Select from "react-select";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { ProfileLogo } from "../../../assets";
import { FaFolderOpen } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
import useProfile from "./useProfile";
import service from "../../../utils/service";
import API from "../../../config/api";
import { toast } from "react-toastify";

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

function EmployeeProfile() {
  const {
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
  } = useProfile();

  const handleUpload = async () => {
    console.log(values.image);
    let formdata = new FormData();
    typeof values.image === "object" && formdata.append("image", values.image);
    const data = await service.post(API.UPDATE_PROFILE_IMAGE, formdata);
    // toast.s
    if (data?.data?.statusCode == 200) {
      toast?.success("success");
      window.location.reload();
    } else {
      toast?.error("error");
    }
    console.log(data?.data?.statusCode);
  };

  
  return (
    <>
      <div className="lg:col-span-3 mt-12">
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <h1 className="text-base md:text-4xl font-semibold uppercase text-slclr">
              Employee Profile
            </h1>
          <div className="flex flex-col gap-y-3 md:flex-row items-start md:items-center lg:items-start justify-between">
            <h1 className="text-base md:text-xl font-semibold uppercase tracking-widest">
              Welcome {values?.fullName}
            </h1>
            <div className="flex gap-5 items-center">
              <img
                className="h-16 w-16 md:h-20 md:w-20 rounded-full object-cover cursor-pointer"
                src={values?.image || ProfileLogo}
                alt="profile"
              />
              <div className="flex flex-col gap-1">
                <div className="flex flex-col gap-y-1 md:flex-row md:justify-between">
                  <input
                    type="file"
                    name="image"
                    onChange={(e) => {
                      setFieldTouched("image", true);
                      if (e?.target?.files && e?.target?.files?.length > 0) {
                        setFieldValue("image", e.target.files[0]);
                      }
                    }}
                    className="file:hover:bg-primaryclr file:bg-slate-200 file:duration-200 file:border-none file:hover:text-white file:px-2 file:py-1 file:rounded-2xl file:cursor-pointer duration-200 h-fit w-fit text-xs capitalize font-medium tracking-wider flex gap-2 items-center"
                  />
                  <button
                    onClick={() => handleUpload()}
                    className="bg-primaryclr hover:bg-sky-700 w-fit rounded-full px-3 text-white text-sm"
                    type="button"
                  >
                    upload
                  </button>
                </div>
                <p className="text-sm font-semibold capitalize tracking-wide">
                  Profile image
                </p>
                <p className="text-[10px] font-medium">
                  Max file size is 250kb And Suitable files are .jpg & .png
                </p>
              </div>
            </div>
          </div>
          <hr />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/*  */}
            <span className="flex flex-col gap-1 w-full">
              <label className="text-sm text-gray-500 font-semibold capitalize tracking-widest">
                full name <span className="text-red-500">*</span>
              </label>
              <input
                required
                className="border-2 border-gray-200 px-3 py-2 font-normal text-sm"
                type="text"
                placeholder="Enter name"
                name="fullName"
                value={values?.fullName}
                onChange={handleChange}
              />
              {touched.fullName && errors.fullName && (
                <span className="info-error">{errors.fullName}</span>
              )}
            </span>
            {/*  */}
            <span className="flex flex-col gap-1 w-full">
              <label className="text-sm text-gray-500 font-semibold capitalize tracking-widest">
                email <span className="text-red-500">*</span>
              </label>
              <input
                required
                className="border-2 border-gray-200 px-3 py-2 font-normal text-sm"
                type="email"
                placeholder="Enter email"
                name="email"
                value={values?.email}
                onChange={handleChange}
                disabled
              />
            </span>
            {/*  */}
            <span className="flex flex-col gap-1 w-full">
              <label className="text-sm text-gray-500 font-semibold capitalize tracking-widest">
                DOB <span className="text-red-500">*</span>
              </label>
              <input
               required
                className="border-2 border-gray-200 px-3 py-1.5 font-normal text-gray-500 text-sm"
                type="date"
                placeholder="Enter email"
                name="dob"
                value={values?.dob}
                onChange={handleChange}
              />
            </span>
            {/*  */}
            {/* <span className="flex flex-col gap-1 w-full lg:col-span-3">
              <label className="text-sm text-gray-500 font-semibold capitalize tracking-widest">
                designation
              </label>
              <input
                className="border-2 border-gray-200 px-3 py-2 font-normal text-gray-500 text-sm"
                type="text"
                placeholder="Enter designation"
                name="designation"
                value={values?.designation}
                onChange={handleChange}
              />
            </span> */}
            {/*  */}
            <span className="flex flex-col gap-1 w-full">
              <label className="text-sm text-gray-500 font-semibold capitalize tracking-widest">
                Phone number <span className="text-red-500">*</span>
              </label>
              <input
              required
                className="border-2 border-gray-200 px-3 py-2 font-normal text-gray-500 text-sm"
                type="number"
                inputMode="numeric"
                placeholder="Phone number"
                name="phoneNumber"
                value={values?.phoneNumber}
                onChange={handleChange}
              />
            </span>

            {/*  */}
            <span className="flex flex-col gap-1 w-full lg:col-span-2">
              <label className="text-sm text-gray-500 font-semibold capitalize tracking-widest">
                Categories <span className="text-red-500">*</span>
              </label>
              <Select
              required
                className="w-full text-sm font-normal text-gray-500"
                isMulti
                value={selectedOption}
                onChange={handleChanges}
                options={catgoptions}
                isSearchable={true}
                placeholder="Select Categories"
              />
            </span>

            {/*  */}
            <span className="flex flex-col gap-1 w-full">
              <label className="text-sm text-gray-500 font-semibold capitalize tracking-widest">
                country <span className="text-red-500">*</span>
              </label>
              <input
              required
                className="border-2 border-gray-200 px-3 py-2 font-normal text-gray-500 text-sm"
                type="text"
                placeholder="Country"
                name="country"
                value={values?.country}
                onChange={handleChange}
              />
            </span>
            {/*  */}
            <span className="flex flex-col gap-1 w-full">
              <label className="text-sm text-gray-500 font-semibold capitalize tracking-widest">
                city <span className="text-red-500">*</span>
              </label>
              <input
              required
                className="border-2 border-gray-200 px-3 py-2 font-normal text-gray-500 text-sm"
                type="text"
                placeholder="City"
                name="city"
                value={values?.city}
                onChange={handleChange}
              />
            </span>
            {/*  */}
            <span className="flex flex-col gap-1 w-full">
              <label className="text-sm text-gray-500 font-semibold capitalize tracking-widest">
                Experience Level <span className="text-red-500">*</span>
              </label>
              <input
              required
                className="border-2 border-gray-200 px-3 py-2 font-normal text-gray-500 text-sm"
                type="text"
                placeholder="2 years"
                name="workExperince"
                value={values?.workExperince}
                onChange={handleChange}
              />
            </span>
            {/*  */}
            <span className="flex flex-col gap-1 w-full">
              <label className="text-sm text-gray-500 font-semibold capitalize tracking-widest">
                Current Salary <span className="text-red-500">*</span>
              </label>
              <input
              required
                className="border-2 border-gray-200 px-3 py-2 font-normal text-gray-500 text-sm"
                type="text"
                placeholder="100"
                name="Csalary"
                value={values?.Csalary}
                onChange={handleChange}
              />
            </span>
            {/*  */}
            <span className="flex flex-col gap-1 w-full">
              <label className="text-sm text-gray-500 font-semibold capitalize tracking-widest">
                Expected Salary <span className="text-red-500">*</span>
              </label>
              <input
              required
                className="border-2 border-gray-200 px-3 py-2 font-normal text-gray-500 text-sm"
                type="text"
                placeholder="200"
                name="Esalary"
                value={values?.Esalary}
                onChange={handleChange}
              />
            </span>
            <span className="flex flex-col gap-1 w-full">
              <label className="text-sm text-gray-500 font-semibold capitalize tracking-widest">
                Currency
              </label>
              <Select
                    
                    className="w-full text-sm font-normal text-gray-500"
                    options={currencyoptions}
                    isSearchable={true}
                    placeholder="Select Currency"
                  />
            </span>
            {/*  */}
            <span className="flex flex-col gap-1 w-full lg:col-span-3">
              <label className="text-sm text-gray-500 font-semibold capitalize tracking-widest">
                Languages <span className="text-red-500">*</span>
              </label>
              <input
                className="border-2 border-gray-200 px-3 py-2 font-normal text-gray-500 text-sm"
                type="text"
                placeholder="English, Arabic..."
                name="language"
                value={values?.language}
                onChange={handleChange}
              />
            </span>

            {/*  */}
            <span className="flex flex-col gap-1 w-full lg:col-span-3">
              <label className="text-sm text-gray-500 font-semibold capitalize tracking-widest">
                address <span className="text-red-500">*</span>
              </label>
              <input
              required
                className="border-2 border-gray-200 px-3 py-2 font-normal text-gray-500 text-sm"
                type="text"
                placeholder="Enter address"
                name="address"
                value={values?.address}
                onChange={handleChange}
              />
            </span>
            {/*  */}
            <div className="md:col-span-3 ">
              <label className="text-sm text-gray-500 font-semibold capitalize tracking-widest">
                About You Details
              </label>
              <ReactQuill
                className="pt-1"
                theme="snow"
                value={value || values?.description}
                onChange={setValue}
              />
            </div>

            <div className="md:col-span-3">
              <h4>Email  cv / resume to : <a href="mailto:recruitments@threeseasonsglobal.com" target="_blank" className="pl-2 hover:text-slclr hover:underline duration-150">Recruitments@threeseasonsglobal.com</a></h4>
            </div>

            <hr className="md:col-span-3 my-5" />

            {/*  */}

            <div className="md:col-span-3 ">
              {/* education */}
              <div className="w-full">
                <label className="text-sm text-gray-500 font-semibold capitalize tracking-widest">
                  Education <span className="text-red-500">*</span>
                </label> 
                {fields.educations.map((education: any, index: any) => (
                  <div
                    key={index}
                    className="grid grid-cols-1 md:grid-cols-2 gap-5 py-2"
                  >
                    <input
                    required
                      className="border-2 border-gray-200 px-3 py-2 font-normal text-gray-500 text-sm w-full"
                      type="text"
                      placeholder="Institution"
                      value={education.institution}
                      onChange={(e) =>
                        handleFieldChange(
                          "educations",
                          index,
                          "institution",
                          e.target.value
                        )
                      }
                    />
                    <input
                    required
                      className="border-2 border-gray-200 px-3 py-2 font-normal text-gray-500 text-sm w-full"
                      type="text"
                      placeholder="Qualification"
                      value={education.degree}
                      onChange={(e) =>
                        handleFieldChange(
                          "educations",
                          index,
                          "degree",
                          e.target.value
                        )
                      }
                    />
                    <input
                    required
                      className="border-2 border-gray-200 px-3 py-2 font-normal text-gray-500 text-sm w-full"
                      type="text"
                      placeholder="From"
                      value={education.startdate}
                      onChange={(e) =>
                        handleFieldChange(
                          "educations",
                          index,
                          "startdate",
                          e.target.value
                        )
                      }
                    />
                    <input
                    required
                      className="border-2 border-gray-200 px-3 py-2 font-normal text-gray-500 text-sm w-full"
                      type="text"
                      placeholder="to"
                      value={education.enddate}
                      onChange={(e) =>
                        handleFieldChange(
                          "educations",
                          index,
                          "enddate",
                          e.target.value
                        )
                      }
                    />
                    <textarea
                      className="md:col-span-2 border-2 border-gray-200 px-3 py-2 font-normal text-gray-500 text-sm w-full"
                      // type="text"
                      placeholder="Notes"
                      value={education.notes}
                      onChange={(e) =>
                        handleFieldChange(
                          "educations",
                          index,
                          "notes",
                          e.target.value
                        )
                      }
                    />
                    <div className="flex flex-row-reverse items-center justify-between md:col-span-2">
                      {fields.educations.length > 1 && (
                        <button
                          className="text-xs font-semibold capitalize text-gray-600 hover:text-red-400 duration-150 flex items-center gap-1"
                          type="button"
                          onClick={() =>
                            handleRemoveFields("educations", index)
                          }
                        >
                          <MdDeleteForever />
                          delete
                        </button>
                      )}
                      <button
                        className="text-xs font-semibold capitalize text-gray-600 hover:text-primaryclr duration-150 flex items-center gap-1"
                        type="button"
                        onClick={() => handleAddFields("educations")}
                      >
                        <IoIosAddCircle />
                        Add
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              {/*  */}

              <hr className="md:col-span-3 my-5" />
              {/*  */}
              <div className="w-full">
                <label className="text-sm text-gray-500 font-semibold capitalize tracking-widest">
                  Experience 
                </label>
                {fields.experiences.map((experince: any, index: any) => (
                  <div
                    key={index}
                    className="grid grid-cols-1 md:grid-cols-2 gap-5 py-2"
                  >
                    <input
                      className="border-2 border-gray-200 px-3 py-2 font-normal text-gray-500 text-sm w-full"
                      type="text"
                      placeholder="Company name"
                      value={experince.company}
                      onChange={(e) =>
                        handleFieldChange(
                          "experiences",
                          index,
                          "company",
                          e.target.value
                        )
                      }
                    />
                    <input
                      className="border-2 border-gray-200 px-3 py-2 font-normal text-gray-500 text-sm w-full"
                      type="text"
                      placeholder="Job Title"
                      value={experince.position}
                      onChange={(e) =>
                        handleFieldChange(
                          "experiences",
                          index,
                          "position",
                          e.target.value
                        )
                      }
                    />
                    <input
                      className="border-2 border-gray-200 px-3 py-2 font-normal text-gray-500 text-sm w-full"
                      type="text"
                      placeholder="From"
                      value={experince.startdate}
                      onChange={(e) =>
                        handleFieldChange(
                          "experiences",
                          index,
                          "startdate",
                          e.target.value
                        )
                      }
                    />
                    <input
                      className="border-2 border-gray-200 px-3 py-2 font-normal text-gray-500 text-sm w-full"
                      type="text"
                      placeholder="to"
                      value={experince.enddate}
                      onChange={(e) =>
                        handleFieldChange(
                          "experiences",
                          index,
                          "enddate",
                          e.target.value
                        )
                      }
                    />
                    <textarea
                      className="md:col-span-2 border-2 border-gray-200 px-3 py-2 font-normal text-gray-500 text-sm w-full"
                      // type="text"
                      placeholder="Notes"
                      value={experince.notes}
                      onChange={(e) =>
                        handleFieldChange(
                          "experiences",
                          index,
                          "notes",
                          e.target.value
                        )
                      }
                    />
                    <div className="flex flex-row-reverse items-center justify-between md:col-span-2">
                      {fields.experiences.length > 1 && (
                        <button
                          className="text-xs font-semibold capitalize text-gray-600 hover:text-red-400 duration-150 flex items-center gap-1"
                          type="button"
                          onClick={() =>
                            handleRemoveFields("experiences", index)
                          }
                        >
                          <MdDeleteForever />
                          delete
                        </button>
                      )}
                      <button
                        className="text-xs font-semibold capitalize text-gray-600 hover:text-primaryclr duration-150 flex items-center gap-1"
                        type="button"
                        onClick={() => handleAddFields("experiences")}
                      >
                        <IoIosAddCircle />
                        Add
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              {/*  */}
              <hr className="md:col-span-3 my-5" />
              {/*  */}
              <div className="w-full">
                <label className="text-sm text-gray-500 font-semibold capitalize tracking-widest">
                  Skill 
                </label>
                {fields.skills.map((skill: any, index: any) => (
                  <div key={index} className="grid grid-cols-1 py-2">
                    <input
                      className="border-2 border-gray-200 px-3 py-2 mb-3 font-normal text-gray-500 text-sm w-full"
                      type="text"
                      placeholder="Skill"
                      value={skill}
                      onChange={(e) =>
                        handleFieldChange("skills", index, "", e.target.value)
                      }
                    />
                    <div className="flex flex-row-reverse items-center justify-between md:col-span-2">
                      {fields.skills.length > 1 && (
                        <button
                          className="text-xs font-semibold capitalize text-gray-600 hover:text-red-400 duration-150 flex items-center gap-1"
                          type="button"
                          onClick={() => handleRemoveFields("skills", index)}
                        >
                          <MdDeleteForever />
                          delete
                        </button>
                      )}
                      <button
                        className="text-xs font-semibold capitalize text-gray-600 hover:text-primaryclr duration-150 flex items-center gap-1"
                        type="button"
                        onClick={() => handleAddFields("skills")}
                      >
                        <IoIosAddCircle />
                        Add
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <button
            className="bg-primaryclr hover:bg-sky-600 duration-200  text-white font-semibold text-base capitalize py-1.5 w-fit px-10"
            type="submit"
          >
            Save
          </button>
        </form>
      </div>
    </>
  );
}

export default EmployeeProfile;