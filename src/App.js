import './App.css';
import Header from './components/Header';
import Food from './components/Food';
import FoodOptions from './components/FoodOptions';
import ColoredLine from './components/ColoredLine';
import FilterButtons from './components/FilterButtons';

function App() {
  return (
    <div className="App">
      <Header />
      <FoodOptions />
      <ColoredLine color="gray" />
      <FilterButtons />
      <Food />
    </div>
  );
}

export default App;
