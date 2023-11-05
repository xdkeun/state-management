import { Provider } from "react-redux";
import { createStore } from "redux";

// 초기 상태 값을 정의
const value = 100;

// Redux 리듀서 함수를 정의합니다. 리듀서는 현재 상태와 액션을 받아 새로운 상태를 반환
function reducer(state = value, action) {
  // "plus" 액션이 전달되면 상태를 1 증가
  if (action.type === "plus") {
    state++;
    return state;
  }
  // "minus" 액션이 전달되면 상태를 1 감소
  else if (action.type === "minus") {
    state--;
    return state;
  } else {
    return state;
  }
}

// Redux 스토어를 생성하고 초기 상태 및 리듀서 함수를 설정합니다.
let store = createStore(reducer);

export default store;
