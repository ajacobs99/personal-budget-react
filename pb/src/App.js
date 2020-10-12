import React, { useState }  from 'react';
import './App.css';

import Button from './Button/Button'; 

function App() {
  const [ currentState, setState] = useState(99); 
  const quantity = 25; 
  const increment = () => setState(currentState + quantity);
  return (
    <div className="App">
        <h1>You Clicked {currentState} Times</h1>
        <Button handleClick={increment} title={'+' + quantity}/>
    </div>
  );
}

export default App;
