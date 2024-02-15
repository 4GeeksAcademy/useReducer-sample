import "./App.css";
import CounterUsingState from "./counterUsingState";
import CounterUsingReducer from "./counterUsingReducer";

export default function App() {
  return (
    <div className="App">
      <CounterUsingState></CounterUsingState>
      <CounterUsingReducer></CounterUsingReducer>
    </div>
  );
}
