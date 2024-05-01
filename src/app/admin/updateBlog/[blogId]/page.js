"use client";
import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { MdEdit, MdDeleteOutline } from "react-icons/md";
import { PiSealWarningBold } from "react-icons/pi";
import * as ImIcons from "react-icons/im";
import { useRouter } from "next/navigation";
import Navbar from "@/app/Navbar";
import Confirm from "@/app/Confirm";
import Message from "@/app/Message";
import ImageData from "@/app/imageData.json";
import notfound from "@/app/not-found";

function formatDate(input) {
  const date = new Date(input);
  const day = date.getDate();
  const year = date.getFullYear();
  const formattedDate = `${year}-${("0" + (date.getMonth() + 1)).slice(-2)}-${(
    "0" + day
  ).slice(-2)}`;
  return formattedDate;
}

export default function Example({ params }) {
  const router = useRouter();
  let blogId = params.blogId;
  let blogData = ImageData[blogId];
  if (!blogData) return notfound();
  let dateFormat = formatDate(blogData.date);
  const [inputs, setInputs] = useState(blogData.valuesArray);
  const [images, setImages] = useState(blogData.images);
  const [title, setTitle] = useState(blogData.title);
  const [date, setDate] = useState(dateFormat);
  const [description, setDescription] = useState(blogData.description);
  const [category, setCategory] = useState(blogData.category);
  const [aims, setAims] = useState(blogData.aims);
  const [confirmSection, setConfirmSection] = useState(false);
  const [messageSection, setMessageSection] = useState(false);
  const [showConfirmDeleteSection, setShowConfirmDeleteSection] =
    useState(false);

  const [blankFieldAlert, setBlankFieldAlert] = useState(false);

  function refreshPage() {
    router.push("/admin/updateBlog");
  }

  const confirmandUpdate = async (e) => {
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
      images
    };
    const Data = new FormData();
    images.forEach((image, index) => {
      if (typeof image != "string") {
        Data.append(`image${index + 1}`, image);
        const newImages = [...images];
        newImages[index] = null;
        setImages(newImages);
      }
    });
    Data.append("data", JSON.stringify(data));
    Data.append("blogId", blogId);
    let result = await fetch("http://localhost:3000/api/updateBlog", {
      method: "POST",
      body: Data,
    });
    if (result) result = await result.json();
    if (result.success) {
      console.log(Data);
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

  async function toggleDeleteBtn() {
    let result = await fetch(
      `http://localhost:3000/api/deleteBlog?blogId=${blogId}`
    );
    if (result) result = await result.json();
    if (result.success) {
      setShowConfirmDeleteSection(!showConfirmDeleteSection);
      setMessageSection(!messageSection);
      refreshPage();
    }
  }
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
        <Confirm cancel={toggleConfirmSection} confirm={confirmandUpdate} />
      ) : (
        <></>
      )}
      {messageSection ? <Message refreshPage={refreshPage} /> : <></>}
      {showConfirmDeleteSection ? (
        <div className="fixed w-screen h-screen bg-gray-400/[.5] dark:bg-gray-700/[.5] z-30 flex justify-center items-center">
          <div className="w-[95%] md:w-1/2 py-12 text-center bg-slate-100 dark:bg-slate-950 px-4 rounded-xl">
            <div className="h-10 w-10 mx-auto my-3 rounded-full bg-red-200 flex justify-center items-center">
              <PiSealWarningBold className="text-red-500 text-xl" />
            </div>
            <h2 className="font-medium text-2xl">Attention</h2>
            <div className="w-3/4 mx-auto my-2">
              Are You Sure to delete this Blog
            </div>
            <hr className="border border-slate-200 dark:border-slate-800 w-full my-4" />
            <div className="flex px-4 gap-3 justify-end">
              <div
                className="w-20 h-8 py-1 border border-slate-300 dark:border-slate-700 rounded-lg font-semibold cursor-pointer"
                onClick={() => {
                  setShowConfirmDeleteSection(!showConfirmDeleteSection);
                }}
              >
                Cancel
              </div>
              <button
                className="w-20 h-8 py-1 bg-red-500 rounded-lg font-semibold cursor-pointer"
                onClick={toggleDeleteBtn}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
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
          <div
            className="mx-auto h-12 w-40 bg-red-500 hover:bg-red-700 my-2 rounded-xl flex justify-center items-center text-lg font-semibold cursor-pointer"
            onClick={() => {
              setShowConfirmDeleteSection(!showConfirmDeleteSection);
            }}
          >
            Delete the Blog
          </div>
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
                  className="relative h-32 w-32 rounded-lg opacity-90"
                >
                  <div
                    onClick={() => handleImageChange(index)}
                    className="absolute h-7 w-7 rounded-full -top-3 flex justify-center items-center right-6 bg-blue-400 cursor-pointer text-white"
                  >
                    <MdEdit className="font-bold text-sm" />
                  </div>
                  <div
                    onClick={() => handleRemoveImage(index)}
                    className="absolute h-7 w-7 rounded-full -top-3 -right-2 flex justify-center items-center bg-red-500 cursor-pointer text-white"
                  >
                    <ImIcons.ImCross className="font-bold text-xs" />
                  </div>
                  {typeof image == "string" ? (
                    <img
                      // src={image ? URL.createObjectURL(image) : ""}
                      src={`http://localhost:3000/images/${image}`}
                      alt={`Image ${index + 1}`}
                      className="w-full h-full object-cover object-center rounded-lg"
                    />
                  ) : (
                    <img
                      src={image ? URL.createObjectURL(image) : ""}
                      //   src={`http://localhost:3000/images/${image}`}
                      alt={`Image ${index + 1}`}
                      className="w-full h-full object-cover object-center rounded-lg"
                    />
                  )}
                  <div>{typeof image}</div>
                </div>
              ))}
              {images.length < 5 && (
                <div
                  onClick={handleAddImage}
                  className="h-32 w-32 rounded-lg bg-gray-200 dark:bg-gray-900 flex justify-center items-center text-gray-500 cursor-pointer"
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
            Update
          </div>
        </form>
      </div>
    </>
  );
}
