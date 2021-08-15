import { React, useState } from 'react'
import './App.css';
import Header from './components/Header';
import Food from './components/Food';
import FoodOptions from './components/FoodOptions';
import ColoredLine from './components/ColoredLine';
import FilterButtons from './components/FilterButtons';

function App() {

  const [location, setLocation] = useState("Chennai");
  console.log(location)
  return (
    <div className="App">
      <Header functions={[location, setLocation]} />
      <FoodOptions />
      <ColoredLine color="gray" />
      <FilterButtons />
      <h1 className="mx-44 pt-4 text-3xl font-normal" >Best Food in {location}</h1>
      <Food />
    </div>
  );
}

export default App;