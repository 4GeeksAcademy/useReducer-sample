import React, { useReducer } from "react";
import counterReducer, { intitialCounter } from "./counterReducer";

export default function CounterUsingReducer() {
  // Agregamos el hook useReducer, pasandole como parametros
  // nuestra funcion reducer y el inicializador,
  // ambos importados desde otro archivo
  const [state, dispatch] = useReducer(counterReducer, intitialCounter());

  return (
	<div>
	  <h2>Reducer counter</h2>
	  {/* Ahora el counter esta dentro del estado del reducer */}
	  <h3>{state.counter}</h3>
	  <div>
		{/* Llamamos a la función dispatch con el tipo de acción para ejecutar la lógica del reducer */}
		<button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
		<button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
		<button onClick={() => dispatch({ type: "RESET" })}>0</button>
		<button onClick={() => dispatch({ type: "PLUSTEN" })}>+10</button>
		<button onClick={() => dispatch({ type: "MULTYPLYBYTWO" })}>x2</button>
	  </div>
	</div>
  );
}
