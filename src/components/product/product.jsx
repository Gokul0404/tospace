import React, { useEffect, useState } from "react";
import "../product/Product.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import GroupsIcon from "@mui/icons-material/Groups";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TranslateIcon from "@mui/icons-material/Translate";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { Link, useLocation } from "react-router-dom";  // get the data in onclick
import { coursedata } from "../course/SectionData";  // get the data in onclick
import { Collapse } from "antd";
import { get } from "lodash";  // get the data in onclick
const { Panel } = Collapse;
export default function Product() {
  // get the data in onclick
  const [pageData, setPageData] = useState();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    setPageData(
      coursedata.filter((res) => {
        return res.id === location.state.id;
      })
    );
  }, [location.state.id]);
  const {
    price,
    head,
    productContent,
    duration,
    Agegroup,
    language,
    Level,
    img2,
  } = get(pageData, "[0]", "");
  // get the data in onclick up

  return (
    <div className="pt-5 px-5 ">
      <div>
        <div className="mt-[120px] mobile-md:flex mobile-md:flex-col mobile-md:justify-center mobile-md:items-center laptop:flex  laptop:flex-row ">
          <div className="mobile-sm:h-[70vh] mobile-sm:py-5 laptop:w-[80vw] desktop-lg-4k:h-[100vh]">
            <img
              src={img2}
              className=" mobile-sm:h-[100%] mobile-sm:w-screen  laptop:w-[95%] desktop-lg-4k:h-[80%]"
            ></img>
          </div>

          {/* card */}

          <div className=" border border-gray-400 px-6 rounded-[10px] mobile-md:w-[100%] laptop:w-[300px] h-fit">
            <div className="">
              <h2 className="price_product">
                <CurrencyRupeeIcon className="price" />
                {/* get the data in onclick */}
                {price}
              </h2>
            </div>
            <div className="flex flex-col gap-y-4 pt-5">
              <Link to="/login" className="">
                {" "}
                <button className="bg-[#2828a0] text-white font-bold  py-3 w-[100%] rounded-md">
                  Buy Now
                </button>
              </Link>
              <Link to="/login">
                <button className="bg-[#e8e8e9] text-[#2828a0] py-3 w-[100%] rounded-md">
                  Start Free Trial
                </button>
              </Link>
            </div>
            <div className="py-2">
              <div className="flex border-b-[1px] py-4 justify-between">
                <span className="flex gap-x-2">
                  <AccessTimeIcon className="iconproduct" />
                  <h2>Duration</h2>
                </span>

                <h2>{duration}</h2>
              </div>
              <div className="flex border-b-[1px] py-4 justify-between">
                <span className="flex gap-x-2">
                  <GroupsIcon className="iconproduct" />
                  <h2>Age Group</h2>
                </span>
                <h2>{Agegroup}</h2>
              </div>
              <div className="flex border-b-[1px] py-4 justify-between">
                <span className="flex gap-x-2">
                  <TranslateIcon className="iconproduct" />
                  <h2>Language</h2>
                </span>

                <h2>{language}</h2>
              </div>
              <div className="flex border-b-[1px] py-4 justify-between">
                <span className="flex gap-x-2">
                  <TrendingUpIcon className="iconproduct" />
                  <h2>Level</h2>
                </span>
                <h2>{Level}</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="py-8 w-[72vw] ">
          <div className="py-5 ">
            <h2 className="text-[35px] font-semibold"> {head}</h2>
            <p className="pt-5">{productContent}</p>
          </div>
          <div>
            <h2 className="text-[35px] font-bold ">Course Highlights</h2>
            <div className="">
              <div className="pt-5">
                <Collapse size="large">
                  <Panel
                    header="This is large size panel header"
                    key="1"
                    className="p-2  font-bold bg-white shadow-md"
                  >
                    <h2 className="text-[20px] ">Sections</h2>
                    <ol className="text-[15px] font-semibold mobile-sm:flex mobile-sm:flex-col laptop:flex laptop:flex-row pl-5 gap-x-20 list-disc pt-5">
                      <li>Introduction to the Course</li>
                      <li>Quiz</li>
                    </ol>
                  </Panel>
                </Collapse>
              </div>
              <div className="pt-5">
                <Collapse size="large">
                  <Panel
                    header="This is large size panel header"
                    key="1"
                    className="p-2  font-bold bg-white shadow-md"
                  >
                    <h2 className="text-[20px] ">Sections</h2>
                    <ol className="text-[15px] font-semibold mobile-sm:flex mobile-sm:flex-col laptop:flex laptop:flex-row pl-5 gap-x-20 list-disc pt-5">
                      <li>Introduction to the Course</li>
                      <li>Quiz</li>
                      <li>Building the O-Flyer</li>
                      <li>Task</li>
                    </ol>
                  </Panel>
                </Collapse>
              </div>
              <div className="pt-5">
                <Collapse size="large">
                  <Panel
                    header="This is large size panel header"
                    key="1"
                    className="p-2  font-bold bg-white shadow-md"
                  >
                    <h2 className="text-[20px] ">Sections</h2>
                    <ol className="text-[15px] font-semibold mobile-sm:flex mobile-sm:flex-col laptop:flex laptop:flex-row pl-5 gap-x-20 list-disc pt-5">
                      <li>Introduction to the Course</li>
                      <li>Quiz</li>
                    </ol>
                  </Panel>
                </Collapse>
              </div>
              <div className="pt-5">
                <Collapse size="large">
                  <Panel
                    header="This is large size panel header"
                    key="1"
                    className="p-2  font-bold bg-white shadow-md"
                  >
                    <h2 className="text-[20px] ">Sections</h2>
                    <ol className="text-[15px] font-semibold mobile-sm:flex mobile-sm:flex-col laptop:flex laptop:flex-row pl-5 gap-x-20 list-disc pt-5">
                      <li>Introduction to the Course</li>
                      <li>Quiz</li>
                    </ol>
                  </Panel>
                </Collapse>
              </div>
              <div className="pt-5">
                <Collapse size="large">
                  <Panel
                    header="This is large size panel header"
                    key="1"
                    className="p-2  font-bold bg-white shadow-md"
                  >
                    <h2 className="text-[20px] ">Sections</h2>
                    <ol className="text-[15px] font-semibold mobile-sm:flex mobile-sm:flex-col laptop:flex laptop:flex-row pl-5 gap-x-20 list-disc pt-5">
                      <li>Introduction to the Course</li>
                      <li>Quiz</li>
                    </ol>
                  </Panel>
                </Collapse>
              </div>
              <div className="pt-5">
                <Collapse size="large">
                  <Panel
                    header="This is large size panel header"
                    key="1"
                    className="p-2  font-bold bg-white shadow-md"
                  >
                    <h2 className="text-[20px] ">Sections</h2>
                    <ol className="text-[15px] font-semibold mobile-sm:flex mobile-sm:flex-col laptop:flex laptop:flex-row pl-5 gap-x-20 list-disc pt-5">
                      <li>Introduction to the Course</li>
                      <li>Quiz</li>
                      <li>Task</li>
                    </ol>
                  </Panel>
                </Collapse>
              </div>
              <div className="pt-5">
                <Collapse size="large">
                  <Panel
                    header="This is large size panel header"
                    key="1"
                    className="p-2  font-bold bg-white shadow-md"
                  >
                    <h2 className="text-[20px] ">Sections</h2>
                    <ol className="text-[15px] font-semibold flex pl-5 gap-x-20 list-disc pt-5">
                      <li>Introduction to the Course</li>
                      <li>Quiz</li>
                    </ol>
                  </Panel>
                </Collapse>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}