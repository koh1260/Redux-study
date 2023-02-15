import { legacy_createStore as createStore} from "redux";


//   // redux는 기존의 state를 불변하게 관리해야 한다. 그래서 복사본 만듦
//   // 상태가 없는 경우 initial 값 설정
function reducer(currentState, action){
    if(currentState === undefined){
        return {
            number: 1,
        }
    }

    const newState = {...currentState};
    if(action.type === 'PLUS'){
        newState.number++;
    }
    return newState;
}

const store = createStore(reducer);

export default store;