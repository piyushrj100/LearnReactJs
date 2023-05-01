/**
<div id = "parent">
    <div id ="child">
        <h1>Iti si h1 tag</h1>
    </div>
</div>
    

 */

import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
    "div",
    {id : "parent"}, [
    React.createElement("div",{id : "child"},[
        React.createElement("h1",{},"This is an h1 tag"),
        React.createElement("h2",{},"This is an h2 tag")
        ]),
        React.createElement("div",{id : "child"},[
            React.createElement("h1",{},"This is an h1 tag"),
            React.createElement("h2",{},"This is an h2 tag")
        ])
]);
// const heading = React.createElement(
//     "h1",
//     {id : "heading"},
//     "Hello from React"
//  );
 console.log(parent)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent)