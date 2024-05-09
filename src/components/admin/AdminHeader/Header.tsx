import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AdminLogo, Logo, LogoBlack } from "../../../assets";
import { MdDashboard } from "react-icons/md";
import { FaUserLarge } from "react-icons/fa6";
import { FaUserTie } from "react-icons/fa";
import { CgMenuLeft } from "react-icons/cg";
import { IoClose, IoLogOut } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { logout } from "../../../store/slices/user";
import { AUTH } from "../../../routes/routes";

const adminurls = [
  {
    title: `Dashboard`,
    url: `/superAdmin/dashboard`,
    icon: <MdDashboard />,
  },
  {
    title: `Employer`,
    url: `/superAdmin/employer`,
    icon: <FaUserTie />,
  },
  {
    title: `Employee`,
    url: `/superAdmin/employee`,
    icon: <FaUserLarge />,
  },
  {
    title: `Applied jobs`,
    url: `/superAdmin/applied-jobs`,
    icon: <FaUserLarge />,
  },
];

function Menu() {
  const [open, setOpen] = useState(false);
  // open?document.body.style.overflow="hidden":document.body.style.overflow = "";
  const { user, isAuthenticated } = useAppSelector((state: any) => state.user);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  async function signout() {
    const resultAction = await dispatch(logout());
    if (logout.fulfilled.match(resultAction)) {
      navigate(AUTH.BASE_PATH, { replace: true });
    }
  }
  return (
    <>
      <nav className="bg-white shadow-md p-2 sticky top-0 left-0 adminnavbar">
        <div className="w-11/12 mx-auto bg-red flex gap-x-16 items-center justify-between">
          <NavLink to="/superAdmin/dashboard">
            <img className="h-8 lg:h-10" src={LogoBlack} alt="logo" />
          </NavLink>
          <div className="hidden lg:flex  items-center justify-between w-full gap-20 text-gray-600 capitalize text-base font-semibold">
            <ul className="flex gap-10 items-center ">
              {adminurls?.map((links, i) => {
                return (
                  <NavLink
                    key={i}
                    className="flex items-center gap-2 bg-white"
                    to={links.url}
                  >
                    {links.icon}
                    {links.title}
                  </NavLink>
                );
              })}
            </ul>
            <div className="flex gap-2 items-center">
              <img
                className="h-12 rounded-full"
                src={AdminLogo}
                alt="profile"
              />
              <button onClick={()=>signout()} className="text-sm">Logout</button>
            </div>
          </div>
          <button
            className="block lg:hidden text-2xl"
            onClick={() => setOpen(!open)}
          >
            {" "}
            {open ? <IoClose /> : <CgMenuLeft />}
          </button>
          <div
            className={` w-fit p-8 shadow-md bg-white lg:hidden absolute top-11 right-0 ${
              open ? "opacity-100 visible" : "opacity-0 hidden"
            }`}
          >
            <ul className="flex flex-col gap-5 items-start text-gray-600 capitalize text-base font-medium">
              {adminurls?.map((links, i) => {
                return (
                  <NavLink
                    key={i}
                    className="flex items-center gap-2"
                    to={links.url}
                    onClick={() => setOpen(false)}
                  >
                    {links.icon}
                    {links.title}
                  </NavLink>
                );
              })}
              <NavLink
                className="flex  w-full justify-start items-center gap-2"
                to={""}
                onClick={()=>signout()}
              >
                <IoLogOut />
                logout
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Menu;
