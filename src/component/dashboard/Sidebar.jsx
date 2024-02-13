import React from "react";
import { IoHomeSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Sidebar = ({ setToggleSodebar }) => {
  const NavItem = [
    {
      title: "Home",
      icon: <IoHomeSharp />,
      path: "/",
    },
  ];

  return (
    <div className=" px-2 py-6">
      <div className=" flex items-center flex-col justify-center gap-4">
        {/* NavItem  */}
        {NavItem.map((item, index) => (
          <Link
            to={item.path}
            key={index}
            onClick={() => setToggleSodebar(false)}
          >
            <div className="w-fit px-4 cursor-pointer py-2 rounded-lg bg-blue-900 flex flex-col items-center justify-center">
              <span className=" text-3xl text-white ">{item.icon}</span>
              <span className=" text-white font-semibold">{item.title}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
