import React from "react";
import "./App.css";
//redux
import { Provider, useSelector, useDispatch } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import store from './store';
import counterSlice from './counterSlice';

// // 특정 action과ㅏ state를 받아 state에 action에 해당하는 로직을 수행하는 함수
// function reducer(state, action) {
//   if (action.type === "up") {
//     return { ...state, value: state.value + action.step };
//   }
//   return state;
// }
// // state의 초기 값
// const initialState = { value: 0 };
// // 모든 state를 저장할 저장소 store, reducer와 초기 값을 인자로 받는다
// const store = createStore(reducer, initialState);

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector(state => {
    console.log(state.counter.value);
    return state.counter.value;
  });
  return (
    <div>
      <button
        onClick={() => {
          dispatch(counterSlice.actions.up(2));
        }}
      >
        +
      </button>
      {count}
    </div>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <div>
        <Counter />
      </div>
    </Provider>
  );
}
