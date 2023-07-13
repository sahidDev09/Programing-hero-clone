import React from "react";

const Navbar = () => {
  return (
    <header>
      <div
        id="maindiv"
        className=" text-white sm:flex justify-between text-center">
        <div id="imgdiv" className=" p-5 sm:p-0">
          <img src="https://www.programming-hero.com/img/logo.png" alt="" />
        </div>

        <div id="navitems">
          <ul className=" sm:flex items-center justify-center gap-6">
            <li className=" hover:text-blue-500 transition-all">HOME</li>
            <li className="hover:text-blue-500 transition-all">APP</li>
            <li className="hover:text-blue-500 transition-all">COURSES</li>
            <li className="hover:text-blue-500 transition-all">HIRE FROM US</li>
            <li className="hover:text-blue-500 transition-all">ABOUT US</li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
