import React from "react";
import "./App.css";
import { useState } from "react";

export default function App() {
  const [number, setNumber] = useState(1);
  const onInc = () => {
    setNumber((current) => current + 1);
  }
  console.log(number);

  return (
    <div id="container">
      <h1>Root: {number}</h1>
      <Left1 number={number}></Left1>
      <Right1 onInc={onInc}></Right1>
    </div>
  );
}

function Left1(props) {
  return (
    <div>
      <h1>Left1: {props.number}</h1>
      <Left2 number={props.number}></Left2>
    </div>
  );
}

function Left2(props) {
  return (
    <div>
      <h1>Left2: {props.number}</h1>
      <Left3 number={props.number}></Left3>
    </div>
  );
}

function Left3(props) {
  return (
    <div>
      <h1>Left3: {props.number}</h1>
    </div>
  );
}

function Right1(props) {
  return (
    <div>
      <h1>Right1</h1>
      <Right2 onInc={props.onInc}></Right2>
    </div>
  );
}

function Right2(props) {
  return (
    <div>
      <h1>Right2</h1>
      <Right3 onInc={props.onInc}></Right3>
    </div>
  );
}
function Right3(props) {
  return (
    <div>
      <h1>Right3</h1>
      <button
        type="button"
        onClick={props.onInc}
        >+</button>
    </div>
  );
}