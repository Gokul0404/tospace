import React, { useState } from "react";
import { motion } from "framer-motion";
import { Modal, Drawer } from "antd";
import '../navbar/nav.css'
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../landing-section/images/logowhite.png";
import { Link, useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import { Button, TextField } from "@mui/material";

function Navbar() {

 const [colorChange, setColorchange] = useState(false);
 const navigate = useNavigate();

 const changeNavbarColor = () => {
   if (window.scrollY >= 80) {
     setColorchange(true);
   } else {
     setColorchange(false);
   }
 };
 window.addEventListener("scroll", changeNavbarColor);


  const [open, setOpen] = useState(false);
  const [openDrawer, closeDrawer] = useState(false);
  return (
    <div className="nav_bg2 absolute  w-screen text-white flex justify-center z-40 ease-in-out duration-500">
      <motion.div className="p-5 flex items-center justify-between  gap-x-[5vw] h-[15vh] w-[85%]">
        <motion.div>
          <Link to="/home">
            <motion.img
              className="w-[20vh] select-none "
              initial={{ y: -60 }}
              animate={{ y: 0 }}
              transition={{ duration: 1 }}
              src={Logo}
            />
          </Link>
        </motion.div>
        <motion.div className="laptop:flex laptop:gap-x-5  mobile-sm:hidden items-center ">
          <Link to="/home">
            <motion.a className="hover:cursor-pointer">Home</motion.a>
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
            <div className="flex justify-around text-white items-center pt-10">
              <div>
                <h1 className="text-white text-icon uppercase">get a quote</h1>
                <p className="text-white pt-2">
                  Fill up the form and our team will get back to you within 24
                  hours
                </p>
                <div className="info mt-10 space-y-10">
                  <p>+91 987654321</p>
                  <p>hello@tospacelearn.com</p>
                  <p>tospacelearn,Karur</p>
                </div>
                <div className="social flex mt-10 gap-x-[5vh] justify-center ">
                  <div>
                    <FacebookOutlinedIcon />
                  </div>
                  <div>
                    <FacebookOutlinedIcon />
                  </div>
                  <div>
                    <FacebookOutlinedIcon />
                  </div>
                  <div>
                    <FacebookOutlinedIcon />
                  </div>
                </div>
              </div>
              <div className="w-[300px] h-[400px] shadow-2xl bg-white rounded-2xl">
                <div className="form p-10 text-black">
                  <form action="" method="post">
                    <div className="name pb-3">
                      <TextField
                        id="outlined-basic"
                        label="Name"
                        variant="outlined"
                        size="small"
                      />
                    </div>
                    <div className="email pb-3">
                      <TextField
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        size="small"
                      />
                    </div>
                    <div className="message">
                      <TextField
                        id="outlined-basic"
                        label="Message"
                        variant="outlined"
                        rows={6}
                        fullWidth
                        multiline
                        size="small"
                      />
                    </div>
                    <div className="submit text-center mt-5">
                      <Button variant="contained">Send Message</Button>
                    </div>
                  </form>
                </div>
              </div>
              <div>
                <CloseIcon
                  onClick={() => setOpen(false)}
                  className="cursor-pointer"
                />
              </div>
            </div>
          </Modal>
          <motion.div className="select-none">
            <motion.button
              className="shadow-inner  border-2 border-sky-500 p-[6px] text-[14px]  rounded-box  w-fit  text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeOut", duration: 3 }}
            >
              Let's Connect
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
        dggdrgfg
      </Drawer>
    </div>
  );
}

export default Navbar;
