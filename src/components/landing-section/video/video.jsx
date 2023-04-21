import { motion } from "framer-motion";
import Vi from "./vii.mp4";
import "../about/about.css";
import { Link } from "react-router-dom";
function Video() {
  return (
    <>
      <div className="video_part_section videobg  parafont ">
        <div className="video-side  ">
          <div className="vide0_session grid grid-cols-2 gap-4 w-[100%] py-10">
            <div className="content-side  laptop:mx-[20vh] videobg z-10 laptop:p-5 w-[85%] text-justify">
              <h1 className="fontbold text-fblue text-desk1 mobile-sm:text    ">
                HOW OUR COURSES
              </h1>
              <h3 className="mobile-sm:text-center laptop:text-justify">
                Video Upskill your team with Udemy Business
              </h3>
              <ul className="list-disc mt-[10%] laptop:text-justify mobile-sm:p-3 w-[100%]">
                <li>Unlimited access to 19,000+ top Udemy courses, anytime.</li>
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
            <div className="pt-[10%]">
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
            <div>
              <div class="w-[60%]  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-auto">
                <a href="#">
                  <img
                    class="rounded-lg p-4"
                    src="https://www.21kschool.com/blog/wp-content/uploads/2022/09/Top-5-Benefits-of-Co-Curricular-Activities-for-Students.png"
                    alt=""
                  />
                </a>
                <div class="p-5">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:parafont">
                      Noteworthy technology acquisitions 2021
                    </h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div class="w-[60%] m-auto border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img
                    class="rounded-lg p-4"
                    src="https://www.21kschool.com/blog/wp-content/uploads/2022/09/Top-5-Benefits-of-Co-Curricular-Activities-for-Students.png"
                    alt=""
                  />
                </a>
                <div class="p-5">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:parafont">
                      Noteworthy technology acquisitions 2021
                    </h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div class="w-[60%] m-auto border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img
                    class="rounded-lg p-4"
                    src="https://www.21kschool.com/blog/wp-content/uploads/2022/09/Top-5-Benefits-of-Co-Curricular-Activities-for-Students.png"
                    alt=""
                  />
                </a>
                <div class="p-5">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:parafont">
                      Noteworthy technology acquisitions 2021
                    </h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                </div>
              </div>
            </div>
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
