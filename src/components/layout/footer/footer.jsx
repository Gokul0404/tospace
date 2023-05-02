import React, { useState } from 'react'
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PlaceIcon from "@mui/icons-material/Place";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import { Twitter } from '@mui/icons-material';
import { Divider } from "antd";
import Contact from '../../Contact/Contact'
import { set } from 'lodash';
import { Link } from 'react-router-dom';

export default function Footer() {
  const[open, setOpen]=useState(false)
  return (
    <>
      <div className="w-screen footerbg border border-t-2  text-black justify-center flex items-center ">
        <div className="mobile-sm:grid  mobile-sm:grid-cols-1 mobile-sm: laptop:grid-cols-4 gap-4 w-[85vw] p-5">
          <div className="mobile-sm:py-2">
            <span className="font-bold text-[20px]">EVOLUTION</span>

            <div className="py-3">
              Use a built-in admin panel with a zillion of tools and widgets to
              edit your website design, manage social media
            </div>
            <div className="justify-between flex w-[120px]">
              <span className="hover:text-in cursor-pointer">
                <InstagramIcon />
              </span>
              <span className="hover:text-fa cursor-pointer">
                <FacebookIcon />
              </span>
              <span className="hover:text-lin cursor-pointer">
                <LinkedInIcon />
              </span>
              <span className="hover:text-twi cursor-pointer">
                <Twitter />
              </span>
            </div>
          </div>
          <div className=" mobile-sm:py-2 font-semibold laptop:justify-self-center  ">
            <p className=" ease-in-out duration-700 hover:text-blue-500 cursor-pointer">
              <Link to="/about">About</Link>
            </p>
            <p className="py-2  ease-in-out duration-700 hover:text-blue-500 cursor-pointer">
              <a href="#career">Careers</a>
            </p>

            <p className=" ease-in-out duration-700 hover:text-blue-500 pt-1 cursor-pointer">
              <a href="#event">Events</a>
            </p>
            <p className="py-2  ease-in-out duration-700 hover:text-blue-500 cursor-pointer">
              <Link to="/course">Courses</Link>
            </p>
            <p
              className=" ease-in-out duration-700 hover:text-blue-500 cursor-pointer"
              onClick={() => setOpen(true)}
            >
              Contact Us
            </p>
          </div>
          <div className="w-[100%] mobile-sm:py-2 ">
            <h3 className="font-bold">Contact Us</h3>
            <div className="flex pt-3">
              <div>
                <PlaceIcon />
              </div>
              <div className="pl-3">
                <h4 className="font-semibold">Address</h4>
                <p className="text-footerf">
                  Nalan-2ph, North Gandhi Gramam, Karur, Tamil Nadu-639004
                </p>
              </div>
            </div>
            <div className="flex ">
              <div>
                <PhoneIcon />
              </div>
              <div className="pl-3">
                <h4 className="font-semibold">Phone</h4>
                <p className="text-footerf">093618 54814</p>
              </div>
            </div>

            <div className="flex ">
              <div>
                <MailOutlineRoundedIcon />
              </div>
              <div className="pl-3">
                <h4 className="font-semibold">Email</h4>
                <p className="text-footerf">tospaceofficial@gmail.com</p>
              </div>
            </div>

            <div className="flex ">
              <div>
                <LanguageRoundedIcon />
              </div>
              <div className="pl-3">
                <h4 className="font-semibold">Website</h4>
                <p className="text-footerf">www.tospace.in</p>
              </div>
            </div>
          </div>
          <div className="mobile-sm:py-2">
            <p className="font-semibold">Sign up for updates</p>
            {/* <div className="py-2">
            <input
              type="text"
              className="bg-black border-black outline-none text-white p-[1.5%]"
              placeholder="Enter your mail..."
            ></input>
          </div> */}
            <div className="py-2">
              <button
                className="bg-blue-500 p-2 font-bold text-white hover:bg-[#277de0]"
                onClick={() => setOpen(true)}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
        {open && <Contact open={open} setOpen={setOpen} />}
      </div>
    </>
  );
}
