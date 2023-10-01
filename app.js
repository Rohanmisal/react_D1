import React from "react";
import ReactDOM from "react-dom";

const heading = React.createElement(
    "h1",
    {
        id:"title1",
    },
    "Heading1",
);

const heading2 = React.createElement(
    "h2",
    {
        id:"title2",    
    },
    "Heading2", 
);

const container = React.createElement(
    "div",
    {
        id:"container",
    },
    [heading,heading2],
);

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);