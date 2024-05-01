import { FaCheck } from "react-icons/fa";

export default function Confirm(props) {
  return (
    <>
      <div className="fixed w-screen h-screen bg-gray-400/[.5] dark:bg-gray-700/[.5] z-30 flex justify-center items-center">
        <div className="w-[95%] md:w-2/5 py-12 text-center bg-slate-100 dark:bg-slate-950 px-4 rounded-xl">
          <div className="h-10 w-10 mx-auto my-3 rounded-full bg-green-200 flex justify-center items-center">
            <FaCheck className="text-green-500 text-2xl" />
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
          <div
            className="mx-auto w-20 h-8 py-1 bg-green-500 rounded-lg font-semibold cursor-pointer"
            onClick={props.refreshPage}
          >
            OK
          </div>
        </div>
      </div>
    </>
  );
}
