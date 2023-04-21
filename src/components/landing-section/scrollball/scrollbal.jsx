import Aos from "aos";
import React, { useEffect, useState } from "react";
import '../scrollball/scrollbal.css'
import RocketIcon from "@mui/icons-material/Rocket";
import "aos/dist/aos.css";
export default function Round() {
  useEffect(() => {
    Aos.init();
  }, []);

  const [displayr, setDisplayr] = useState(false);

  const round = () => {
    if (window.scrollY >= 100) {
      setDisplayr(true);
    } else {
      setDisplayr(false);
    }
  };
  window.addEventListener("scroll", round);
  return (
    <div
      className={displayr ? "roumd_position_1" : "roumd_position"}
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      <a href="#home" className="ease-in-out duration-300">
        <div class="container_sun">
          <span class="sun sunshine"></span>
          <span class="sun">
            <span className="flex  justify-center align-center py-1">
              <RocketIcon fontSize="large"/>
            </span>
          </span>
        </div>
      </a>
    </div>
  );
}
