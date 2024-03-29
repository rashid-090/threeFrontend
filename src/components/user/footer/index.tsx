import { Link, NavLink } from "react-router-dom";
import { Logo,LogoWhite } from "../../../assets";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { FaAngleRight,FaAngleUp  } from "react-icons/fa6";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <footer className="font-PoppinsRegular bg-slclr text-white">
        <div className="w-11/12 xl:w-10/12 mx-auto flex flex-col md:flex-row justify-between py-10 gap-10 md:gap-5 lg:gap-20">
          <div className="flex-1 flex flex-col gap-5 md:gap-3">
            <NavLink to="/">
              <img className="h-14 w-58 md:h-8 md:w-40 lg:w-64 lg:h-14" src={LogoWhite} alt="Threeseason" />
            </NavLink>
            <p className="text-sm lg:w-[50%]">
            Three Seasons Global Staffing Solutions LLC is a professional recruitment and workforce management staffing agency.
            </p>
           
          </div>
         
          <div className="flex-1 flex flex-col md:items-end md:text-right gap-3">
            <h1 className="text-lg">Contact us</h1>
            <div className="h-[2px] -mt-2 w-20 bg-white"></div>
            <div className="flex flex-col gap-2 font-light text-sm mb-4">
              <p>1309 Coffeen Avenue STE 1200<br/> Sheridan, Wyoming 82801, USA</p>
              <a href="mailto:careers@threeseasonsglobal.com" target="_blank" className="hover:text-black duration-200">Careers@threeseasonsglobal.com</a>
              <a href="mailto:recruitments@threeseasonsglobal.com" target="_blank" className="hover:text-black duration-200">Recruitments@threeseasonsglobal.com</a>
            </div>
            <div className="flex gap-3 items-center">
              <div className="text-xl cursor-pointer border border-gray-300 p-2 duration-500 transition-all ease-in-out hover:bg-gradient-to-r from-slclr to-slclrhr rounded-full">
                <a href="https://www.linkedin.com/company/three-seasons-llc/" target="_blank" aria-label="Linkedin"><FaLinkedinIn className="" /></a>
              </div>
              <div className="text-xl cursor-pointer border border-gray-300 p-2 duration-500 transition-all ease-in-out hover:bg-gradient-to-r from-slclr to-slclrhr rounded-full">
                <a href="https://www.facebook.com/Threeseasonsjobsabroad" target="_blank" aria-label="Facebook"><FaFacebook className="" /></a>
              </div>
              {/* <div className="text-xl cursor-pointer border border-primaryclr p-2 duration-500 transition-all ease-in-out hover:bg-gradient-to-r from-primaryclr to-thirdclrr rounded-full">
                <a href="#" target="_blank" aria-label="Twitter"><FaTwitter className="" /></a>
              </div> */}
              <div className="text-xl cursor-pointer border border-gray-300 p-2 duration-500 transition-all ease-in-out hover:bg-gradient-to-r from-slclr to-slclrhr rounded-full">
                <a href="https://api.whatsapp.com/send?phone=919846353801" target="_blank" aria-label="Whatsapp"><FaWhatsapp className="" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-11/12 xl:w-10/12 flex justify-between pb-5 mx-auto text-center md:text-left text-[12px] relative">
          <span className="capitalize hover:underline duration-200 font-normal"><a href="https://dostudio.co.in" target="_blank">powered by DO Studio</a></span>
          <span className="text-base lg:text-lg cursor-pointer" onClick={scrollToTop}><FaAngleUp/></span>
        </div>
      </footer>
    </>
  );
}

export default Footer;
