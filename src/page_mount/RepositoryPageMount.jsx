import React from "react";
import Sidebar from "../components/MainPage/Sidebar/Sidebar";
import Repository from "../components/MainPage/Repository/Repository";

const RepositoryPageMount = () => {
  return (
    <div>
      <div className="flex w-full gap-1 justify-between">
        <Sidebar />
        <Repository />
      </div>
    </div>
  );
};

export default RepositoryPageMount;
