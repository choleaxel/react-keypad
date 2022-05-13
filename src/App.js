//import logo from './logo.svg';
import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  //const [correct, setCorrect] = useState(true)

  return (
    <div className="App">
      <h1>Keypad</h1>
      <p>{count}</p>

        <section class="btn-group">
          <button onClick={() => setCount(count +'1' )}>1</button>
          <button onClick={() => setCount(count +'2' )}>2</button>
          <button onClick={() => setCount(count +'3' )}>3</button>
        </section>
        
        <section class="btn-group">
          <button onClick={() => setCount(count +'4' )}>4</button>
          <button onClick={() => setCount(count +'5' )}>5</button>
          <button onClick={() => setCount(count +'6' )}>6</button>
        </section>
        
        <section class="btn-group">
          <button onClick={() => setCount(count +'7' )}>7</button>
          <button onClick={() => setCount(count +'8' )}>8</button>
          <button onClick={() => setCount(count +'9' )}>9</button>
        </section>
        
        <section class="btn-group">
          <button onClick={() => setCount('')}>CLR</button>
          <button onClick={() => setCount(count +'0' )}>0</button>
          <button onClick={() => setCount(count === '1234' ? 'HI!' : 'INVALID')}>⏎</button>
        </section>
    </div>
  );
}

export default App;
