import React, { useState } from "react";
import Select from "react-select";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { ProfileLogo } from "../../../assets";
import Footer from "../../../components/user/footer";
import useProfile from "./useProfile";
import service from "../../../utils/service";
import API from "../../../config/api";
import { toast } from "react-toastify";

const Index = () => {
  const {
    values,
    errors,
    touched,
    handleSubmit,
    handleChange,
    value,
    setValue,
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
        <form className="" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-y-5 md:gap-y-3 md:flex-row md:items-center justify-between">
            <div className="flex flex-col gap2">
   
              <h1 className="text-base md:text-4xl font-semibold uppercase text-slclr">
              Employer Profile
            </h1>
              <h1 className="text-base md:text-xl font-semibold uppercase tracking-widest">
              Welcome {values?.fullName}
            </h1>
              <p className="text-sm font-semibold capitalize"> {values?.companyName}</p>
            </div>
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
                <p className="text-sm capitalize font-semibold">Company logo</p>
                <p className="text-[10px] font-medium">
                  Max file size is 250kb And Suitable files are .jpg & .png
                </p>
              </div>
            </div>
          </div>
          <div className="mt-10 flex flex-col gap-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <span className="flex flex-col gap-1 w-full">
                <label className="text-sm text-gray-500 font-semibold capitalize tracking-widest">
                  Employer name <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  className="border-2 border-gray-200 px-3 py-2 font-normal text-sm"
                  type="text"
                  placeholder="Enter Employer name"
                  name="fullName"
                  value={values?.fullName}
                  onChange={handleChange}
                />
              </span>
              <span className="flex flex-col gap-1 w-full">
                <label className="text-sm text-gray-500 font-semibold capitalize tracking-widest">
                  Company name <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  className="border-2 border-gray-200 px-3 py-2 font-normal text-sm"
                  type="text"
                  placeholder="Enter Company name"
                  name="companyName"
                  value={values?.companyName}
                  onChange={handleChange}
                />
              </span>
              <span className="md:col-span-2 w-full">
                <label className="text-sm text-gray-500 font-semibold capitalize tracking-widest">
                  Company Description <span className="text-red-500">*</span>
                </label>
                <ReactQuill
                  className="pt-1"
                  theme="snow"
                  value={value || values?.description}
                  onChange={setValue}
                />
              </span>
              <div className="md:col-span-2">
                <span className="flex flex-col gap-1 w-full">
                  <label className="text-sm text-gray-500 font-semibold capitalize tracking-widest">
                    Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    required
                    className="border-2 border-gray-200 px-3 py-2 font-normal text-sm"
                    type="text"
                    placeholder="Enter Address"
                    name="address"
                    value={values?.address}
                    onChange={handleChange}
                  />
                </span>
              </div>
              <div className="md:col-span-2">
                <span className="flex flex-col gap-1 w-full">
                  <label className="text-sm text-gray-500 font-semibold capitalize tracking-widest">
                    Company Website <span className="text-red-500">*</span>
                  </label>
                  <input
                    required
                    className="border-2 border-gray-200 px-3 py-2 font-normal text-sm"
                    type="text"
                    placeholder="Enter url"
                    name="webUrl"
                    value={values?.webUrl}
                    onChange={handleChange}
                  />
                </span>
              </div>
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
    </>
  );
};

export default Index;
