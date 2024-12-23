import React, { useState } from 'react';
import './App.css'

const App = () => {
  const [number, setNumber] = useState(0);

  const handleClick = () => {
    setNumber(number + 1);
  };
  const handledecrement=()=>{
    setNumber(number-1)
  }

  return (
    <div className='container'>
      <p>Current number: {number}</p>
      <button onClick={handleClick} type="button">Increment</button>
      <button onClick={handledecrement} type='button'>decrement</button>
    </div>
  );
};

export default App;
