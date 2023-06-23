import React from "react";

const increment = (mult) => {
  return { type: "INCREMENT", payload: mult };
};
const decrement = (decr) => {
  return { type: "DECREMENT", payload: decr };
};

export { increment, decrement };
