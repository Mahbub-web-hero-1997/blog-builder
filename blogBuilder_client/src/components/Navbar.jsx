import React from "react";
import useUIConfig from "../hook/useUIConfig";

const Navbar = () => {
  const [layoutData] = useUIConfig();
  const navLayout = layoutData[0]?.navbar;
  //   Load Navbar Items using map
  const navItem = navLayout?.items?.map((item) => {
    return (
      <li key={item?.label}>
        <a href={item?.link}>{item?.label}</a>
      </li>
    );
  });

  console.log("Navbar Items", navLayout);
  return (
    <div className="navbar bg-gray-700 shadow-sm text-white">
      <div className="navbar-start">
        <div className="dropdown ">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-gray-600 z-1 mt-3 w-52 p-2 shadow text-xl"
          >
            {navItem}
          </ul>
        </div>
        <a href="/" className="text-3xl font-semibold">
          {navLayout?.logoText}
        </a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl">{navItem}</ul>
      </div>
    </div>
  );
};

export default Navbar;
