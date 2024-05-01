"use client";
import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { MdEdit, MdDeleteOutline } from "react-icons/md";
import * as ImIcons from "react-icons/im";
import Navbar from "@/app/Navbar";
import Confirm from "@/app/Confirm";
import Message from "@/app/Message";
export default function Example() {
  const [inputs, setInputs] = useState([]);
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Marketing");
  const [aims, setAims] = useState("");
  const [confirmSection, setConfirmSection] = useState(false);
  const [messageSection, setMessageSection] = useState(false);

  const [blankFieldAlert, setBlankFieldAlert] = useState(false);

  function refreshPage(){
    setMessageSection(!messageSection);
    setInputs([])
    setImages([])
    setTitle("")
    setDate("")
    setDescription("")
    setCategory("Marketing")
    setAims("")
  }

  const confirmandUpload = async (e) => {
    e.preventDefault();
    const valuesArray = inputs.filter((item) => item !== "");
    console.log("form submitted");
    const data = {
      title,
      date,
      description,
      category,
      valuesArray,
      aims,
    };
    const Data = new FormData();
    images.forEach((image, index) => {
      Data.append(`image${index + 1}`, image);
    });
    Data.append("data", JSON.stringify(data));
    let result = await fetch("/api/uploads", {
      method: "POST",
      body: Data,
    });
    if (result) result = await result.json();
    if (result.success) {
      setConfirmSection(!confirmSection);
      setMessageSection(!messageSection);
    }
  };

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
    setInputs([...inputs, ""]);
  };

  const handleInputChange = (index, event) => {
    console.log("handleInputChange called");
    let newInputs = [...inputs];
    newInputs[index] = event.target.value;
    setInputs(newInputs);
  };
  const handleRemoveInput = (index) => {
    console.log("handleRemoveImage called");
    let newInputs = [...inputs];
    newInputs = inputs.filter((_, i) => i !== index);
    setInputs(newInputs);
  };
  ``;
  useEffect(() => {}, [blankFieldAlert, inputs]);

  const toggleConfirmSection = () => {
    if (!images || !title || !date || !description || !category) {
      setBlankFieldAlert(!blankFieldAlert);
    } else {
    setConfirmSection(!confirmSection);
    }
  };

  const Categories = [
    "Marketing",
    "Insurence",
    "Travel",
    "Enterpreneur",
    "Health",
    "Budget",
  ];

  return (
    <>
      {confirmSection ? (
        <Confirm cancel={toggleConfirmSection} confirm={confirmandUpload} />
      ) : (
        <></>
      )}
      {messageSection ? <Message Status={true} refreshPage={refreshPage} /> : <></>}

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
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
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
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
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
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
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
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
            className="bg-gray-300 dark:bg-gray-900 w-full h-16 px-4 rounded-xl text-md font-medium"
          >
            {Categories.map((item, key) => {
              return (
                <option key={key} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
          <hr className="w-full border border-gray-300 dark:border-gray-700 my-6" />
          <label
            htmlFor="Highlight"
            className="block mb-2 text-md font-medium leading-6 text-gray-900 dark:text-gray-100"
          >
            Highlight
          </label>
          {inputs.map((input, index) => (
            <div key={index} className="relative">
              <MdDeleteOutline
                className="text-2xl text-gray-400 hover:text-red-400 right-3 top-7 cursor-pointer absolute"
                onClick={() => handleRemoveInput(index)}
              />
              <input
                type="text"
                value={input}
                placeholder={index + 1 + ". Add Highlight Here"}
                onChange={(e) => handleInputChange(index, e)}
                className="bg-gray-200 shadow-inner w-full h-16 pl-4 pr-12 text-gray-900 rounded-xl text-md font-medium my-2"
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
            Aims
          </label>
          <input
            type="text"
            name="aims"
            value={aims}
            onChange={(e) => {
              setAims(e.target.value);
            }}
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
          <hr className="w-full border border-gray-300 dark:border-gray-700 my-3" />
          {blankFieldAlert ? (
            <>
              <div className=" my-2">
                All <span className="text-red-500 text-lg">* </span> marked
                fields are required
              </div>
            </>
          ) : (
            <></>
          )}

          <div
            className="w-full h-16 bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 cursor-pointer text-lg font-semibold text-center pt-4 rounded-xl"
            onClick={toggleConfirmSection}
          >
            Upload
          </div>
        </form>
      </div>
    </>
  );
}
