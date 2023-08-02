import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import emajohnRoutes from "../routers/emajohnRoutes";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Root } from "./Root";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import Inventory from "./components/inventory/Inventory";
import Shop from "./components/shop/Shop";
import OrderReview from "./components/order-review/OrderReview";
import Home from "./components/home/Home";
const routes = createBrowserRouter([
  {
    path:'/',
    element:<Root/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/shop',
        element:<Shop/>
      },
      {
        path:'/manage-inventory',
        element:<Inventory/>
      },
      {
        path:'/order-review',
        element:<OrderReview/>
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/signup',
        element:<Signup/>
      },
    ]
  }
])
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes}></RouterProvider>
  </React.StrictMode>
);
