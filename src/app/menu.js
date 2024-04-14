"use client";
import { useEffect, useState } from "react";
import * as FaIcons from "react-icons/fa6";
export default function Menu() {
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
