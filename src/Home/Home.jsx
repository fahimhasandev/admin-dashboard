import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/sidebar";
import Widget from "../components/Widget/Widget";
import Featured from "../components/Featured/Featured";
import Chart from "../components/Chart/Chart";
import Table from "../components/Table/Table";

const Home = () => {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="w-full">
        <Navbar />
        <div className="flex justify-between m-6 gap-3 ">
          <Widget type={"users"} />
          <Widget type={"order"} />
          <Widget type={"earning"} />
          <Widget type={"balance"} />
        </div>
        {/* chart */}
        <div className="flex m-6">
          {/* Totoal Revenue */}
          <Featured />
          <Chart />
        </div>

        {/* Table */}
        <Table />
      </div>
    </div>
  );
};

export default Home;
