import { React, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Food from "./components/Food";
import FoodOptions from "./components/FoodOptions";
import FilterButtons from "./components/FilterButtons";
import ColoredLine from "./components/ColoredLine";

function App() {
  const [location, setLocation] = useState("Chennai");
  return (
    <div className="App">
      <Header functions={[location, setLocation]} />
      <FoodOptions />
      <ColoredLine />
      <FilterButtons />
      <h1 className="mx-44 pt-4 text-3xl font-normal" >Best Food in {location}</h1>
      <Food />
    </div>
  );
}

export default App;
