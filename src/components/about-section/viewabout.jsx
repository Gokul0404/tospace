import React, { useEffect, useState } from "react";
import Aboutim from "../landing-section/images/abour-view.png";
import "../about-section/aboutse.css";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Founders from "./founders.js";
import { get } from "lodash";
import Experts from "../about-section/experts";

function Viewabout() {


  const [teamStatus, setTeamStatus] = useState(0);
  const [founters, setFounders] = useState(0);

  return (
    <>
      <div className="bg-white h-[100%] text-black p-[10vh] pt-[8%]">
        <div>
          <div className="header laptop:text-para mobile-sm:text-[22px] ">
            <h1>WHY CHOOSE US</h1>
          </div>
          <div className="paragraph pt-5 laptop:w-[85vh] text-justify">
            <h1>
              Our mission is to inspire and educate the next generation of space
              enthusiasts by providing them with hands-on experience in building
              and launching real satellites into space.
            </h1>
          </div>
          <div className="flex gap-x-[10vh] pt-[10vh] mobile-sm:flex-col laptop:flex-row">
            <div className=" header ">
              <div className="head text-para mobile-sm:text-[22px]">
                <h1>How our courses are different from others</h1>
              </div>
              <div className="paragraph pt-5 text-justify laptop:w-[42vw]">
                <h1>
                  When we tell you, you forget. When we teach you, you may
                  remember. But, when we involve you, you learn and grow. You
                  can't learn bicycling by just reading or listening, you have
                  to get your hands dirty with your bicycle. “Learning by Doing”
                  has always been our mantra towards learning new skills. So why
                  wait! Subscribe now to upgrade your new skills.
                </h1>
              </div>
              <div className="cards w-[100%]  h-auto mt-5 text-black rounded-3xl pb-2 ">
                <div className="flex justify-around items-center ">
                  <div className="">
                    <AccessTimeFilledIcon />
                  </div>
                  <div>
                    <h1 className="text-icon">WATCH</h1>
                    <h5 className="text-desk">
                      Fun & engaging videos guiding you to learn and helping
                      kids to explore and visualize
                      <br /> a new world of passion.
                    </h5>
                  </div>
                </div>
              </div>
              <div className="cards w-[100%]  h-auto mt-5 text-black rounded-3xl  pb-2">
                <div className="flex justify-around items-center ">
                  <div className=" ">
                    <AccessTimeFilledIcon />
                  </div>
                  <div>
                    <h1 className="text-icon">Do</h1>
                    <h5 className="text-desk">
                      Fun & engaging videos guiding you to learn and helping
                      kids to explore and visualize
                      <br /> a new world of passion.
                    </h5>
                  </div>
                </div>
              </div>
              <div className="cards w-[100%] h-auto mt-5 text-black rounded-3xl pb-2 ">
                <div className="flex justify-around items-center ">
                  <div className="">
                    <AccessTimeFilledIcon />
                  </div>
                  <div>
                    <h1 className="text-icon">LEARN</h1>
                    <h5 className="text-desk">
                      Fun & engaging videos guiding you to learn and helping
                      kids to explore and visualize
                      <br /> a new world of passion.
                    </h5>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div>
                <img src={Aboutim} alt="" className="w-[50vh] rounded-3xl" />
              </div>
            </div>
          </div>
          <div className="header text-para mt-8">
            <h1>OUR TEAM</h1>
          </div>
        </div>
        {/* our team */}

        <div className="grid grid-cols-2  items-center ">
          <div className="gap-x-5  justify-center flex-wrap grid grid-cols-4 ">
            {Founders.map((founder) => {
              return (
                <div className=" pt-5 flex flex-col ">
                  <div className="bg-black w-[150px] h-[150px] rounded-full overflow-hidden">
                    <img
                      src={founder.image}
                      className="imagese"
                      onMouseOver={() => {
                        setTeamStatus(founder.id - 1);
                      }}
                    ></img>
                  </div>
                  <img
                    src="./linkedin.png"
                    className="w-[18px] pt-2 ml-[65px] cursor-pointer"
                  ></img>
                </div>
              );
            })}
          </div>
          <div>
            <div className="flex items-center text-center flex-col cont  ">
              <h2 className="text-[30px] font-bold">
                {Founders[teamStatus].name}
              </h2>
              <p className="w-[70%] ">{Founders[teamStatus].description}</p>
            </div>
          </div>
        </div>
        <div>
          <div className="header text-para mt-8">
            <h1>OUR EXPERTS</h1>
          </div>
          {/* our Experts */}
          <div className="grid grid-cols-2  items-center ">
            <div className="  justify-center flex-wrap grid grid-cols-3 w-[78%]">
              {Experts.map((founder) => {
                return (
                  <div className=" pt-5 flex flex-col ">
                    <div className="bg-black w-[150px] h-[150px] rounded-full overflow-hidden">
                      <img
                        src={founder.image}
                        className="imagese"
                        onMouseOver={() => {
                          setFounders(founder.id - 1);
                        }}
                      ></img>
                    </div>
                    <img
                      src="./linkedin.png"
                      className="w-[18px] pt-2 ml-[65px] cursor-pointer"
                    ></img>
                  </div>
                );
              })}
            </div>
            <div>
              <div className="flex items-center text-center flex-col ">
                <h2 className="text-[30px] font-bold">
                  {Experts[founters].name}
                </h2>
                <p className="w-[70%] ">{Experts[founters].description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Viewabout;
