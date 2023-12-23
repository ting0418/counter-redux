import "./App.css";
// 將取得的state匯入
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// 運用action的函式
import { increment, decrement, increase, multiple, division } from "./actions";
function App() {
  const dispatch = useDispatch();
  // 使用函式取出變數
  const counter = useSelector((state) => state.counter);
  return (
    <div className="App">
      <div> Counter from Store is :{counter}</div>
      <input
        placeholder="最大可輸入到99"
        maxLength={2}
        onChange={(e) => {
          const inputValue = e.target.value;
          // 使用 inputValue 進行其他操作
          console.log(inputValue);
        }}
      />
      <button onClick={() => dispatch(increment())}>增加</button>
      <button onClick={() => dispatch(decrement())}>減少</button>
      <button onClick={() => dispatch(increase(5))}>加5</button>
      <button onClick={() => dispatch(multiple(5))}>乘5</button>
      <button onClick={() => dispatch(division(5))}>除5</button>
    </div>
  );
}

export default App;
