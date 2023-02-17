import { HiUser } from "react-icons/hi";

export function ByServing() {

  return (
    <div >
      <p className="font-bold text-gray-700">Filter by Size</p>
      <div className="my-3 w-full flex justify-between flex-wrap gap-5">
        <button className="border-orange-600 text-orange-500 hover:bg-orange-500 hover:text-white flex">
          <HiUser size={24} />
        </button>
        <button className="border-orange-600 text-orange-500 hover:bg-orange-500 hover:text-white flex">
          <HiUser size={24} />
          <HiUser size={24} />
        </button>
        <button className="border-orange-600 text-orange-500 hover:bg-orange-500 hover:text-white flex">
          <HiUser size={24} />
          <HiUser  size={24}/>
          <HiUser size={24} />
        </button>
        <button className="border-orange-600 text-orange-500 hover:bg-orange-500 hover:text-white flex">
          <HiUser size={24} />
          <HiUser size={24} />
          <HiUser size={24} />
          <HiUser size={24} />
        </button>

      </div>
    </div>
  );
}