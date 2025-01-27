import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -400 }}
      animate={{ y: 0 }}
      transition={{ type: "spring" }}
      className="shadow  pt-5"
      style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
    >
      <div className="container px-3  py-3 mx-auto md:flex">
        <div className="flex items-center justify-between">
          <div className="flex justify-center items-center w-full md:w-auto">
            <Link
              to="/"
              className="text-2xl font-bold text-red-900 md:text-4xl cursor-pointer ml-10 transition duration-500 ease-in-out hover:text-green-900"
              style={{ fontFamily: "Rowdies" }}
            >
              MARVELAPP
            </Link>
          </div>

          <button
            className="border border-red-900 p-2 rounded-md md:hidden"
            onClick={() => setOpen(!open)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        <div className="md:hidden">{open && <Dropdown className="" />}</div>

        {/* Not for mobile */}
        <div className="w-full hidden md:ml-14 md:flex md:items-center md:justify-between">
          <div className="  "></div>
          <div className="flex flex-col px-2 py-3 -mx-4 md:flex-row md:mx-0 md:py-0">
            <Link
              to="/"
              href="#"
              className="px-2 py-1 text-2xl font-bold text-red-900 cursor-pointer transition duration-500 ease-in-out hover:text-green-900  md:text-xl md:mx-2"
            >
              HOME
            </Link>

            <Link
              to="/feed"
              href="#"
              className="px-2 py-1 text-lg font-bold text-red-900 cursor-pointer transition duration-500 ease-in-out hover:text-green-900 md:text-xl md:mx-2"
            >
              SEARCH
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
