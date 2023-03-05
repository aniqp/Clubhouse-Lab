import logo from './logo.svg';
import './App.css';
import Counter from './features/counter/Counter';
import IncrementByAmount from './features/counter/IncrementByAmount';

function App() {
  return (
    <div className="App">
      <IncrementByAmount />
    </div>
  );
}

export default App;
