import React, { useEffect } from "react";

import { motion } from "framer-motion";
// import Title from "../../images/logowhite.png";
import About from "../about/About";
import Career from "../career/career";
import Video from "../video/video";
import Event from "../event_section/event";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Footer from "../../layout/footer/footer";
import Scrollbal from "../scrollball/scrollbal";
import Review from "../Review/Review";
function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <motion.div className="home ease-in-out duration-700" id="home">
        <motion.div className="items-start    h-screen   space-y-10 flex ">
          {/* <motion.img className="w-[45%] 4k:w-[40%] select-none" src={Title} /> */}
          <motion.div className="mobile-sm:w-[57%] laptop:w-[45%] laptopad:[38%] desktop:w-[38%] laptop-lg:w-[40%] h-[60vh] pl-[5%]">
            <motion.p className="font-bold mobile-sm:text-[30px] tablet:text-head desktop-lg-4k:text-[65px] mobile-sm:w-[100%] laptop:w-[80%] desktop-lg-4k:w-[90%] mobile-sm:pt-[40%] laptop:pt-[30%]">
              Inspire Innovate Ignite
            </motion.p>
            <div className=" mobile-sm:w-[100%] laptop:w-[90%] desktop-lg-4k:w-[100%] pt-10 flex items-start  gap-x-2 ">
              <div className="w-[50px] bg-yellow-500 h-[0.3vh] mt-3 desktop-lg-4k:mt-5"></div>
              <div className=" desktop-lg-4k:text-[25px]">
               
                Once upon a time building a satellite is only a dream, a group
                of passionate
              </div>
            </div>

            <div className="absolute bottom-5">
              <div className="flex">
                <div className="w-[100px] bg-white h-[0.1vh] mt-3"></div>
                <div className="pl-1 w-[100px] justify-around flex">
                  <span className="hover:text-in cursor-pointer">
                    <InstagramIcon />
                  </span>
                  <span className="hover:text-fa cursor-pointer">
                    <FacebookIcon />
                  </span>
                  <span className="hover:text-lin cursor-pointer">
                    <LinkedInIcon />
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* space man image */}

          <motion.div className="pl-[20vw] pt-[10vh]">
            {/* <div className="img">
              <img src={spaceman} className="  mobile-lg:w-[80%]  laptop:w-[80%]   laptop-lg:w-[100%] h-[100%] "></img>
            </div> */}
          </motion.div>
        </motion.div>
        <Scrollbal />
        <About />
        <Career />
        <Video />
        <Event />
        <Review />
        <Footer />
      </motion.div>
    </>
  );
}
export default Home;
