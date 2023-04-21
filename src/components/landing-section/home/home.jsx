import React, { useEffect } from "react";

import { motion } from "framer-motion";
// import Title from "../../images/logowhite.png";
import About from "../about/About";
import Career from "../career/career";
import Video from "../video/video";
import Event from "../event_section/event";
import spaceman from "../images/spaceman.png";
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
          <motion.div className=" w-[40%] h-[60vh] pl-[9%]">
            <motion.p className="font-bold text-head  w-[80%] pt-[30%]">
              Inspire Innovate Ignite
            </motion.p>
            <div className="w-[90%] pt-10 flex items-start  gap-x-2 ">
              <div className="w-[50px] bg-yellow-500 h-[0.3vh] mt-3"></div>
              <div className="">
                {" "}
                Once upon a time building a satellite is only a dream, a group
                of passionate
              </div>
            </div>

            <div className="absolute bottom-5">
              <div className="flex">
                <div className="w-[100px] bg-white h-[0.1vh] mt-3"></div>
                <div className="pl-1 w-[100px] justify-around flex">
                  <span className="hover:text-pink-700">
                    <InstagramIcon />
                  </span>
                  <span className="hover:text-blue-500">
                    <FacebookIcon />
                  </span>
                  <span className="hover:text-blue-900">
                    <LinkedInIcon />
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div className="pl-[20vw] pt-[10vh]">   
            <div className="img">
              <img src={spaceman} className="  mobile-lg:w-[80%]  laptop:w-[80%]   laptop-lg:w-[100%] h-[100%] "></img>
            </div>
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
