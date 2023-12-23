// state等於狀態的初始值
// 改狀態地方
const Counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;

    case "DECREMENT":
      return state - 1;

    case "INCREASE":
      const newState = state + Number(action.value);
      return newState;
    case "MULTIPLE":
      const newState2 = state * Number(action.value);
      return newState2;
    case "DIVISION":
      const newState3 = state / Number(action.value);
      return newState3;
    default:
      return state;
  }
};
export default Counter;
