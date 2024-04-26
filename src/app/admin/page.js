import Image from "next/image";
import Link from "next/link";
import Navbar from "../Navbar";
import * as FaIcons from "react-icons/fa";
import * as Fa6Icons from "react-icons/fa6";
import { MdOutgoingMail } from "react-icons/md";

function page() {
  return (
    <>
      <header className="w-full px-8 py-6 ">
        <Navbar />
        <Image
          height={500}
          width={500}
          src="/logo.svg"
          className="mx-auto w-24 h-auto rounded-xl"
        />

        <div className="text-center text-xl">E-CELL IET Lucknow</div>
        <div className="text-center text-2xl font-medium">Admin Panel</div>
      </header>
      <hr className="border border-gray-300 dark:border-gray-900 " />
      <div className="w-[95%] md:w-4/5 px-4 mx-auto">
        <div className="w-full rounded-xl my-4 px-2 py-4 bg-slate-300 dark:bg-slate-900">
          <Link href="/admin/uploads">
            <FaIcons.FaCloudUploadAlt className="text-5xl mx-auto" />
            <div className="text-center text-3xl font-medium">Upload Blogs</div>
            <div className="w-3/4 mx-auto text-lg my-4 text-gray-700 dark:text-gray-400 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              autem officiis adipisci. Consectetur minus iste earum hic
              similique, veritatis aperiam doloremque, a fuga quam natus quidem
              ducimus. Architecto laboriosam ad enim itaque, fugiat magnam?
            </div>
          </Link>
        </div>
        <div className="w-full rounded-xl my-4 px-2 py-4 bg-slate-300 dark:bg-slate-900">
          <Link href="/admin/updateBlog">
            <FaIcons.FaEdit className="text-5xl mx-auto" />
            <div className="text-center text-3xl font-medium">Update Blogs</div>
            <div className="w-3/4 mx-auto text-lg my-4 text-gray-700 dark:text-gray-400 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              autem officiis adipisci. Consectetur minus iste earum hic
              similique, veritatis aperiam doloremque, a fuga quam natus quidem
              ducimus. Architecto laboriosam ad enim itaque, fugiat magnam? a fuga quam natus quidem
              ducimus. Architecto laboriosam ad enim itaque, fugiat magnam?
            </div>
          </Link>
        </div>
        <div className="w-full rounded-xl my-4 px-2 py-4 bg-slate-300 dark:bg-slate-900 ">
          <Link href="/admin" className=" cursor-not-allowed">
            <MdOutgoingMail className="text-5xl mx-auto" />
            <div className="text-center text-3xl font-medium">Send Mail</div>
            <div className="w-3/4 mx-auto text-lg my-4 text-red-700 dark:text-red-400 text-center">
              This section has been disabled
            </div>
          </Link>
        </div>  
        <div className="w-full rounded-xl my-4 px-2 py-4 bg-slate-300 dark:bg-slate-900">
          <Link href="/admin/contentUpdate" className="h-full w-full">
            <Fa6Icons.FaStackExchange className="text-5xl mx-auto" />
            <div className="text-center text-3xl font-medium">Change Content</div>
            <div className="w-3/4 mx-auto text-lg my-4 text-gray-700 dark:text-gray-400 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              autem officiis adipisci. Consectetur minus iste earum hic
              similique, veritatis aperiam doloremque, a fuga quam natus quidem
              ducimus. Architecto laboriosam ad enim itaque, fugiat magnam?
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export function generateMetadata({ params }) {
  return { title: "E-CELL - Admin", description: "about user page" };
}

export default page;
