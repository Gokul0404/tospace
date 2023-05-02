import React, { useEffect } from "react";
import '../career/Career.css'
import Arrow from ".././images/Arrow.png";
import Arrowr from ".././images/Arrowr.png";
import Arrow_down from ".././images/arrow_down.png";
import Curve from ".././images/Vector.png";
import Curve_down from ".././images/Vectord.png";
import Aos from "aos";
import "aos/dist/aos.css";

function Career() {

    useEffect(() => {
      Aos.init();
    }, []);
  return (
    <>
      <div
        className="career  careerbg  laptop:block mobile-sm:hidden"
        id="career"
      >
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="3000"
        >
          <div className="career_heading ">
            <h2 className="!text-soon fontbold text-fblue pb-[10vh] text-center">
              Launch Your Career
            </h2>
          </div>

          <div className="w-screen flex h-[80vh] px-5 parafont items-center flex-col gap-y-[10vh]">
            <div className="flex items-center  ">
              <div className="w-[250px] h-[100px] ">
                <div className="flex items-center flex-col">
                  <div className="parafont h-[30px] w-[30px] rounded-full bg-gradient-to-r from-fblue to-[#27252838] p-5"></div>
                  <div className="parafont ">
                    <h1 className="text-center p-2 text-[12px]">
                      {" "}
                      Attend all the classes and workshops
                    </h1>
                    <h1 className="parafont text-justify h-[200px] overflow-y-scroll text-[15px]">
                      ToSpace's programme is designed to give students hands-on
                      experience in building a CubeSat.
                    </h1>
                  </div>
                </div>
              </div>
              <img
                src={Arrow}
                alt="img"
                className="self-start w-[150px] pt-4"
              />
              <div className="w-[250px] h-[100px] ">
                <div className="flex items-center flex-col">
                  <div className="parafont h-[30px] w-[30px] rounded-full bg-gradient-to-r from-fblue to-[#27252838] p-5"></div>
                  <div className="parafont ">
                    <h1 className="text-center p-2 text-[12px]">
                      {" "}
                      Attend all the classes and workshops
                    </h1>
                    <h1 className="parafont text-justify h-[200px] overflow-y-scroll text-[15px]">
                      ToSpace's programme is designed to give students hands-on
                      experience in building a CubeSat.
                    </h1>
                  </div>
                </div>
              </div>
              <img
                src={Arrow}
                alt="img"
                className="self-start w-[150px] pt-4"
              />
              <div className="w-[250px] h-[100px] ">
                <div className="flex items-center flex-col">
                  <div className="parafont h-[30px] w-[30px] rounded-full bg-gradient-to-r from-fblue to-[#27252838] p-5"></div>
                  <div className="parafont ">
                    <h1 className="text-center p-2 text-[12px]">
                      {" "}
                      Attend all the classes and workshops
                    </h1>
                    <h1 className="parafont text-justify h-[200px] overflow-y-scroll text-[15px]">
                      ToSpace's programme is designed to give students hands-on
                      experience in building a CubeSat.
                    </h1>
                  </div>
                </div>
              </div>
              <img
                src={Arrow}
                alt="img"
                className="self-start w-[150px] pt-4"
              />
              <div className="w-[250px] h-[100px] ">
                <div className="flex items-center flex-col">
                  <div className="parafont h-[30px] w-[30px] rounded-full bg-gradient-to-r from-fblue to-[#27252838] p-5"></div>
                  <div className="parafont ">
                    <h1 className="text-center p-2 text-[12px]">
                      {" "}
                      Attend all the classes and workshops
                    </h1>
                    <h1 className="parafont text-justify h-[200px] overflow-y-scroll text-[15px]">
                      ToSpace's programme is designed to give students hands-on
                      experience in building a CubeSat.
                    </h1>
                  </div>
                </div>
              </div>

              <div className="pb-4">
                <img
                  src={Curve}
                  alt="img"
                  className="self-end float-right w-[50px] "
                />
              </div>
            </div>
            {/* mid */}

            {/* <div className=" self-end 4k:mx-[20vw] laptop-lg:mx-[0.2vw] desktop-lg-4k:mx-[10vw]">
            <div className="">
              <img src={Arrow_down} alt="img" className=" w-[10px] " />
            </div>
          </div> */}

            {/* end */}
            <div className="flex items-center pt-20">
              <div className="w-[250px] h-[100px] ">
                <div className="flex items-center flex-col">
                  <div className="parafont h-[30px] w-[30px] rounded-full bg-gradient-to-r from-fblue to-[#27252838] p-5"></div>
                  <div className="parafont ">
                    <h1 className="text-center p-2 text-[12px]">
                      {" "}
                      Attend all the classes and workshops
                    </h1>
                    <h1 className="parafont text-justify h-[200px] overflow-y-scroll text-[15px]">
                      ToSpace's programme is designed to give students hands-on
                      experience in building a CubeSat.
                    </h1>
                  </div>
                </div>
              </div>
              <img
                src={Arrowr}
                alt="img"
                className="self-start w-[150px]  pt-[4vh]"
              />
              <div className="w-[250px] h-[100px] ">
                <div className="flex items-center flex-col">
                  <div className="parafont h-[30px] w-[30px] rounded-full bg-gradient-to-r from-fblue to-[#27252838] p-5"></div>
                  <div className="parafont ">
                    <h1 className="text-center p-2 text-[12px]">
                      {" "}
                      Attend all the classes and workshops
                    </h1>
                    <h1 className="parafont text-justify h-[200px] overflow-y-scroll text-[15px]">
                      ToSpace's programme is designed to give students hands-on
                      experience in building a CubeSat.
                    </h1>
                  </div>
                </div>
              </div>
              <img
                src={Arrowr}
                alt="img"
                className="self-start w-[150px] pt-[4vh]"
              />
              <div className="w-[250px] h-[100px] ">
                <div className="flex items-center flex-col">
                  <div className="parafont h-[30px] w-[30px] rounded-full bg-gradient-to-r from-fblue to-[#27252838] p-5"></div>
                  <div className="parafont ">
                    <h1 className="text-center p-2 text-[12px]">
                      {" "}
                      Attend all the classes and workshops
                    </h1>
                    <h1 className="parafont text-justify h-[200px] overflow-y-scroll text-[15px]">
                      ToSpace's programme is designed to give students hands-on
                      experience in building a CubeSat.
                    </h1>
                  </div>
                </div>
              </div>
              <img
                src={Arrowr}
                alt="img"
                className="self-start w-[150px] pt-[4vh] "
              />
              <div className="w-[250px] h-[100px] ">
                <div className="flex items-center flex-col">
                  <div className="parafont h-[30px] w-[30px] rounded-full bg-gradient-to-r from-fblue to-[#27252838] p-5"></div>
                  <div className="parafont ">
                    <h1 className="text-center p-2 text-[12px]">
                      {" "}
                      Attend all the classes and workshops
                    </h1>
                    <h1 className="parafont text-justify h-[200px] overflow-y-scroll text-[15px]">
                      ToSpace's programme is designed to give students hands-on
                      experience in building a CubeSat.
                    </h1>
                  </div>
                </div>
              </div>

              <div className="4k:pb-[10.5vh] laptop-lg:pb-[12vh]">
                <img
                  src={Curve_down}
                  alt="img"
                  className=" self-end float-right w-[50px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile view */}
      <div className="mobile_career careerbg  pb-[5vh] laptop:hidden">
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="3000"
        >
          <div className="career_heading ">
            <h2 className="mobile-sm:text-heading mobile-sm:font-bold   text-fblue text-center pt-3">
              lanch your Career
            </h2>
          </div>
          <div className="all_steps flex flex-col p-2 gap-y-[1vh]">
            <div className="step_1 parafont h-[400px]">
              <div className="flex items-center mobile-sm:mx-[20px] mobile-md:mx-[10px] tablet:mx-[28px]">
                <div className="parafont career_black_ball  h-[30px] w-[30px] rounded-full bg-gradient-to-r from-fblue to-[#27252838] "></div>
                <div className="div flex flex-col m-auto">
                  <h2 className="text-center mt-10  ">
                    Attend all the classes <br />
                    and workshops
                  </h2>
                  <h1 className="text-justify  overflow-y-auto h-[300px]  mobile-sm:w-[220px] mobile-md:w-[255px] mobile-lg:w-[300px] tablet:w-[500px] text-[15px]  p-5 ">
                    ToSpace's programme is designed to give students hands-on
                    experience in building a CubeSat. To get the most out of
                    done.
                  </h1>
                </div>
              </div>
            </div>
            <div className="arrow_down h-[0vh]">
              <img
                src={Arrow_down}
                alt="img"
                className=" w-[15px] img_arrow_down absolute mx-[5vw]  mt-[-25vh] "
              />
            </div>
            <div className="step_1 parafont">
              <div className="flex items-center mobile-sm:mx-[20px] mobile-md:mx-[10px] tablet:mx-[28px]">
                <div className="parafont career_black_ball h-[30px] w-[30px] rounded-full bg-gradient-to-r from-fblue to-[#27252838] "></div>
                <div className="div flex flex-col m-auto">
                  <h2 className="text-center mt-10  ">
                    Attend all the classes <br />
                    and workshops
                  </h2>
                  <h1 className="text-justify  overflow-y-auto h-[300px]  mobile-sm:w-[220px] mobile-md:w-[270px] mobile-lg:w-[300px] tablet:w-[500px] text-[15px]  p-5 ">
                    ToSpace's programme is designed to give students hands-on
                    experience in building a CubeSat. To get the most out of
                    done.
                  </h1>
                </div>
              </div>
            </div>
            <div className="arrow_down h-[0vh]">
              <img
                src={Arrow_down}
                alt="img"
                className=" w-[15px] img_arrow_down  absolute mx-[5vw]  mt-[-25vh] "
              />
            </div>
            <div className="step_1 parafont h-[400px]">
              <div className="flex items-center mobile-sm:mx-[20px] mobile-md:mx-[10px] tablet:mx-[28px]">
                <div className="parafont career_black_ball h-[30px] w-[30px] rounded-full bg-gradient-to-r from-fblue to-[#27252838] "></div>
                <div className="div flex flex-col m-auto">
                  <h2 className="text-center mt-10  ">
                    Attend all the classes <br />
                    and workshops
                  </h2>
                  <h1 className="text-justify  overflow-y-auto h-[300px]  mobile-sm:w-[220px] mobile-md:w-[270px] mobile-lg:w-[300px] tablet:w-[500px] text-[15px]  p-5 ">
                    ToSpace's programme is designed to give students hands-on
                    experience in building a CubeSat. To get the most out of
                    done.
                  </h1>
                </div>
              </div>
            </div>
            <div className="arrow_down h-[0vh]">
              <img
                src={Arrow_down}
                alt="img"
                className=" w-[15px] img_arrow_down  absolute mx-[5vw]  mt-[-25vh] "
              />
            </div>
            <div className="step_1 parafont h-[400px]">
              <div className="flex items-center mobile-sm:mx-[20px] mobile-md:mx-[10px] tablet:mx-[28px]">
                <div className="parafont career_black_ball h-[30px] w-[30px] rounded-full bg-gradient-to-r from-fblue to-[#27252838] "></div>
                <div className="div flex flex-col m-auto">
                  <h2 className="text-center mt-10  ">
                    Attend all the classes <br />
                    and workshops
                  </h2>
                  <h1 className="text-justify  overflow-y-auto h-[300px]  mobile-sm:w-[220px] mobile-md:w-[270px] mobile-lg:w-[300px] tablet:w-[500px] text-[15px]  p-5 ">
                    ToSpace's programme is designed to give students hands-on
                    experience in building a CubeSat. To get the most out of
                    done.
                  </h1>
                </div>
              </div>
            </div>
            <div className="arrow_down h-[0vh]">
              <img
                src={Arrow_down}
                alt="img"
                className=" w-[15px]  img_arrow_down absolute mx-[5vw]  mt-[-25vh] "
              />
            </div>
            <div className="step_1 parafont h-[400px]">
              <div className="flex items-center mobile-sm:mx-[20px] mobile-md:mx-[10px] tablet:mx-[28px]">
                <div className="parafont  career_black_ball h-[30px] w-[30px] rounded-full bg-gradient-to-r from-fblue to-[#27252838] "></div>
                <div className="div flex flex-col m-auto">
                  <h2 className="text-center mt-10  ">
                    Attend all the classes <br />
                    and workshops
                  </h2>
                  <h1 className="text-justify  overflow-y-auto h-[300px]  mobile-sm:w-[220px] mobile-md:w-[270px] mobile-lg:w-[300px] tablet:w-[500px] text-[15px]  p-5 ">
                    ToSpace's programme is designed to give students hands-on
                    experience in building a CubeSat. To get the most out of
                    done.
                  </h1>
                </div>
              </div>
            </div>
            <div className="arrow_down h-[0vh]">
              <img
                src={Arrow_down}
                alt="img"
                className=" w-[15px]  img_arrow_down absolute mx-[5vw]  mt-[-25vh] "
              />
            </div>
            <div className="step_1 parafont h-[400px]">
              <div className="flex items-center mobile-sm:mx-[20px] mobile-md:mx-[10px] tablet:mx-[28px]">
                <div className="parafont career_black_ball h-[30px] w-[30px] rounded-full bg-gradient-to-r from-fblue to-[#27252838] "></div>
                <div className="div flex flex-col m-auto">
                  <h2 className="text-center mt-10  ">
                    Attend all the classes <br />
                    and workshops
                  </h2>
                  <h1 className="text-justify  overflow-y-auto h-[300px]  mobile-sm:w-[220px] mobile-md:w-[270px] mobile-lg:w-[300px] tablet:w-[500px] text-[15px]  p-5 ">
                    ToSpace's programme is designed to give students hands-on
                    experience in building a CubeSat. To get the most out of
                    done.
                  </h1>
                </div>
              </div>
            </div>
            <div className="arrow_down h-[0vh]">
              <img
                src={Arrow_down}
                alt="img"
                className=" w-[15px]  img_arrow_down absolute mx-[5vw]  mt-[-25vh] "
              />
            </div>
            <div className="step_1 parafont h-[400px]">
              <div className="flex items-center mobile-sm:mx-[20px] mobile-md:mx-[10px] tablet:mx-[28px]">
                <div className="parafont career_black_ball h-[30px] w-[30px] rounded-full bg-gradient-to-r from-fblue to-[#27252838] "></div>
                <div className="div flex flex-col m-auto">
                  <h2 className="text-center mt-10  ">
                    Attend all the classes <br />
                    and workshops
                  </h2>
                  <h1 className="text-justify  overflow-y-auto h-[300px]  mobile-sm:w-[220px] mobile-md:w-[270px] mobile-lg:w-[300px] tablet:w-[500px] text-[15px]  p-5 ">
                    ToSpace's programme is designed to give students hands-on
                    experience in building a CubeSat. To get the most out of
                    done.
                  </h1>
                </div>
              </div>
            </div>
            <div className="arrow_down h-[0vh]">
              <img
                src={Arrow_down}
                alt="img"
                className=" w-[15px] img_arrow_down absolute mx-[5vw]  mt-[-25vh] "
              />
            </div>
            <div className="step_1 parafont h-[400px]">
              <div className="flex items-center mobile-sm:mx-[20px] mobile-md:mx-[10px] tablet:mx-[28px]">
                <div className="parafont career_black_ball h-[30px] w-[30px] rounded-full bg-gradient-to-r from-fblue to-[#27252838] "></div>
                <div className="div flex flex-col m-auto">
                  <h2 className="text-center mt-10  ">
                    Attend all the classes <br />
                    and workshops
                  </h2>
                  <h1 className="text-justify  overflow-y-auto h-[300px]  mobile-sm:w-[220px] mobile-md:w-[270px] mobile-lg:w-[300px] tablet:w-[500px] text-[15px]  p-5 ">
                    ToSpace's programme is designed to give students hands-on
                    experience in building a CubeSat. To get the most out of
                    done.
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Career;
