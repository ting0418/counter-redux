export const increment = () => {
  return {
    type: "INCREMENT",
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

export const increase = (value) => {
  return {
    type: "INCREASE",
    value: value,
  };
};
export const multiple = (value) => {
  return {
    type: "MULTIPLE",
    value: value,
  };
};
export const division = (value) => {
  return {
    type: "DIVISION",
    value: value,
  };
};
