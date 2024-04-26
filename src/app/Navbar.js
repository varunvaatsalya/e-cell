"use client";
import { useEffect, useState } from "react";
import * as FaIcons from "react-icons/fa6";
import * as faIcons from "react-icons/fa";
import * as ImIcons from "react-icons/im";
import { RiAdminFill } from "react-icons/ri";
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
 
  return (
    <>
      <div
        className={`h-screen w-screen md:w-96 lg:w-96 xl:w-96 fixed z-10 bg-gray-100/[.99] dark:bg-gray-950/[.99] top-0 right-0 transition-transform duration-500 ${
          isVisible ? "transform translate-x-0" : "transform translate-x-full"
        }`}
      >
        <div className="mt-16 mb-10 w-4/5 mx-auto text-xl text-pink-400">
          lorem ipsum
        </div>
        <hr className="w-4/5 mx-auto border-gray-200 dark:border-gray-900" />
        <a
          href="/#top"
          className="w-full h-full text-gray-700 hover:text-pink-400"
          onClick={toggleSlide}
        >
          <div className="h-12 w-4/5 mx-auto flex items-center gap-4">
            <div className="text-sm">.01</div>
            <div className="text-md text-black dark:text-white">Home</div>
          </div>
        </a>
        <hr className="w-4/5 mx-auto border-gray-200 dark:border-gray-900" />
        <a
          href="/#whoWeAre"
          className="w-full h-full text-gray-700 hover:text-pink-400"
          onClick={toggleSlide}
        >
          <div className="h-12 w-4/5 mx-auto flex items-center gap-4">
            <div className="text-sm">.02</div>
            <div className="text-md text-black dark:text-white">About</div>
          </div>
        </a>
        <hr className="w-4/5 mx-auto border-gray-200 dark:border-gray-900" />
        <a
          href="/#whatWeDo"
          className="w-full h-full text-gray-700 hover:text-pink-400"
          onClick={toggleSlide}
        >
          <div className="h-12 w-4/5 mx-auto flex items-center gap-4">
            <div className="text-sm">.03</div>
            <div className="text-md text-black dark:text-white">Services</div>
          </div>
        </a>
        <hr className="w-4/5 mx-auto border-gray-200 dark:border-gray-900" />
        <a
          href="/blogs"
          className="w-full h-full text-gray-700 hover:text-pink-400"
          onClick={toggleSlide}
        >
          <div className="h-12 w-4/5 mx-auto flex items-center gap-4">
            <div className="text-sm">.04</div>
            <div className="text-md text-black dark:text-white">Blogs</div>
          </div>
        </a>
        <hr className="w-4/5 mx-auto border-gray-200 dark:border-gray-900" />
        <a
          href="/#contact"
          className="w-full h-full text-gray-700 hover:text-pink-400"
          onClick={toggleSlide}
        >
          <div className="h-12 w-4/5 mx-auto flex items-center gap-4">
            <div className="text-sm">.05</div>
            <div className="text-md text-black dark:text-white">Contact</div>
          </div>
        </a>
        <hr className="w-4/5 mx-auto border-gray-200 dark:border-gray-900" />

        <div className="w-4/5 mx-auto text-sm text-gray-600 dark:text-gray-400 mt-10">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea dicta eos
          doloremque magni praesentium accusamus at.
        </div>
        <div className="my-8 flex gap-4 text-lg text-gray-700 dark:text-gray-400 w-4/5 mx-auto">
          <a
            href="https://www.instagram.com/ecell_iet_lko"
            target="_blank"
            rel="noopener"
            className="hover:text-pink-400"
          >
            <FaIcons.FaInstagram />
          </a>
          <a
            href="https://twitter.com/ecell_ietlko"
            className="hover:text-pink-400"
          >
            <FaIcons.FaXTwitter />
          </a>
          <a
            href="https://www.linkedin.com/company/ecell-ietlucknow/"
            target="_blank"
            rel="noopener"
            className="hover:text-pink-400"
          >
            <FaIcons.FaLinkedin />
          </a>
        </div>
        <hr className="w-4/5 mx-auto border-gray-200 dark:border-gray-900" />
        <a
          href="/admin"
          className="w-full h-full text-gray-700 dark:text-gray-400 hover:text-pink-400"
          onClick={toggleSlide}
        >
          <div className="h-12 w-4/5 mx-auto flex items-center gap-4">
            <div className="text-xl">
              <RiAdminFill />
            </div>
            <div className="text-md text-black dark:text-white">
              Institute Login
            </div>
          </div>
        </a>
        <hr className="w-4/5 mx-auto border-gray-200 dark:border-gray-900" />
      </div>
      {isBtnVisible && (
        <div
          className=" fixed z-20 right-4 md:right-6 lg:right-8 xl:right-8 h-16 rounded-lg text-2xl hover:cursor-pointer text-gray-100 hover:text-gray-300 transition duration-200 scale-75 md:scale-90 lg:scale-100 xl:scale-100 bg-black p-5"
          onClick={toggleSlide}
        >
            {!isVisible ? <FaIcons.FaBars /> : <ImIcons.ImCross />}
        </div>
      )}
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
