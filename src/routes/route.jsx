import { createBrowserRouter } from "react-router-dom";
import { MainLayouts } from "../MainLayouts/MainLayouts";
import { MainHome } from "../Pages/Home/MainHome/MainHome";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts/>,
      children:[
        {
            path:'/',
            element: <MainHome/>
        },
        
      ]
    },
  ]);