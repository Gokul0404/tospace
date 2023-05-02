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

  useEffect(() => {
    window.scrollTo(0, 0);
  }
    
  )
  const [teamStatus, setTeamStatus] = useState(0);

  const [founters, setFounders] = useState(0);

  return (
    <>
      <div className="bg-white h-[100%] text-black p-[10vh] mobile-sm:pt-[35%] tablet:pt-[18%] laptop:pt-[8%]">
        <div>
          <div className="header laptop:text-para mobile-sm:text-[22px] ">
            <h1 className="font-semibold">WHY CHOOSE US</h1>
          </div>
          <div className="paragraph pt-5 laptop:w-[85vh] text-justify">
            <h1>
              Our mission is to inspire and educate the next generation of space
              enthusiasts by providing them with hands-on experience in building
              and launching real satellites into space.
            </h1>
          </div>
          <div className="flex gap-x-[10vh] pt-[10vh] mobile-sm:flex-col laptop:flex-row justify-center items-center">
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
                <img src={Aboutim} alt="img" className="w-[50vh] rounded-3xl" />
              </div>
            </div>
          </div>
          <div className="header text-para mt-8">
            <h1 className="font-semibold">OUR TEAM</h1>
          </div>
        </div>
        {/* our team */}

        <div className="grid  laptop:grid-cols-2  items-center ">
          <div className="laptop:gap-x-5 desktop:gap-x-10  mobile-sm:grid-cols-1 tablet:grid-cols-2 justify-center flex-wrap grid laptop:grid-cols-4  desktop-lg-4k: ">
            {Founders.map((founder) => {
              return (
                <div className=" pt-5 flex flex-col w-[100%] mobile-sm:justify-center mobile-sm:items-center ">
                  <div
                    onMouseOver={() => {
                      setTeamStatus(founder.id - 1);
                    }}
                    className="bg-black  group gro relative  mobile-sm:w-[180px] mobile-sm:h-[180px] tablet:w-[200px] tablet:h-[200px] laptop:w-[120px] laptop:h-[120px] desktop:w-[150px] desktop:h-[150px] desktop-lg-4k:h-[180px] desktop-lg-4k:w-[180px] rounded-full overflow-hidden roundimgbg"
                  >
                    <img
                      src={founder.image}
                      className="imagese1 mobile-sm:w-[180px] mobile-sm:h-[180px] h-[150px] w-[150px] tablet:w-[200px] tablet:h-[200px] desktop-lg-4k:h-[180px] desktop-lg-4k:w-[180px]"
                    ></img>
                    <div className="!hidden miniconimg group-hover:!block    laptop:invisible mobile-sm:block absolute z-30 top-0 mobile-sm:text-[10px] tablet:text-[12px] ">
                      <h2 className="mobile-sm:text-[20px] font-bold laptop:w-[100vw] text-center mobile-sm:text-white pt-7">
                        {Founders[teamStatus].name}
                      </h2>
                      <p className="mobile-sm:w-[100%]  px-1 laptop:w-[70%] left-10 text-center  text-white">
                        {Founders[teamStatus].description}
                      </p>
                    </div>
                  </div>

                  <img
                    src="./linkedin.png"
                    className="w-[18px] pt-2  cursor-pointer"
                  ></img>
                </div>
              );
            })}
          </div>
          <div className=" grid grid-cols-1">
            <div className=" flex-col cont mobile-sm:hidden laptop:flex laptop:items-center laptop:text-center  laptop:visible ">
              <h2 className="text-[30px] font-bold">
                {Founders[teamStatus].name}
              </h2>
              <p className="w-[70%] ">{Founders[teamStatus].description}</p>
            </div>
          </div>
        </div>
        <div className="pt-10">
          <div className="header text-para mt-8">
            <h2 className="font-semibold">OUR EXPERTS</h2>
          </div>
          {/* our Experts */}
          <div className="grid laptop:grid-cols-2  items-center  ">
            <div className=" laptop:gap-x-5 desktop:gap-x-5 mobile-sm:justify-center flex-wrap grid tablet:grid-cols-2 laptop:grid-cols-3 laptop:w-[78%]">
              {Experts.map((founder) => {
                return (
                  <div className=" pt-5 group flex flex-col w-[100%] mobile-sm:justify-center mobile-sm:items-center">
                    <div
                      onMouseOver={() => {
                        setFounders(founder.id - 1);
                      }}
                      className="conimgpa gro relative bg-black mobile-sm:w-[180px] mobile-sm:h-[180px] tablet:w-[200px] tablet:h-[200px] laptop:w-[120px] laptop:h-[120px] desktop:w-[150px] desktop:h-[150px] desktop-lg-4k:h-[180px] desktop-lg-4k:w-[180px] rounded-full overflow-hidden roundimgbg"
                    >
                      <img
                        src={founder.image}
                        className="imagese  desktop-lg-4k:h-[180px] desktop-lg-4k:w-[180px]"
                      ></img>
                      <div className="!hidden miniconimg group-hover:!block   laptop:invisible mobile-sm:block absolute z-30 top-0 mobile-sm:text-[10px] tablet:text-[12px] ">
                        <h2 className="mobile-sm:text-[20px] font-bold laptop:w-[100vw]  text-center mobile-sm:text-white pt-7">
                          {Experts[founters].name}
                        </h2>
                        <p className="mobile-sm:w-[100%] h-[100%]  laptop:w-[70%] inset-0 text-center  text-white">
                          {Experts[founters].description}
                        </p>
                      </div>
                    </div>
                    <img
                      src="./linkedin.png"
                      className="w-[18px] pt-2  cursor-pointer"
                    ></img>
                  </div>
                );
              })}
            </div>
            <div>
              <div className="laptop:flex laptop:items-center laptop:text-center laptop:flex-col mobile-sm:hidden laptop:visible ">
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
