import ImageData from "./imageData.json";
import Image from "next/image";
import Link from "next/link";
import * as FaIcons from "react-icons/fa6";

function Blogs() {
  const imageCode = Object.keys(ImageData).slice(0, 6);
  return (
    <>
      <div className="w-11/12 mx-auto">
        <div className="w-full flex flex-col md:flex-row lg:flex-row xl:flex-row text-gray-100">
          <Link
            href={!imageCode[0] ? "" : `/blogs/${imageCode[0]}`}
            className="w-full relative md:w-1/2 lg:w-1/2 xl:w-1/2 aspect-square rounded-xl hover:scale-[1.02] transition delay-100 ease-in-out cursor-pointer my-2 md:m-2 lg:m-2 xl:m-2"
          >
            <Image
              src={!imageCode[0] ? "" : `/images/${ImageData[imageCode[0]].images[0]}`}
              alt="image"
              width={800}
              height={800}
              className="w-full h-full object-cover object-center rounded-xl"
            />
            <div className="w-full h-1/2 rounded-xl absolute flex flex-col justify-end p-4 bottom-0 bg-gradient-to-t from-black/[.8] to-transparent">
              <div className="text-xl md:text-2xl line-clamp-3 lg:text-2xl xl:text-2xl font-semibold leading-7">
                {!imageCode[0] ? "" : ImageData[imageCode[0]].title}
              </div>
              <div className="text-sm mt-2 text-slate-200">
                {!imageCode[0] ? "" : ImageData[imageCode[0]].date}
              </div>
            </div>
          </Link>
          <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 md:aspect-square lg:aspect-square xl:aspect-square ">
            <div className="w-full flex flex-col md:flex-row lg:flex-row xl:flex-row md:h-1/2 lg:h-1/2 xl:h-1/2">
              <Link
                href={!imageCode[1] ? "" : `/blogs/${imageCode[1]}`}
                className="w-full relative md:w-1/2 lg:w-1/2 xl:w-1/2 aspect-square my-2 md:m-2 lg:m-2 xl:m-2 rounded-xl hover:scale-[1.04] transition delay-100 ease-in-out cursor-pointer"
              >
                <Image
                  src={!imageCode[1] ? "" : `/images/${ImageData[imageCode[1]].images[0]}`}
                  alt="image"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover object-center rounded-xl"
                />
                <div className="w-full h-1/2 rounded-xl absolute flex flex-col justify-end p-2 bottom-0 bg-gradient-to-t from-black/[.8] to-transparent">
                  <div className="text-xl md:text-md lg:text-lg xl:text-lg font-semibold md:font-normal lg:font-normal xl:font-normal line-clamp-3 leading-7 md:leading-5 lg:leading-5 xl:leading-5">
                    {!imageCode[1] ? "" : ImageData[imageCode[1]].title}
                  </div>
                  <div className="text-sm md:text-xs lg:text-xs xl:text-xs mt-2 text-slate-200">
                    {!imageCode[1] ? "" : ImageData[imageCode[1]].date}
                  </div>
                </div>
              </Link>
              <Link
                href={!imageCode[2] ? "" : `/blogs/${imageCode[2]}`}
                className="w-full relative md:w-1/2 lg:w-1/2 xl:w-1/2 aspect-square my-2 md:m-2 lg:m-2 xl:m-2 rounded-xl hover:scale-[1.04] transition delay-100 ease-in-out cursor-pointer"
              >
                <Image
                  src={!imageCode[2] ? "" : `/images/${ImageData[imageCode[2]].images[0]}`}
                  alt="image"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover object-center rounded-xl"
                />
                <div className="w-full h-1/2 rounded-xl absolute flex flex-col justify-end p-2 bottom-0 bg-gradient-to-t from-black/[.8] to-transparent">
                  <div className="text-xl md:text-md lg:text-lg xl:text-lg font-semibold md:font-normal lg:font-normal xl:font-normal line-clamp-3 leading-7 md:leading-5 lg:leading-5 xl:leading-5">
                    {!imageCode[2] ? "" : ImageData[imageCode[2]].title}
                  </div>
                  <div className="text-sm md:text-xs lg:text-xs xl:text-xs mt-2 text-slate-200">
                    {!imageCode[2] ? "" : ImageData[imageCode[2]].date}
                  </div>
                </div>
              </Link>
            </div>
            <div className="w-full flex flex-col md:flex-row lg:flex-row xl:flex-row md:h-1/2 lg:h-1/2 xl:h-1/2 ">
              <Link
                href={!imageCode[3] ? "" : `/blogs/${imageCode[3]}`}
                className="w-full relative md:w-1/2 lg:w-1/2 xl:w-1/2 aspect-square my-2 md:m-2 lg:m-2 xl:m-2 rounded-xl hover:scale-[1.04] transition delay-100 ease-in-out cursor-pointer"
              >
                <Image
                  src={!imageCode[3] ? "" : `/images/${ImageData[imageCode[3]].images[0]}`}
                  alt="image"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover object-center rounded-xl"
                />
                <div className="w-full h-1/2 rounded-xl absolute flex flex-col justify-end p-2 bottom-0 bg-gradient-to-t from-black/[.8] to-transparent">
                  <div className="text-xl md:text-md lg:text-lg xl:text-lg font-semibold md:font-normal lg:font-normal xl:font-normal line-clamp-3 leading-7 md:leading-5 lg:leading-5 xl:leading-5">
                    {!imageCode[3] ? "" : ImageData[imageCode[3]].title}
                  </div>
                  <div className="text-sm md:text-xs lg:text-xs xl:text-xs mt-2 text-slate-200">
                    {!imageCode[3] ? "" : ImageData[imageCode[3]].date}
                  </div>
                </div>
              </Link>
              <Link
                href={!imageCode[4] ? "" : `/blogs/${imageCode[4]}`}
                className="w-full relative md:w-1/2 lg:w-1/2 xl:w-1/2 aspect-square my-2 md:m-2 lg:m-2 xl:m-2 rounded-xl hover:scale-[1.04] transition delay-100 ease-in-out cursor-pointer"
                title="nidhiwa"
              >
                <Image
                  src={!imageCode[4] ? "" : `/images/${ImageData[imageCode[4]].images[0]}`}
                  alt="image"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover object-center rounded-xl"
                />
                <div className="w-full h-1/2 rounded-xl absolute flex flex-col justify-end p-2 bottom-0 bg-gradient-to-t from-black/[.8] to-transparent">
                  <div className="text-xl md:text-md lg:text-lg xl:text-lg font-semibold md:font-normal lg:font-normal xl:font-normal line-clamp-3 leading-7 md:leading-5 lg:leading-5 xl:leading-5">
                    {!imageCode[4] ? "" : ImageData[imageCode[4]].title}
                  </div>
                  <div className="text-sm md:text-xs lg:text-xs xl:text-xs mt-2 text-slate-200">
                    {!imageCode[4] ? "" : ImageData[imageCode[4]].date}
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <Link href="/blogs">
          <div className=" h-12 rounded-xl flex justify-center gap-4 items-center bg-pink-500 mx-2 my-2 hover:translate-x-4 transition delay-50 ease-in cursor-pointer">
            <div className="flex -space-x-2 overflow-hidden scale-75 lg:scale-95 xl:scale-100">
              <Image
                src={!imageCode[0] ? "" : `/images/${ImageData[imageCode[0]].images[0]}`}
                alt="image"
                width={200}
                height={200}
                className="inline-block h-10 w-10 rounded-full ring-2 ring-pink-500 bg-pink-500"
              />
              <Image
                src={!imageCode[1] ? "" : `/images/${ImageData[imageCode[1]].images[0]}`}
                alt="image"
                width={200}
                height={200}
                className="inline-block h-10 w-10 rounded-full ring-2 ring-pink-500 bg-pink-500"
              />
              <Image
                src={!imageCode[1] ? "" : `/images/${ImageData[imageCode[1]].images[1]}`}
                alt="image"
                width={200}
                height={200}
                className="inline-block h-10 w-10 rounded-full ring-2 ring-pink-500 bg-pink-500"
              />
              <Image
                src={!imageCode[2] ? "" : `/images/${ImageData[imageCode[2]].images[0]}`}
                alt="image"
                width={200}
                height={200}
                className="inline-block h-10 w-10 rounded-full ring-2 ring-pink-500 bg-pink-500"
              />
              <Image
                src={!imageCode[2] ? "" : `/images/${ImageData[imageCode[2]].images[1]}`}
                alt="image"
                width={200}
                height={200}
                className="inline-block h-10 w-10 rounded-full ring-2 ring-pink-500 bg-pink-500"
              />
            </div>
            <div className="text-md md:text-lg lg:text-xl xl:text-xl">
              Lorem ipsum dolor sit amet consectetur vel.
            </div>
            <div className="text-xl">
              <FaIcons.FaArrowRightLong />
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Blogs;

// <div className="text-center font-semibold text-4xl my-14">
//         What Clients Are Saying.
//       </div>
//       <div className="w-[200%] h-64 border-t border-red-400 bg-green-900 flex">
//         <div className="w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4"></div>
//       </div>
//       <div className="radiobuttons my-16">buttons</div>
