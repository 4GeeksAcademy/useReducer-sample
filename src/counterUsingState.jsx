import React, { useState } from "react";
export default function CounterUsingState() {
  // Crea un estado con un valor inicial
  const [counter, setCounter] = useState(0);
  // Estas son las funciones que ejecutan la logica correspondiente la estado
  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);
  const reset = () => setCounter(0);
  const plusten = () => setCounter(counter + 10);
  const multiplyByTwo = () => setCounter(counter * 2);

  return (
    <div>
      <h2>State counter</h2>
      <h3>{counter}</h3>
      <div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
        <button onClick={reset}>0</button>
        <button onClick={plusten}>+10</button>
        <button onClick={multiplyByTwo}>x2</button>
      </div>
    </div>
  );
}
