import React from "react";
import "./App.css";
//redux
import store from './store';
import { Provider, useSelector, useDispatch, connect } from "react-redux";


export default function App() {
  return (
    <div id="container">
      <h1>Root: </h1>
      {/* 설정한 store 제공 */}
      <Provider store={store}>
        <Left1></Left1>
        <Right1></Right1>
      </Provider>
    </div>
  );
}

function Left1(props) {
  return (
    <div>
      <h1>Left1: </h1>
      <Left2></Left2>
    </div>
  );
}


function Left2(props) {
  console.log('2');
  return (
    <div>
      <h1>Left2: </h1>
      <Left3></Left3>
    </div>
  );
}

// 값이 바뀐 Left3만 rerendering된다.
function Left3(props) {
  console.log('3');
  const number = useSelector((state) => state.number)

  return (
    <div>
      <h1>Left3: {number}</h1>
    </div>
  );
}

function Right1(props) {
  return (
    <div>
      <h1>Right1</h1>
      <Right2></Right2>
    </div>
  );
}

function Right2(props) {
  return (
    <div>
      <h1>Right2</h1>
      <Right3></Right3>
    </div>
  );
}

function Right3(props) {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Right3</h1>
      <button type="button" onClick={() => dispatch({type:'PLUS'})}>
        +
      </button>
    </div>
  );
}
