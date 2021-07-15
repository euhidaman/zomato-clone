import './App.css';
import Header from './components/Header';
import Food from './components/Food';
import FoodOptions from './components/FoodOptions';
import ColoredLine from './components/ColoredLine';

function App() {
  return (
    <div className="App">
      <Header />
      <FoodOptions />
      <ColoredLine color="gray" />
      <Food />
    </div>
  );
}

export default App;
