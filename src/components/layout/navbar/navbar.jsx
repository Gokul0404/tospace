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

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { Option } = Select;
  const [colorChange, setColorchange] = useState(false);

  useEffect(() => {
    if (
      location.pathname.split("/")[1] === "course" ||
      location.pathname.split("/")[1] === "about" ||
      location.pathname.split("/")[1] === "product"
    ) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  }, [location.pathname.split("/")[1]]);

  console.log(colorChange, location.pathname.split("/")[1] === "course");
  const [open, setOpen] = useState(false);
  const [openDrawer, closeDrawer] = useState(false);
  return (
    <div
      className={`${
        colorChange
          ? "bg-white text-black shadow-lg "
          : "bg-transparent text-white"
      } ${
        location.pathname.split("/")[1] === "login" ? "hidden" : "block"
      } nav_bg2 absolute w-screen  flex justify-center z-40 ease-in-out duration-500`}
    >
      <motion.div className=" flex items-center justify-between  gap-x-[5vw] h-[10vh] w-[85%] fontnav">
        <motion.div>
          <Link to="/home">
            <motion.img
              className="w-[20vh] select-none "
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
            <motion.a className="hover:cursor-pointer">About</motion.a>
          </Link>
          <Link to="course">
            <motion.a className="hover:cursor-pointer">Courses</motion.a>
          </Link>
          <motion.a
            onClick={() => setOpen(true)}
            className="hover:cursor-pointer"
          >
            Contact
          </motion.a>
          <Modal width={850} open={open} footer={false}>
            <div className=" contactbg text-white items-center ">
              <div className="w-[100%] flex">
                <h2 className="text-[30px] text-black py-5 ml-[5%] font-bold">
                  Get in touch with us to learn more!
                </h2>
                <CloseIcon
                  onClick={() => setOpen(false)}
                  className="cursor-pointer absolute right-8 hover:text-red-600 text-black"
                />
                <div></div>{" "}
              </div>
              <Form
                layout="vertical"
                className="!w-[90%]  flex flex-col justify-center items-center"
              >
                <div className="grid grid-cols-2 gap-x-10">
                  {/* <div className="px-5"> */}
                  <Form.Item
                    rules={[
                      { required: true, message: "Please enter your name" },
                      { type: "name", message: "Please enter valid name" },
                    ]}
                    name="name"
                  >
                    <Input
                      placeholder="Name"
                      className="!h-[38px] !w-[250px]  hover:!border-2 "
                    />
                  </Form.Item>
                  <Form.Item
                    rules={[
                      {
                        required: true,
                        message: "Please enter your designation",
                      },
                      {
                        type: "designation",
                        message: "Please enter valid email",
                      },
                    ]}
                    name="designation"
                  >
                    <Input
                      placeholder="Designation"
                      className="!h-[38px] !w-[250px]   hover:!border-2  "
                    />
                  </Form.Item>
                  <Form.Item
                    rules={[
                      { required: true, message: "Please enter your Number" },
                      {
                        type: "phone",
                      
                      },
                      {
                        pattern: /^(?:\d*)$/,
                        message: "Value should contain just number",
                      },
                      {
                        pattern: /^[\d]{0,10}$/,
                        message: "Value should be less than 10 character",
                      },
                    ]}
                    name="phone"
                  >
                    <Input
                      placeholder="Number"
                      className="!h-[38px] !w-[250px]   hover:!border-2  "
                    />
                  </Form.Item>
                  <Form.Item
                    className="!w-[250px]  "
                    name={["address1", "province1"]}
                    noStyle
                    rules={[
                      { required: true, message: "Province is required" },
                    ]}
                  >
                    <Select placeholder="Department">
                      <Option value="Teacher">Teacher</Option>
                      <Option value="Teacher">Parent</Option>
                      <Option value="Student">Student</Option>

                      <Option value="Other">Other</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item
                    rules={[
                      { required: true, message: "Please enter your email" },
                      { type: "email", message: "Please enter valid email" },
                    ]}
                    name="email"
                  >
                    <Input
                      placeholder="Email"
                      className="!h-[38px] !w-[250px]   hover:!border-2 "
                    />
                  </Form.Item>
                  {/* </div> */}
                  {/* <div className="px-5 !p-0"> */}

                  <Form.Item
                    className="!w-[250px] "
                    name={["address", "province"]}
                    noStyle
                    rules={[
                      { required: true, message: "Province is required" },
                    ]}
                  >
                    <Select placeholder="Select">
                      <Option value="Electron Module">Electron Module</Option>
                      <Option value="Gravity Module">Gravity Module</Option>
                      <Option value="CubeSat 1">CubeSat 1 </Option>
                      <Option value="Cubesat Mini 1">Cubesat Mini 1</Option>
                      <Option value="Cubesat Mini 2">Cubesat Mini 2</Option>
                      <Option value="Cubesat Mini 2">Other</Option>
                    </Select>
                  </Form.Item>
                  {/* </div> */}
                </div>
                <Form.Item
                  rules={[
                    { required: true, message: "Please enter your Number" },
                    {
                      type: "message",
                      message: "Please enter your Message",
                    },
                  ]}
                  name="message"
                >
                  <Input
                    placeholder="Message"
                    className="!h-[90px] !w-[540px]   hover:!border-2 "
                  />
                </Form.Item>
                <div className="w-[100%]">
                  <button
                    htmlType="submit"
                    className=" course_btn2 text-white uppercase text-sm font-semibold px-4 py-2 rounded ml-[90px]"
                  >
                    Submit
                  </button>
                </div>
              </Form>
            </div>
          </Modal>
          <motion.div className="select-none">
            <motion.button
              className="shadow-inner  border-2 border:white hover:border-[#277de0] p-[6px] text-[16px]  rounded-box  w-fit  !text-inherit"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeOut", duration: 3 }}
            >
              <Link to="login"> Let's Connect</Link>
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
        <div className="flex flex-col gap-y-5">
          <p>About</p>
          <p>Courses</p>
          <p>Contact</p>
          <p>Let's Connect</p>
        </div>
      </Drawer>
    </div>
  );
}

export default Navbar;
