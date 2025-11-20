import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { CiShoppingCart } from "react-icons/ci";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { IoMdWallet } from "react-icons/io";

function Widget({ type }) {
  let data;

  //temp
  const amount = 100;
  const diff = 20

  switch (type) {
    case "users":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: <AiOutlineUser className="text-2xl" />,
        color: `bg-red-100`,
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all order",
        icon: <CiShoppingCart className="text-2xl" />,
        color: `bg-yellow-100`,
      };
      break;
    case "earning":
      data = {
        title: "ERARNINGS",
        isMoney: true,
        link: "View net earnings",
        icon: <RiMoneyDollarCircleLine className="text-2xl" />,
        color: `bg-green-100`,
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See details",
        icon: <IoMdWallet className="text-2xl" />,
        color: `bg-purple-100`,
      };
      break;
    default:
      break;
  }

  return (
    <>
      <div className="flex justify-between grow h-38 shadow-md rounded-xl p-4 ">
        <div className="flex flex-col justify-between items-start">
          <span className="uppercase font-bold text-gray-400">
            {data.title}
          </span>
          <p className="text-4xl font-extralight">{data.isMoney && '$'}{amount}</p>
          <a href="#" className="text-gray-400 underline text-sm">
            {data.link}
          </a>
        </div>
        <div className="flex flex-col justify-between  items-end">
          <div className="flex text-green-700">
            <MdOutlineKeyboardArrowUp className="text-2xl" />
            <span> 20%</span>
          </div>
          <span
            className={`w-8 h-8 ${data.color} flex items-center justify-center rounded`}
          >
            {data.icon}
          </span>
        </div>
      </div>
    </>
  );
}

export default Widget;
