import React from "react";
import "../Review/Review.css";
import {reviewdata} from '../Review/Reviewdata'
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

        
          <div className="parafont">
            <p>
              Lorem ipsum is simply ghtryhtn rtb hdummy text of the printing and
              typesetting industry. Lorem ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printertook a
              galley of type.
            </p>
          </div>
        </div>
      </div>

      <div className="mobile-sm:flex mobile-sm:flex-col mobile-sm:justify-center laptop:flex  laptop:flex-row justify-center px-5 py-10">
          {reviewdata.map((data) => {
            return (
              <div className="w-[80%]   mobile-md:flex-col laptop:flex-row flex items-center justify-center ">
                <div className="w-[90%]">
                  <div className="py-5 flex  z-50 justify-center pl-2 ">
                    <motion.div
                      whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
                      exit={{ scale: 0, transition: { duration: 2 } }}
                      className="w-[100%] "
                    >
                      <div className="w-[90%] py-5  box flex justify-center items-center text-mes   ">
                        <p className="px-5 text-justify z-20 ">{data.mes}</p>
                      </div>
                      <div className="triangle-down z-10"></div>
                    </motion.div>
                  </div>
                  <div className="">
                    <div className="flex items-center  ">
                      <div className="w-[70px] h-[70px] rounded-full bg-white overflow-hidden img-roud roundimg ">
                        <img src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg" />
                      </div>
                      <div className="pl-5 parafont font-semibold">
                        <p>{data.name}</p>
                        <p className="pt-1">{data.sub}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
       
      </div>
    </div>
  );
}
