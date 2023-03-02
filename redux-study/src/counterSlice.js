import { createSlice } from "@reduxjs/toolkit";

// 툴킷에서 지원하는 하나의 작은 store, 기능마다 나눠서 하나의 스토어로 합친다
const counterSlice = createSlice({
    name: 'counter',
    initialState: {value:0},
    // redux처럼 복사를 할 필요가 없다
  
    // 툴킷은 reducer로 action을 생성해준다
    // 해당 기능을 사용하려면 데이터는 payload에 담아야 한다
    reducers:{
      up: (state, action) =>{
        console.log(action);
        state.value = state.value + action.payload;
      }
    }
  });

  export default counterSlice;