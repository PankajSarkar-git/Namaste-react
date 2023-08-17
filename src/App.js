import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Errors from "./components/Errors";
import Body from "./components/Body";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utills/UserContext";



// chunking
// code splitting
// dynamics bundling
// lazy loading
// on demand loading
// dynamix import

const Grocery = lazy(() => import("./components/Grocery"));
const AppLayOut = () => {
  const [userName, setUserName] = useState();
  useEffect(() => {
    const data = {
      name: "Pankaj Sarkar",
    };
    setUserName(data.name);
  }, []);
  return (
    <UserContext.Provider value={{loggedinUser: userName ,setUserName}}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
       </UserContext.Provider>
  );
};

const routApp = createBrowserRouter([
  {
    path: "/",
    element: <AppLayOut />,
    children: [
      {
        path: "/",
        element: <Body />,
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
        path: "/grocery",
        element: (
          <Suspense
            fallback={
              <>
                <h1>Loading......</h1>
              </>
            }
          >
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/Restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Errors />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routApp} />);
