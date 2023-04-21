import React from "react";
import Aboutim from "../landing-section/images/abour-view.png";

import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, FreeMode, Autoplay } from "swiper";
import Founders from "./founders.js";

function Viewabout() {
  return (
    <>
      <div className="bg-black h-[100%] text-white  p-[10vh]">
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
                can't learn bicycling by just reading or listening, you have to
                get your hands dirty with your bicycle. “Learning by Doing” has
                always been our mantra towards learning new skills. So why wait!
                Subscribe now to upgrade your new skills.
              </h1>
            </div>
            <div className="cards w-[100%]  h-auto mt-5 text-white rounded-3xl pb-2 ">
              <div className="flex justify-around items-center ">
                <div className="">
                  <AccessTimeFilledIcon />
                </div>
                <div>
                  <h1 className="text-icon">WATCH</h1>
                  <h5 className="text-desk">
                    Fun & engaging videos guiding you to learn and helping kids
                    to explore and visualize
                    <br /> a new world of passion.
                  </h5>
                </div>
              </div>
            </div>
            <div className="cards w-[100%]  h-auto mt-5 text-white rounded-3xl  pb-2">
              <div className="flex justify-around items-center ">
                <div className=" ">
                  <AccessTimeFilledIcon />
                </div>
                <div>
                  <h1 className="text-icon">Do</h1>
                  <h5 className="text-desk">
                    Fun & engaging videos guiding you to learn and helping kids
                    to explore and visualize
                    <br /> a new world of passion.
                  </h5>
                </div>
              </div>
            </div>
            <div className="cards w-[100%] h-auto mt-5 text-white rounded-3xl pb-2 ">
              <div className="flex justify-around items-center ">
                <div className="">
                  <AccessTimeFilledIcon />
                </div>
                <div>
                  <h1 className="text-icon">LEARN</h1>
                  <h5 className="text-desk">
                    Fun & engaging videos guiding you to learn and helping kids
                    to explore and visualize
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
          <h1>OUR EXPERTS</h1>
        </div>

{/* our experts */}

        <div>
          <Swiper
            onSlideChange={() => console.log("changed")}
            onSwiper={(swiper) => console.log(swiper)}
            slidesPerView={1}
            spaceBetween={35}
            freeMode={false}
            centeredSlides={true}
            loop={true}
            autoplay={{
              pauseOnMouseEnter: true,
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination, Autoplay]}
            className="m "
          >
            {Founders.map((founder) => {
              return (
                <SwiperSlide>
                  <div className="flex  justify-around items-center cards p-5 ">
                    <div className=" ">
                      <img
                        src={founder.image}
                        alt="no"
                        className="w-[40vh] p-2 rounded-2xl"
                      />
                      <div className="header text-para text-center uppercase ">
                        <h1>{founder.name}</h1>
                      </div>
                    </div>

                    <div className="w-[80vh] text-justify">
                      <h5 className="text-[20px]">{founder.description}</h5>
                      <div className="social flex mt-5 gap-x-[5vh] justify-center ">
                        <div className="hover:text-fa">{founder.facebook}</div>
                        <div className="hover:text-in">{founder.Instagram}</div>
                        <div className="hover:text-twi">{founder.twitter}</div>
                        <div className="hover:text-lin">{founder.LinkedIn}</div>
                      </div>
                    </div>
                  </div>
                  <div className="designation text-center text-[30px] mt-5  m-auto w-[100vh]">
                    <h2>{founder.desgination}</h2>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Viewabout;
