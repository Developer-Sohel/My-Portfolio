import { createBrowserRouter } from "react-router-dom";
import { MainLayouts } from "../MainLayouts/MainLayouts";
import { MainHome } from "../Pages/Home/MainHome/MainHome";
import { About } from "../Pages/About/About";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts/>,
      children:[
        {
            path:'/',
            element: <MainHome/>
        },
        {
          path: '/',
          element: <About/>
        }
      ]
    },
  ]);