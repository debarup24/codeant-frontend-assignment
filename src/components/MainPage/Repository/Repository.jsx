import React, { useState } from "react";
import { LuRefreshCw } from "react-icons/lu";
import { FaPlus } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";
import { RepoData } from "../../../constant/RepoData";
import { GoDatabase } from "react-icons/go";

const Repository = () => {
  const [filterdRepoData, setFilterdRepoData] = useState(RepoData);

  const handleSearch = (e) => {
    const value = e.target.value;
    const filtered = RepoData.filter(
      (item) =>
        item.title.toLowerCase().includes(value.toLowerCase()) ||
        item.tech.toLowerCase().includes(value.toLowerCase())
    );
    setFilterdRepoData(filtered);
  };

  return (
    <div className="p-0 md:py-1 md:px-3 w-screen">
      <div className="bg-white w-full rounded-xl border flex flex-col">
        <div className="flex justify-between items-center flex-wrap gap-4">
          <div className="flex flex-col p-1 md:p-2 mx-2 mt-16 md:mt-0">
            <p className="font-semibold text-xl">Repositories</p>
            <p className="font-light text-sm">33 total repositories</p>
          </div>

          <div className="flex gap-2 p-0 md:p-4 ml-2 md:ml-0 ">
            <button className="flex text-xs items-center p-2 px-4 gap-2 rounded-md border">
              {" "}
              <LuRefreshCw className="size-4" /> Refresh All
            </button>
            <button className="flex text-xs items-center p-2 px-4 gap-2 bg-[#1570EF] text-white rounded-md">
              <FaPlus className="size-4" /> Add Repository
            </button>
          </div>
        </div>
        {/* Search btn */}
        <div className="px-1 mt-2 md:mt-1 mb-2 mx-1 md:mx-1">
          <label
            htmlFor="inputSearch"
            className="border w-fit rounded-md flex gap-2 items-center px-2 py-2"
          >
            <IoSearchSharp className={`size-4 stroke-2`} />
            <input
              id="inputSearch"
              placeholder="Search Repositories"
              onChange={handleSearch}
              className="text-xs w-52 placeholder:text-gray-700 outline-none"
            />
          </label>
        </div>

        <div className="flex flex-col w-full">
          {filterdRepoData.length >= 1 ? (
            filterdRepoData.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col p-4 gap-3 hover:bg-gray-100 ${
                  index !== filterdRepoData.length - 1 ? "border-b" : ""
                } ${index === 0 ? "border-t " : ""}`}
              >
                <div className={`flex gap-2 items-center`}>
                  <span>{item.title}</span>
                  <span
                    className={`bg-[#EFF8FF] border border-[#B2DDFF] text-primary text-blue-600 text-xs px-2 rounded-full`}
                  >
                    {item.visibility}
                  </span>
                </div>
                <div className={`flex gap-4 md:gap-8 text-sm font-light`}>
                  <span className={`flex items-center gap-2`}>
                    {item.tech}
                    <span className={`bg-[#1570EF] p-1 rounded-full`}></span>
                  </span>
                  <span className={`flex items-center gap-2`}>
                    <GoDatabase className={`w-4`} />
                    {item.size}
                  </span>
                  <span>
                    Updated {""} {item.updatedAt} {""} ago
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className="flex flex-col border-b p-4 gap-3 text-gray-500 text-center">
              Repository not found!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Repository;
