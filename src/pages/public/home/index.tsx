import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Categories from "../../../components/user/catogories";
import Jobsearch from "../../../components/user/jobSearch";
import Companys from "../../../components/user/companys";
import { callbackbg2,baaan,lp7,lp2,lp4 } from "../../../assets";
import Footer from "../../../components/user/footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { useAppSelector } from "../../../store/hooks";

function Home() {
  const { user, isAuthenticated } = useAppSelector((state: any) => state.user);
  const navigate=useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration
      easing: 'ease-in-out', // Animation easing function
      once: true, // Only run once
    });
  }, []);

  return (
    <>

    <div>
      <img className=" w-full h-80 object-cover md:h-full" loading="eager" src={baaan} alt="banner" />
    </div>
  
    <div className="bg-[#BABABA] text-center pt-16 text-slclr -mt-28 lg:-mt-40">
        <h1  className="text-3xl px-4 md:text-5xl lg:text-6xl font-PoppinsBold capitalize">
          Fulfill your gap here...
        </h1>
        <p  className="text-lg font-PoppinsMedium lg:pt-3">
          1000+ opportunities to explore
        </p>
      </div>
      <div className=" flex gap-5 py-5 lg:gap-10 justify-center w-full bg-[#BABABA]">
      {!user?.role && 
      <>
      <button onClick={() => navigate("/auth/employer-registration")} className="bg-slclr text-white shadow-md shadow-gray-500 rounded-3xl hover:bg-slclrhr text-sm md:text-base px-5 md:px-10 py-2 md:py-3 ">Find your next hire</button>
      <button onClick={() => navigate("/jobs")} className="bg-slclr text-white shadow-md shadow-gray-500 rounded-3xl hover:bg-slclrhr text-sm md:text-base px-5 md:px-10 py-2 md:py-3 ">Find your next job</button>
      </>
      
      }
      {user?.role === "Employer" &&
      <button onClick={() => navigate("/auth/employer-registration")} className="bg-slclr text-white shadow-md shadow-gray-500 rounded-3xl hover:bg-slclrhr text-sm md:text-base px-5 md:px-10 py-2 md:py-3 ">Find your next hire</button>
      }
      {user?.role === "Employee" &&

      <button onClick={() => navigate("/jobs")} className="bg-slclr text-white shadow-md shadow-gray-500 rounded-3xl hover:bg-slclrhr text-sm md:text-base px-5 md:px-10 py-2 md:py-3 ">Find your next job</button>
      }
    </div>
      {/* Job search */}
      <Jobsearch />

      {/* Categories */}
      <Categories />

      {/* Quotes */}
      <section style={{backgroundColor:"white"}}>
        <div className="flex flex-col-reverse lg:flex-row bg-white">
          <div className="basis-3/4 flex justify-center flex-col gap-3 bg-slclr text-white p-5 lg:p-20 lg:py-28" >
            <h1 data-aos="fade-in" className="group text-xl  lg:text-3xl font-extrabold">
              Beyond Resumes, Crafting Success
            </h1>
            <h1 data-aos="fade-in" className="text-lg lg:text-2xl font-bold">
              Redefining workforce pathway to excellence
            </h1>
            <p data-aos="fade-in" className="text-sm">
              Three Seasons Global Staffing Solutions LLC is a premier
              recruitment and workforce management agency dedicated to
              connecting top-tier talent with exceptional opportunities. With a
              commitment to excellence, we specialize in identifying and placing
              skilled professionals across diverse industries. Our seasoned team
              of recruitment experts is driven by a passion for fostering
              mutually beneficial partnerships, ensuring both clients and
              candidates thrive in their respective endeavours. Trust Three
              Seasons for strategic staffing solutions that elevate businesses
              and careers alike.
            </p>
            {/* <Link to="/jobs"> */}
              {/* <button className="mt-2 border w-fit border-1 px-16 py-2 uppercase hover:bg-white duration-300 hover:text-black text-sm tracking-widest " onClick={()=>navigate("/jobs")}>
                find jobs
              </button> */}
            {/* </Link> */}
          </div>
          <div className="basis-1/4 relative overflow-hidden">
            <img
              className="duration-500 hover:scale-105 object-cover md:object-right h-[25rem] object-top md:h-52 lg:h-full w-full brightness-75"
              src={lp7}
              alt="quotes"
            />
          </div>
        </div>
      </section>

      {/* Company Logo*/}
      <Companys />

      {/* Testimonials */}
      {/* categpictures */}
      <section className="overflow-hidden w-11/12 md:w-10/12 mx-auto py-10 md:py-16 flex flex-col gap-10 lg:gap-16">
       
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-5">
            <div data-aos="fade-up"  className="w-full h-[300px] md:h-[400px] border-4 rounded-[3rem] overflow-hidden border-slclr">
              <img className="w-full h-full object-cover" src={lp4} alt="image" />
            </div>
            <div className="w-full flex justify-center flex-col gap-3 md:gap-5 lg:p-20">
              <h1 data-aos="fade-in"  className="text-xl capitalize md:text-3xl lg:text-4xl font-PoppinsSemibold">Expert international  hotel staffing solution</h1>
              <p data-aos="fade-in"  className="text-sm md:text-base">A leading international hotel chain with locations across Europe, Asia, and North America faced challenges in recruiting and retaining top-tier staff for its luxury properties. The hotel group aimed to maintain consistent service excellence across diverse cultural settings.</p>
            </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-5">
            <div className="w-full flex justify-center flex-col gap-3 md:gap-5 lg:p-20">
              <h1 data-aos="fade-in" className="text-xl capitalize md:text-3xl lg:text-4xl font-PoppinsSemibold">Expert international nursing staffing solution</h1>
              <p data-aos="fade-in" className="text-sm md:text-base">A renowned global healthcare provider with facilities in various countries faced challenges in recruiting and retaining highly skilled nursing professionals. The organization aimed to maintain high-quality patient care across diverse cultural and medical settings.</p>
            </div>
            <div data-aos="fade-up"  className="w-full h-[300px] md:h-[400px] border-4 rounded-[3rem] overflow-hidden border-slclr">
              <img className="w-full h-full object-cover" src={lp2} alt="image" />
            </div>
        </div>
       
      </section>
      {/* categpictures */}


      
      <Footer/>
    </>
  );
}

export default Home;
