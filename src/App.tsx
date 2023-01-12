import React from "react";
import UseStateComponent from "./UseStateComponent";
import UseEffectComponent from "./UseEffectComponent";
import UseContextComponent from "./UseContextComponent";
import UseReducerComponent from "./UseReducerComponent";
import UseRefComponent from "./UseRefComponent";
import CustomHookComponent from "./CustomHookComponent";
import TestComponent from "./EvenMoreComponent";

function App() {
  return (
    <div className="App">
      <h1>useState</h1>
      <UseStateComponent></UseStateComponent>
      <h1>useEffect</h1>
      <UseEffectComponent></UseEffectComponent>
      <h1>useContext</h1>
      <UseContextComponent></UseContextComponent>
      <h1>useReducer</h1>
      <UseReducerComponent></UseReducerComponent>
      <h1>useRef</h1>
      <UseRefComponent></UseRefComponent>
      <h1>useCustomHook</h1>
      <CustomHookComponent></CustomHookComponent>
      <h1>Even More</h1>
      <TestComponent></TestComponent>
    </div>
  );
}

export default App;
