import React from "react";
import ReactDOM from "react-dom/client"; 
import Header from "./component/Header";
import Body from "./component/body";
import Footer from "./component/Footer";
import About from "./component/About.js";
import Error from "./component/Error.js"
import Contact from "./component/Contact";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import RestrauntMenu from "./component/RestrauntMenu";
import Profile from "./component/Profile";
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
        children:[{
          path:"profile",
          element:<Profile/>
        }]
      },
      {
        path:"/Contact",
        element:<Contact/>,
      },
      {
        path:"/restraurant/:resId",
        element:<RestrauntMenu/>,
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

