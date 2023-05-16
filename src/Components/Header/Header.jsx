import React, { useContext, useState } from "react";
import brandLogo from "../../assets/logos/Group 1329.png";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import {FaBars} from "react-icons/fa"

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isToggle, setToggle] = useState(false);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
      <div className="navbar absolute top-0 left-0 right-0 py-8 md:py-11 w-full md:w-10/12 md:mx-auto">
        <div className="flex-1">
          <div className="flex md:px-0 px-5  w-full justify-between">
            <Link to="/" className="">
              <img className="w-40 object-fill h-12" src={brandLogo} alt="" />
            </Link>
            <button className="text-2xl block md:hidden" onClick={() => setToggle(!isToggle)}><FaBars></FaBars></button>
          </div>
        </div>
        <div className="flex-none">
          <ul
            className={`md:menu-horizontal z-40 md:p-0 px-7 top-28 p-8 space-y-2 md:bg-transparent bg-slate-200 absolute md:static duration-300 items-center gap-8 ${
              isToggle ? "left-0" : "-left-56"
            }`}
          >
            <li>
              <NavLink to="/" className="font-semibold">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="font-semibold">Donation</NavLink>
            </li>
            {user && (
              <li>
                <NavLink to="/myevents" className="font-semibold">
                  My Events
                </NavLink>
              </li>
            )}
            <li>
              <NavLink className="font-semibold">Blog</NavLink>
            </li>
            <li>
              {user ? (
                <div className="flex flex-col md:block">
                  <span className="mr-5">{(user?.email).slice(0, 10)}</span>
                  <button
                    onClick={handleLogOut}
                    className="btn bg-blue-600 px-8 py-2"
                  >
                    LogOut
                  </button>
                </div>
              ) : (
                <NavLink to="/login">
                  <button className="btn bg-blue-600 px-8 py-2">Login</button>
                </NavLink>
              )}
            </li>
            <li>
              <NavLink to="/dashboard">
                <button className="btn rounded-md">Admin</button>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

  );
};

export default Header;
