import React, { useState } from "react";
import "../Login/Login.css";
import { Input, Form } from "antd";

export default function Login() {
  const [signup, setSignup] = useState(false);

  return (
    <div className=" ">
      <div className="flex flex-row justify-center items-center w-screen h-screen">
        <div className="">
          <img
            src="./login.jpg"
            className="object-fill w-[100%] h-[100%]"
            alt="img"
          ></img>
        </div>
        <div className="w-[30vw] ">
          {/* login */}

          {/* <form className={`w-fill pt-7 ${signup ? "hidden" : "block"}`}>
            <div class=" bg-white rounded loginshadow p-8 m-4 md:max-w-sm md:mx-auto ">
              <span class="block w-full text-xl uppercase font-bold mb-4 text-paragraph">
                Login
              </span>
              <span>Let's get connected</span>
              <form class="mb-4" action="/" method="post" className="pt-5  ">
                <div class="mb-4 md:w-full">
                  <label for="email" class="block text-xs mb-1">
                    Email
                  </label>
                  <input
                    class="w-full border rounded p-2 outline-none focus:shadow-outline"
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    placeholder="Enter the Email"
                    onChange={(e) => {
                      setFormData((pre) => ({
                        ...pre,
                        ["email"]: e.target.value,
                      }));
                    }}
                    required
                  />
                </div>
                <div class="mb-6 md:w-full">
                  <label for="password" class="block text-xs mb-1">
                    Password
                  </label>
                  <input
                    class="w-full border rounded p-2 outline-none focus:shadow-outline"
                    type="password"
                    name="password"
                    suffix="l"
                    id="password"
                    value={formData.password}
                    onChange={(e) => {
                      setFormData((pre) => ({
                        ...pre,
                        ["password"]: e.target.value,
                      }));
                    }}
                    placeholder="Password"
                    required
                  />
                  
                </div>
                <div className="flex justify-center gap-x-10 py-2">
                  <button class="bg-[#030334] hover:bg-[#0e0e4d] text-white uppercase text-sm font-semibold px-4 py-2 rounded">
                    Login
                  </button>
                  <button
                    className="!bg-[#030334] hover:bg-[#0e0e4d]  text-white uppercase text-sm font-semibold px-4 py-2 rounded"
                    onClick={() => setSignup(true)}
                  >
                    Sign Up
                  </button>
                </div>

                <div className="flex flex-col justify-center items-center py-1 gap-y-3">
                  <p className="font-bold">OR</p>
                  <button className="bg-white text-black hover:bg-gray-200  border border-black  flex text-sm font-semibold px-4 py-2 rounded-[25px]">
                    <img
                      src="./google.png"
                      className="w-[25px] cursor-pointer"
                    ></img>
                    <p className="cursor-pointer">Sign up with Google</p>
                  </button>
                </div>
              </form>
              <div className="flex justify-center text-center">
                <p class=" text-center text-sm " href="/login">
                  New User? You can &nbsp;
                </p>
                <p className="text-[#f54d4d] cursor-pointer">Signup &nbsp;</p>
                <p> here &nbsp;</p>
                <p className="text-[#f54d4d] cursor-pointer">
                  {" "}
                  Forgot Password ?
                </p>
              </div>
            </div>
          </form> */}
          <div>
            <div
              className={`bg-white w-[400px]  shadow-2xl flex items-start px-5 pt-[2vh] ${
                signup ? "hidden" : "block"
              }  `}
            >
              <Form
                layout="vertical"
                className="!w-[100%] "
                onFinish={(values) => console.log(values)}
              >
                <div className="py-3">
                  <span class="block w-full uppercase font-bold text-paragraph">
                    Login
                  </span>
                  <span>Let's get connected</span>
                </div>
                <Form.Item
                  label={<h1 className="!text-[16px] !font-semibold">Email</h1>}
                  rules={[
                    { required: true, message: "Please enter your email" },
                    { type: "email", message: "Please enter valid email" },
                  ]}
                  name="email"
                >
                  <Input
                    placeholder="Enter email here"
                    className="!h-[45px] !w-[350px]  hover:!border-2 hover:!border-[#2828a0]"
                  />
                </Form.Item>

                <Form.Item
                  label={
                    <h1 className="!text-[16px] !font-semibold">Password</h1>
                  }
                  rules={[
                    { required: true, message: "Please enter your password" },
                    {
                      type: "password",
                      message: "please enter valid password",
                    },
                  ]}
                  name="password"
                >
                  <Input.Password
                    placeholder="Enter password"
                    className="!h-[45px]  !w-[350px]  hover:!border-2 hover:!border-[#2828a0]"
                  />
                </Form.Item>

                <div className="flex justify-center items-center gap-x-10 py-2">
                  <button
                    htmlType="submit"
                    className="bg-[#030334] hover:bg-[#0e0e4d] text-white uppercase text-sm font-semibold px-4 py-2 rounded"
                  >
                    Login
                  </button>
                  <button
                    className="!bg-[#030334] hover:bg-[#0e0e4d]  text-white uppercase text-sm font-semibold px-4 py-2 rounded"
                    onClick={() => setSignup(!signup)}
                  >
                    Sign Up
                  </button>
                </div>
                <div className="pb-1">
                  <div className="flex flex-col justify-center items-center py-1 gap-y-2">
                    <p className="font-bold">OR</p>
                    <button className="bg-white text-black hover:bg-gray-200  border border-black  flex text-sm font-semibold px-4 py-2  rounded-[25px]">
                      <img
                        src="./google.png"
                        className="w-[25px] cursor-pointer"
                        alt="img"
                      ></img>
                      <p className="cursor-pointer">Sign up with Google</p>
                    </button>
                  </div>
                </div>
                <div className="flex justify-center text-center pb-5">
                  <p class=" text-center text-sm " href="/login">
                    New User? You can &nbsp;
                  </p>
                  <p
                    className="text-[#f54d4d] cursor-pointer"
                    onClick={() => setSignup(!signup)}
                  >
                    Signup &nbsp;
                  </p>
                  <p> here &nbsp;</p>
                  <p className="text-[#f54d4d] cursor-pointer">
                    {" "}
                    Forgot Password ?
                  </p>
                </div>
              </Form>
            </div>
          </div>
          {/* sign up */}

          {/* <form className={`w-fill pt-7 ${signup ? "block" : "hidden"}`}>
            <div class=" bg-white rounded loginshadow p-8 m-4 md:max-w-sm md:mx-auto ">
              <span class="block w-full text-xl uppercase font-bold mb-4 text-paragraph">
                Sign Up
              </span>
              <span>Let's get connected</span>
              <form class="mb-4" action="/" method="post" className="pt-5  ">
                <div class="mb-4 md:w-full">
                  <label for="email" class="block text-xs mb-1">
                    Username
                  </label>
                  <input
                    class="w-full border rounded p-2 outline-none focus:shadow-outline"
                    type="text"
                    name="text"
                    id="text"
                    placeholder="Enter the Name"
                    required
                  />
                </div>
                <div class="mb-4 md:w-full">
                  <label for="email" class="block text-xs mb-1">
                    Email
                  </label>
                  <input
                    class="w-full border rounded p-2 outline-none focus:shadow-outline"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter the Email"
                    required
                  />
                </div>
                <div class="mb-6 md:w-full">
                  <label for="password" class="block text-xs mb-1">
                    Password
                  </label>
                  <input
                    class="w-full border rounded p-2 outline-none focus:shadow-outline"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    required
                  />
                </div>
                <div class="mb-6 md:w-full">
                  <label for="password" class="block text-xs mb-1">
                    Confirm Password
                  </label>
                  <input
                    class="w-full border rounded p-2 outline-none focus:shadow-outline"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Confirm Password "
                    required
                  />
                </div>
                <div className="flex justify-center gap-x-10 py-2">
                  <button class="bg-[#030334] hover:bg-[#0e0e4d] text-white uppercase text-sm font-semibold px-4 py-2 rounded">
                    Sign Up
                  </button>
                </div>

                <div className="flex flex-col justify-center items-center py-1 gap-y-3">
                  <p className="font-bold">OR</p>
                  <button className="bg-white text-black hover:bg-gray-200  border border-black  flex text-sm font-semibold px-4 py-2 rounded-[25px]">
                    <img
                      src="./google.png"
                      className="w-[25px] cursor-pointer"
                    ></img>
                    <p className="cursor-pointer">Sign up with Google</p>
                  </button>
                </div>
              </form>
              <div className="flex justify-center text-center">
                <p class=" text-center text-sm " href="/login">
                  Having account ? &nbsp;
                </p>
                <p className="text-[#f54d4d] cursor-pointer">Login &nbsp;</p>
              </div>
            </div>
          </form> */}
          <div>
            <div
              className={`bg-white w-[400px]  shadow-2xl flex items-start px-5 pt-[2vh] ${
                signup ? "block" : "hidden"
              } `}
            >
              <Form
                layout="vertical"
                className="!w-[100%] "
                onFinish={(values) => console.log(values)}
              >
                <div className="pb-2 ">
                  <span class="block w-full uppercase font-bold text-paragraph">
                    Sign Up
                  </span>
                  <span>Let's get connected</span>
                </div>

                <Form.Item
                  label={
                    <h1 className="!text-[16px] !font-semibold">Username</h1>
                  }
                  rules={[
                    { required: true, message: "Please enter your name" },
                    { type: "name", message: "Please enter valid name" },
                  ]}
                  name="name"
                >
                  <Input
                    placeholder="Enter your name"
                    className="!h-[38px] !w-[350px]  hover:!border-2 hover:!border-[#2828a0]"
                  />
                </Form.Item>
                <Form.Item
                  label={<h1 className="!text-[16px] !font-semibold">Email</h1>}
                  rules={[
                    { required: true, message: "Please enter your email" },
                    { type: "email", message: "Please enter valid email" },
                  ]}
                  name="email"
                >
                  <Input
                    placeholder="Enter email here"
                    className="!h-[38px] !w-[350px]  hover:!border-2 hover:!border-[#2828a0]"
                  />
                </Form.Item>

                <Form.Item
                  label={
                    <h1 className="!text-[16px] !font-semibold">Password</h1>
                  }
                  rules={[
                    { required: true, message: "please enter your password" },
                    {
                      type: "password",
                      message: "Please enter valid password",
                    },
                  ]}
                  name="password"
                >
                  <Input.Password
                    placeholder="Enter password"
                    className="!h-[38px] !w-[350px]  hover:!border-2 hover:!border-[#2828a0]"
                  />
                </Form.Item>
                <Form.Item
                  label={
                    <h1 className="!text-[16px] !font-semibold">
                      Confirm Password
                    </h1>
                  }
                  rules={[
                    {
                      required: true,
                      message: "Please enter your Confirm Password",
                    },
                    {
                      type: "Confirm Password",
                      message: "Password didn't match",
                    },
                  ]}
                  name="Confirm Password"
                >
                  <Input.Password
                    
                    placeholder="Enter password"
                    className="!h-[38px] !w-[350px]  hover:!border-2 hover:!border-[#2828a0]"
                  />
                </Form.Item>

                <div className="flex justify-center items-center gap-x-10 py-1">
                  <button
                    htmlType="submit"
                    className="!bg-[#030334] hover:bg-[#0e0e4d]  text-white uppercase text-sm font-semibold px-4 py-2 rounded"
                  >
                    Sign Up
                  </button>
                </div>
                <div className="pb-1">
                  <div className="flex flex-col justify-center items-center py-1 gap-y-1">
                    <p className="font-bold">OR</p>
                    <button className="bg-white text-black hover:bg-gray-200  border border-black  flex text-sm font-semibold px-4 py-2  rounded-[25px]">
                      <img
                        src="./google.png"
                        className="w-[25px] cursor-pointer"
                        alt="img"
                      ></img>
                      <p className="cursor-pointer">Sign up with Google</p>
                    </button>
                  </div>
                </div>
                <div className="flex justify-center text-center pb-3">
                  <p class=" text-center text-sm " href="/login">
                    Having account ? &nbsp;
                  </p>
                  <p
                    className="text-[#f54d4d] cursor-pointer"
                    onClick={() => setSignup(!signup)}
                  >
                    Login &nbsp;
                  </p>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
