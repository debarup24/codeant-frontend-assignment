import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const UserDropdown = () => {
  const { setUser } = useContext(UserContext);

  const userHandler = (event) => {
    switch (event.target.value) {
      case "user1": {
        setUser({ name: "UtkarshDhairyaPanwar" });
        break;
      }
      case "user2": {
        setUser({ name: "Amartya Jha" });
        break;
      }
      case "user3": {
        setUser({ name: "Chinmay Bharti" });
        break;
      }
      case "user4": {
        setUser({ name: "CodeAnt Bot" });
        break;
      }

      case "user5": {
        setUser({ name: "Debarup Sarkar" });
        break;
      }
      default: {
        setUser({ name: "UtkarshDhairyaPanwar" });
        break;
      }
    }
  };

  return (
    <div>
      <div>
        <select
          onChange={userHandler}
          className="w-full md:w-48 bg-transparent p-1 rounded-md border-gray-300 border-2"
        >
          <option value="user1">UtkarshDhairyaPanwar</option>
          <option value="user2">AmartyaJha</option>
          <option value="user3">ChinmayBharti</option>
          <option value="user4">CodeAnt Bot</option>
          <option value="user5">DebarupSarkar</option>
        </select>
      </div>
    </div>
  );
};

export default UserDropdown;
