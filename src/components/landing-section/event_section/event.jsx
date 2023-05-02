import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-creative";
import "swiper/css/effect-fade";
import Aos from "aos";
import "aos/dist/aos.css";
import { Pagination, FreeMode, Autoplay } from "swiper";
import EventsCard from "./event_data";

import "./event.css";

function Event() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div
        className="event_section  eventbg parafont pb-5  tablet:block"
        id="event"
      >
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="3000"
        >
          <div className="event_heading text-center pt-10 ">
            <h1 className="fontbold text-fblue text-desk1">Workshop</h1>
            <h5 className=" mobile-sm:p-1 mobile-sm:text-justify mobile-sm:px-5 laptop:px-0 laptop:text-center ">
              Instructors from around the world teach millions of students on
              Udemy. We provide the tools and skills to teach what you love.
            </h5>
          </div>
          <Swiper
            slidesPerView={1}
            spaceBetween={35}
            // centeredSlides={true}
            loop={true}
            freeMode="true"
            autoplay={{
              // pauseOnMouseEnter: false,
              delay: 4500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination, Autoplay]}
            className="m "
          >
            {EventsCard.map((cards, index) => (
              <SwiperSlide key={cards.url}>
                <div className="flex flex-col w-screen items-center  gap-y-[10vh] ">
                  <div className="flex items-center !cursor-none">
                    <div>
                      <div className="event_main flex gap-x-1 !cursor-none  laptop:mr-8 laptopad:mr-0">
                        <div className="  mobile-sm:hidden laptop:block laptop-lg:w-[20vw]    laptop:w-[20vw] ">
                          {/* 1st */}

                          <div className="section-1 flex flex-col items-end mt-[15vh] gap-y-1 4k:mt-[19vh] desktop-lg-4k:mt-[16.6vh]">
                            <div className="text-black bg-slate-700 w-[140px] h-[100px] overflow-hidden">
                              <img
                                src={cards.img[0]}
                                className="!w-inherit h-inherit object-cover"
                                alt="img"
                              />
                            </div>
                            <div className="text-black flex flex-row gap-x-1">
                              <div className="small_image w-[100px] h-[70px] bg-slate-700 overflow-hidden">
                                <img
                                  src={cards.img[1]}
                                  className="!w-inherit h-inherit object-cover"
                                  alt="img"
                                />
                              </div>

                              <div className="small_image w-[100px] h-[120px] bg-slate-700 overflow-hidden">
                                <img
                                  src={cards.img[2]}
                                  className="!w-[100%] h-[100%] object-cover"
                                  alt="img"
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* 2nd */}
                        <div className="flex flex-col gap-y-1">
                          {/* 2nd */}
                          <div className="w-[40vw] mobile-sm:hidden laptop:block">
                            <div className="section_2 flex flex-row gap-x-1 items-end justify-start">
                              <div className="text-black bg-slate-700 w-[90px] h-[80px] laptop:mt-[18.5vh] overflow-hidden desktop-lg:mt-[15vh] desktop-lg:mt-[16.65vh] desktop-lg-4k:w-[120px]">
                                <img
                                  src={cards.img[3]}
                                  className="!w-inherit h-inherit object-cover"
                                  alt="img"
                                />
                              </div>
                              <div className="text-black bg-slate-700 w-[120px] h-[157px]  overflow-hidden desktop-lg:w-[150px] ">
                                <img
                                  src={cards.img[4]}
                                  className="!w-inherit !h-[100%] !object-cover"
                                  alt="img"
                                />
                              </div>
                              <div className="text-black bg-slate-700 w-[120px] h-[107px]   overflow-hidden  desktop-lg:w-[160px]  ">
                                <img
                                  src={cards.img[5]}
                                  className="!w-inherit !h-inherit object-cover"
                                  alt="img"
                                />
                              </div>
                              <div className="text-black bg-slate-700 w-[110px] h-[91px] overflow-hidden desktop-lg:w-[140px] ">
                                <img
                                  src={cards.img[6]}
                                  className="!w-inherit h-inherit object-cover"
                                  alt="img"
                                />
                              </div>
                            </div>
                          </div>

                          {/* 3rd */}
                          <div className="w-[35vw]  mobile-sm:hidden laptop:block ">
                            <div className="section_3 flex flex-row gap-x-1">
                              <div className="text-black bg-slate-700 w-[160px] h-[93px] overflow-hidden">
                                <img
                                  src={cards.img[7]}
                                  className="!w-inherit"
                                  alt="img"
                                />
                              </div>
                              <div className="text-black bg-slate-700 w-[212px] h-[129px] overflow-hidden">
                                <img
                                  src={cards.img[8]}
                                  className="!w-inherit"
                                  alt="img"
                                />
                              </div>
                              <div className="flexible flex flex-col gap-y-1">
                                <div className="text-black bg-slate-700 w-[146px] h-[52px] overflow-hidden">
                                  <img
                                    src={cards.img[9]}
                                    className="!w-inherit"
                                    alt="img"
                                  />
                                </div>
                                <div className="text-black bg-slate-700 w-[146px] h-[89px] overflow-hidden">
                                  <img
                                    src={cards.img[10]}
                                    className="!w-inherit"
                                    alt="img"
                                  />
                                </div>
                              </div>
                              <div className="text-black bg-slate-700 w-[146px] h-[80px] overflow-hidden">
                                <img
                                  src={cards.img[11]}
                                  className="!w-inherit"
                                  alt="img"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="!cursor-none mobile-sm:px-10 laptop:w-[30vw] text-justify">
                      {cards.para}
                    </div>
                  </div>
                  <SwiperSlide>
                    <div className="flex">
                      <div class="w-[280px] h-fit mobile-sm:hidden laptop:block  desktop-lg-4k:w-[15vw]    border border-gray-200 round shadow dark:bg-gray-800 dark:border-gray-700 m-auto bg-white  ">
                        <div className="c">
                          <img
                            class="p-1 h-[23vh] w-[100%]"
                            src={cards.url}
                            alt="img"
                          />
                        </div>

                        <div class="px-5">
                          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex justify-center text-center">
                            {EventsCard[index === 0 ? 4 : index - 1].title}
                          </h5>
                        </div>
                      </div>
                      <div class="w-[280px]  h-fit desktop-lg-4k:w-[15vw]   shadowca  border border-gray-200 round shadow dark:bg-gray-800 dark:border-gray-700 m-auto bg-white swipe ">
                        <div className="c">
                          <img
                            class="p-1 h-[25vh] w-[100%]"
                            src={cards.url}
                            alt="img"
                          />
                        </div>

                        <div class="px-5">
                          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex justify-center text-center">
                            {cards.title}
                          </h5>
                        </div>
                      </div>
                      <div class="w-[280px] h-fit mobile-sm:hidden laptop:block desktop-lg-4k:w-[15vw]   border border-gray-200 round shadow dark:bg-gray-800 dark:border-gray-700 m-auto bg-white  ">
                        <div className="c">
                          <img
                            class="p-1 h-[23vh] w-[100%]"
                            src={cards.url}
                            alt="img"
                          />
                        </div>

                        <div class="px-5">
                          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex justify-center text-center">
                            {EventsCard[index === 4 ? 0 : index + 1].title}
                          </h5>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/*
       */}

      {/*  */}
    </>
  );
}

export default Event;
