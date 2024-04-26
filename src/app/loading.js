import { LuLoader2 } from "react-icons/lu";
function loading() {
  return (
    <>
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <LuLoader2 class="motion-reduce:hidden animate-spin text-5xl font-bold text-pink-600" />
        <div className="mt-3 text-4xl font-bold">Loading</div>
        <div className="text-xl font-medium">Please Wait...</div>
      </div>
    </>
  );
}

export default loading;
