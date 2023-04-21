import React from "react";
import "../Review/Review.css";
import {motion} from 'framer-motion'
import { duration } from "@mui/material";
export default function Review() {
  return (
    <div className="reviewbg w-screen py-20">
      <div className=" text-center flex items-center justify-center">
        <div className="flex items-center flex-col w-[90%] ">
          <div>
            <h2 className="fontbold text-fblue">TESTIMONIALS</h2>
            <h2 className="text-soon ">WHAT OUR CUSTOMERS SAY</h2>
          </div>
          <div>
            <p>
              Lorem ipsum is simply ghtryhtn rtb hdummy text of the printing and
              typesetting industry. Lorem ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printertook a
              galley of type.
            </p>
          </div>
        </div>
      </div>
      <div className=" flex justify-center py-10">
        <div className="w-[90%]  mobile-md:flex-col laptop:flex-row flex items-center justify-center ">
          <div className="w-[30%]">
            <div className="h-[30vh] flex  z-50 justify-center pl-2 ">
              <motion.div
                whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
                exit={{ scale: 0, transition: { duration: 2 } }}
                className="w-[100%] "
              >
                <div className="w-[90%] h-[25vh]  box flex justify-center items-center text-mes   ">
                  <p className="w-[90%] text-justify z-20">
                    printing and typesetting industry. Lorem ipsum some that
                    industr's standard dummy text ever since the and them all
                    that 1500s.
                  </p>
                </div>
                <div className="triangle-down z-10"></div>
              </motion.div>
            </div>
            <div className="">
              <div className="   flex items-center  ">
                <div className="w-[70px] h-[70px] rounded-full bg-white overflow-hidden img-roud roundimg ">
                  <img src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg" />
                </div>
                <div className="pl-5">
                  <p>Raju</p>
                  <p className="pt-1">Subject who they are</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[30%]">
            <div className="h-[30vh] flex  z-50 justify-center pl-2 ">
              <motion.div
                whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
                exit={{ scale: 0, transition: { duration: 2 } }}
                className="w-[100%] "
              >
                <div className="w-[90%] h-[25vh]  box flex justify-center items-center text-mes   ">
                  <p className="w-[90%] text-justify z-20">
                    printing and typesetting industry. Lorem ipsum some that
                    industr's standard dummy text ever since the and them all
                    that 1500s.
                  </p>
                </div>
                <div className="triangle-down z-10"></div>
              </motion.div>
            </div>
            <div className="">
              <div className="   flex items-center  ">
                <div className="w-[70px] h-[70px] rounded-full bg-white overflow-hidden img-roud roundimg ">
                  <img src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg" />
                </div>
                <div className="pl-5">
                  <p>Raju</p>
                  <p className="pt-1">Subject who they are</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[30%]">
            <div className="h-[30vh] flex  z-50 justify-center pl-2 ">
              <motion.div
                whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
                exit={{ scale: 0, transition: { duration: 2 } }}
                className="w-[100%] "
              >
                <div className="w-[90%] h-[25vh]  box flex justify-center items-center text-mes   ">
                  <p className="w-[90%] text-justify z-20">
                    printing and typesetting industry. Lorem ipsum some that
                    industr's standard dummy text ever since the and them all
                    that 1500s.
                  </p>
                </div>
                <div className="triangle-down z-10"></div>
              </motion.div>
            </div>
            <div className="">
              <div className="   flex items-center  ">
                <div className="w-[70px] h-[70px] rounded-full bg-white overflow-hidden img-roud roundimg ">
                  <img src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg" />
                </div>
                <div className="pl-5">
                  <p>Raju</p>
                  <p className="pt-1">Subject who they are</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[30%]">
            <div className="h-[30vh] flex  z-50 justify-center pl-2 ">
              <motion.div
                whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
                exit={{ scale: 0, transition: { duration: 2 } }}
                className="w-[100%] "
              >
                <div className="w-[90%] h-[25vh]  box flex justify-center items-center text-mes   ">
                  <p className="w-[90%] text-justify z-20">
                    printing and typesetting industry. Lorem ipsum some that
                    industr's standard dummy text ever since the and them all
                    that 1500s.
                  </p>
                </div>
                <div className="triangle-down z-10"></div>
              </motion.div>
            </div>
            <div className="">
              <div className="   flex items-center  ">
                <div className="w-[70px] h-[70px] rounded-full bg-white overflow-hidden img-roud roundimg ">
                  <img src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg" />
                </div>
                <div className="pl-5">
                  <p>Raju</p>
                  <p className="pt-1">Subject who they are</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
