import { BsThreeDotsVertical } from "react-icons/bs";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Featured() {
  return (
    <div className="flex-2 p-3 mr-3 shadow-xl rounded text-gray-400 gap-3">
      <div className="flex flex-col justify-between">
        <div className="flex justify-between m-3 ">
          <h3>Totoal Revenue</h3>
          <BsThreeDotsVertical />
        </div>
        <div className="flex justify-between flex-col items-center mt-4">
          <div style={{ width: 200, height: 200 }}>
            <CircularProgressbar value={70} text={`${70}%`} />
          </div>
          <p className="text-xl ">Totoal sales make today</p>
          <span className="text-4xl text-gray-900 my-3">$420</span>
          <p className="text-center px-4 my-4">
            Previous transction processing.Last payments may not be included.
          </p>
          <div className="w-full flex justify-between m-9 px-12">
            <div className="flex flex-col items-center">
              <p className="mb-2">Target</p>
              <div className="flex justify-center items-center text-red-500">
                <IoIosArrowDown />
                <span> $12.4k</span>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <p className="mb-2">Target</p>
              <div className="flex justify-center items-center text-green-500">
                <IoIosArrowDown />
                <span> $12.4k</span>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <p className="mb-2">Target</p>
              <div className="flex justify-center items-center text-green-500 ">
                <IoIosArrowDown />
                <span> $12.4k</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
