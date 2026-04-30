import React from "react";
import AnimatedTitle from "./AnimatedTitle";

const NavBar = () => {
  return (
    <div className="w-full h-fit fixed top-0 mix-blend-difference left-0 z-100 p-5 WhiteText justify-between flex">
      <p className=" uppercase"> Mosfet</p>

      <div className="w-full justify-center items-center h-fit flex flex-col text-[14px]">
        <div className=" flex flex-col gap-1 text-[16px]">
         <a href="mailto:mosfettech@gmail.com"> <AnimatedTitle text="mosfettech@gmail.com" /></a>
          <a href="tel:9999878104"> <AnimatedTitle text="9999878104" /> </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
