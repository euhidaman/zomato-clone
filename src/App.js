import { React, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Food from "./components/Food";
import FoodOptions from "./components/FoodOptions";
import FilterButtons from "./components/FilterButtons";
import ColoredLine from "./components/ColoredLine";

function App() {
  const [location, setLocation] = useState("Chennai");
  const [searchQuery, setQuery] = useState("");
  const [filters, setFilters] = useState({ rating: 0 });

  const onChangeFilters = (filters) => {
    setFilters(filters);
  };

  return (
    <div className="App">
      <Header
        functions={[location, setLocation]}
        setQuery={setQuery}
        searchQuery={searchQuery}
      />
      <FoodOptions />
      <ColoredLine />
      <FilterButtons filters={filters} onChangeFilters={onChangeFilters} />
      <h1 className="mx-44 pt-4 text-3xl font-normal food-head" >Best Food in {location}</h1>
      <Food filters={filters} />
    </div>
  );
}

export default App;
