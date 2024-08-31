import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
import StarRating from "./StarRating";
import { Test } from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating maxRating={10} />
    <StarRating maxRating={10} color={"purple"} size={20} />
    <StarRating
      color={"red"}
      messages={["one star", "two stars", "three stars"]}
    />
    <StarRating
      maxRating={5}
      color={"green"}
      size={100}
      className="customClass"
      messages={["terrible", "bad", "ok", "good", "amazing"]}
      defaultRating={4}
    />
    <StarRating maxRating={4} defaultRating={2} color={"blue"} />
    <Test />
    <StarRating maxRating={50} color={"black"} size={20} defaultRating={25} />
  </React.StrictMode>
);
