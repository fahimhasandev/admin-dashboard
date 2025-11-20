import { CiGlobe, CiSearch } from "react-icons/ci";
import { FaRegMoon } from "react-icons/fa";
import { RiFullscreenExitLine } from "react-icons/ri";
import {
  MdOutlineCircleNotifications,
  MdOutlineMailOutline,
} from "react-icons/md";
import { IoListOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <>
      <div className="flex border-b-1 border-gray-200 h-16  justify-between items-center">
        <div className="relative">
          <input
            className="p-1 border border-gray-300 m-2 rounded"
            type="text"
            placeholder="Search..."
          />
          <CiSearch className="absolute bottom-4 right-3 cursor-pointer" />
        </div>
        <div className="w-1/2 mr-5">
          <ul className="flex items-center justify-end p-4">
            <li className="flex items-center mr-5">
              <CiGlobe className="text-gray-500 text-xl font-semibold" />
              <span>English</span>
            </li>
            <li className="mr-5">
              <FaRegMoon className="text-gray-500 text-xl font-semibold" />
            </li>
            <li className="mr-5">
              <RiFullscreenExitLine className="text-gray-500 text-xl font-semibold" />
            </li>
            <li className="relative mr-5">
              <MdOutlineCircleNotifications className="text-gray-500 text-2xl font-semibold" />
              <span className="flex items-center text-white w-4 h-4 bg-red-600 rounded-full absolute bottom-3 left-4 text-xs p-1">
                1
              </span>
            </li>
            <li className=" relative mr-5">
              <MdOutlineMailOutline className="text-gray-500 text-2xl font-semibold" />
              <span className="flex items-center text-white w-4 h-4 bg-red-600 rounded-full absolute bottom-3 left-4 text-xs p-1">
                2
              </span>
            </li>
            <li className="mr-5">
              <IoListOutline className="text-gray-500 text-2xl font-semibold" />
            </li>

            <li className="w-10">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                className="rounded-full"
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
