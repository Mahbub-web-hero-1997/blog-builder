// src/components/Navbar.jsx
import React from "react";
import UseLayout from "../CustomHook/UseLayout";

const Navbar = () => {
  const { navbarConfig, isLoading, isError } = UseLayout();

  if (isLoading) return null;
  if (isError || !navbarConfig) return null;

  return (
    <nav
      className="w-full shadow-xl sticky top-0 z-50 backdrop-blur-md bg-opacity-80 bg-gradient-to-r from-cyan-700 via-blue-900 to-indigo-900"
      style={{
        display: navbarConfig.layoutType,
        justifyContent: navbarConfig.justify,
        alignItems: navbarConfig.alignItems,
        padding: navbarConfig.padding,
        background: navbarConfig.background,
      }}
    >
      <div className="max-w-7xl mx-auto w-full flex flex-wrap justify-between items-center px-6 md:px-12 py-4">
        {/* Left: Site Logo */}
        <h1
          style={{
            color: navbarConfig.logo.color,
            fontSize: navbarConfig.logo.fontSize,
          }}
          className="font-extrabold tracking-wide select-none cursor-pointer hover:text-cyan-400 transition-colors duration-300 text-2xl md:text-3xl drop-shadow-lg"
        >
          {navbarConfig.logo.text}
        </h1>
        {/* Right: Navigation Links */}
        <div className="flex gap-6 items-center flex-wrap text-white text-lg font-semibold">
          {navbarConfig.links.map((link, i) => (
            <a
              key={i}
              href={link.url}
              className="relative group px-2 py-1 rounded-md hover:text-cyan-400 transition-colors duration-300"
              style={{ color: link.color }}
            >
              {link.label}
              {/* Underline animation */}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
