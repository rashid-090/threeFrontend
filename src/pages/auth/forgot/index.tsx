import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {Loginpic2} from "../../../assets";
import LogoBlack from "../../../assets/ThreeSeasonBlackLogo.svg";
import { PiEyeThin, PiEyeSlashThin } from "react-icons/pi";
import useLogin from "./useForget"

function Login() {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  // handle toggle
  const toggle = () => {
    setOpen(!open);
  };
  const {formik }=useLogin()
  return (
    <>
      <section className="w-full h-screen grid place-items-center bg-gray-200">
        <div className="w-11/12 md:w-10/12 lg:w-6/12 mx-auto grid grid-cols-1 gap-5 md:grid-cols-2 rounded-2xl shadow-lg bg-white p-5">
          <div className="h-full w-full flex flex-col gap-16 md:gap-5 justify-between lg:pl-4">
            <div className="flex flex-col justify-center h-full gap-3 ">
              {/* form */}
              <Link to="/">
                <img
                  className="h-10 mb-3 w-52 object-fill float-left"
                  src={LogoBlack}
                  alt="logo"
                />
              </Link>
              <h4 className="text-xl font-bold tracking-wider capitalize text-blue-950">
                Forget
              </h4>
              
              <form className="mt-5 flex flex-col gap-4" onSubmit={formik?.handleSubmit}>
                <div className="flex flex-col gap-1">
                  <label className="text-sm text-gray-600 font-semibold">
                    Email Address
                  </label>
                  <input
                    className="bg-gray-100 p-2 w-full text-sm"
                    type="text"
                    placeholder="Email"
                    name="email"
                    required
                    value={formik?.values?.email}
                    onChange={formik?.handleChange}
                  />
                </div>
                
                <button
                  className="capitalize bg-slclr hover:bg-slclrhr duration-200 cursor-pointer w-full p-2 rounded-xl text-white font-semibold text-base"
                  type="submit"
                >
                  Verify User
                </button>
              </form>
            </div>
            {/* register button */}
            <div className=" text-blue-950">
            
              <p className="text-xs  lowercase font-medium">
                If you don't have an account...
              </p>
              <div className="flex gap-3 flex-col pt-2">
                <button
                  onClick={() => navigate("/auth/employee-registration")}
                  className="text-sm hover:bg-slclr group hover:text-white duration-200 font-semibold rounded-lg  border border-slclr py-2 px-3 "
                >
                  Register as <span className="text-slclr underline group-hover:text-black">employee</span>
                </button>
                <button
                  onClick={() => navigate("/auth/employer-registration")}
                  className="text-sm hover:bg-slclr group hover:text-white duration-200 font-semibold rounded-lg  border border-slclr py-2 px-3 "
                >
                  Register as <span className="text-slclr underline group-hover:text-black">employer</span>
                </button>
              </div>
            </div>
              
          </div>
          <div className="h-full hidden md:block w-full rounded-2xl relative overflow-hidden">
            <img
              loading="lazy"
              className="rounded-2xl object-cover object-bottom h-full hover:scale-105 duration-200 hover:saturate-150"
              src={Loginpic2}
              alt="loginimage"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
