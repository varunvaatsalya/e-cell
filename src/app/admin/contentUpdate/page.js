"use client";

import { useEffect, useState } from "react";
import { CgDanger } from "react-icons/cg";
import Navbar from "../../Navbar";
import data from "../../../app/data2.json";
import { useRouter } from "next/navigation";
import Confirm from "@/app/Confirm";
import Message from "@/app/Message";


export default function Section() {
  const router = useRouter()
  const [Data, setData] = useState(data);
  const [content, setContent] = useState("");
  const [value, setvalue] = useState("title");
  const [valueKey, setvalueKey] = useState(0);
  const [deactivateTextArea, setDeactivateTextArea] = useState(true);
  const [secondValue, setSecondValue] = useState("greet");
  const [thirdValue, setThirdValue] = useState("title");
  const [thirdNameArray, setThirdNameArray] = useState(["select the option"]);
  const [showFinishbtn, setShowFinishbtn] = useState(false);
  const [showConfirmSection, setShowConfirmSection] = useState(false);
  const [messageSection, setMessageSection] = useState(false);

  function refreshPage(){
    
    router.push("/admin")
  }
  

  let mainNameArray = Object.keys(Data);
  let secondNameArray = Object.keys(Data[value]);
  useEffect(() => {
    generateThirdArray();
  }, [secondValue]);

  function generateThirdArray() {
    if (valueKey == 1 || valueKey == 3 || valueKey == 5) {
      let thirdNameArray = Object.keys(Data[value][secondValue]);
      setThirdNameArray(thirdNameArray);
    }
  }

  function getContent() {
    if (valueKey == 1 || valueKey == 3 || valueKey == 5) {
      setContent(Data[value][secondValue][thirdValue]);
    } else {
      setContent(Data[value][secondValue]);
    }
    setDeactivateTextArea(false);
  }

  function handlsetValue(e) {
    let localValue = e.target.value;
    setvalue(localValue);
    setvalueKey(mainNameArray.indexOf(localValue));
  }
  function handlsetSecondValue(e) {
    let localValue = e.target.value;
    setSecondValue(localValue);
  }

  function updateData() {
    let copyData = Data;
    if (valueKey == 1 || valueKey == 3 || valueKey == 5) {
      copyData[value][secondValue][thirdValue] = content;
      setData(copyData);
    } else {
      copyData[value][secondValue] = content;
      setData(copyData);
    }
    setShowFinishbtn(true);
  }

  async function finishUpdate() {
    let res = await fetch("http://localhost:3000/api/getUpdateData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Data),
    });

    res = await res.json();
    if(res.success){
      setShowConfirmSection(!showConfirmSection)
      setMessageSection(!messageSection)
    }
  }

  useEffect(() => {}, [
    secondValue,
    value,
    valueKey,
    thirdValue,
    thirdNameArray,
    content,
  ]);

  // }
  return (
    <>
    {showConfirmSection ? (
        <Confirm cancel={()=>{setShowConfirmSection(!showConfirmSection)}} confirm={finishUpdate} />
      ) : (
        <></>
      )}
      {messageSection ? <Message Status={true} refreshPage={refreshPage} /> : <></>}
      <div className="w-full ">
        <div className="w-[95%] md:w-4/5 lg:w-3/5 py-8 mx-auto ">
          <Navbar />
          <div className="text-3xl font-semibold text-center">
            Content Update
          </div>
          <div className="text-xl font-medium text-gray-700 dark:text-gray-200 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, at!
          </div>
          <div className="bg-red-600 py-2 text-sm md:text-base text-white rounded-xl my-4 text-center">
            <div className="text-lg md:text-xl font-bold flex gap-1 items-center justify-center">
              <CgDanger />
              Warning
            </div>
            <hr className="w-1/2 mx-auto border-1 border-red-400 my-2" />
            <p className="w-4/5 text-center mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
              ducimus! change all the updates then do final push
            </p>
          </div>
          <hr className="border border-gray-400 dark:border-gray-700 my-8 " />
          <div className="w-4/5 mx-auto py-4">
            <div className=" text-gray-700 dark:text-gray-400">
              * Select all the option to get the Content
            </div>
            <select
              name="first"
              id="main"
              value={value}
              onChange={handlsetValue}
              className="w-full bg-gray-400 dark:bg-gray-700 px-4 h-12 rounded-xl font-semibold text-xl focus:ring-2 focus:ring-inset focus:ring-black dark:focus:ring-white"
            >
              {mainNameArray.map((item, key) => {
                return (
                  <option
                    className="text-white font-normal text-base"
                    key={key}
                    value={item}
                  >
                    {item}
                  </option>
                );
              })}
            </select>
            <hr className="border border-gray-400 dark:border-gray-700 my-4 " />
            <select
              name="second"
              id="subMain"
              value={secondValue}
              onChange={handlsetSecondValue}
              className="w-full bg-gray-400 dark:bg-gray-700 px-4 h-12 rounded-xl font-semibold text-xl focus:ring-2 focus:ring-inset focus:ring-black dark:focus:ring-white"
            >
              {secondNameArray.map((item, key) => {
                return (
                  <option
                    className="text-white font-normal text-base"
                    key={key}
                    value={item}
                  >
                    {item}
                  </option>
                );
              })}
            </select>
            <hr className="border border-gray-400 dark:border-gray-700 my-4 " />
            {valueKey == 1 || valueKey == 3 || valueKey == 5 ? (
              <>
                <select
                  name="third"
                  id="subSubMain"
                  value={thirdValue}
                  onChange={(e) => {
                    setThirdValue(e.target.value);
                  }}
                  className="w-full bg-gray-400 dark:bg-gray-700 px-4 h-12 rounded-xl font-semibold text-xl focus:ring-2 focus:ring-inset focus:ring-black dark:focus:ring-white"
                >
                  {thirdNameArray.map((item, key) => {
                    return (
                      <option
                        className="text-white font-normal text-base"
                        key={key}
                        value={item}
                      >
                        {item}
                      </option>
                    );
                  })}
                </select>
                <hr className="border border-gray-400 dark:border-gray-700 my-4 " />
              </>
            ) : (
              <></>
            )}
            <div className="w-full my-4">
              <button
                className="w-28 h-12 mx-auto bg-gray-950 hover:bg-gray-800 dark:bg-gray-200 hover:dark:bg-gray-400 text-gray-100 dark:text-black rounded-xl font-semibold"
                onClick={getContent}
              >
                Get Content
              </button>
            </div>
            <textarea
              className="text-black dark:text-gray-50 bg-gray-200 dark:bg-gray-800 w-full p-4 text-lg font-medium rounded-xl shadow-inner shadow-gray-900 outline-none"
              name="content"
              disabled={deactivateTextArea}
              cols="30"
              rows="5"
              value={content}
              placeholder="Firstly select all the Options to change the Content here !"
              onChange={(e) => {
                setContent(e.target.value);
              }}
            ></textarea>
            <hr className="border border-gray-400 dark:border-gray-700 my-4 " />
            <button
              className={
                " disabled:cursor-not-allowed w-full h-12 mx-auto bg-gray-950 hover:bg-gray-800 disabled:hover:bg-gray-950 dark:bg-gray-200 hover:dark:bg-gray-400 disabled:hover:dark:bg-gray-200 text-gray-100 dark:text-black rounded-xl font-semibold"
              }
              onClick={updateData}
              disabled={deactivateTextArea}
            >
              Update Data
            </button>
            {showFinishbtn ? (
              <>
                <hr className="border border-gray-400 dark:border-gray-700 my-4 " />
                <button
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold text-lg w-full rounded-xl h-12"
                  onClick={()=>{setShowConfirmSection(!showConfirmSection)}}
                >
                  Push the updates to WebSite !
                </button>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
