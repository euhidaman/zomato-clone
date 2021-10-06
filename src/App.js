import { React, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Food from "./components/Food";
import FoodOptions from "./components/FoodOptions";
import ColoredLine from "./components/ColoredLine";
import FilterButtons from "./components/FilterButtons";
import Find from "./components/Find";

function App() {
  const [location, setLocation] = useState("Chennai");
  const [searchQuery, setQuery] = useState("");
  const [searched, setSearched] = useState(false);
  return (
    <div className="App">
      <Header
        functions={[location, setLocation]}
        setQuery={setQuery}
        setSearched={setSearched}
        searched={searched}
      />
      <FoodOptions />
      <ColoredLine color="gray" />
      <FilterButtons />
      {searchQuery && searched ? (
        <Find searchQuery={searchQuery} />
      ) : (
        <>
          <h1 className="flex justify-start relative sm:mx-14 font-normal text-3xl lg:mx-20">
            Best Food in {location}
          </h1>
          <Food />
        </>
      )}
    </div>
  );
}

export default App;
