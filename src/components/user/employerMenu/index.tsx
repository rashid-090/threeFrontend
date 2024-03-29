import React from 'react';
import {Link,NavLink, useNavigate} from 'react-router-dom';
import { FaUserTie, FaFileSignature } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import { AiFillFileText } from "react-icons/ai";
import { useAppDispatch } from '../../../store/hooks';
import { logout } from '../../../store/slices/user';
import { AUTH } from '../../../routes/routes';



function Topmenu() {
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
    <div className='lg:sticky top-5 left-0 w-full top-menus bg-gray-100 p-2'>
        <ul className='w-full text-gray-700 flex flex-col gap-5 md:gap-3 capitalize text-base font-semibold tracking-wider duration-100 transition-all'>
            <li><NavLink to='/employer/profile' className='flex items-center gap-2'><FaUserTie/>Profile</NavLink></li>
            <li><NavLink to='/employer/jobs' className='flex items-center gap-2'><AiFillFileText />Job</NavLink></li>
            <li><NavLink to='/employer/create-job' className='flex items-center gap-2'><FaFileSignature />Post Job</NavLink></li>
            <li><NavLink to='#' className='flex items-center gap-2' onClick={()=>signout()}><IoMdLogOut />logout</NavLink></li>
        </ul>
    </div>
    </>
  )
}

export default Topmenu