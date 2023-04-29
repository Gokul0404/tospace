import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Sponsors from "./sponsors";
import { Swiper, SwiperSlide } from "swiper/react";
import "../about/about.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import rocket from "../images/rocket.png";
import { Pagination, Navigation, FreeMode, Autoplay } from "swiper";

import imageSlide from "./about_data";
function About() {
  const [currentState, setcurrentState] = useState(0);

  //   console.log(imageSlide[currentState].url);
  //   useEffect(() => {
  //     const animate = setTimeout(() => {
  //       if (currentState === 2) {
  //         setcurrentState(0);
  //       } else {
  //         setcurrentState(currentState + 1);
  //       }
  //     }, 8000);
  //     return () => clearTimeout(animate);
  //   }, [currentState]);

  return (
    <div className="aboutbg  py-20  relative ">
      <div className="flex items-center w-screen ">
        <div className=" laptop:w-[20vw] "></div>
        <div className="mobile-sm:w-[100%] mobile-sm:px-5  mobile-sm:flex mobile-sm:justify-center mobile-sm:items-center laptop:items-start mobile-sm:flex-col laptop:justify-arround laptop:ml-[35%] desktop-lg:ml-[35%]  description mobile-sm:order-last laptop:!order-first  ">
          <motion.h1 className=" mobile-sm:text-heading mobile-sm:font-bold  mobile-sm:text-center laptop:text- laptop:text-soon  pb-[10vh] text-fblue laptop:text-justify ">
            THE HISTORY OF TOSPACE LEARN
          </motion.h1>

          <motion.p
            className="mobile-sm:w-[90vw] mobile-sm:px-5 mobile-sm:text-justify laptop:px-0 mobilemax:w-[100vw]   laptop-lg:w-[50vw] mobile-sm:text-paragraph laptop:text-paragraph laptop:text-justify laptop:w-[50vw] parafont"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 5 }}
          >
            {imageSlide[currentState].message}
          </motion.p>

          <div className=" font-Azon mt-[5vh]">
            {/* <motion.button
              className="view text-white laptop-lg:w-[14%] h-[4vh] mobile-sm:w-[15vh] 4k:text-4k desktop:text-desk mobile-sm:text-mob  rounded border-none "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeOut", duration: 3 }}
            >
              View More
            </motion.button> */}
            <button className="ab_btn laptop:!cursor-pointer !font-[700]">
              View More
            </button>
          </div>
        </div>

        <motion.img
          src={"./moon.png"}
          alt="img"
          draggable="false"
          className="  absolute h-[100%] left-0 mobile-lg:top-8 laptop:top-20 mobilemax:top-20 mobile-lg:w-[45%]  mobile-lg:h-[30%] laptop:w-[250px] laptop:h-[450px] desktop-lg:w-[370px] desktop-lg:h-[600px] desktop-lg-4k:w-[370px]  desktop-lg-4k:h-[600px] mobile-sm:hidden laptop:block  "

          //mobile-lg:w-[45%]  mobile-lg:h-[30%]  mobilemax:w-[30%]
          // initial={{ opacity: 0 }}
          // animate={{
          //   opacity: 0.5,

          //   transition: {
          //     type: "spring",
          //     duration: 6,
          //     bounce: 0.1,
          //     repeat: Infinity,
          //     repeatDelay: 2,
          //   },
          // }}
          // whileHover={{ opacity: 1 }}
        />

        {/* <div className="m-auto w-[21vh] h-[9vh] p-1 sponsor rounded-lg"><img src={Lmes} alt=""  className="pt-2"/></div> */}
      </div>
      {/* <Swiper
        onSlideChange={() => console.log("changed")}
        onSwiper={(swiper) => console.log(swiper)}
        slidesPerView={3}
        spaceBetween={35}
        freeMode={false}
        autoplay={{
          pauseOnMouseEnter:true,
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination, Autoplay]}
        className="mySwiper"
      >
        {Sponsors.map((sponsor) => (
          <SwiperSlide key={sponsor.url}>
            
            <div className=" w-[25vh] h-[10vh] mt-5 m-auto sponsor rounded-lg"><img src={sponsor.url} alt={sponsor.id}  className=" "/></div>
          </SwiperSlide>
        ))}
      </Swiper> */}
      <div className="sponsor_content text-center mt-[15vh]">
        <h3 className=" fontbold laptop:text-[24px] text-fblue  pb-5">
          {" "}
          Trusted By Our Cliente
        </h3>
      </div>
    </div>
  );
}

export default About;
