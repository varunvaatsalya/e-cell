import { Merriweather } from "next/font/google";
import Image from "next/image";
import * as FaIcons from "react-icons/fa6";
import * as TbIcons from "react-icons/tb";

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin-ext"],
});

export default function Home() {
  return (
    <>
      <div className="h-[100vh] bg-black text-white flex flex-col justify-between" id="top">
        <header className="flex justify-between p-4 md:p-6 lg:pt-10 xl:pt-10">
          <div>
            <Image
              src="/logo.svg"
              alt="Logo"
              className=" scale-75 md:scale-90 lg:scale-100 xl:scale-100"
              width={120}
              height={32}
              priority
            />
          </div>
          <div className="flex items-center gap-5 text-2xl pr-8 hover:cursor-pointer hover:text-gray-300 transition duration-200 scale-75 md:scale-90 lg:scale-100 xl:scale-100">
            <div className="hidden md:block lg:block xl:block text-xl font-semibold">
              MENU
            </div>
            <div>
              <FaIcons.FaBars />
            </div>
          </div>
        </header>
        <div className="w-full flex justify-between">
          <div className="w-full lg:w-4/5 xl:w-4/5">
            <div
              className={
                merriweather.className +
                " w-full pl-10 md:pl-28 lg:pl-36 xl:pl-52 "
              }
            >
              <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
                <div className="my-2 md:my-4 lg:my-4 xl:my-4">
                  Hello folks, we are
                </div>
                <div className="my-2 md:my-4 lg:my-4 xl:my-4 gradient">
                  E-CELL IET Lucknow
                </div>
              </div>
              <div className="lg:flex xl:flex justify-center w-3/4 my-2">
                <hr className="w-20 my-8 lg:my-6 xl:my-6 border border-pink-500" />
                <div className="lg:pl-4 xl:pl-4 text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-medium">
                  We create stunning digital experiences that will help your
                  business stand out.
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:block xl:block w-1/5">
            <div className="w-full h-full flex flex-col justify-center items-end gap-6">

              <a href="#whoWeAre" className="bg-pink-900/[.2] h-20 w-4/5 hover:w-5/6 transition ease-in delay-300 cursor-pointer pl-8 rounded-l-xl pt-2">
                <li className="list-disc text-pink-400">
                  <span className="text-white text-2xl">About</span>
                </li>
                <div className="text-lg">who we are</div>
              </a>

              <a href="#whatWeDo" className="bg-pink-900/[.2] h-20 w-4/5 hover:w-5/6 transition ease-in delay-300 cursor-pointer pl-8 rounded-l-xl pt-2">
                <li className="list-disc text-pink-400">
                  <span className="text-white text-2xl">Services</span>
                </li>
                <div className="text-lg">what we do</div>
              </a>

              <a href="#Blog" className="bg-pink-900/[.2] h-20 w-4/5 hover:w-5/6 transition ease-in delay-300 cursor-pointer pl-8 rounded-l-xl pt-2">
                <li className="list-disc text-pink-400">
                  <span className="text-white text-2xl">Contact</span>
                </li>
                <div className="text-lg">get in touch</div>
              </a>
            </div>
          </div>
        </div>
        {/* <div className="flex"> */}
          <div className="w-full flex justify-between px-6 md:px-12 lg:px-16 xl:px-16 mb-3">
            <div className="flex h-full gap-3 text-">
              <div>Follow Us</div>
              <hr className="w-6 md:w-10 lg:w-12 xl:w-12 border border-pink-400 mt-3" />
              <a href="" className="hover:cursor-pointer"><div className="flex items-center gap-2"><TbIcons.TbBrandCakephp/> <div className="hidden md:block lg:block xl:block">Facebook</div> </div></a>
              <a href="" className="hover:cursor-pointer"><div className="flex items-center gap-2"><TbIcons.TbBrandCakephp/> <div className="hidden md:block lg:block xl:block">Twitter</div> </div></a>
              <a href="" className="hover:cursor-pointer"><div className="flex items-center gap-2"><TbIcons.TbBrandCakephp/> <div className="hidden md:block lg:block xl:block">LinkedIn</div> </div></a>
            </div>
            <div className="flex items-center h-12 gap-3">
              <div className="hidden md:block lg:block xl:block">SCROLL DOWN</div>
              <a href="#whoWeAre">
              <div className="ml-5 w-10 aspect-square lg:w-12 xl:12 rounded-full bg-zinc-900 hover:bg-zinc-600 hover:text-black transition ease-in delay-75 flex justify-center items-center text-xl">
                <FaIcons.FaArrowDownLong />
              </div>
            </a>
            </div>
          </div>
        {/* </div> */}
      </div>
      <hr  id="whoWeAre"/>
      <div className="w-full">
        <div className="w-[95%] lg:w-4/5 xl:w-4/5 mx-auto my-32">
          <div className="w-full tracking-widest text-pink-500 text-lg">
            / WHO WE ARE
          </div>
          <div
            className={
              merriweather.className +
              " w-full h-64 lg:h-72 xl:h-72 mt-4 font-semibold text-4xl md:text-5xl lg:text-6xl xl:text-6xl leading-snug sm:leading-snug md:leading-snug lg:leading-snug xl:leading-snug"
            }
          >
            We are a group of design driven individuals passionate about
            creating beautiful UI designs.
          </div>
          <div className="w-full pt-10 lg:mt-12 xl:mt-12 mb-20 text-2xl tracking-widest leading-relaxed text-gray-600 dark:text-gray-300">
            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
            Donec rutrum congue leo eget malesuada. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse.
          </div>
          <div className="w-full lg:flex xl:flex">
            <div className="w-full lg:w-1/2 xl:w-1/2 my-6">
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-teal-400 text-center text-2xl pt-2">
                  1
                </div>
                <div className="text-3xl font-semibold ml-6">Define</div>
              </div>
              <div className="mt-5 pb-5 w-[calc(100%-48px)] mx-auto pl-12 border-l text-gray-600 dark:text-gray-300 border-gray-600 dark:border-gray-300 text-lg tracking-widest leading-relaxed">
                Quos dolores saepe mollitia deserunt accusamus autem
                reprehenderit. Voluptas facere animi explicabo non quis magni
                recusandae. Numquam debitis pariatur omnis facere unde.
                Laboriosam minus amet nesciunt est. Et saepe eos maxime tempore
                quasi deserunt ab.
              </div>
            </div>
            <div className="w-full lg:w-1/2 xl:w-1/2 my-6">
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-teal-400 text-center text-2xl pt-2">
                  2
                </div>
                <div className="text-3xl font-semibold ml-6">Design</div>
              </div>
              <div className="mt-5 pb-5 w-[calc(100%-48px)] mx-auto pl-12 border-l text-gray-600 dark:text-gray-300 border-gray-600 dark:border-gray-300 text-lg tracking-widest leading-relaxed">
                Quos dolores saepe mollitia deserunt accusamus autem
                reprehenderit. Voluptas facere animi explicabo non quis magni
                recusandae. Numquam debitis pariatur omnis facere unde.
                Laboriosam minus amet nesciunt est. Et saepe eos maxime tempore
                quasi deserunt ab.
              </div>
            </div>
          </div>
          <div className="w-full lg:flex xl:flex">
            <div className="w-full lg:w-1/2 xl:w-1/2 my-6">
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-teal-400 text-center text-2xl pt-2">
                  3
                </div>
                <div className="text-3xl font-semibold ml-6">Build</div>
              </div>
              <div className="mt-5 pb-5 w-[calc(100%-48px)] mx-auto pl-12 border-l text-gray-600 dark:text-gray-300 border-gray-600 dark:border-gray-300 text-lg tracking-widest leading-relaxed">
                Quos dolores saepe mollitia deserunt accusamus autem
                reprehenderit. Voluptas facere animi explicabo non quis magni
                recusandae. Numquam debitis pariatur omnis facere unde.
                Laboriosam minus amet nesciunt est. Et saepe eos maxime tempore
                quasi deserunt ab.
              </div>
            </div>
            <div className="w-full lg:w-1/2 xl:w-1/2 my-6">
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-teal-400 text-center text-2xl pt-2">
                  4
                </div>
                <div className="text-3xl font-semibold ml-6">Launch</div>
              </div>
              <div className="mt-5 pb-5 w-[calc(100%-48px)] mx-auto pl-12 border-l text-gray-600 dark:text-gray-300 border-gray-600 dark:border-gray-300 text-lg tracking-widest leading-relaxed">
                Quos dolores saepe mollitia deserunt accusamus autem
                reprehenderit. Voluptas facere animi explicabo non quis magni
                recusandae. Numquam debitis pariatur omnis facere unde.
                Laboriosam minus amet nesciunt est. Et saepe eos maxime tempore
                quasi deserunt ab.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-zinc-200 dark:bg-zinc-950 w-full" id="whatWeDo">
        <div className="w-[95%] lg:w-4/5 xl:w-4/5 mx-auto py-32">
          <div className="w-full tracking-widest text-pink-500 text-lg">
            / WHAT WE DO
          </div>
          <div
            className={
              merriweather.className +
              " w-full h-56 lg:h-72 xl:h-72 mt-4 font-semibold text-4xl md:text-5xl lg:text-6xl xl:text-6xl leading-snug sm:leading-snug md:leading-snug lg:leading-snug xl:leading-snug"
            }
          >
            We have everything you need to launch and grow a successful digital
            business.
          </div>
          <div className="w-full pt-8 mb-20 text-2xl tracking-widest leading-relaxed text-gray-600 dark:text-gray-300">
            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
            Donec rutrum congue leo eget malesuada. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse.
          </div>
          <div className="w-full lg:flex xl:flex">
            <div className="w-full lg:w-1/3 xl:w-1/3 px-4 my-10">
              <div className="h-16 w-16 text-teal-400 text-7xl">
                <TbIcons.TbBrandAbstract />
              </div>
              <div className=" my-6 text-2xl font-semibold">Brand Identity</div>
              <div className="text-xl lg:text-lg xl:text-lg text-gray-600 dark:text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                dicta voluptas perferendis necessitatibus praesentium harum
                laudantium reiciendis ut animi nihil modi, consequuntur labore
                quo expedita? Veritatis nobis itaque perferendis voluptate
                blanditiis dicta vitae ipsam!
              </div>
            </div>
            <div className="w-full lg:w-1/3 xl:w-1/3 px-4 my-10">
              <div className="h-16 w-16 text-teal-400 text-7xl">
                <TbIcons.TbBrandAmd />
              </div>
              <div className=" my-6 text-2xl font-semibold">Illustration</div>
              <div className="text-xl lg:text-lg xl:text-lg text-gray-600 dark:text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                dicta voluptas perferendis necessitatibus praesentium harum
                laudantium reiciendis ut animi nihil modi, consequuntur labore
                quo expedita? Veritatis nobis itaque perferendis voluptate
                blanditiis dicta vitae ipsam!
              </div>
            </div>
            <div className="w-full lg:w-1/3 xl:w-1/3 px-4 my-10">
              <div className="h-16 w-16 text-teal-400 text-7xl">
                <TbIcons.TbBrandBitbucket />
              </div>
              <div className=" my-6 text-2xl font-semibold">Web Design</div>
              <div className="text-xl lg:text-lg xl:text-lg text-gray-600 dark:text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                dicta voluptas perferendis necessitatibus praesentium harum
                laudantium reiciendis ut animi nihil modi, consequuntur labore
                quo expedita? Veritatis nobis itaque perferendis voluptate
                blanditiis dicta vitae ipsam!
              </div>
            </div>
          </div>
          <div className="w-full lg:flex xl:flex">
            <div className="w-full lg:w-1/3 xl:w-1/3 px-4 my-10">
              <div className="h-16 w-16 text-teal-400 text-7xl">
                <TbIcons.TbBrandCakephp />
              </div>
              <div className=" my-6 text-2xl font-semibold">
                Product Strategy
              </div>
              <div className="text-xl lg:text-lg xl:text-lg text-gray-600 dark:text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                dicta voluptas perferendis necessitatibus praesentium harum
                laudantium reiciendis ut animi nihil modi, consequuntur labore
                quo expedita? Veritatis nobis itaque perferendis voluptate
                blanditiis dicta vitae ipsam!
              </div>
            </div>
            <div className="w-full lg:w-1/3 xl:w-1/3 px-4 my-10">
              <div className="h-16 w-16 text-teal-400 text-7xl">
                <TbIcons.TbBrandDribbble />
              </div>
              <div className=" my-6 text-2xl font-semibold">UI/UX Design</div>
              <div className="text-xl lg:text-lg xl:text-lg text-gray-600 dark:text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                dicta voluptas perferendis necessitatibus praesentium harum
                laudantium reiciendis ut animi nihil modi, consequuntur labore
                quo expedita? Veritatis nobis itaque perferendis voluptate
                blanditiis dicta vitae ipsam!
              </div>
            </div>
            <div className="w-full lg:w-1/3 xl:w-1/3 px-4 my-10">
              <div className="h-16 w-16 text-teal-400 text-7xl">
                <TbIcons.TbBrandFeedly />
              </div>
              <div className=" my-6 text-2xl font-semibold">
                Mobile Development
              </div>
              <div className="text-xl lg:text-lg xl:text-lg text-gray-600 dark:text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                dicta voluptas perferendis necessitatibus praesentium harum
                laudantium reiciendis ut animi nihil modi, consequuntur labore
                quo expedita? Veritatis nobis itaque perferendis voluptate
                blanditiis dicta vitae ipsam!
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full" id="Blog">
        <div className="w-[95%] lg:w-4/5 xl:w-4/5 mx-auto py-32 overflow-x-hidden">
          <div className="w-full tracking-widest text-pink-500 text-lg">
            / FEATURED WORK
          </div>
          <div
            className={
              merriweather.className +
              " w-full h-56 lg:h-72 xl:h-72 mt-4 font-semibold text-4xl md:text-5xl lg:text-6xl xl:text-6xl leading-snug sm:leading-snug md:leading-snug lg:leading-snug xl:leading-snug"
            }
          >
            These are some of our recent design projects and we are so excited
            to show them to you.
          </div>
          <div className="photos w-full h-96"></div>
          <div className="text-center font-semibold text-4xl my-14">
            What Clients Are Saying.
          </div>
          <div className="w-[200%] h-64 border-t border-red-400 bg-green-900 flex">
            <div className="w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4"></div>
          </div>
          <div className="radiobuttons my-16">buttons</div>
        </div>
      </div>
      <div className="bg-zinc-200 dark:bg-zinc-950 w-full">
        <div className="w-[95%] lg:w-4/5 xl:w-4/5 mx-auto py-24">
          <div className="w-full tracking-widest text-pink-500 text-lg">
            / CONTACT US
          </div>
          <div
            className={
              merriweather.className +
              " w-full h-64 lg:h-72 xl:h-72 mt-4 font-semibold text-4xl md:text-5xl lg:text-6xl xl:text-6xl leading-snug sm:leading-snug md:leading-snug lg:leading-snug xl:leading-snug"
            }
          >
            Get in touch and lets make something great together. Lets turn your
            idea on an even greater product.
          </div>
          <hr className="border border-pink-500 w-20 my-16" />
          <div className="text-3xl lg:text-5xl xl:text-6xl font-light tracking-wider">
            e-cell@ietlucknow.ac.in
          </div>
          <div className="lg:flex xl:flex w-[80%] my-20 gap-8">
            <div className="w-full lg:w-1/2 xl:w-1/2">
              <div className="w-full tracking-widest text-pink-500 text-lg">
                / WHERE TO FIND US
              </div>
              <div className="text-2xl lg:text-3xl xl:text-3xl md:leading-snug lg:leading-snug xl:leading-snug my-6 text-zinc-700">
                1600 Amphitheatre Parkway Mountain View, CA 94043 US
              </div>
            </div>
            <div className="w-full lg:w-1/2 xl:w-1/2 h-12">
              <div className="w-full tracking-widest text-pink-500 text-lg">
                / FOLLOW US
              </div>
              <div className="flex gap-5 my-6">
                <TbIcons.TbBrandFeedly className="text-zinc-400 dark:text-zinc-700 text-5xl" />
                <TbIcons.TbBrandFeedly className="text-zinc-400 dark:text-zinc-700 text-5xl" />
                <TbIcons.TbBrandFeedly className="text-zinc-400 dark:text-zinc-700 text-5xl" />
                <TbIcons.TbBrandFeedly className="text-zinc-400 dark:text-zinc-700 text-5xl" />
              </div>
            </div>
          </div>
          <div className="text-zinc-700 absolute -right-24 lg:-right-20 xl:-right-16 -rotate-90 tracking-widest flex items-center gap-4">
            <a href="#top">
              <div className="ml-5 w-12 aspect-square lg:w-16 xl:16 rounded-full bg-black hover:bg-zinc-700 hover:text-black transition ease-in delay-75 flex justify-center items-center text-xl">
                <FaIcons.FaArrowRightLong />
              </div>
            </a>
            <hr className="w-28 border border-zinc-700" />
            <div className="text-xs">BACK ON TOP </div>
          </div>
          <div className="text-zinc-400 dark:text-zinc-700 pt-16 w-[80%]">
            Copyright ©2024 All rights reserved | This website is made with{" "}
            <span className="text-xl text-zinc-400 dark:text-zinc-700">&#9829;</span> by Varun Gupta
          </div>
        </div>
      </div>
    </>
  );
}
