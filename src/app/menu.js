"use client";
import { useEffect, useState } from "react";
import * as FaIcons from "react-icons/fa6";
export default function menu() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 150) {
        setShow(false);
        console.log(1);
      } else {
        setShow(true);
        console.log(0);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [show]);
  return (
    <>
      {show ? (
        <>
          <div className="hidden md:block lg:block xl:block text-xl font-semibold">
            MENU
          </div>
        </>
      ) : (
        <></>
      )}
      <div className="bg-black p-5">
        <FaIcons.FaBars />
      </div>
    </>
  );
}
