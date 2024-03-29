import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";
import { CompanyLogos } from '../../../components/constant';

function Companys() {
    var settings = {
		dots: false,
		infinite: true,
		speed: 1000,
		autoplay: true,
		slidesToShow: 7,
		slidesToScroll: 1,
		initialSlide: 0,
    arrows:false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
				},
			},
			{
				breakpoint: 600,
				settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
				},
			},
		],
	};
  return (
    <>
    <section className='py-10 bg-white'>
        <div className='relative'>
                <div className='h-[.09rem] w-full bg-gray-200 z-[-1] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'></div>
                <h1 className='text-base md:text-xl font-PoppinsSemibold  text-center mt-10 w-fit mx-auto bg-white px-5 capitalize'>Top Companies</h1>
        </div>
        <div className=''>
            <Slider {...settings} className='companyslide'>
                {CompanyLogos?.map((data:any,index:any)=>{
                    return(
                       <div className='mt-5' key={index}>
                         <img className='w-full h-24 object-contain aspect-video object-center' src={data.Logoimage} alt="company logo" />
                       </div>
                    )
                })}
            </Slider>
        </div>
    </section>
    </>
  )
}

export default Companys