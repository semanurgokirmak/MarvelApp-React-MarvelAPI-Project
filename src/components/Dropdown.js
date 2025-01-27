import React from "react";
import { Link } from "react-router-dom";

const Dropdown = () => {
  return (
    <div className=" text-gray-900 font-bold">
      <div className="w-full text-center mt-3">
        <Link
          to="/"
          className="block px-2 py-1 text-2xl font-bold text-gray-100 text-center"
        >
          HOME
        </Link>

        <Link
          to="/feed"
          className="block px-2 py-1 text-2xl font-bold text-gray-100 text-center"
        >
          SEARCH
        </Link>
      </div>
    </div>
  );
};

export default Dropdown;
