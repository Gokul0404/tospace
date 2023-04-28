import React, { useState, useEffect } from "react";
import "../course/Section.css";
import "../landing-section/about/about.css";

import { coursedata } from "../course/SectionData";
import { useNavigate, Link, NavLink } from "react-router-dom";
import Contact from "../Contact/Contact";
export default function Course() {
  const navigate = useNavigate();
 
  const [dragStatus, setdragStatus] = useState(false);
  const [dragData, setDragData] = useState("");
   const [open, setOpen] = useState(false); 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  console.log(dragData.split("."));
  return (
    <div id="course ">
      <div className="bg-white w-screen  pt-[11.5vh] ">
        <div className="w-screen bg-white py-6 course_bg_img mobile-sm:flex mobile-sm:justify-center laptop:flex-none"  draggable="false">
          <div className="laptop:flex justify-start laptop:pl-[10%] gap-x-[3%] ">
            <div className=" laptop:w-[70vw] h-[80vh] outline outline-white rounded-[20px] overflow-hidden ">
              {/* screen */}
              {console.log(dragData)}
              <div
                className=" bg-white  w-[100%] h-[100%] "
                onDragEnter={(e) => setdragStatus(true)}
              >
                {dragStatus ? (
                  <video
                    draggable="false"
                    autoPlay
                    muted
                    loop
                    className=" object-cover"
                  >
                    <source src={dragData} />
                  </video>
                ) : (
                  <img
                    className="w-[100%] h-[100%] border-[5px]  rounded-[20px]"
                    src="./courseimg/intro.gif"
                    draggable="false"
                  />
                )}
              </div>
            </div>

            {/* tool */}
            <div className=" mobile-sm:w-[100%]  relative laptop:w-[10vw] mobile-sm:h-[10vh] laptop:h-[80vh]  flex justify-center items-center">
              <div className="w-[100%] mobile-sm:absolute mobile-sm:top-5  flex justify-center mobile-sm:flex-row laptop:flex-col items-center gap-5 text-center text-white">
                <div
                  className="w-[70px] h-[65px]  bg-gray-600 tools rounded-md"
                  draggable="true"
                  onDragStart={() => {
                    setdragStatus(false);
                    setDragData("./v1.mp4");

                    // "https://media.tenor.com/evhtGNYJy3sAAAAC/bucksin6-austinpowersjohnson.gif"
                  }}
                >
                  first
                </div>
                <div
                  className="w-[70px] h-[65px] bg-gray-600 rounded-md tools"
                  draggable="true"
                  onDragStart={() => {
                    setdragStatus(false);
                    setDragData("./v2.mp4");
                  }}
                >
                  second
                </div>
                <div
                  className="w-[70px] h-[65px] bg-gray-600  rounded-md tools"
                  draggable="true"
                  onDragStart={() => {
                    setdragStatus(false);
                    setDragData("./v3.mp4");
                  }}
                >
                  third
                </div>
                <div
                  className="w-[70px] h-[65px] bg-gray-600 rounded-md tools"
                  draggable="true"
                  onDragStart={() => {
                    setdragStatus(false);
                    setDragData("./v4.mp4");
                  }}
                >
                  fourth
                </div>
                <div
                  className="w-[70px] h-[65px]  bg-gray-600 rounded-md tools"
                  draggable="true"
                  onDragStart={() => {
                    setdragStatus(false);
                    setDragData("./v5.mp4");
                  }}
                >
                  fifth
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center text-white py-[10vh]">
            <h2 className="text-fblue   fontbold">COURSE</h2>
            <p className="text-center w-[80vw] parafont">
              You can use any value defined in your opacity scale, or use
              arbitrary values if you need to deviate from your design tokens
              arbitrary values if you need to deviate from your design tokens.
            </p>
          </div>

          <div className={`flex flex-row flex-wrap w-screen justify-center  `}>
            {coursedata.map((res) => {
              return (
                <>
                  <div className="laptop:basis-1/4 py-10 px-10 relative">
                    <div
                      className={`bg-white  coursebr border-4 border-black    w-[350px]  h-[550px]  rounded-[8px] flex items-center flex-col overflow-hidden`}
                    >
                      {/* <div className="bg-gray-400 w-[90%] mobile-sm:h-[30vh] mobile-md:w-[65vw] tablet:w-[35vw] laptop:w-[22vw] laptop:h-[22vh] mt-2 rounded-[8px] overflow-hidden border-[2px] !border-black"> */}
                      <div className="bg-gray-400 w-[100%] mobile-sm:h-[30vh]   laptop:h-[50vh]  overflow-hidden border-[2px] !border-x-0 border-y-0 ">
                        <img
                          src={`${res.img}`}
                          alt="no"
                          className="bg-cover h-full w-full "
                        />
                      </div>
                      <div className="text-mes self-start px-5 pt-3 gap-y-2 flex flex-col ">
                        <h2 className="font-bold text-paragraph ">
                          {res.head}
                        </h2>
                        <div className="flex  justify-center text-center pt-10 text-[#277de0] text-content gap-x-5">
                          <div className="">
                            <h2 className="font-bold count  count ">
                              {res.v1}
                            </h2>
                            <p className="text-black">{res.c1}</p>
                          </div>
                          <div>
                            <h2 className="font-bold  count ">{res.v2}</h2>
                            <p className="text-black">{res.c2}</p>
                          </div>
                          <div>
                            <h2 className="font-bold  count">{res.v3}</h2>
                            <p className="text-black">{res.c3}</p>
                          </div>
                        </div>

                        <div className="py-3">
                          <p className="pb-5">{res.pera}</p>
                        </div>
                      </div>
                      <di className="flex  justify-center items-center gap-x-5">
                        {/* <div className="py-5">
                          <button className="course_btn1 px-5 py-2">
                            Get a Quote
                          </button>
                        </div> */}
                        <div className="py-5  absolute bottom-0 ">
                          {/* <Link
                            to="/product"
                            state={{
                              id: res.id, //data share in another component
                            }}
                          > */}
                          <button
                            className="course_btn2 px-5 py-2 "
                            onClick={() => setOpen(true)}
                          >
                            Register
                          </button>{" "}
                          {/* </Link> */}
                          {open && <Contact open={open} setOpen={setOpen} />}
                        </div>
                      </di>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
