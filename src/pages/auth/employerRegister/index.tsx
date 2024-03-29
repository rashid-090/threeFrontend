import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Registerpic, LogoBlack } from "../../../assets/index";
import { PiEyeThin, PiEyeSlashThin } from "react-icons/pi";
import useRegister from "./useRegister";

function Register() {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  // handle toggle
  const toggle = () => {
    setOpen(!open);
  };

  const toggle2 = () => {
    setOpen2(!open2);
  };
  const {
    values,
    errors,
    touched,
    handleSubmit,
    isSubmitting,
    handleBlur,
    handleChange,
    loading,
  } = useRegister();
  return (
    <>
      <section className="w-full h-screen grid place-items-center bg-gray-200">
        <div className="w-11/12 md:w-10/12 lg:w-6/12 mx-auto grid grid-cols-1 gap-5 md:grid-cols-2 rounded-2xl shadow-lg bg-white p-5">
          <div className="h-full hidden md:block w-full rounded-2xl relative overflow-hidden">
            <img
              loading="lazy"
              className="rounded-2xl h-full object-cover hover:scale-105 duration-200 hover:saturate-150"
              src={Registerpic}
              alt="loginimage"
            />
          </div>
          <div className="h-full w-full flex flex-col gap-14 md:gap-14 justify-between lg:pl-4">
            <div className="flex flex-col justify-center h-full gap-2 ">
              {/* form */}
              <Link to="/">
                <img
                  className="h-10 mb-1 w-52 object-fill float-left"
                  src={LogoBlack}
                  alt="logo"
                />
              </Link>
              <div>
                <h4 className="text-xl font-bold tracking-wider capitalize text-blue-950">
                  register
                </h4>
                <p className="text-xs text-blue-950 lowercase font-medium">
                  Please register if you do not have an account
                </p>
              </div>
              <form className="mt-5 flex flex-col gap-3" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-1">
                  <label className="text-sm text-gray-600 font-semibold">
                    User Name
                  </label>
                  <input
                    className="bg-gray-100 p-2 w-full text-sm"
                    type="text"
                    placeholder="Username"
                    value={values?.name}
                    onChange={handleChange}
                    name="name"
                    id="username"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm text-gray-600 font-semibold">
                    Email Address
                  </label>
                  <input
                    className="bg-gray-100 p-2 w-full text-sm"
                    type="email"
                    placeholder="Email"
                    value={values?.email}
                    onChange={handleChange}
                    name="email"
                    id="email"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm text-gray-600 font-semibold">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      className="bg-gray-100 p-2 pr-12 w-full text-sm"
                      type={open === false ? "password" : "text"}
                      placeholder="Password"
                      value={values?.password}
                      onChange={handleChange}
                      name="password"
                      id="password"
                      required
                    />
                    <span className="absolute right-5 top-2 duration-200 transition-all">
                      {open === false ? (
                        <PiEyeThin
                          className="text-2xl cursor-pointer"
                          onClick={toggle}
                        />
                      ) : (
                        <PiEyeSlashThin
                          className="text-2xl cursor-pointer"
                          onClick={toggle}
                        />
                      )}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm text-gray-600 font-semibold">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      className="bg-gray-100 p-2 pr-12 w-full text-sm"
                      type={open2 === false ? "password" : "text"}
                      placeholder="Confirm Password"
                      value={values?.confirmPassword}
                      onChange={handleChange}
                      name="confirmPassword"
                      id="confirmPassword"
                      required
                    />
                    <span className="absolute right-5 top-2 duration-200 transition-all">
                      {open2 === false ? (
                        <PiEyeThin
                          className="text-2xl cursor-pointer"
                          onClick={toggle2}
                        />
                      ) : (
                        <PiEyeSlashThin
                          className="text-2xl cursor-pointer"
                          onClick={toggle2}
                        />
                      )}
                    </span>
                  </div>
                </div>
                <button
                  className="capitalize bg-slclr hover:bg-slclrhr duration-200 cursor-pointer w-full p-2 rounded-xl text-white font-semibold text-base"
                  type="submit"
                >
                  register
                </button>
              </form>
            </div>
            {/* register button */}
            <div className="flex justify-between items-center text-blue-950">
              <p className="text-xs  lowercase font-medium">
                If you already have an account...
              </p>
              <button
                onClick={() => navigate("/auth/login")}
                className="text-sm md:text-base hover:bg-slclr hover:text-white duration-200 font-semibold rounded-lg capitalize border border-slclr py-1 px-3 "
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Register;
