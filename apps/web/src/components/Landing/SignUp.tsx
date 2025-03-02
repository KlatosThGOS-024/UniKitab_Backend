import React from "react";
import { MdEmail } from "react-icons/md";

export const SignUp = () => {
  return (
    <section className="w-full  h-screen i-0 bg- bg-opacity-50 z-50">
      <div className=" flex mx-auto mt-[296px] w-[900px] ">
        <div className="w-3/5">
          <img src="https://www.shutterstock.com/image-vector/customer-profile-account-mobile-application-600nw-1308930601.jpg" />
        </div>
        <div className="w-2/5">
          <h2></h2>
          <form className="space-y-6 ">
            <div className="">
              {" "}
              <label>Email</label>
              <div
                className="bg-[#FBFBFB] px-2 py-2 flex   items-center gap-2
                     border-[1px]"
              >
                <MdEmail className="text-[#757575] w-[21px] h-[21px]" />
                <input
                  className="outline-none hover:shadow-xl text-[#757575]"
                  placeholder="Email"
                ></input>
              </div>
            </div>{" "}
            <div>
              {" "}
              <label>Username</label>
              <div
                className="bg-[#FBFBFB] px-2 py-2 flex items-center gap-2
                     border-[1px]"
              >
                <MdEmail className="text-[#757575] w-[21px] h-[21px]" />
                <input
                  className="outline-none hover:shadow-xl text-[#757575]"
                  placeholder="Username"
                ></input>
              </div>
            </div>{" "}
            <div>
              {" "}
              <label>Password</label>
              <div
                className="bg-[#FBFBFB] px-2 py-2 flex items-center gap-2
                     border-[1px]"
              >
                <MdEmail className="text-[#757575] w-[21px] h-[21px]" />
                <input
                  className="outline-none hover:shadow-xl text-[#757575]"
                  placeholder="Password"
                ></input>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
