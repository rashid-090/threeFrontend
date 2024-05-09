import React, { useState } from 'react';
import Select from 'react-select';
import { IoIosSearch } from 'react-icons/io';
import { IoLocationOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const options = [
  { value: 'Accounting', label: 'Accounting' },
  { value: 'Banking', label: 'Banking' },
  { value: 'Digital Marketing', label: 'Digital Marketing' },
];

interface JobsearchProps {}

const Jobsearch: React.FC<JobsearchProps> = () => {
  const navigate=useNavigate()
  const [selectedOption, setSelectedOption] = useState<any>(null);
  const [location, setLocation] = useState<any>(null);
  const [job, setJob] = useState<any>(null);

  const handleChange = (selectedOption: any) => {
    setSelectedOption(selectedOption);
  };

  return (
    <>
      <section className="bg-[white] text-black pt-12 font-PoppinsRegular">
        <div className="w-11/12 lg:w-9/12 mx-auto relative bg-zinc-200 rounded-xl lg:rounded-full shadow-lg">
          <form className="grid grid-cols-1 md:grid-cols-5 grid-flow-row md:grid-flow-col p-8 md:p-5 lg:p-10 gap-5 ">
            <div className="w-full relative md:col-span-2">
              <input
                className="w-full placeholder:text-sm p-[.33rem] caret-primaryclr pl-6 text-gray-700 rounded-3xl"
                type="search"
                placeholder="Search keywords e.g. web design"
                value={job}
                onChange={(e)=>setJob(e.target.value)}
              />
              {/* <label className="text-xs font-medium text-gray-500">
                Search keywords e.g. web design
              </label> */}
              <IoIosSearch className="absolute top-2.5 left-2 text-gray-400" />
            </div>
            <div className="w-full relative md:col-span-2">
              <input
                className="w-full placeholder:text-sm p-[.33rem] caret-primaryclr pl-6 rounded-3xl"
                type="search"
                placeholder="Search Locations"
                value={location}
                onChange={(e)=>setLocation(e.target.value)}
              />
              <IoLocationOutline className="absolute top-2.5 left-2 text-gray-400" />
            </div>
            <NavLink to={`/jobs?search=${job || ''}&search2=${location || ''}`}>
              
            <button disabled={!job} className={`bg-slclr ${!job ? 'cursor-not-allowed' : 'cursor-pointer'} font-PoppinsMedium tracking-wider hover:bg-slclrhr duration-200 rounded-3xl uppercase text-white w-20% h-fit px-4 xl:px-8 p-[.4rem] shadow-md`} 
            // onClick={()=>navigate(`/jobs?search=${job || ''}&search2=${location || ''}`, { state: { jobitem:job, location } })}
            
            >
              Find Job
            </button>
            </NavLink>
          </form>
        </div>
      </section>
    </>
  );
};

export default Jobsearch;
