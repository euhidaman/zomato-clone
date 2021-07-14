import './App.css';
import Header from './components/Header';
import Food from './components/Food';
import FoodOptions from './components/FoodOptions';

function App() {
  return (
    <div className="App">
      <Header />
      <FoodOptions />
      <Food />
    </div>
  );
}

export default App;
