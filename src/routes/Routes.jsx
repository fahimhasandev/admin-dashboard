import { createBrowserRouter } from "react-router";
import MainLayout from "@/layout/MainLayout";
import Home from "@/Home/Home";
import Login from "@/login/Login";
import List from "@/List/List";
import New from "@/New/New";
import Single from "@/Single/Single";

export const router = createBrowserRouter([
  {
    path: "/dashboard",
    Component: MainLayout,
    children: [
      { index: true, Component: Home },
      { path: "login", Component: Login },
      {
        path: "users",
        Component: List,
        children: [
          { path: ":userID", Component: Single },
          { path: "new", Component: New },
        ],
      },
      {
        path: "products",
        Component: List,
        children: [
          { path: ":productID", Component: Single },
          { path: "new", Component: New },
        ],
      },
    ],
  },
]);
