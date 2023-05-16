import React from "react";
import { Outlet } from "react-router-dom";
import SideNavBar from "../Components/DashBoard/SideNavBar";

const Dashboard = () => {
  return (
    <div className="grid h-screen grid-cols-5">
      <div>
        <SideNavBar></SideNavBar>
      </div>
      <div className="col-span-4 bg-slate-100">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
