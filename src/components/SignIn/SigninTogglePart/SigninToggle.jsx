import React, { useState } from "react";
import { assets } from "../../../assets/assets";

const SigninToggle = () => {
  const [isSaasBtn, setSaasBtn] = useState(true);

  return (
    <div className="md:w-1/2 sm:w-full min-h-screen bg-gray-50 p-6">
      {/* card */}
      <div className=" bg-white md:w-[666px] md:h-[594px] rounded-xl mt-14 shadow-lg shadow-gray-200 border-2 border-gray-200">
        {/* upper part */}
        <div className="flex justify-center gap-3">
          <img
            className="w-[36px] items-center mt-9 h-10"
            src={assets.logo_black}
            alt=""
          />
          <p className="font-light text-4xl mt-9">CodeAnt AI</p>
        </div>
        <p className="font-semibold md:text-3xl sm:text-2xl text-center p-2 mt-9 mb-6">
          Welcome to CodeAnt AI
        </p>

        <div className="grid grid-cols-6 text-center w-full justify-center border-gray-200 border-b-2 md:gap-0 sm:gap-2 overflow-hidden object-cover mx-auto">
          <button
            onClick={() => {
              setSaasBtn(true);
            }}
            className={`font-bold md:text-xl sm:text-lg justify-center rounded-md md:px-[84px] sm:px-[45px] py-1 mb-8 col-span-3 ${
              isSaasBtn
                ? "bg-[#1570EF] text-white"
                : "bg-gray-100 text-[#414651]"
            } ml-4`}
          >
            SAAS{" "}
          </button>
          <button
            onClick={() => {
              setSaasBtn(false);
            }}
            className={`flex font-bold md:text-xl sm:text-lg justify-center rounded-md md:px-[65px] sm:px-[45px] py-1 mb-8 col-span-3 ${
              isSaasBtn
                ? "bg-gray-100 text-[#414651]"
                : "bg-[#1570EF] text-white"
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
            <a
              href={"/repository"}
              className="py-3 mb-4 flex justify-center gap-4 rounded-md bg-white border-gray-300 border-solid border-[1.5px] outline-none"
            >
              {" "}
              <img className="my-[4px]" src={assets.Ssokey_icon} alt="" /> Sign
              in with SSO
            </a>
          </div>
        )}
      </div>

      <div>
        <p className="flex my-1 mt-4 mx-2 md:mx-auto justify-center">
          By signing up you agree to the <span>{""}</span>
          <span className="font-bold text-sm mx-1 my-1 hover:underline">
            Privacy Policy.
          </span>
        </p>
      </div>
    </div>
  );
};

export default SigninToggle;
