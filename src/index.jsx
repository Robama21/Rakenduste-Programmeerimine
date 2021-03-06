import React from "react";
import ReactDOM from "react-dom";
import HomePage from "./HomePage.jsx";
import ItemPage from "./ItemPage.jsx";
import {
  BrowserRouter,
  Route
} from "react-router-dom";

const root = document.getElementById("app");

//console.log("root", root);

ReactDOM.render(
  //React.createElement("button", {}, "I am a button, Hello World!"),
  //<button>I am button, hello world</button>,
  <BrowserRouter>
    <Route path="/" exact component={HomePage} />
    <Route path="/items/:itemId" exact component={ItemPage} />
  </BrowserRouter>,
  root
);
