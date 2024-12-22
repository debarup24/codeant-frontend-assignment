import React from "react";
import { assets } from "../../assets/assets";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { IoMenuSharp } from "react-icons/io5";
import UserDropdown from "../../Utils/UserDropdown";
import SidebarContent from "./Sidebar/SidebarContent";

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const expandNavbar = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="fixed top-0 left-0 bg-[#FFFFFF] border-b border-gray-300 p-4 flex flex-col items-start gap-6 w-full z-[9999]">
      <div className="flex items-center justify-between w-full">
        <div className="flex gap-2">
          <img className="w-6 " src={assets.logo_black} alt="" />
          <p className="font-light text-xl">CodeAnt AI</p>
        </div>
        <button onClick={expandNavbar}>
          {" "}
          {isExpanded ? (
            <RxCross1 className="h-6 w-6 " />
          ) : (
            <IoMenuSharp className="h-6 w-6 " />
          )}
        </button>
      </div>

      {isExpanded && (
        <div className="w-full h-1/2">
          <UserDropdown />

          <SidebarContent />
        </div>
      )}
    </div>
  );
};

export default Navbar;
