"use client";
import React, { useState } from "react";
import { FaPlus, FaCheck } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import * as ImIcons from "react-icons/im";
import Navbar from "@/app/Navbar";
export default function Example() {
  const [inputs, setInputs] = useState([]);
  const [images, setImages] = useState([]);
  const [confirmSection, setConfirmSection] = useState(false);

  const handleImageChange = (index) => {
    const newImages = [...images];
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.click();
    input.onchange = (e) => {
      newImages[index] = e.target.files[0];
      setImages(newImages);
    };
  };

  const handleAddImage = () => {
    if (images.length < 5) {
      const input = document.createElement("input");
      input.type = "file";
      input.accept = "image/*";
      
      input.click();

      input.onchange = (e) => {
        const newImages = [...images, e.target.files[0]];
        setImages(newImages);
      };
    }
  };

  const handleRemoveImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  const handleAddInput = () => {
    setInputs([...inputs, { id: inputs.length }]);
  };

  const handleInputChange = (id, event) => {
    const newInputs = inputs.map((input) => {
      if (input.id === id) {
        return { ...input, value: event.target.value };
      }
      return input;
    });
    setInputs(newInputs);
  };

  const toggleConfirmSection = () => {
    setConfirmSection(!confirmSection);
  };

  return (
    <>
      {confirmSection ? (
        <Confirm cancel={toggleConfirmSection} confirm={toggleConfirmSection} />
      ) : (
        <></>
      )}

      <div className="w-full">
        <form className="w-[95%] md:w-4/5 lg:w-1/2 py-8 mx-auto">
          <Navbar />
          <div className="text-3xl font-semibold text-center">Blogs Upload</div>
          <div className="text-xl font-medium text-gray-700 dark:text-gray-200 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, at!
          </div>
          <hr className="w-full border border-gray-300 dark:border-gray-700 mt-6" />
          <div className=" text-gray-600 dark:text-gray-400 mb-6">
            <span className="text-red-500">*</span> All the fields are required
          </div>
          <label
            htmlFor="title"
            className=" text-md font-medium leading-6 text-gray-900 dark:text-gray-100"
          >
            <span className="text-red-500">* </span>
            Title
          </label>
          <textarea
            className="text-gray-800 bg-gray-200 w-full p-4 text-lg font-medium rounded-xl shadow-inner shadow-gray-500 outline-none"
            name="content"
            cols="30"
            rows="3"
            placeholder="Firstly select all the Options to change the Content here !"
          ></textarea>
          <hr className="w-full border border-gray-300 dark:border-gray-700 my-6" />
          <label
            htmlFor="date"
            className=" text-md font-medium leading-6 text-gray-900 dark:text-gray-100"
          >
            <span className="text-red-500">* </span>
            Date
          </label>
          <input
            type="date"
            name="date"
            id="date"
            className="bg-gray-300 dark:bg-gray-900 w-full h-16 px-4 rounded-xl text-md font-medium"
          />
          <hr className="w-full border border-gray-300 dark:border-gray-700 my-6" />
          <label
            htmlFor="Description"
            className="text-md font-medium leading-6 text-gray-900 dark:text-gray-100"
          >
            <span className="text-red-500">* </span>
            Description
          </label>
          <textarea
            className="text-gray-800 bg-gray-100 w-full p-4 text-lg font-medium rounded-xl shadow-inner shadow-gray-500 outline-none"
            name="content"
            cols="30"
            rows="5"
            placeholder="Firstly select all the Options to change the Content here !"
          ></textarea>
          <hr className="w-full border border-gray-300 dark:border-gray-700 my-6" />
          <label
            htmlFor="Category"
            className="block mb-2 text-md font-medium leading-6 text-gray-900 dark:text-gray-100"
          >
            <span className="text-red-500">* </span>
            Category
          </label>
          <select
              name="first"
              id="main"
              className="bg-gray-300 dark:bg-gray-900 w-full h-16 px-4 rounded-xl text-md font-medium"
            >
              {/* {mainNameArray.map((item, key) => {
                return (
                  <option
                    className="text-white font-normal text-base"
                    key={key}
                    value={item}
                  >
                    {item}
                  </option>
                );
              })} */}
              <option value="Marketing">Marketing</option>
              <option value="Buisiness">Buisiness</option>
              <option value="Travel">Travel</option>
            </select>
          <hr className="w-full border border-gray-300 dark:border-gray-700 my-6" />
          <label
            htmlFor="Highlight"
            className="block mb-2 text-md font-medium leading-6 text-gray-900 dark:text-gray-100"
          >
            <span className="text-red-500">* </span>
            Highlight
          </label>
          {inputs.map((input) => (
            <div key={input.id}>
              <input
                type="text"
                value={input.value || ""}
                placeholder={input.id + 1 + ". Add Highlight Here"}
                className="bg-gray-200 shadow-inner w-full h-16 px-4 text-gray-900 rounded-xl text-md font-medium my-2"
                onChange={(e) => handleInputChange(input.id, e)}
              />
            </div>
          ))}
          <div
            onClick={handleAddInput}
            className="bg-gray-300 dark:bg-gray-900 w-full h-16 px-4 rounded-xl text-md font-medium cursor-pointer text-gray-500 flex justify-center items-center gap-2 my-2"
          >
            <div className="text-2xl">
              <FaPlus />
            </div>
            <div className="text-xl">Add Highlights</div>
          </div>
          <hr className="w-full border border-gray-300 dark:border-gray-700 my-6" />
          <label
            htmlFor="Aims"
            className="block mb-2 text-md font-medium leading-6 text-gray-900 dark:text-gray-100"
          >
            <span className="text-red-500">* </span>
            Aims
          </label>
          <input
            type="text"
            name="aims"
            placeholder="Enter the Aim of Blog (If any)"
            className="bg-gray-200 shadow-inner w-full h-16 px-4 text-gray-900 rounded-xl text-md font-medium my-2"
          />
          <hr className="w-full border border-gray-300 dark:border-gray-700 my-6" />
          <div className="my-12 py-12">
            <div className="block mb-5 text-md font-medium leading-6 text-gray-900 dark:text-gray-100">
              <span className="text-red-500">* </span>
              Images <span className="text-gray-500">(Max 5 photos)</span>
            </div>
            <div className="flex gap-2 flex-wrap">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="relative h-20 w-20 rounded-lg opacity-90"
                >
                  <div
                    onClick={() => handleImageChange(index)}
                    className="absolute h-6 w-6 rounded-full -top-3 flex justify-center items-center right-5 bg-blue-400 cursor-pointer text-white"
                  >
                    <MdEdit className="font-bold text-sm" />
                  </div>
                  <div
                    onClick={() => handleRemoveImage(index)}
                    className="absolute h-6 w-6 rounded-full -top-3 -right-2 flex justify-center items-center bg-red-500 cursor-pointer text-white"
                  >
                    <ImIcons.ImCross className="font-bold text-xs" />
                  </div>
                  <img
                    src={image ? URL.createObjectURL(image) : ""}
                    alt={`Image ${index + 1}`}
                    className="w-full h-full object-cover object-center rounded-lg"
                  />
                </div>
              ))}
              {images.length < 5 && (
                <div
                  onClick={handleAddImage}
                  className="h-20 w-20 rounded-lg bg-gray-200 dark:bg-gray-900 flex justify-center items-center text-gray-500 cursor-pointer"
                >
                  <FaPlus className="text-2xl" />
                </div>
              )}
            </div>
          </div>
          <hr className="w-full border border-gray-300 dark:border-gray-700 my-6" />
          <div className="w-full h-16 bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 cursor-pointer text-lg font-semibold text-center pt-4 rounded-xl" onClick={toggleConfirmSection}>
            Upload
          </div>
        </form>
      </div>
    </>
  );
}

export function Confirm(props) {
  return (
    <>
      <div className="fixed w-screen h-screen bg-gray-400/[.5] dark:bg-gray-700/[.5] z-30 flex justify-center items-center">
        <div className="w-[95%] md:w-1/2 py-12 text-center bg-slate-100 dark:bg-slate-950 px-4 rounded-xl">
          <div className="h-10 w-10 mx-auto my-3 rounded-full bg-green-200 text-center p-3">

          <FaCheck className="text-green-500 text-md"/>
          </div>
          <h2 className="font-medium text-2xl">Confirm</h2>
          <div className="w-3/4 mx-auto my-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Exercitationem recusandae cum rerum, facere perferendis ullam ex
            iste fuga voluptates atque aut? Voluptatum, facilis ratione optio,
            numquam quia necessitatibus officia soluta sint modi laboriosam
            reprehenderit aut!
          </div>
          <hr className="border border-slate-200 dark:border-slate-800 w-full my-4" />
          <div className="flex px-4 gap-3 justify-end">
            <div
              className="w-20 h-8 py-1 border border-slate-300 dark:border-slate-700 rounded-lg font-semibold cursor-pointer"
              onClick={props.cancel}
            >
              Cancel
            </div>
            <button className="w-20 h-8 py-1 bg-green-500 rounded-lg font-semibold cursor-pointer">
              Confirm
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

