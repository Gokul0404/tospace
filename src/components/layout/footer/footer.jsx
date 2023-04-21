import React from 'react'
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PlaceIcon from "@mui/icons-material/Place";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import { Twitter } from '@mui/icons-material';
export default function Footer() {
  return (
    <div className="w-screen footerbg  text-black justify-center flex items-center ">
      <div className="grid grid-cols-4 gap-4 w-[85vw] p-5">
        <div>
          <span className="font-bold text-[20px]">EVOLUTION</span>

          <div className="py-3">
            Use a built-in admin panel with a zillion of tools and widgets to
            edit your website design, manage social media
          </div>
          <div className="justify-between flex w-[120px]">
            <span className="hover:text-in">
              <InstagramIcon />
            </span>
            <span className="hover:text-fa">
              <FacebookIcon />
            </span>
            <span className="hover:text-lin">
              <LinkedInIcon />
            </span>
            <span className='hover:text-twi'>
              
              <Twitter/>
            </span>
          </div>
        </div>
        <div className="font-semibold justify-self-center  ">
          <p className=" ease-in-out duration-700 hover:text-blue-500">About</p>
          <p className="py-2  ease-in-out duration-700 hover:text-blue-500">
            Careers
          </p>
          <p className=" ease-in-out duration-700 hover:text-blue-500 ">
            Services
          </p>
          <p className=" ease-in-out duration-700 hover:text-blue-500 pt-2">
            Events
          </p>
          <p className="py-2  ease-in-out duration-700 hover:text-blue-500">
            Courses
          </p>
          <p className=" ease-in-out duration-700 hover:text-blue-500">
            Contact Us
          </p>
        </div>
        <div className="w-[100%] ">
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
        <div>
          <p className="font-semibold">Sign up for updates</p>
          <div className="py-2">
            <input
              type="text"
              className="bg-black border-black outline-none text-white p-[1.5%]"
              placeholder="Enter your mail..."
            ></input>
          </div>
          <div>
            <button className="bg-blue-500 p-2 font-bold text-white hover:bg-blue-700">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
