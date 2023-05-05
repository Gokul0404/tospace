import React, { useEffect, useState } from "react";
import "./Planets.css";
import PlanetData from "./planetdata";
import Round from "../landing-section/scrollball/scrollbal";
import { PlayCircleOutlined } from "@ant-design/icons";

import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
export default function Planets() {
  useEffect(() => {
    Aos.init(function () {
      var maxWidth = 800;
      return window.innerWidth < maxWidth;
    });
    window.scrollTo(0, 0);
  }, []);

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(false);
  return (
    <div className=" ">
      <div className="pt-[110px] flex flex-col items-center">
        <div className="w-[85%]">
          <div className="flex items-center justify-center flex-col">
            <h2 className=" mobile-sm:text-heading mobile-sm:font-bold  mobile-sm:text-center  laptop:text-soon  pb-[5vh] text-fblue laptop:text-justify ">
              Planets
            </h2>
            <p className="mobile-sm:text-justify laptop:text-center  parafont ">
              Our solar system is made up of a star—the Sun—eight planets, 146
              moons, a bunch of comets, asteroids and space rocks, ice, and
              several dwarf planets, such as Pluto. The eight planets are
              Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune.
              Mercury is closest to the Sun. Neptune is the farthest.
            </p>
          </div>
        </div>

        {PlanetData.map((res) => {
          return (
            <div className="w-[85%] py-20 flex flex-col gap-40">
              <div className=" mobile-sm:flex mobile-sm:flex-col laptop:flex-none laptop:grid laptop:grid-cols-2  ">
                <div className="flex flex-col items-start justify-center gap-4">
                  <h2 className="planet  text-fblue ">{res.title}</h2>
                  <p className="parafont text-justify">{res.mes}</p>
                  <button className="ab_btn">view more</button>
                </div>
                <div className="flex mobile-sm:justify-center laptop:justify-end items-center mobile-sm:mt-10 laptop:mt-0">
                  <img
                    src={res.img1}
                    width="80%"
                    alt="img"
                    draggable="false"
                    className="planimg  4k-first:w-[60%]"
                  />
                </div>
              </div>
              <div className="mobile-sm:flex mobile-sm:flex-col laptop:flex-none laptop:grid laptop:grid-cols-2  ">
                <div className="flex justify-start items-center mobile-sm:hidden laptop:block mobile-sm:mt-10 laptop:mt-0">
                  <img
                    src={res.img2}
                    width="70%"
                    alt="img"
                    draggable="false"
                    className="planimg  4k-first:w-[60%]"
                  />
                </div>
                <div className="flex flex-col items-start justify-center gap-4">
                  <h2 className="planet  text-fblue ">{res.title2}</h2>
                  <p className="parafont text-justify">{res.mes}</p>
                  <button className="ab_btn">view more</button>
                </div>
                <div className="flex justify-center items-center mobile-sm:visible laptop:hidden mobile-sm:mt-10 laptop:mt-0">
                  <img
                    src={res.img2}
                    width="70%"
                    alt="img"
                    draggable="false"
                    className="planimg  4k-first:w-[60%]"
                  />
                </div>
              </div>

              <div className=" mobile-sm:flex mobile-sm:flex-col laptop:flex-none laptop:grid laptop:grid-cols-2  ">
                <div className="flex flex-col items-start justify-center gap-4">
                  <h2 className="planet  text-fblue ">{res.title3}</h2>
                  <p className="parafont text-justify">{res.mes}</p>
                  <button className="ab_btn">view more</button>
                </div>
                <div className="flex mobile-sm:justify-center laptop:justify-end items-center mobile-sm:mt-10 laptop:mt-0">
                  <img
                    src={res.img3}
                    width="75%"
                    alt="img"
                    draggable="false"
                    className="planimg  4k-first:w-[60%]"
                  />
                </div>
              </div>
              <div className="mobile-sm:flex mobile-sm:flex-col laptop:flex-none laptop:grid laptop:grid-cols-2 ">
                <div className="flex justify-start items-center mobile-sm:hidden laptop:block mobile-sm:mt-10 laptop:mt-0">
                  <img
                    src={res.img4}
                    width="70%"
                    alt="img"
                    draggable="false"
                    className="planimg  4k-first:w-[60%]"
                  />
                </div>
                <div className="flex flex-col items-start justify-center gap-4">
                  <h2 className="planet  text-fblue ">{res.title4}</h2>
                  <p className="parafont text-justify">{res.mes}</p>
                  <button className="ab_btn">view more</button>
                </div>
                <div className="flex mobile-sm:justify-center laptop:justify-start items-center mobile-sm:visible laptop:hidden mobile-sm:mt-10 laptop:mt-0">
                  <img
                    src={res.img4}
                    width="70%"
                    alt="img"
                    draggable="false"
                    className="planimg  4k-first:w-[60%]"
                  />
                </div>
              </div>

              <div className="mobile-sm:flex mobile-sm:flex-col laptop:flex-none laptop:grid laptop:grid-cols-2 ">
                <div className="flex flex-col items-start justify-center gap-4">
                  <h2 className="planet  text-fblue ">{res.title5}</h2>
                  <p className="parafont text-justify">{res.mes}</p>
                  <button className="ab_btn">view more</button>
                </div>
                <div className="flex mobile-sm:justify-center laptop:justify-end items-center mobile-sm:mt-10 laptop:mt-0">
                  <img
                    src={res.img5}
                    width="70%"
                    alt="img"
                    draggable="false"
                    className="planimg  4k-first:w-[60%]"
                  />
                </div>
              </div>
              <div className="mobile-sm:flex mobile-sm:flex-col laptop:flex-none laptop:grid laptop:grid-cols-2">
                <div className="flex justify-start items-center mobile-sm:hidden laptop:block mobile-sm:mt-10 laptop:mt-0">
                  <img
                    src={res.img6}
                    width="100%"
                    alt="img"
                    draggable="false"
                  />
                </div>
                <div className="flex flex-col items-start justify-center gap-4">
                  <h2 className="planet  text-fblue ">{res.title6}</h2>
                  <p className="parafont text-justify">{res.mes}</p>
                  <button className="ab_btn">view more</button>
                </div>
                <div className="flex justify-center items-center mobile-sm:visible laptop:hidden mobile-sm:mt-10 laptop:mt-0">
                  <img
                    src={res.img6}
                    width="100%"
                    alt="img"
                    draggable="false"
                  />
                </div>
              </div>

              <div className="mobile-sm:flex mobile-sm:flex-col laptop:flex-none laptop:grid laptop:grid-cols-2  ">
                <div className="flex flex-col items-start justify-center gap-4">
                  <h2 className="planet  text-fblue ">{res.title7}</h2>
                  <p className="parafont text-justify">{res.mes}</p>
                  <button className="ab_btn">view more</button>
                </div>
                <div className="flex mobile-sm:justify-center laptop:justify-end items-center mobile-sm:mt-10 laptop:mt-0">
                  <img
                    src={res.img7}
                    width="70%"
                    alt="img"
                    draggable="false"
                    className="planimg  4k-first:w-[60%]"
                  />
                </div>
              </div>
              <div className="mobile-sm:flex mobile-sm:flex-col laptop:flex-none laptop:grid laptop:grid-cols-2">
                <div className="flex justify-start items-center mobile-sm:hidden laptop:block mobile-sm:mt-10 laptop:mt-0">
                  <img
                    src={res.img8}
                    width="70%"
                    alt="img"
                    draggable="false"
                    className="planimg  4k-first:w-[60%]"
                  />
                </div>
                <div className="flex flex-col items-start justify-center gap-4">
                  <h2 className="planet  text-fblue ">{res.title8}</h2>
                  <p className="parafont text-justify">{res.mes}</p>
                  <button className="ab_btn">view more</button>
                </div>
                <div className="flex justify-center items-center mobile-sm:visible laptop:hidden mobile-sm:mt-10 laptop:mt-0">
                  <img
                    src={res.img8}
                    width="70%"
                    alt="img"
                    draggable="false"
                    className="planimg  4k-first:w-[60%]"
                  />
                </div>
              </div>
              <div className="!flex !justify-center !items-center relative  ">
                {/* <iframe
                  draggable="false"
                  className={`${
                    click
                      ? "w-[100vw] h-[100vh] "
                      : "w-[40vw] h-[40vh]  cursor-hidden "
                  }`}
                  src="https://www.solarsystemscope.com/iframe"
                  // src="https://eyes.nasa.gov/apps/solar-system/#/uranus?embed=true&amp;amp;logo=false"
                ></iframe> */}

                <video
                  // draggable="false"
                  autoPlay
                  preload="none"
                  muted
                  loop
                  className="w-[55vw] h-[65vh] vedioss mobile-sm:!hidden laptop:!block"
                >
                  <source src="./galex.mp4" />
                </video>
                {console.log(onclick)}
                <div className="absolute    flex items-center justify-center ">
                  <button
                    // onClick={(e) => setClick(true)}

                    className={`${
                      click == true
                        ? `hidden`
                        : ` font-bold px-5 py-1  rounded-full hover:text-white mobile-sm:!hidden laptop:!block`
                    }`}
                  >
                    <Link to="/galex">
                      <img
                        src={"./joi.png"}
                        alt="logo"
                        className="hover:shadow-2xl hover:animate-none animate-pulse hover:scale-120"
                      />
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Round />
    </div>
  );
}
