
import { Outlet } from "react-router";
import Navbar from "../components/navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="">
      <Outlet />
    </div>
  );
};

export default MainLayout;
