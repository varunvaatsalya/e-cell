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
      <div className="h-[100vh] bg-black text-white">
        <header className="flex justify-between p-12">
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
            <div className="text-xl font-semibold">MENU</div>
            <div>
              <FaIcons.FaBars />
            </div>
          </div>
        </header>
        <div className="w-full flex justify-between">
          <div className="w-full lg:w-3/5 xl:w-3/5 bg-green-500">
            <div
              className={
                merriweather.className + " w-full text-5xl font-bold bg-red-400"
              }
            >
              <div className={merriweather.className}>Hello folks, we are</div>
              <div>E-CELL IET Lucknow</div>
            </div>
            <div className="flex">
              <hr className="w-16" />
              <div className="">
                We create stunning digital experiences that will help your
                business stand out.
              </div>
            </div>
          </div>
          <div className="hidden lg:block xl:block bg-orange-400 w-2/5">
            <ul className="">
              <li>
                <a className="" href="#">
                  About<span>who we are</span>
                </a>
              </li>
              <li>
                <a className="" href="#">
                  Services<span>what we do</span>
                </a>
              </li>
              <li>
                <a className="" href="#">
                  Contact<span>get in touch</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex">
          <div className="w-full bg-gray-400 flex justify-between">
            <ul className="flex ">
              <li>Follow Us</li>
              <hr className="w-6" />
              <li>facebook</li>
              <li>Twitter</li>
              <li>LinkedIn</li>
            </ul>
            <div className="flex">
              <div>SCROLL DOWN</div>
              <div className="w-14 h-14 bg-white rounded-full text-black text-center">
                &#8595;
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="w-full">
        <div className="w-[95%] lg:w-4/5 xl:w-4/5 mx-auto my-32">
          <div className="w-full tracking-widest text-pink-500">
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
      <div className="bg-zinc-200 dark:bg-zinc-950 w-full">
        <div className="w-[95%] lg:w-4/5 xl:w-4/5 mx-auto py-32">
          <div className="w-full tracking-widest text-pink-500">
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
              <div className="text-xl lg:text-lg xl:text-lg text-gray-600 dark:text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dicta voluptas perferendis necessitatibus praesentium harum laudantium reiciendis ut animi nihil modi, consequuntur labore quo expedita? Veritatis nobis itaque perferendis voluptate blanditiis dicta vitae ipsam!</div>
            </div>
            <div className="w-full lg:w-1/3 xl:w-1/3 px-4 my-10">
              <div className="h-16 w-16 text-teal-400 text-7xl">
                <TbIcons.TbBrandAmd />
              </div>
              <div className=" my-6 text-2xl font-semibold">Illustration</div>
              <div className="text-xl lg:text-lg xl:text-lg text-gray-600 dark:text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dicta voluptas perferendis necessitatibus praesentium harum laudantium reiciendis ut animi nihil modi, consequuntur labore quo expedita? Veritatis nobis itaque perferendis voluptate blanditiis dicta vitae ipsam!</div>
            </div>
            <div className="w-full lg:w-1/3 xl:w-1/3 px-4 my-10">
              <div className="h-16 w-16 text-teal-400 text-7xl">
                <TbIcons.TbBrandBitbucket />
              </div>
              <div className=" my-6 text-2xl font-semibold">Web Design</div>
              <div className="text-xl lg:text-lg xl:text-lg text-gray-600 dark:text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dicta voluptas perferendis necessitatibus praesentium harum laudantium reiciendis ut animi nihil modi, consequuntur labore quo expedita? Veritatis nobis itaque perferendis voluptate blanditiis dicta vitae ipsam!</div>
            </div>
          </div>
          <div className="w-full lg:flex xl:flex">
            <div className="w-full lg:w-1/3 xl:w-1/3 px-4 my-10">
              <div className="h-16 w-16 text-teal-400 text-7xl">
                <TbIcons.TbBrandCakephp />
              </div>
              <div className=" my-6 text-2xl font-semibold">Product Strategy</div>
              <div className="text-xl lg:text-lg xl:text-lg text-gray-600 dark:text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dicta voluptas perferendis necessitatibus praesentium harum laudantium reiciendis ut animi nihil modi, consequuntur labore quo expedita? Veritatis nobis itaque perferendis voluptate blanditiis dicta vitae ipsam!</div>
            </div>
            <div className="w-full lg:w-1/3 xl:w-1/3 px-4 my-10">
              <div className="h-16 w-16 text-teal-400 text-7xl">
                <TbIcons.TbBrandDribbble />
              </div>
              <div className=" my-6 text-2xl font-semibold">UI/UX Design</div>
              <div className="text-xl lg:text-lg xl:text-lg text-gray-600 dark:text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dicta voluptas perferendis necessitatibus praesentium harum laudantium reiciendis ut animi nihil modi, consequuntur labore quo expedita? Veritatis nobis itaque perferendis voluptate blanditiis dicta vitae ipsam!</div>
            </div>
            <div className="w-full lg:w-1/3 xl:w-1/3 px-4 my-10">
              <div className="h-16 w-16 text-teal-400 text-7xl">
                <TbIcons.TbBrandFeedly />
              </div>
              <div className=" my-6 text-2xl font-semibold">Mobile Development</div>
              <div className="text-xl lg:text-lg xl:text-lg text-gray-600 dark:text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dicta voluptas perferendis necessitatibus praesentium harum laudantium reiciendis ut animi nihil modi, consequuntur labore quo expedita? Veritatis nobis itaque perferendis voluptate blanditiis dicta vitae ipsam!</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
