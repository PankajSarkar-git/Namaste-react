import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Errors from "./components/Errors";
import Body from "./components/Body";
import ResturantMenu from './components/ResturantMenu';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const AppLayOut = () => {

  
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const routApp = createBrowserRouter([
  {
    path: "/",
    element: <AppLayOut />,
    children: [
      {
        path: "/",
        element: <Body/>
        },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/Resturants/:resId",
        element: <ResturantMenu />,
      },
    ],
    errorElement: <Errors />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routApp} />);
