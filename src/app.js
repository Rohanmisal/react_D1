import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/body";
import Footer from "./component/Footer";
//import About from "./component/about.js";
//import Error
//import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";

const AppLayout = () => {
  return (
    <>
    <Header/>
    <outlet/>
    <Body/>
    <Footer/>
    </>
    
  );  
};

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/about",
        element:<About/>,
      },
    ]
  },
 
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);
//root.render(<RouterProvider router={appRouter}/>);
/**
  Header
    - Logo
    - Nav Items
    - Cart
  Body
    - SearchBar
    - RestrauntList
      - RestrauntCard
        - Image 
        - Name 
        -Rating 
        - Cusines
  Footer
    - Links
    - CopyWrites

*/

