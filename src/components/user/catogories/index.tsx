import React from 'react';
import {Link} from 'react-router-dom'
import { TiArrowForward } from "react-icons/ti";
import {CategoriesData} from '../../constant'

function Categories() {
  return (
    <>
    <section className='bg-white font-PoppinsRegular'>
          <div className='w-11/12 lg:w-9/12 mx-auto py-5 pb-10 bg-white'>
              <div className='relative'>
                <div className='h-[.09rem] w-full bg-gray-200 z-[-1] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'></div>
                <h1 className='text-base md:text-xl font-PoppinsSemibold  text-center my-10 w-fit mx-auto bg-white px-5 capitalize'>browse jobs by categories</h1>
              </div>
              <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-1 gap-y-3 lg:gap-x-5 lg:gap-y-5'>
                {CategoriesData?.map((data:any,index:any)=>{
                  return(
                    <Link to='/jobs'>
                      <div key={index} className='flex justify-center items-center px-5 lg:px-10 py-3 rounded-full border-2 border-slclr shadow-sm  hover:shadow-xl group duration-300 cursor-pointer'>
                          <div className='flex flex-col items-center justify-center gap-2'>
                          <h2 className='xs:text-xs sm:text-sm md:text-base capitalize font-PoppinsMedium text-slate-700'>{data.title}</h2>
                          <p className='text-xs capitalize'>{data.opening} open jobs</p>
                        </div>
                        {/* <TiArrowForward className='group-hover:text-primaryclr text-2xl text-slate-600 hover:text-slate-800 cursor-pointer duration-300 hover:translate-x-1'/> */}
                      </div>
                    </Link>
                  )
                })}

              </div>
          </div>
      </section>
    </>
  )
}

export default Categories