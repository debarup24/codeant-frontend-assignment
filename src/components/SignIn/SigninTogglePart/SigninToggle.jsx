import React, { useState } from "react";
import { assets } from "../../../assets/assets";

const SigninToggle = () => {
  const [isSaasBtn, setSaasBtn] = useState(true);

  return (
    <div className="md:w-1/2 sm:w-full min-h-screen shadow-lg shadow-slate-800 p-6">
      {/* card */}
      <div className=" absolutebg-white md:w-[666px] md:h-[594px] rounded-xl mt-14 shadow-lg shadow-gray-400 border-2 border-gray-200">
        {/* upper part */}
        <div className="flex justify-center gap-3">
          <img
            className="w-[36px] items-center mt-9 h-10"
            src={assets.logo_black}
            alt=""
          />
          <img
            className="w-[153px] h-[33px] mt-9"
            src={assets.CodeAntAI_text}
            alt=""
          />
        </div>
        <p className="font-semibold md:text-3xl sm:text-2xl text-center p-2 mt-9 mb-6">
          Welcome to CodeAnt AI
        </p>

        <div className="grid grid-cols-6 text-center w-full justify-center border-gray-200 border-b-2 md:gap-1 sm:gap-3 overflow-hidden object-cover mx-auto">
          <button
            onClick={() => {
              setSaasBtn(true);
            }}
            className={`font-bold md:text-xl sm:text-lg  bg-gray-300 justify-center rounded-md md:px-[84px] sm:px-[45px] py-1 mb-8 col-span-3 ${
              isSaasBtn ? "bg-blue-600 text-white" : ""
            } ml-4`}
          >
            SAAS{" "}
          </button>
          <button
            onClick={() => {
              setSaasBtn(false);
            }}
            className={`flex font-bold md:text-xl sm:text-lg justify-center bg-gray-300 rounded-md md:px-[65px] sm:px-[45px] py-1  mb-8 col-span-3 ${
              isSaasBtn ? "" : "bg-blue-600 text-white"
            } mr-4`}
          >
            Self Hosted{" "}
          </button>
        </div>

        {/* lower part */}
        {/* SAAS = TRUE */}

        {isSaasBtn ? (
          <div className="flex flex-col px-4 md:px-28 ">
            <a
              href={"/repository"}
              className="py-3 mt-4 mb-4 flex justify-center gap-4 rounded-md
              bg-white border-gray-300 border-solid border-[1.5px]
              outline-none"
            >
              {" "}
              <img className="my-[4px]" src={assets.Github_icon} alt="" /> Sign
              in with GitHub
            </a>

            <a
              href={"/repository"}
              className="py-3 mb-4 flex justify-center gap-4 rounded-md bg-white border-gray-300 border-solid border-[1.5px] outline-none"
            >
              {" "}
              <img
                className="my-[4px]"
                src={assets.Bitbucket_icon}
                alt=""
              />{" "}
              Sign in with Bitbucket
            </a>
            <a
              href={"/repository"}
              button
              className="py-3 mb-4 flex justify-center gap-4 rounded-md bg-white border-gray-300 border-solid border-[1.5px] outline-none"
            >
              {" "}
              <img className="my-[4px]" src={assets.Azure_icon} alt="" /> Sign
              in with Azure Devops
            </a>

            <a
              href={"/repository"}
              className="py-3 mb-4 flex justify-center gap-4 rounded-md bg-white border-gray-300 border-solid border-[1.5px] outline-none"
            >
              {" "}
              <img className="my-[4px]" src={assets.GitLab_icon} alt="" />
              Sign in with GitLab
            </a>
          </div>
        ) : (
          // if Self Hosted = TRUE
          <div className="flex flex-col px-4 md:px-28 ">
            <a
              href={"/repository"}
              className="py-3 mt-4 mb-4 flex justify-center gap-4 rounded-md bg-white border-gray-300 border-solid border-[1.5px] outline-none"
            >
              {" "}
              <img className="my-[4px]" src={assets.GitLab_icon} alt="" /> Self
              Hosted GitLab
            </a>
            <a href=""></a>
            <button className="py-3 mb-4 flex justify-center gap-4 rounded-md bg-white border-gray-300 border-solid border-[1.5px] outline-none">
              {" "}
              <img className="my-[4px]" src={assets.Ssokey_icon} alt="" /> Sign
              in with SSO
            </button>
          </div>
        )}
      </div>

      <div>
        <p className="my-1 mt-4 mx-16">
          By signing up you agree to the{" "}
          <span className="font-bold">Privacy Policy.</span>
        </p>
      </div>
    </div>
  );
};

export default SigninToggle;
