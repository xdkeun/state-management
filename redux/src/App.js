import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Other from "./Other";

function App() {
  // useSelector 훅을 사용하여 Redux 스토어에서 상태 값을 가져옴
  const value = useSelector((state) => state);

  // useDispatch 훅을 사용하여 Redux 액션을 디스패치할 수 있는 함수를 가져옴, 상태를 수정할 수 있음, 수정 가능한 범위는 store.js에서 지정하는 게 좋음.
  const dispatch = useDispatch();

  return (
    <div>
      <div>{value}</div>
      {/* type으로 값을 전달하면 store.js에서 알맞은 로직을 실행하여 상태를 수정함 */}
      <button onClick={() => dispatch({ type: "plus" })}>Plus</button>
      <button onClick={() => dispatch({ type: "minus" })}>Minus</button>
      <Other/>
    </div>
  );
}

export default App;
