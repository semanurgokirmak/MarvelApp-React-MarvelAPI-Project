import React from "react";
import iron from "../images/iron.png";
import { Link } from "react-router-dom";
import Typical from "react-typical";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="grid lg:grid-cols-2 m-8 mx-auto text-left">
      <div className="ml-8 font-semibold text-2xl text-white tracking-widest ">
        <motion.h4
          initial={{ x: -200, opacity: 0 }}
          transition={{ type: "spring", duration: 0.8 }}
          animate={{ x: 0, opacity: 100 }}
          className="md:mt-24"
        >
          get <br /> details <br /> of <br /> every
        </motion.h4>

        <p className="mt-2 text-red-900 font-bold text-2xl md:text-3xl">
          Super
          <Typical
            steps={["Hero", 3000, "Villain", 2000, "Human", 2000]}
            loop={Infinity}
          />
        </p>
        <Link to="/feed">
          <button className="text-sm bg-green-900 p-3 md:w-1/3 mt-10 transition duration-500 ease-in-out hover:bg-green-800 transform hover:scale-110 text-white font-thin rounded-2xl">
            Search
          </button>
        </Link>
      </div>
      <motion.div className="hidden h-1/2  lg:block md:grid-cols-6 text-white">
        <motion.img
          initial={{ x: 200, opacity: 0 }}
          transition={{ duration: 1.5 }}
          animate={{ x: 0, opacity: 100 }}
          className="relative z-10 w-4/5"
          src={iron}
          alt=""
        />
      </motion.div>
    </div>
  );
};

export default Home;
