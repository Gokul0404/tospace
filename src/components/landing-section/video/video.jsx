import { motion } from "framer-motion";
import Vi from "./vii.mp4";
import "../about/about.css";
import {vediodata} from '../video/vediodata'
import { Link } from "react-router-dom";
function Video() {
  return (
    <>
      <div className="video_part_section videobg  parafont ">
        <div className="  video-side  ">
          <div className="vide0_session mobile-sm:flex mobile-sm:flex-col mobile-sm:justify-center mobile-sm:items-center laptop:flex-none laptop:grid laptop:grid-cols-2 gap-4 w-[100%] py-10">
            <div className="content-side mobile-sm:flex mobile-sm:flex-col mobile-sm:justify-center mobile-sm:items-center laptop:items-start laptop:flex laptop:justify-start items-start laptop:mx-[20vh] videobg z-10 laptop:p-5 w-[85%] text-justify">
              <h1 className="fontbold text-fblue text-desk1 mobile-sm:text    ">
                HOW OUR COURSES
              </h1>
              <h3 className="mobile-sm:text-center laptop:text-justify">
                Video Upskill your team with Udemy Business
              </h3>
              <div>
                <ul className=" mobile-sm:flex mobile-sm:flex-col mobile-sm:justify-center   list-disc mt-[10%] laptop:text-justify mobile-sm:p-3 w-[100%]">
                  <li>
                    Unlimited access to 19,000+ top Udemy courses, anytime.
                  </li>
                  <li className="pt-4">
                    International course collection in 14 languages
                  </li>
                  <li className="pt-4">
                    Top certifications in tech and business
                  </li>
                  <li className="pt-4">
                    Unlimited access to 19,000+ top Udemy courses, anytime.
                  </li>
                  <li className="pt-4">
                    International course collection in 14 languages
                  </li>
                  <li className="pt-4">
                    Top certifications in tech and business
                  </li>
                </ul>
              </div>
              <div className="explore_btn font-Azonix laptop-lg:mt-[4vh] mobile-sm:text-center laptop:text-justify laptop:mt-5">
                {/* <motion.button
                  className="bg-[#333333] parafont laptop:w-[30%] h-[4vh] mobile-sm:w-[15vh] 4k:text-4k desktop:text-desk mobile-sm:text-mob  rounded border-none   "
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ ease: "easeOut", duration: 3 }}
                >
                  View More
                </motion.button> */}
                <Link to="/course">
                  <button className="ab_btn">View More</button>
                </Link>
              </div>
            </div>
            <div className="pt-[10%] mobile-sm:px-10">
              <motion.video
                autoPlay
                muted
                loop
                className="laptop:w-[80%]  mobile-sm:w-[200vw] "
                initial={{ opacity: 0 }}
                // animate={{ }}
                whileInView={{ opacity: 0.7 }}
                transition={{ ease: "easeOut", duration: 4 }}
              >
                <motion.source src={Vi} type="video/mp4" />
              </motion.video>
            </div>
          </div>
        </div>

        <div className="card_part   mobile-sm:pt-[70vh]   mobile-sm:h-[100%] mobile-sm:pb-[2vh] videobg laptop:py-[10vh]">
          <div className="grid laptop:grid-cols-3 gap-10  mt-10 mobile-sm:grid-rows-1">
            {vediodata.map((res) => {
              return (
                <>
                  <div className="laptop:basis-1/4 py-5 px-10">
                    <div
                      className={`bg-white border border-[#030334]  mobile-sm:w-[80vw]  mobile-md:w-[70vw]  tablet:w-[40vw] laptop:w-[23vw]  rounded-[8px] flex items-center flex-col`}
                    >
                      <div className="bg-gray-400 w-[90%] mobile-sm:h-[30vh] mobile-md:w-[65vw] tablet:w-[35vw] laptop:w-[22vw] laptop:h-[22vh] mt-2 rounded-[8px] overflow-hidden border-[2px] !border-black">
                        <img
                          src={`${res.img}`}
                          alt="no"
                          className="bg-cover h-full w-full "
                        />
                      </div>
                      <div className="text-mes self-start pl-5 pt-3 gap-y-2 flex flex-col ">
                        <h2 className="font-bold text-paragraph ">
                          {res.head}
                        </h2>
                        <div className="flex  justify-center text-center pt-10 text-[#030334] text-content gap-x-5">
                          <div className="">
                            <h2 className="font-bold count  count ">
                              {res.v1}
                            </h2>
                            <p>{res.c1}</p>
                          </div>
                          <div>
                            <h2 className="font-bold  count ">{res.v2}</h2>
                            <p>{res.c2}</p>
                          </div>
                          <div>
                            <h2 className="font-bold  count">{res.v3}</h2>
                            <p>{res.c3}</p>
                          </div>
                        </div>

                        <div className="py-3">
                          <p className="pr-5">{res.pera}</p>
                        </div>
                      </div>
                      <di className="flex gap-x-5">
                        <div className="py-5">
                          <button className="course_btn1 px-5 py-2">
                            Get a Quote
                          </button>
                        </div>
                        <div className="py-5">
                          <button className="course_btn2 px-5 py-2">
                            Enroll Now
                          </button>
                        </div>
                      </di>
                    </div>
                  </div>
                </>
              );
            })}
          </div>

          <div className="explore_btn font-Azonix laptop-lg:mt-[5vh] text-center laptop:mt-4 mt-2">
            {/* <motion.button
              className="bg-[#54406F] parafont laptop:w-[12%] h-[4vh] mobile-sm:w-[15vh] 4k:text-4k desktop:text-desk mobile-sm:text-mob  rounded border-none   "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeOut", duration: 3 }}
            >
              View More
            </motion.button> */}

            <Link to="/course">
              <button className="ab_btn">View More</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Video;
