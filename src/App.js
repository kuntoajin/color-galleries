import React from "react";
import "./App.css";
import Colors from "./components/Colors";

//
const getColor = document.querySelector("[backgroundColor]");

console.log(getColor);

const App = () => {
  return (
    <div className="App">
      <h1>Color Galleries</h1>
      <div className="colors">
        <Colors />
        <Colors />
        <Colors />
        <Colors />
        <Colors />
        <Colors />
        <Colors />
        <Colors />
        <Colors />
        <Colors />
        <Colors />
        <Colors />
        <Colors />
        <Colors />
        <Colors />
        <Colors />
        <Colors />
        <Colors />
        <Colors />
        <Colors />
        <Colors />
        <Colors />
        <Colors />
        <Colors />
        <Colors />
        <Colors />
        <Colors />
        <Colors />
        <Colors />
      </div>
    </div>
  );
};

export default App;
