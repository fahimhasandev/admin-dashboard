import {
  MdDashboard,
  MdStorefront,
  MdCreditCard,
  MdLocalShipping,
  MdOutlineInsertChart,
  MdNotificationsActive,
  MdOutlineSettingsSystemDaydream,
  MdOutlinePsychology,
  MdOutlineSettingsApplications,
  MdAccountCircle,
  MdLogout,
} from "react-icons/md";
import { PiUserSquare } from "react-icons/pi";

const Sidebar = () => {
  return (
    <>
      <div className="w-1/5 border-r-1 h-screen border-gray-100">
        <div className="font-nunito font-bold text-2xl border-b-1 border-gray-100 p-4 text-center text-purple-700">
          Users Admin
        </div>
        <div className="ml-3.5 py-2.5">
          <ul className="">
            <p className="mt-2.5 pb-3 text-gray-400 uppercase">Main</p>
            <li className="flex items-center gap-2 pb-3 ml-4 hover:bg-purple-100 hover:cursor-pointer">
              <MdDashboard className="text-2xl font-bold text-purple-700" />
              <span className="text-gray-500 ">Dashboard</span>
            </li>

            {/* Lists */}
            <p className="mt-4.5 pb-1 text-gray-400 uppercase">Lists</p>
            <li className="flex items-center gap-2 py-2 ml-4 hover:bg-purple-100 hover:cursor-pointer">
              <PiUserSquare className="text-2xl font-bold text-purple-700" />
              <span className="text-gray-400">Users</span>
            </li>
            <li className="flex items-center gap-2 py-2 ml-4 hover:bg-purple-100 hover:cursor-pointer">
              <MdStorefront className="text-2xl font-bold text-purple-700" />
              <span className="text-gray-400">Products</span>
            </li>
            <li className="flex items-center gap-2 py-2 ml-4 hover:bg-purple-100 hover:cursor-pointer">
              <MdCreditCard className="text-2xl font-bold text-purple-700" />
              <span className="text-gray-400">Orders</span>
            </li>
            <li className="flex items-center gap-2 py-2 ml-4 hover:bg-purple-100 hover:cursor-pointer">
              <MdLocalShipping className="text-2xl font-bold text-purple-700" />
              <span className="text-gray-400">Delivery</span>
            </li>

            {/* Useful */}
            <p className="mt-4.5 pb-1 text-gray-400 uppercase">Useful</p>
            <li className="flex items-center gap-2 py-2 ml-4">
              <MdOutlineInsertChart className="text-2xl font-bold text-purple-700" />
              <span className="text-gray-400">Stats</span>
            </li>
            <li className="flex items-center gap-2 py-2 ml-4">
              <MdNotificationsActive className="text-2xl font-bold text-purple-700" />
              <span className="text-gray-400">Notifications</span>
            </li>
            {/* Service Section */}
            <p className="mt-4.5 pb-1 text-gray-400 uppercase">service</p>
            <li className="flex items-center gap-2 py-2 ml-4">
              <MdOutlineSettingsSystemDaydream className="text-2xl font-bold text-purple-700" />
              <span className="text-gray-400">System Health</span>
            </li>
            <li className="flex items-center gap-2 py-2 ml-4">
              <MdOutlinePsychology className="text-2xl font-bold text-purple-700" />
              <span className="text-gray-400">Notifications</span>
            </li>
            <li className="flex items-center gap-2 py-2 ml-4">
              <MdOutlineSettingsApplications className="text-2xl font-bold text-purple-700" />
              <span className="text-gray-400">Settings</span>
            </li>
            {/* User */}
            <p className="mt-4.5 pb-1 text-gray-400 uppercase">User</p>
            <li className="flex items-center gap-2 py-2 ml-4">
              <MdAccountCircle className="text-2xl font-bold text-purple-700" />
              <span className="text-gray-400">Profile</span>
            </li>
            <li className="flex items-center gap-2 py-2 ml-4">
              <MdLogout className="text-2xl font-bold text-purple-700" />
              <span className="text-gray-400">Logout</span>
            </li>
          </ul>

          {/* Color Options */}
          <div className="flex gap-3 mt-4 ml-4">
            <div className="w-6 h-6 border border-purple-700 cursor-pointer rounded bg-gray-200 "></div>
            <div className="w-6 h-6 border border-purple-700 cursor-pointer rounded bg-black"></div>
            <div className="w-6 h-6 border border-purple-700 cursor-pointer rounded bg-blue-900"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
