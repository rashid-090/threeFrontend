import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import { TiArrowForward } from "react-icons/ti";
import {CategoriesData} from '../../constant';
import { TfiAngleDown } from "react-icons/tfi";


function Categories() {
  const [showAll, setShowAll] = useState(false);
  const [buttons, setButtons] = useState([
  {
      title:'Hospitality',

  },
  {
      title:'Nursing',

  },
  {
      title:'Medical & HealthCare',

  },
  {
      title:'Banking & Finance',

  },
  {
      title:'Digital Marketing',

  },
  {
      title:`IT & Software`,

  },
  {
      title:`Finance`,

  },
  {
      title:`Journalist`,

  },
  {
      title:`Media & Entertaiment`,

  },
  {
      title:`Business`,

  },
  {
      title:`Education & Training`,

  },
  {
      title:`Accountant`,

  },
  {
      title:`Human Resources`,

  },
  {
      title:`Real estate agent`,

  },
  {
      title:`Administrative`,

  },
  {
      title:`Airline`,

  },
  {
      title:`Architecture & Design`,

  },
  {
      title:`Journalist`,

  },
  {
      title:`Engineering`,

  },
  {
      title:`Corporate Professionals`,

  },
  {
      title:`Beauty & Fashion`,

  },
  {
      title:`BPO & Customer Service`,

  },
  {
      title:`Developer`,

  },
  ]);

  const handleShowAll = () => {
    setShowAll(true);
  };
  return (
    <>
    <section className='bg-white font-PoppinsRegular'>
          <div className='w-11/12 lg:w-10/12 2xl:w-9/12 mx-auto py-5 pb-10 bg-white'>
              <div className='relative'>
                <div className='h-[.09rem] w-full bg-gray-200 z-[-1] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'></div>
                <h1 className='text-base md:text-xl font-PoppinsSemibold  text-center my-10 w-fit mx-auto bg-white px-5 capitalize'>browse jobs by categories</h1>
              </div>
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-1 gap-y-3 lg:gap-x-2 2xl:gap-x-5 lg:gap-y-5'>
                {buttons.slice(0, showAll ? buttons.length : 3).map((data:any,index:any)=>{
                  return(
                    <Link to={`/jobs?search=${data?.title}`}>
                      <div key={index} className='flex justify-center items-center px-5 lg:px-10 py-3 rounded-full border-2 border-slclr shadow-sm  hover:shadow-xl group duration-300 cursor-pointer'>
                          <div className='flex flex-col items-center justify-center gap-2'>
                          <h2 className='xs:text-xs md:text-sm 2xl:text-base capitalize font-PoppinsMedium text-slate-700'>{data.title}</h2>
                        </div>
                      </div>
                    </Link>
                  )
                })}
                    <Link to={`/jobs?search=`}>
                      <div className='flex justify-center items-center px-5 lg:px-10 py-3 rounded-full border-2 border-slclr shadow-sm  hover:shadow-xl group duration-300 cursor-pointer'>
                          <div className='flex flex-col items-center justify-center gap-2'>
                          <h2 className='xs:text-xs md:text-sm 2xl:text-base capitalize font-PoppinsMedium text-slate-700'>others</h2>
                        </div>
                      </div>
                    </Link>
              </div>
                    <div className='w-full grid place-items-center mt-5'>
                    {!showAll && (
                        <button
                          onClick={handleShowAll}
                          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold w-10 h-10 grid place-items-center rounded-full"
                        >
                          <TfiAngleDown/>
                        </button>
                      )}
                    </div>
          </div>
      </section>
    </>
  )
}

export default Categories