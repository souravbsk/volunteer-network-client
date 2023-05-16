import React from "react";
import logoBrand from "../../assets/logos/Group 1329.png";
import { NavLink } from "react-router-dom";
import {FaUserFriends,FaPlus} from "react-icons/fa"
const SideNavBar = () => {
  return (
    <div>
      <div className="px-14 pt-6 mb-12">
        <NavLink>
          <img className="w-44 h-14 object-fill" src={logoBrand} alt="" />
        </NavLink>
      </div>
      <div className="pl-16">
        <ul className="space-y-4">
          <li>
            <NavLink to="/volunteer-list" className="flex items-center gap-4"><FaUserFriends></FaUserFriends>Volunteer register list</NavLink>
          </li>
          <li>
            <NavLink to="/addevent" className="flex items-center gap-4"><FaPlus></FaPlus>Add event</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNavBar;
