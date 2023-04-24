// import React, { useEffect } from "react";

// import { easeInOut, motion } from "framer-motion";
// // import Title from "../../images/logowhite.png";
// import About from "../about/About";
// import Career from "../career/career";
// import Video from "../video/video";
// import Event from "../event_section/event";
// // import spaceman from "../images/spaceman.png";
// import planet from "../home/images/planat.png";
// import planet2 from "../home/images/planet2.png"
// import spaceman from "../images/spacemanclone.png";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import Footer from "../../layout/footer/footer";
// import Scrollbal from "../scrollball/scrollbal";
// import Review from "../Review/Review";
// import { RotateLeft } from "@mui/icons-material";
// function Home() {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   });

//   return (
//     <>
//       <motion.div className="home ease-in-out duration-700" id="home">
//         <motion.div className="    h-screen   space-y-10 flex flex-col justify-center items-center relative  ">
//           {/* <motion.img className="w-[45%] 4k:w-[40%] select-none" src={Title} /> */}
//           <motion.div className=" w-[40%] h-screen pl-[9%] relative ">
//             <motion.p className="font-bold text-head text-center w-[80%] pt-[30%] z-50">
//               Innovate Inspire Ignite
//             </motion.p>

//             <div className="w-[90%] pt-10 flex items-start  gap-x-2 ">
//               <div className="w-[50px] bg-yellow-500 h-[0.3vh] mt-3"></div>
//               <div className="">
//                 {" "}
//                 Once upon a time building a satellite is only a dream, a group
//                 of passionate
//               </div>
//             </div>

//             <div className="absolute bottom-5">
//               <div className="flex">
//                 <div className="w-[100px] bg-white h-[0.1vh] mt-3"></div>
//                 <div className="pl-1 w-[100px] justify-around flex">
//                   <span className="hover:text-pink-700">
//                     <InstagramIcon />
//                   </span>
//                   <span className="hover:text-blue-500">
//                     <FacebookIcon />
//                   </span>
//                   <span className="hover:text-blue-900">
//                     <LinkedInIcon />
//                   </span>
//                 </div>
//               </div>
//             </div>

//             <motion.img
//               initial={{ opacity: 0, x: "500px", width: "30%", height: "35%" }}
//               animate={{ rotate: -25 }}
//               whileInView={{
//                 opacity: 1,
//                 width: "45%",
//                 height: "50%",
//                 x: "500px",
//               }}
//               transition={{ ease: easeInOut, duration: 5 }}
//               src={spaceman}
//               className=" absolute mobile-lg:w-[80%]  laptop:w-[80%]   laptop-lg:w-[100%] h-[100%] imgin "
//             ></motion.img>
//             <motion.div
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ ease: easeInOut, duration: 5 }}
//             >
//               <motion.img
//                 initial={{ width: "25%" }}
//                 animate={{ rotate: 180 }}
//                 transition={{
//                 duration:5
//                 }}
//                 whileInView={{ width: "25%" }}
//                 src={planet2}
//               ></motion.img>
//             </motion.div>
//           </motion.div>

//           <motion.div className="pl-[20vw] ">
//             <motion.img
//               src={planet}
//               className="absolute  w-[25%] top-[0%] rotate-[-12deg]"
//             />
//           </motion.div>
//         </motion.div>
//         <Scrollbal />
//         <About />
//         <Career />
//         <Video />
//         <Event />
//         <Review />
//         <Footer />
//       </motion.div>
//     </>
//   );
// }
// export default Home;
