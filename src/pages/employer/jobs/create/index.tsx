import React from "react";
import { useState } from "react";
// import Menu from "./menu";
import Select from "react-select";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { ProfileLogo } from "../../../../assets";
import { FaFolderOpen } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
import { ThemeProvider, createTheme } from "@mui/material";
import useJob from "./useCreateJobs";
const theme = createTheme();

function PostJobs() {
  const {
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
    handleJobTypeChange,
    handleCurrencyChange,
    handleGenderTypeChange,
    handleQualificationChange,
  } = useJob();
  return (
    <ThemeProvider theme={theme}>
      <div className="lg:col-span-3">
        <form className="" onSubmit={handleSubmit}>
          <div className="mt-10 flex flex-col gap-3">
            <div className="grid grid-cols-1 gap-3">
              <span className="flex flex-col gap-1 w-full">
                <label className="text-sm text-gray-500 font-semibold capitalize tracking-widest">
                  Job Title <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  className="border-2 border-gray-200 px-3 py-2 font-normal text-sm"
                  type="text"
                  placeholder="Enter job title"
                  name="title"
                  value={values?.title}
                  onChange={handleChange}
                />
              </span>
              <span className="w-full">
                <label className="text-sm text-gray-500 font-semibold capitalize tracking-widest">
                  Job Description
                </label>
                <ReactQuill
                  className="pt-1"
                  theme="snow"
                  value={value}
                  onChange={setValue}
                />
              </span>

              <span className="flex flex-col gap-1 w-full">
                <label className="text-sm text-gray-500 font-semibold capitalize tracking-widest">
                  Categories <span className="text-red-500">*</span>
                </label>
                <Select
                  required
                  className="w-full text-sm font-normal text-gray-500"
                  isMulti
                  value={selectedcatgOption}
                  onChange={handleCatgChange}
                  options={catgoptions}
                  isSearchable={true}
                  placeholder="Select Categories"
                />
              </span>
              <span className="flex flex-col gap-1 w-full">
                <label className="text-sm text-gray-500 font-semibold capitalize tracking-widest">
                  Job type <span className="text-red-500">*</span>
                </label>
                <Select
                  required
                  className="w-full text-sm font-normal text-gray-500"
                  value={selectedJobTypeOption}
                  onChange={handleJobTypeChange}
                  options={jobtypeoptions}
                  isSearchable={true}
                  placeholder="Select Categories"
                />
              </span>

              <span className="flex flex-col gap-1 w-full  md:grid-cols-2">
                <label className="text-sm text-gray-500 font-semibold capitalize tracking-widest">
                  Country <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  className="border-2 border-gray-200 px-3 py-2 font-normal text-sm"
                  type="text"
                  placeholder="Enter Country"
                  name="country"
                  value={values?.country}
                  onChange={handleChange}
                />
                {/* {touched?.location && errors?.location && (
                  <span className="info-error">{errors?.location}</span>
                )} */}
              </span>

              <span className="flex flex-col gap-1 w-full  md:grid-cols-2">
                <label className="text-sm text-gray-500 font-semibold capitalize tracking-widest">
                  State
                </label>
                <input
                  className="border-2 border-gray-200 px-3 py-2 font-normal text-sm"
                  type="text"
                  placeholder="Enter State"
                  name="state"
                  value={values?.state}
                  onChange={handleChange}
                />
                
              </span>
              <span className="flex flex-col gap-1 w-full  md:grid-cols-2">
                <label className="text-sm text-gray-500 font-semibold capitalize tracking-widest">
                  City <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  className="border-2 border-gray-200 px-3 py-2 font-normal text-sm"
                  type="text"
                  placeholder="Enter City"
                  name="district"
                  value={values?.district}
                  onChange={handleChange}
                />
               
              </span>
              {/* <span className="flex flex-col gap-1 w-full  md:grid-cols-2">
                <label className="text-sm text-gray-500 font-semibold capitalize tracking-widest">
                  Place <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  className="border-2 border-gray-200 px-3 py-2 font-normal text-sm"
                  type="text"
                  placeholder="Enter Location"
                  name="place"
                  value={values?.place}
                  onChange={handleChange}
                />
               
              </span> */}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <span className="flex flex-col gap-1 w-full">
                    <label className="text-sm text-gray-500 font-semibold capitalize tracking-widest">
                      Salary Offer
                    </label>
                    <input
                      
                      className="border-2 border-gray-200 px-3 py-2 font-normal text-sm"
                      type="text"
                      placeholder="100"
                      name="salaryOffer"
                      value={values?.salaryOffer}
                      onChange={handleChange}
                    />
                  </span>
                  <span className="flex flex-col gap-1 w-full">
                    <label className="text-sm text-gray-500 font-semibold capitalize tracking-widest">
                      Currency
                    </label>
                    <Select
                    
                    className="w-full text-sm font-normal text-gray-500"
                    value={selectedCurrency}
                    onChange={handleCurrencyChange}
                    options={currencyoptions}
                    isSearchable={true}
                    placeholder="Select Currency"
                  />
                  </span>
                </div>
                <span className="flex flex-col gap-1 w-full">
                  <label className="text-sm text-gray-500 font-semibold capitalize tracking-widest">
                    Close Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    required
                    className="border-2 border-gray-200 px-3 py-2 font-normal text-sm"
                    type="date"
                    placeholder="Enter Location"
                    name="closeDate"
                    value={values?.closeDate}
                    onChange={handleChange}
                  />
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <span className="flex flex-col gap-1 w-full">
                  <label className="text-sm text-gray-500 font-semibold capitalize tracking-widest">
                    Experince level <span className="text-red-500">*</span>
                  </label>
                  <input
                    required
                    className="border-2 border-gray-200 px-3 py-2 font-normal text-sm"
                    type="text"
                    placeholder="Eg: Entry-level, Intermediate, Mid-level, Senior or executive-level."
                    name="experience"
                    value={values?.experience}
                    onChange={handleChange}
                  />
                </span>
                <span className="flex flex-col gap-1 w-full">
                  <label className="text-sm text-gray-500 font-semibold capitalize tracking-widest">
                    gender 
                  </label>
                  <Select
                    className="w-full text-sm font-normal text-gray-500"
                    value={selectedGenderOption}
                    onChange={handleGenderTypeChange}
                    options={genderoptions}
                    isSearchable={true}
                    placeholder="Select Categories"
                  />
                </span>
              </div>
              <span className="flex flex-col gap-1 w-full">
                <label className="text-sm text-gray-500 font-semibold capitalize tracking-widest">
                  Qualification <span className="text-red-500">*</span>
                </label>
                <Select
                  required
                  isMulti
                  className="w-full text-sm font-normal text-gray-500"
                  value={selectedQualificationOption}
                  onChange={handleQualificationChange}
                  options={qualificationoptions}
                  isSearchable={true}
                  placeholder="Select Categories"
                />
              </span>

              <button
                className="bg-primaryclr hover:bg-sky-600 duration-200  text-white font-semibold text-base capitalize py-1.5 w-fit px-10"
                type="submit"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </ThemeProvider>
  );
}

export default PostJobs;
