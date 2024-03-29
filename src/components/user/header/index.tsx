import React, { useState, useRef, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Logo, ProfileLogo, LogoBlack } from "../../../assets";
import { CgMenuLeft } from "react-icons/cg";
import { VscClose } from "react-icons/vsc";
import { CiMenuKebab } from "react-icons/ci";
import { IoLogInOutline, IoKeyOutline } from "react-icons/io5";
import { FaSignOutAlt, FaUser, FaUserTie } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { logout } from "../../../store/slices/user";
import { AUTH } from "../../../routes/routes";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const { user, isAuthenticated } = useAppSelector((state: any) => state.user);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState<boolean>(false);
  const [drop, setDrop] = useState<boolean>(false);
  const menuRef = useRef<HTMLSpanElement>(null);
  async function signout() {
    const resultAction = await dispatch(logout());
    if (logout.fulfilled.match(resultAction)) {
      navigate(AUTH.BASE_PATH, { replace: true });
    }
  }
  open
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "");

  // const menuItems = [
  //   {
  //     title: `home`,
  //     url: `/`,
  //   },
  //   {
  //     title: `about us`,
  //     url: `/about-us`,
  //   },
  //   {
  //     title: `jobs`,
  //     url: `/jobs`,
  //   },
  //   {
  //     title: `resumes`,
  //     url: `/resumes`,
  //   },
  //   {
  //     title: `contact us`,
  //     url: `/contact-us`,
  //   },
  // ];
  let menuItems: any;
  if (user?.role === "superAdmin") {
    menuItems = [
      { title: `home`, url: `/` },
      { title: `about us`, url: `/about-us` },
      { title: `resumes`, url: `/resumes` },
      { title: `jobs`, url: `/jobs` },
      { title: `contact us`, url: `/contact-us` },
      // Add any other menu items for superAdmin here
    ];
  } else if (user?.role === "Employer") {
    menuItems = [
      { title: `home`, url: `/` },
      { title: `about us`, url: `/about-us` },
      // { title: `resumes`, url: `/resumes` },
      { title: `contact us`, url: `/contact-us` },
    ];
  } else if (user?.role === "Employee") {
    menuItems = [
      { title: `home`, url: `/` },
      { title: `about us`, url: `/about-us` },
      { title: `jobs`, url: `/jobs` },
      { title: `contact us`, url: `/contact-us` },
    ];
  } else {
    // Handle the case when user has no role or an unknown role
    menuItems = [
      { title: `home`, url: `/` },
      { title: `about us`, url: `/about-us` },
      { title: `jobs`, url: `/jobs` },
      { title: `contact us`, url: `/contact-us` },
    ];
  }
  const toggleOptions = () => {
    setDrop(!drop);
  };

  const closeOptions = (e: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
      setDrop(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeOptions);
    return () => {
      document.removeEventListener("mousedown", closeOptions);
    };
  }, []);

  return (
    <>
      <nav className="w-full bg-white text-black shadow-md lg:sticky top-0 left-0 right-0 z-50">
        <div className="w-11/12 xl:w-10/12 mx-auto h-16 xl:h-20  flex  justify-between items-center">
          <NavLink to="/">
            <img
              className="h-7 w-36 md:h-8 md:w-40 lg:h-12 lg:w-56"
              src={LogoBlack}
              alt="Threeseason"
            />
          </NavLink>

          <div className="hidden lg:block">
            <ul className="flex gap-8 font-PoppinsRegular items-center">
              {menuItems?.map((menu: any, index: any) => (
                <li className="capitalize underline-hover-effect2 font-PoppinsSemibold text-slclr hover:text-black" key={index}>
                  <NavLink to={menu.url}>{menu.title}</NavLink>
                </li>
              ))}
              {isAuthenticated ? (
                // <li
                //   onClick={() => navigate("/auth/login")}
                //   className="cursor-pointer flex items-center gap-1 hover:text-primaryclr duration-150"
                // >
                //   <span>Profile</span> <IoLogInOutline />
                // </li>

                <span
                  className="flex items-center gap-2 relative"
                >
                  <li></li>
                  <li></li>
                  <li
                    onClick={toggleOptions}
                    className="cursor-pointer flex items-center gap-1 font-PoppinsSemibold text-slclr hover:text-black duration-150"
                  >
                    <span>My Profile</span><FaUserTie />
                  </li>
                  {user?.role === "Employer" &&
                     <li className="ml-5 font-PoppinsSemibold bg-slclr px-2 py-0 text-white">Employer</li>
                  }
                  {user?.role === "Employee" &&
                     <li className="ml-5 font-PoppinsSemibold bg-slclr px-2 py-0 text-white">Employee</li>
                  }
                  <div
                    className={`bg-white border shadow-md absolute top-8 left-4 duration-200 transition-opacity origin-top ${
                      drop ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <ul className="flex flex-col gap-2 py-5 px-6">
                      <li
                        onClick={() => navigate("/auth/employer-registration")}
                        className="cursor-pointer flex gap-2 items-center font-PoppinsSemibold text-slclr hover:text-black duration-150"
                      >
                        <span>Profile</span> <FaUser />
                      </li>
                      <li
                        onClick={() =>signout()}
                        className="cursor-pointer flex gap-2 items-center font-PoppinsSemibold text-slclr hover:text-black duration-150"
                      >
                        <span>Logout</span> <FaSignOutAlt />
                      </li>
                    </ul>
                  </div>
                </span>
              ) : (
                <span
                  className="flex items-center gap-2 relative"
                  ref={menuRef}
                >
                  <li
                    onClick={() => navigate("/auth/login")}
                    className="cursor-pointer flex items-center gap-1 font-PoppinsSemibold text-slclr hover:text-black duration-150"
                  >
                    <span>Login</span> <IoLogInOutline />
                  </li>
                  {/* | */}
                  {/* <li
                    onClick={toggleOptions}
                    className="cursor-pointer flex items-center gap-1 hover:text-slclr duration-150"
                  >
                    <span>Register</span> <IoKeyOutline />
                  </li>
                  <div
                    className={`bg-white border shadow-md absolute top-8 left-20 duration-200 transition-opacity origin-top ${
                      drop ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <ul className="flex flex-col gap-2 py-5 px-6">
                      <li
                        onClick={() => navigate("/auth/employer-registration")}
                        className="cursor-pointer flex gap-2 items-center hover:text-slclr duration-150"
                      >
                        <span>Employer</span> <FaUser />
                      </li>
                      <li
                        onClick={() => navigate("/auth/employee-registration")}
                        className="cursor-pointer flex gap-2 items-center hover:text-slclr duration-150"
                      >
                        <span>Employee</span> <FaUserTie />
                      </li>
                    </ul>
                  </div> */}
                </span>
              )}
            </ul>
          </div>

          <div
            className="lg:hidden absolute right-8 top-4 z-50"
            onClick={() => setOpen(!open)}
          >
            <ul className="text-3xl cursor-pointer duration-200">
              {open ? (
                <li>
                  <VscClose />
                </li>
              ) : (
                <li>
                  <CiMenuKebab className="rotate-90" />
                </li>
              )}
            </ul>
          </div>
          <div
            className={`z-40  w-4/5 h-screen absolute text-black top-0 duration-200  ${
              open ? "left-0 " : "left-[-100%]"
            }  bg-white shadow-lg shadow-gray-700 lg:hidden`}
          >
            <NavLink to="/">
              <img
                className="absolute left-5 top-5 h-7 w-36 md:h-8 md:w-40"
                src={LogoBlack}
                alt="Threeseason"
              />
            </NavLink>
            <ul className="flex flex-col capitalize text-base pt-20 font-PoppinsRegular ">
              {menuItems?.map((menu: any, index: any) => (
                <li
                  onClick={() => setOpen(false)}
                  className=" w-fit  px-7 py-3 font-PoppinsSemibold text-slclr hover:text-black"
                  key={index}
                >
                  <NavLink to={menu.url}>{menu.title}</NavLink>
                </li>
              ))}
              <span
                className="flex items-center gap-2 px-7 py-3 relative"
                ref={menuRef}
              >
                {isAuthenticated ? 
                (
                  <div className="flex gap-5 items-center">
                        <li
                        onClick={() => navigate("/auth/employer-registration")}
                        className="cursor-pointer font-PoppinsSemibold text-slclr hover:text-black"
                      >
                        Profile
                      </li>
                        <li
                        onClick={() =>signout()}
                        className="cursor-pointer font-PoppinsSemibold text-slclr hover:text-black"
                      >
                        Logout
                      </li>
                  </div>
                )
                 : 
                (
                  <div className="flex gap-5 items-center">
                        <li
                       onClick={() => navigate("/auth/login")}
                        className="cursor-pointer font-PoppinsSemibold text-slclr hover:text-black"
                      >
                        Login
                      </li>
                      <li
                    onClick={toggleOptions}
                    className="cursor-pointer flex items-center gap-1 font-PoppinsSemibold text-slclr hover:text-black duration-150"
                  >
                    <span>Register</span> <IoKeyOutline />
                  </li>
                  <div
                    className={`bg-white border shadow-md absolute top-8 left-20 duration-200 transition-opacity origin-top ${
                      drop ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <ul className="flex flex-col gap-2 py-5 px-6">
                      <li
                        onClick={() => navigate("/auth/employer-registration")}
                        className="cursor-pointer flex gap-2 items-center font-PoppinsSemibold text-slclr hover:text-black duration-150"
                      >
                        <span>Employer</span> <FaUser />
                      </li>
                      <li
                        onClick={() => navigate("/auth/employee-registration")}
                        className="cursor-pointer flex gap-2 items-center font-PoppinsSemibold text-slclr hover:text-black duration-150"
                      >
                        <span>Employee</span> <FaUserTie />
                      </li>
                    </ul>
                  </div>
                  </div>
                ) 
                }
                {/* <li
                  onClick={() => navigate("/auth/login")}
                  className="cursor-pointer"
                >
                  Login
                </li>
                |
                <li onClick={toggleOptions} className="cursor-pointer">
                  Register
                </li>
                <div
                  className={`bg-white border shadow-md absolute top-11 left-20 duration-200 transition-opacity origin-top ${
                    drop ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <ul className="flex flex-col gap-2 py-4 px-8">
                    <li
                      onClick={() => navigate("/auth/employer-registration")}
                      className="cursor-pointer flex gap-2 items-center"
                    >
                      <span>Employer</span> <FaUser />
                    </li>
                    <li
                      onClick={() => navigate("/auth/employee-registration")}
                      className="cursor-pointer flex gap-2 items-center"
                    >
                      <span>Employee</span> <FaUserTie />
                    </li>
                  </ul>
                </div> */}
              </span>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
