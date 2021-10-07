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
      <Food />
    </div>
  );
}

export default App;
