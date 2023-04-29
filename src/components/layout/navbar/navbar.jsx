import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Modal, Drawer, Form, Input, Select } from "antd";
import "../navbar/nav.css";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../landing-section/images/logowhite.png";
import blackLogo from "../../landing-section/images/logo.png";
import { Link, useNavigate, useLocation } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Twitter } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import Contact from "../../Contact/Contact"; //contact

function Navbar() {
  const navigate = useNavigate();

  const location = useLocation();
  const { Option } = Select;
  const [colorChange, setColorchange] = useState(false);

  console.log(colorChange, location.pathname.split("/")[1] === "course");
  const [open, setOpen] = useState(false); //contact
  const [openDrawer, closeDrawer] = useState(false);
  useEffect(() => {
    if (
      location.pathname.split("/")[1] === "course" ||
      location.pathname.split("/")[1] === "about" ||
      location.pathname.split("/")[1] === "product"||
      location.pathname.split("/")[1] === "contact"
    ) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  }, [location.pathname.split("/")[1]]);

  return (
    <div
      className={`${
        colorChange
          ? `bg-white text-black shadow-lg  `
          : "bg-transparent text-white"
      } ${
        location.pathname.split("/")[1] === "login" ? "hidden" : "block"
      } nav_bg2 absolute w-screen  flex justify-center z-40 ease-in-out duration-500`}
    >
      <motion.div className=" flex items-center justify-between  gap-x-[5vw] h-[10vh] w-[85%]   fontnav">
        <motion.div>
          <Link to="/home">
            <motion.img
              className="w-[130px] select-none desktop-lg-4k:w-[160px]"
              initial={{ y: -60 }}
              animate={{ y: 0 }}
              transition={{ duration: 1 }}
              src={colorChange ? blackLogo : Logo}
            />
          </Link>
        </motion.div>
        <motion.div className="laptop:flex laptop:gap-x-10 gap-x-5  mobile-sm:hidden items-center  ">
          <Link to="/home">
            {/* <motion.a className="hover:cursor-pointer">Home</motion.a> */}
          </Link>
          <Link to="about">
            <motion.a className="hover:cursor-pointer relative">
              <p className="navheadlines">About</p>
            </motion.a>
          </Link>
          <Link to="course">
            <motion.a className="hover:cursor-pointer relative">
              <p className="navheadlines">Courses</p>
            </motion.a>
          </Link>
          <motion.a
            onClick={() => setOpen(true)}
            className="hover:cursor-pointer relative"
          >
            <p className="navheadlines">Contact</p>
          </motion.a>
          {open && <Contact open={open} setOpen={setOpen} />}
          <motion.div className="select-none">
            <motion.button
              className="shadow-inner  border-2 border:white hover:border-[#277de0] p-[6px] navlet  rounded-box  w-fit  !text-inherit"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeOut", duration: 3 }}
            >
              <Link to="login ">Let's Connect</Link>
            </motion.button>
          </motion.div>
        </motion.div>
        <div
          className="mobile_toggle laptop:hidden"
          onClick={() => closeDrawer(true)}
        >
          <MenuIcon />
        </div>
      </motion.div>
      <Drawer
        open={openDrawer}
        placement="left"
        width={200}
        onClose={() => closeDrawer(false)}
      >
        <div className="flex flex-col gap-y-2">
          <span className="relative">
            <p className="linestext py-2 border-b-[1px]">
              <Link to="about" className=" ">
                About
              </Link>
            </p>
          </span>

          <span className="relative">
            <p className="linestext py-2 border-b-[1px]">
              <Link to="course" className=" ">
                Courses
              </Link>
            </p>
          </span>
          <span className="relative">
            <p
              onClick={() => setOpen(true)}
              className="linestext py-2 border-b-[1px]"
            >
              Contact
            </p>
          </span>
          <span className="relative">
            <p className=" linestext py-2  border-b-[1px]">Let's Connect</p>
          </span>
        </div>
      </Drawer>
    </div>
  );
}

export default Navbar;
