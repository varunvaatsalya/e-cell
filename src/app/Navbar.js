"use client";
import { useEffect, useState } from "react";
import * as FaIcons from "react-icons/fa6";
import * as ImIcons from "react-icons/im";
export default function Navbar() {
  const [isVisible, setisVisible] = useState(false);
  const [isBtnVisible, setisBtnVisible] = useState(true);
  const toggleSlide = () => {
    setisVisible(!isVisible);
    fadeOutAndIn();
  };
  const fadeOutAndIn = () => {
    setisBtnVisible(false);
    setTimeout(() => {
      setisBtnVisible(true);
    }, 600);
  };
  const [show, setShow] = useState(true);
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 150) {
        setShow(false);
      } else {
        setShow(true);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [show]);
  return (
    <>
      <div
        className={`h-screen w-96 fixed z-10 bg-red-400 top-0 right-0 transition-transform duration-500 ${
          isVisible ? "transform translate-x-0" : "transform translate-x-full"
        }`}
      ></div>
      {isBtnVisible && <div
        className=" fixed z-20 right-4 md:right-6 lg:right-8 xl:right-8 h-16 flex items-center text-2xl px-6 hover:cursor-pointer hover:text-gray-300 transition duration-200 scale-75 md:scale-90 lg:scale-100 xl:scale-100"
        onClick={toggleSlide}
      >
        {show ? (
          <>
            <div className="hidden md:block lg:block xl:block text-xl font-semibold">
              {!isVisible ? "MENU" : "CLOSE"}
            </div>
          </>
        ) : (
          <div></div>
        )}
        <div className="bg-black p-5">
          {!isVisible ? <FaIcons.FaBars /> : <ImIcons.ImCross />}
        </div>
      </div>}
    </>
  );
}

// {show ? (
//   <>
//     <div className="hidden md:block lg:block xl:block text-xl font-semibold">
//       MENU
//     </div>
//   </>
// ) : (
//   <></>
// )}
// <div className="bg-black p-5">
//   <FaIcons.FaBars />
// </div>
