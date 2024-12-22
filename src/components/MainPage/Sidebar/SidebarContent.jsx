import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { IoCodeSlashOutline } from "react-icons/io5";
import { IoIosCloudOutline } from "react-icons/io";
import { LuBookText } from "react-icons/lu";
import { LuSettings } from "react-icons/lu";
import { FiLogOut } from "react-icons/fi";

import { IoCallOutline } from "react-icons/io5";

const SidebarContent = () => {
  return (
    <div className="inline-flex flex-col justify-between">
      <div className="inline-flex flex-col px-4 md:px-2 ">
        <a
          href=""
          className="py-2  mt-4 mb-1 flex gap-2 rounded-lg
     bg-white md:bg-blue-600 md:text-white"
        >
          <AiOutlineHome className="ml-3 my-1" />{" "}
          <p className="text-[#414651] md:text-white font-semibold">
            Repositories
          </p>
        </a>

        <a
          href=""
          className="py-1 mb-1 flex gap-2 rounded-lg
     bg-transparent text-[#414651] border-gray-300 "
        >
          <IoCodeSlashOutline className="ml-3 my-1" />{" "}
          <p className="text-[#414651] font-semibold">AI Code Review</p>
        </a>

        <a
          href=""
          className="py-1 mb-1 flex gap-2 rounded-lg
     bg-transparent text-[#414651] border-gray-300 "
        >
          <IoIosCloudOutline className="ml-3 my-1" />{" "}
          <p className="text-[#414651] font-semibold">Cloud Security</p>
        </a>

        <a
          href=""
          className="py-1 mb-1 flex gap-2 rounded-lg
     bg-transparent text-[#414651] border-gray-300 "
        >
          <LuBookText className="ml-3 my-1" />{" "}
          <p className="text-[#414651] font-semibold">How to Use</p>
        </a>

        <a
          href=""
          className="py-1 mb-1 flex gap-2 rounded-lg
     bg-transparent text-[#414651] border-gray-300 "
        >
          <LuSettings className="ml-3 my-1" />{" "}
          <p className="text-[#414651] font-semibold">Settings</p>
        </a>
      </div>

      <div className="inline-flex mt-0 md:mt-[300px] ">
        <div className="inline-flex flex-col px-4 md:px-2">
          <a
            href=""
            className="py-1 mb-1 flex gap-2 rounded-lg
     bg-transparent text-[#414651] border-gray-300 "
          >
            <IoCallOutline className="ml-3 my-1" />{" "}
            <p className="text-[#414651] font-semibold">Support</p>
          </a>
          <a
            href=""
            className="py-1 mb-1 flex gap-2 rounded-lg
     bg-transparent text-[#414651] border-gray-300 "
          >
            <FiLogOut className="ml-3 my-1" />{" "}
            <p className="text-[#414651] font-semibold">Logout</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SidebarContent;