import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./Navbar";

const header = React.createElement("div", { class: "titel" }, [
  React.createElement("h1", {}, "This is Heading 1"),
  React.createElement("h2", {}, "This is Heading 2"),
  React.createElement("h3", {}, "This is Heading 3"),
]);
// React Element
const jsxHedding = (
  <div className="titel">
    <h1>This is headding 1</h1>
    <h2>This is headiing 2</h2>
    <h3>This is headdind 3</h3>
  </div>
);
const Titel = () => {
  return (
    <div className="titel">
    <h1>This is headding 1</h1>
    <h2>This is headiing 2</h2>
    <h3>This is headdind 3</h3>
  </div>
  );
};

const Heading = () => (
  //   <React.Fragment>
  <>
    <div className="titel">
    <h1>This is headding 1</h1>
    <h2>This is headiing 2</h2>
    <h3>This is headdind 3</h3>
  </div>
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
const root1 = ReactDOM.createRoot(document.getElementById("root1"));
const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root.render(<Navbar />);
// root1.render(<Titel />);
// root2.render(header);
