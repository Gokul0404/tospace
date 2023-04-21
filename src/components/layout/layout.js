import React from 'react'
import Navbar from './navbar/navbar'
import { Outlet } from 'react-router-dom';

import { motion} from "framer-motion";

function Layout() {
  return (
   <>
   
   <Navbar/>
   <Outlet/>
 
   
   </>
  )
}

export default Layout
