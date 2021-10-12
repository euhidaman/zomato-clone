import { React, useState } from 'react'
import './App.css';
import Header from './components/Header';
import Food from './components/Food';
import FoodOptions from './components/FoodOptions';
import ColoredLine from './components/ColoredLine';
import FilterButtons from './components/FilterButtons';

function App() {

  const [location, setLocation] = useState("Chennai");

  return (
    <div className="App">
      <Header functions={[location, setLocation]} />
      <FoodOptions />
      <ColoredLine color="gray" />
      <FilterButtons />
      <div className="md : pt-8 text-3xl font-normal mx-14" >Best Food in {location}</div>
      <Food />
    </div>
  );
}

export default App;