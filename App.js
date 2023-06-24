// const hedding = React.createElement("h1", { id: 'hedding', xyz: "abcd" }, "Hello World form React !");
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(hedding);
import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement("div", { id: "parent", xyz: "abcd" }, [
    React.createElement("div", { id: "chaild", xyz: "abcd" }, [
        React.createElement("h1", {}, "I am h1 tag"),
        React.createElement("h2", {}, "I am h2 tag"),
    ]),
    React.createElement("div", { id: "chaild2", xyz: "abcd" }, [
        React.createElement("h1", {}, "I am h1 tag"),
        React.createElement("h2", {}, "I am h2 tag"),
    ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
