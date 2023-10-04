import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/header";
import Body from "./component/body";
import Footer from "./component/Footer";

const AppLayout = () => {
  return (
    <>
    <Header/>
    <Body/>
    <Footer/>
    </>
    
  );  
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);

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

