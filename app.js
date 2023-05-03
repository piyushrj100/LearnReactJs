/**
<div id = "parent">
    <div id ="child">
        <h1>Iti si h1 tag</h1>
    </div>
</div>
    

 */

import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "This is an h1 tag"),
    React.createElement("h2", {}, "This is an h2 tag"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "This is an h1 tag"),
    React.createElement("h2", {}, "This is an h2 tag"),
  ]),
]);
// const heading = React.createElement(
//     "h1",
//     {id : "heading"},
//     "Hello from React"
//  );

//JSX code is transpiled before it reaches Javascript engine- meaning transferred . PARCEL-Babel is converting from JSX to react.createElement
//Babel is javascript compiler
const Title = () => (
  <h1 id="heading" className="head" tabIndex="5">
    {" "}
    Namaste React using JSX
  </h1>
);
const elem = <span>React Element</span>

//React functional component-- returns a JSX
// const HeadingComponent = () => {
//   return <h1>Namaste React Functional Component</h1>;
// };
//Jsx can only have 1 parent tag
//Raact Fragment acts as an empty tag
//React gives you empty tag as well, <></>
const number = 1000
const HeadingComponent = () => (
    <>
    {/* <React.Fragment> */}
    <div id="container">
            <Title/> 
            {Title()}
            <Title></Title>
            {elem}
            <h1 className="heading">Namaste  React Functional Component</h1>
        </div>
        <div>
            <h2>JSX can have only one parent</h2>
        </div>
    {/* </React.Fragment> */}
    </>
);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);
root.render(<HeadingComponent />);
