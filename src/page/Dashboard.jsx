import React, { useState } from "react";
import Navbar from "../component/dashboard/Navbar";
import Sidebar from "../component/dashboard/Sidebar";
import DashboardStats from "../component/dashboard/dashboardStats/DashboardStats";
import { Outlet, Route, Routes } from "react-router-dom";

const Dashboard = ({ toggleSidebar, setToggleSodebar }) => {
  return (
    <div className="flex h-screen overflow-y-auto pt-[4rem] bg-gray-100">
      {/* Sidebar  */}
      <div className="sticky top-0 left-0 z-20 ">
        <div
          className={`absolute h-full xl:sticky w-[7rem] overflow-hidden bg-white shadow-xl ${
            toggleSidebar ? " translate-x-0" : "translate-x-[-110%]"
          }  xl:translate-x-0 transition-all duration-300`}
        >
          <Sidebar setToggleSodebar={setToggleSodebar} />
        </div>
      </div>

      {/* Content Layout  */}
      <div className="w-full xl:flex-1 ">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
