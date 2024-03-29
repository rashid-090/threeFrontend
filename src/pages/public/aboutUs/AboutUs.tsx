import React, { useEffect } from "react";
import {Abtbg,LogoEmp,lp6,lp7,lp8} from '../../../assets'
import Footer from "../../../components/user/footer";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Aboutus() {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration
      easing: 'ease-in-out', // Animation easing function
      once: true, // Only run once
    });
  }, []);
  return (
    <>
     <section className="group w-11/12 font-PoppinsRegular lg:w-10/12 mx-auto grid grid-cols-1 gap-10 lg:grid-cols-5 py-10 overflow-hidden">
        <div className="lg:col-span-2 mx-auto overflow-hidden rounded-[3rem] shadow-2xl border-[6px] border-slclr">
          <img loading="lazy" className="object-cover w-full hover:scale-105 duration-200 h-full pointer-events-none" src={lp8} alt="banner" />
        </div>
        <div className="lg:col-span-3 flex flex-col justify-center">

            <h1 data-aos="fade-in"  className="text-5xl lg:text-[7rem] font-PoppinsSemibold uppercase mb-5 leading-none tracking-wider">About us</h1>

          <div className="flex flex-col gap-2 text-sm md:text-base">
            <p data-aos="fade-in">Three Seasons Global prides itself on delivering top-tier talent solutions tailored to meet the diverse needs of businesses worldwide. With a keen focus on excellence and client satisfaction, we strive to bridge the gap between exceptional talent and forward-thinking organizations across various industries. Our commitment to quality, integrity, and innovation fuels our relentless pursuit of providing cutting-edge staffing solutions that empower businesses to thrive in a competitive global market. Backed by a team of seasoned professionals and industry experts.</p>
            <p data-aos="fade-in">Three Seasons Global leverages its extensive network and expertise to connect businesses with the best talent, ensuring seamless integration and long-term success. At Three Seasons Global, we are dedicated to exceeding expectations, fostering growth, and building lasting partnerships that drive mutual success.</p>
            <div className="w-full flex justify-start md:justify-end pt-5">
              <div className="h-1 md:h-2 w-20  bg-slclr"></div>
            </div>
          </div>
        </div>
     </section>
     <Footer/>
    </>
  );
}

export default Aboutus;
