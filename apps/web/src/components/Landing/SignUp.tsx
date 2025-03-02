"use client";
import { addAccount } from "@/functions/userAccount/User";
import { createAccount, logInUser } from "@/Hooks/userApi";
import React, { useEffect, useState } from "react";
import { MdEmail } from "react-icons/md";
import { MdOutlineCancel } from "react-icons/md";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

export const Account = ({
  param,
  showModalSignUp,
}: {
  param: string;
  showModalSignUp: any;
}) => {
  const [action, setAction] = useState(param);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const accountLogin = async (e: any) => {
    try {
      e.preventDefault();
      if (action === "signUp") {
        const response = await createAccount({ email, username, password });
        alert("Now u can login with same credentials");
      } else {
        const response = await logInUser({ username, password });
        const reduxEmail = response.data.userExisted.email;
        const reduxUsername = response.data.userExisted.username;
        dispatch(
          addAccount({
            email: reduxEmail,
            username: reduxUsername,
            userLoggedIn: true,
          })
        );
        toast.success("Successfully logged in", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
        });
      }
    } catch (error) {
      toast.error(`Unsuccessfull Wrong Credential! Please SignUp First!`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
    }
  };

  return (
    // <section className=" flex justify-center
    // items-center z-50">
    //   <div className="bg-white rounded-lg shadow-lg relative p-6 w-[600px]">
    <section
      className="w-full fixed inset-0 bg-black/50  z-40 
       h-screen "
    >
      <div
        className="bg-white rounded-lg shadow-lg
       relative pr-[18px] flex mx-auto py-4
        mt-[296px] w-[900px] max-lg:w-[500px]"
      >
        <div className="w-3/5 max-lg:hidden">
          <img src="https://www.shutterstock.com/image-vector/customer-profile-account-mobile-application-600nw-1308930601.jpg" />
        </div>
        <div className="w-2/5 max-lg:w-full max-lg:px-4 ">
          <MdOutlineCancel
            onClick={() => {
              showModalSignUp(false);
            }}
            className=" cursor-pointer top-4 absolute right-4 w-9 h-9"
          />

          <h2 className="flex gap-2">
            <span
              className={`${action == "login" ? "border-b-[4px] pb-2 w-fit border-[#1AB9F4]" : ""}  cursor-pointer `}
              onClick={() => setAction("login")}
            >
              Login
            </span>
            or
            <span
              onClick={() => setAction("signUp")}
              className={`${action == "signUp" ? "border-b-[4px] pb-2 w-fit border-[#1AB9F4]" : ""}  cursor-pointer `}
            >
              SignUp
            </span>{" "}
          </h2>

          <form className="space-y-6 mt-[64px] ">
            {action === "signUp" && (
              <div className="">
                <label>Email</label>
                <div
                  className="bg-[#FBFBFB] border-[#e6e6e6] border-[1px] 
                border-solid hover:shadow-md pl-2 flex items-center gap-2
                    "
                >
                  <MdEmail className="text-[#757575] w-[21px] h-[21px]" />
                  <input
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    className="outline-none py-2 w-full text-[#757575]"
                    placeholder="Email"
                  ></input>
                </div>
              </div>
            )}
            <div>
              {" "}
              <label>Username</label>
              <div
                className="bg-[#FBFBFB]
                 border-[#e6e6e6] border-[1px] 
                border-solid hover:shadow-md pl-2 flex items-center gap-2
                    "
              >
                <MdEmail className="text-[#757575] w-[21px] h-[21px]" />
                <input
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  className="outline-none py-2 
                  w-full text-[#757575]"
                  placeholder="Username"
                ></input>
              </div>
            </div>{" "}
            <div>
              {" "}
              <label>Password</label>
              <div
                className="bg-[#FBFBFB] border-[#e6e6e6] border-[1px] 
                border-solid hover:shadow-md pl-2 flex items-center gap-2
                    "
              >
                <MdEmail className="text-[#757575] w-[21px] h-[21px]" />
                <input
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className="outline-none py-3 w-full text-[#757575]"
                  placeholder="Password"
                ></input>
              </div>
            </div>
            <button
              onClick={(e) => {
                accountLogin(e);
              }}
              className="bg-[#1AB9F4] cursor-pointer
            font-[500] text-white w-full py-3 px-4 rounded-md 
            hover:opacity-90"
            >
              {action === "signUp" ? "CREATE ACCOUNT" : "LOGIN"}
            </button>
          </form>
          <p>
            {" "}
            {action === "signUp"
              ? `Already have an account? `
              : "Create Account"}
            {action === "signUp" && (
              <a
                onClick={() => setAction("login")}
                href="#"
                className="text-[#1AB9F4]"
              >
                SignUp
              </a>
            )}{" "}
            {action === "login" && (
              <a
                onClick={() => setAction("signUp")}
                href="#"
                className="text-[#1AB9F4]"
              >
                Login
              </a>
            )}
          </p>
          <div className="flex items-center mt-5">
            <div className="flex-grow h-[1px] bg-black mt-1"></div>
            <span className="mx-2">or</span>
            <div className="flex-grow h-[1px] mt-1 bg-black"></div>
          </div>
          <div className="flex mb-3 flex-nowrap gap-2">
            <div className="px-2  w-1/2  sm:px-0 max-w-sm">
              <button
                type="button"
                className="text-white  
                  bg-[#4285F4] hover:bg-[#4285F4]/90
                   focus:ring-4 focus:outline-none
                    focus:ring-[#4285F4]/50 font-medium 
                    rounded-lg text-sm px-2 py-3
                     text-center inline-flex items-center
                      justify-between "
              >
                <svg
                  className="mr-2 -ml-1 w-4 h-4"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="google"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 488 512"
                >
                  <path
                    fill="currentColor"
                    d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                  ></path>
                </svg>
                {action === "signUp"
                  ? ` Sign up with Google `
                  : " Login with Google"}{" "}
                <div></div>
              </button>
            </div>
            <button
              type="button"
              className="py-2 w-1/2 whitespace-nowrap 
               flex justify-center items-center
                bg-blue-600 hover:bg-blue-700
                 focus:ring-blue-500 focus:ring-offset-blue-200
                  text-white transition ease-in duration-200
                   text-center text-base font-semibold 
                   shadow-md focus:outline-none focus:ring-2 
                   focus:ring-offset-2 rounded-lg"
            >
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="mr-2"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"></path>
              </svg>
              {action === "signUp"
                ? ` Sign up with facebook `
                : " Login with facebook"}{" "}
              <div></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
