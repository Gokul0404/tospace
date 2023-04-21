import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { eventimg } from "../event_section/event_img";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-creative";
import "swiper/css/effect-fade";
import { Pagination, FreeMode, Autoplay, EffectFade, Navigation } from "swiper";
import EventsCard from "./event_data";
import { useSwiperSlide } from "swiper/react";
import "./event.css";

function Event() {
  const swiperSlide = useSwiperSlide();

  const images = EventsCard.map((data) => {
    // console.log("sdjifojd", data);
  });
  return (
    <>
      <div className="event_section  eventbg parafont pb-5 mobile-sm:hidden tablet:block">
        <div className="event_heading text-center pt-10 ">
          <h1 className="fontbold text-fblue text-desk1">Events</h1>
          <h5 className="mobile-sm:text-justify mobile-sm:p-1 tablet:text-center ">
            Instructors from around the world teach millions of students on
            Udemy. <br />
            We provide the tools and skills to teach what you love.
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
            delay: 5500,
            // disableOnInteraction: false,
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
                    <div className="event_main flex gap-x-1 !cursor-none">
                      <div className="laptop-lg:w-[20vw]    laptop:w-[20vw] ">
                        <div className="section-1 flex flex-col items-end mt-[15vh] gap-y-1 4k:mt-[19vh] desktop-lg-4k:mt-[16.6vh]">
                          <div className="text-black bg-slate-700 w-[140px] h-[100px] overflow-hidden">
                            <img
                              src={cards.img[0]}
                              className="!w-inherit h-inherit object-cover"
                            />
                          </div>
                          <div className="text-black flex flex-row gap-x-1">
                            <div className="small_image w-[100px] h-[70px] bg-slate-700 overflow-hidden">
                              <img
                                src={cards.img[1]}
                                className="!w-inherit h-inherit object-cover"
                              />
                            </div>

                            <div className="small_image w-[100px] h-[120px] bg-slate-700 overflow-hidden">
                              <img
                                src={cards.img[2]}
                                className="!w-[100%] h-[100%] object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-y-1">
                        <div className="w-[40vw] ">
                          <div className="section_2 flex flex-row gap-x-1 items-end justify-start">
                            <div className="text-black bg-slate-700 w-[90px] h-[80px] laptop:mt-[18.5vh] overflow-hidden desktop-lg:mt-[15vh] desktop-lg-4k:mt-[16.65vh] ">
                              <img
                                src={cards.img[3]}
                                className="!w-inherit h-inherit object-cover"
                              />
                            </div>
                            <div className="text-black bg-slate-700 w-[120px] h-[157px]  overflow-hidden  ">
                              <img
                                src={cards.img[4]}
                                className="!w-inherit !h-[100%] !object-cover"
                              />
                            </div>
                            <div className="text-black bg-slate-700 w-[120px] h-[107px]   overflow-hidden    ">
                              <img
                                src={cards.img[5]}
                                className="!w-inherit !h-inherit object-cover"
                              />
                            </div>
                            <div className="text-black bg-slate-700 w-[110px] h-[91px] overflow-hidden  ">
                              <img
                                src={cards.img[6]}
                                className="!w-inherit h-inherit object-cover"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="w-[35vw]   ">
                          <div className="section_3 flex flex-row gap-x-1">
                            <div className="text-black bg-slate-700 w-[160px] h-[93px] overflow-hidden">
                              <img src={cards.img[7]} className="!w-inherit" />
                            </div>
                            <div className="text-black bg-slate-700 w-[212px] h-[129px] overflow-hidden">
                              <img src={cards.img[8]} className="!w-inherit" />
                            </div>
                            <div className="flexible flex flex-col gap-y-1">
                              <div className="text-black bg-slate-700 w-[146px] h-[52px] overflow-hidden">
                                <img
                                  src={cards.img[9]}
                                  className="!w-inherit"
                                />
                              </div>
                              <div className="text-black bg-slate-700 w-[146px] h-[89px] overflow-hidden">
                                <img
                                  src={cards.img[10]}
                                  className="!w-inherit"
                                />
                              </div>
                            </div>
                            <div className="text-black bg-slate-700 w-[146px] h-[80px] overflow-hidden">
                              <img src={cards.img[11]} className="!w-inherit" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="!cursor-none w-[30vw] text-justify">
                    {cards.para}
                  </div>
                </div>
                <SwiperSlide>
                  <div className="flex">
                    <div class="w-[20vw] h-[28vh]   border border-gray-200 round shadow dark:bg-gray-800 dark:border-gray-700 m-auto bg-white  ">
                      <div className="c">
                        <a href="#">
                          <img
                            class="p-1 h-[23vh] w-[100%]"
                            src={cards.url}
                            alt=""
                          />
                        </a>
                      </div>

                      <div class="px-5">
                        <a href="#">
                          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {EventsCard[index === 0 ? 4 : index - 1].title}
                          </h5>
                        </a>
                      </div>
                    </div>
                    <div class="w-[20vw]  h-[30vh]  border border-gray-200 round shadow dark:bg-gray-800 dark:border-gray-700 m-auto bg-white swipe ">
                      <div className="c">
                        <a href="#">
                          <img
                            class="p-1 h-[25vh] w-[100%]"
                            src={cards.url}
                            alt=""
                          />
                        </a>
                      </div>

                      <div class="px-5">
                        <a href="#">
                          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {cards.title}
                          </h5>
                        </a>
                      </div>
                    </div>
                    <div class="w-[20vw] h-[28vh]   border border-gray-200 round shadow dark:bg-gray-800 dark:border-gray-700 m-auto bg-white  ">
                      <div className="c">
                        <a href="#">
                          <img
                            class="p-1 h-[23vh] w-[100%]"
                            src={cards.url}
                            alt=""
                          />
                        </a>
                      </div>

                      <div class="px-5">
                        <a href="#">
                          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {EventsCard[index === 4 ? 0 : index + 1].title}
                          </h5>
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/*
       */}

      {/*  */}
    </>
  );
}

export default Event;
