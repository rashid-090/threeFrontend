import {Outlet, useNavigate} from "react-router-dom";
import Menu from "../components/admin/AdminHeader/Header";
import { FaUserLarge } from "react-icons/fa6";
import { FaUserTie } from "react-icons/fa";
import { AdEmployee, AdEmployer } from "../assets";

function Dashboard() {
  const navigate = useNavigate();
  return (
    <>
      <section className="min-h-screen w-full bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200">
        <Menu />
        <Outlet/>
      </section>
    </>
  );
}

export default Dashboard;
