import React, { useState } from "react";
import { assets } from "../../../assets/assets";
import Navbar from "../Navbar";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import UserDropdown from "../../../Utils/UserDropdown";
import SidebarContent from "./SidebarContent";
import MinimizeSidebar from "../../../Utils/MinimizeSidebar";
import { CiUser } from "react-icons/ci";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const Sidebar = () => {
  const [IsExtended, setIsExtended] = useState(true);

  const toggleMaxMinBtn = (e) => {
    e.preventDefault();
    setIsExtended(!IsExtended);
  };

  return (
    <div className="">
      <div className="md:hidden lg:hidden block">
        <Navbar />
      </div>

      <div
        className={`hidden md:inline-flex flex-col min-h-screen ${
          IsExtended ? "w-60" : "w-24"
        } py-3 px-3 bg-white shadow-sm shadow-gray-400`}
      >
        {IsExtended ? (
          <FaRegArrowAltCircleLeft
            onClick={toggleMaxMinBtn}
            className={`cursor-pointer size-4 ${
              IsExtended ? "ml-48" : "ml-20"
            } `}
          />
        ) : (
          <FaRegArrowAltCircleRight
            onClick={toggleMaxMinBtn}
            className={`cursor-pointer size-4 ${
              IsExtended ? "ml-48" : "ml-16"
            } `}
          />
        )}

        <div className="mx-auto block py-1 px-2 mb-6">
          <div className="flex flex-row gap-2">
            <img
              className={` ${IsExtended ? "w-6" : "w-5"}`}
              src={assets.logo_black}
              alt=""
            />
            {IsExtended && <p className="font-light text-2xl">CodeAnt AI</p>}
          </div>
        </div>

        <div className="mt-1 px-2 items-center">
          {IsExtended ? <UserDropdown /> : <CiUser className="ml-4 size-5" />}
        </div>

        <div>{IsExtended ? <SidebarContent /> : <MinimizeSidebar />}</div>
      </div>
    </div>
  );
};

export default Sidebar;
