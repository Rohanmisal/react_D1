import React from "react";
import ReactDOM from "react-dom/client"; 
import Header from "./component/Header";
import Body from "./component/body";
import Footer from "./component/Footer";
import About from "./component/About.js";
import Error from "./component/Error.js"
import Contact from "./component/Contact";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
//<outlet/>
const AppLayout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
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
        path:"/",
        element:<Body/>,
      },
      {
        path:"/about",
        element:<About/>,
      },
      {
        path:"/Contact",
        element:<Contact/>,
      },
    ]
  },
 
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(<AppLayout/>);
root.render(<RouterProvider router={appRouter}/>);
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

