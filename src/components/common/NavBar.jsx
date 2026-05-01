import React from "react";
import AnimatedTitle from "./AnimatedTitle";

const NavBar = () => {
  return (
    <div className="w-full h-fit fixed top-0 max-sm:justify-center left-0  sm:px-10 max-sm:pt-7 p-5 WhiteText justify-between flex z-999">
      {/* <p className=" uppercase"> Mosfet</p> */}
      <div className="w-[100px] max-sm:scale-[1.2]">
      <img src={`/img/logo.png`} alt="IMG" className="w-full object-cover  object-center"/>
      </div>

      <div className="w-full max-sm:hidden justify-center items-center h-fit flex flex-col  text-[14px]">
        <div className=" flex w-full max-sm:flex-col justify-end items-center sm:gap-5 max-sm:gap-1 text-[16px]">
          <a href="mailto:Support@mosfettech.com" className="flex gap-2 justify-center items-center"> ✉️ <AnimatedTitle text=" Support@mosfettech.com" /></a>
          <a href="tel:9999878104" className="flex gap-2 justify-center items-center"> <img src={`/img/phone.svg`} alt="IMG" className="h-[15px] object-cover object-center" /> <AnimatedTitle text=" 9999878104" /> </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
