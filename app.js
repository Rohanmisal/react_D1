import React from "react";
import ReactDOM from "react-dom/client";

import React from 'react'

const Header = () => {
  return (
    <div id="container">
      <h1 id="title"  key="1">This is the Functional Component 1</h1>
      <h2 id="title" key="2">This  Functional Component 2</h2>
    </div>
  )
}

export default Header


// const heading = React.createElement(
//     "h1",
//     {
//         id:"title1",
//     },
//     "Heading1",
// );

// const heading2 = React.createElement(
//     "h2",
//     {
//         id:"title2",    
//     },
//     "Heading2", 
// );

// const container = React.createElement(
//     "div",
//     {
//         id:"container",
//     },
//     [heading,heading2],
// );

console.log(<Header/>);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Header/>);