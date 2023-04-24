import React, { useState } from 'react'
import '../Login/Login.css'
export default function Login() {

    const [signup, setSignup] = useState(false);
   
    return (
      <div className=" ">
        <div className="flex flex-row justify-center items-center h-[100%]">
          <div className="basis-3/4 object-cover w-[100%] h-[86%] pl-10 mt-5">
            <img
              src="./login.jpg"
              className="object-fill w-[100%] h-[100%]"
            ></img>
          </div>
          <div className="w-[50vw] basis-2/4">
            {/* login */}

            <form className="w-fill pt-7 login">
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
                  <div className="flex justify-center gap-x-10 py-2">
                    <button class="bg-[#030334] hover:bg-[#0e0e4d] text-white uppercase text-sm font-semibold px-4 py-2 rounded">
                      Login
                    </button>
                    <button
                      class="!bg-[#030334] hover:bg-[#0e0e4d] text-white uppercase text-sm font-semibold px-4 py-2 rounded"
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
            </form>

            {/* sign up */}

            <form className="w-fill pt-7 signup" open={signup}>
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
            </form>
       
          </div>
        </div>
      </div>
    );
}
