import React from "react";
import { Outlet } from "react-router";

const List = () => {
  return (
    <>
      <div>List</div>
      <Outlet />
    </>
  );
};

export default List;
