import React from "react";
import { BsPlusCircle } from "react-icons/bs";
import { BiMinusCircle } from "react-icons/bi";
const Counter = () => {
  const count = 0;
  // state to be used later
  return (
    <div>
      <BsPlusCircle color={"green"} size={32} on />
      <h1>{count}</h1>
      <BiMinusCircle color={"red"} size={32} />
    </div>
  );
};

export default Counter;