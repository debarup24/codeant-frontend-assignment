import React from "react";
import { assets } from "../../../assets/assets";
import { FaArrowUp } from "react-icons/fa";

const AiToDetect = () => {
  return (
    <div className="max-sm:hidden max-md:visible max-lg:visible min-h-screen mr-8 p-4 w-1/2 ">
      {/* cards 1 */}
      <div className="items-center">
        <div className="absolute z-0 w-[447px] h-[170px] p-4 rounded-3xl shadow-xl shadow-slate-300 bg-white mt-[110px] ml-[123px]">
          {/* upper part */}
          <div className="flex flex-row gap-2 mt-[8px] ml-[14px] border-gray-200 border-b-2">
            <img className="w-7 h-8 mb-5 z-10" src={assets.logo_black} alt="" />
            <div className="font-bold mb-4 text- text-[18px]">
              AI to Detect & Autofix Bad Code
            </div>
          </div>

          {/* lower part */}
          <div className="grid grid-cols-3 justify-between mt-4">
            <div className="items-center">
              <div className="mx-8">
                <p className="font-bold text-lg">30+</p>
              </div>
              <div>
                <p className="font-normal text-sm">Language Support</p>
              </div>
            </div>
            <div className="items-center">
              <div className="mx-4">
                <p className="font-bold text-lg">10k+</p>
              </div>
              <div>
                <p className="font-normal text-sm">Developers</p>
              </div>
            </div>
            <div>
              <div className="mx-4">
                <p className="font-bold text-lg">100k+</p>
              </div>
              <div>
                <p className="font-normal text-sm">Hours Saved</p>
              </div>
            </div>
          </div>
        </div>

        {/* card 2 */}
        <div className="absolute z-10 w-[265px] h-[164px] p-4 rounded-3xl shadow-2xl shadow-slate-300 bg-white ml-[327px] mt-[265px] ">
          {/* upper part */}
          <div>
            <div className="grid grid-cols-2 justify-between ">
              <img className="ml-2" src={assets.Ellipse_1} alt="" />
              <p className="flex gap-1 text-blue-700 text-sm font-bold absolute top-5 right-8">
                {" "}
                <FaArrowUp />
                14%
              </p>
            </div>
            <p className="absolute top-10 right-7 font-normal text-xs">
              This week
            </p>
            <p className="font-bold text-sm absolute bottom-14 left-6 ">
              Issues Fixed
            </p>
            <p className="font-bold text-3xl absolute bottom-4 left-6 ">
              500k+
            </p>
          </div>

          {/* lower part */}
          <div></div>
        </div>
        <div className="max-sm:hidden max-md:visible max-lg:visible">
          <img
            className="w-[284px] h-[319px] opacity-40 absolute bottom-2 left-2 "
            src={assets.logo_big}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AiToDetect;
