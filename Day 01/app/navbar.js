import React from "react";
import "./globals.css";

const navbar = () => {
  return (
    <div className="w-[99.8vw] absolute flex justify-between items-center px-10 py-6 uppercase text-2xl bg-transparent text-white">
      <div className="font-bold">Logo</div>
      <div>
        <ul className="flex">
          <li className="mx-10 p-2 hover:underline hover:bg-white hover:text-purple-700 hover:font-bold">
            Home
          </li>
          <li className="mx-10 p-2 hover:underline hover:bg-white hover:text-purple-700 hover:font-bold">
            About
          </li>
          <li className="mx-10 p-2 hover:underline hover:bg-white hover:text-purple-700 hover:font-bold">
            Services
          </li>
          <li className="mx-10 p-2 hover:underline hover:bg-white hover:text-purple-700 hover:font-bold">
            Contact
          </li>
        </ul>
      </div>
      <div>
        <button className="px-8 py-2 bg-orange-400 uppercase rounded-lg">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default navbar;
