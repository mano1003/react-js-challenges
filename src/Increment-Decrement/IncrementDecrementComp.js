import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementCount, incrementCount } from "./Redux/incrementDecrement";

const IncrementDecrementComp = () => {
  const dispatch = useDispatch();

  const decrement = (event, type) => {
    event.preventDefault();
    dispatch(decrementCount(type));
  };

  const increment = (event, type) => {
    event.preventDefault();
    dispatch(incrementCount(type));
  };

  const decrementValue = useSelector((state) => state.incrementDecrement.decrementCount);
  const incrementValue = useSelector((state) => state.incrementDecrement.incrementCount);

  return (
    <div>
      <button onClick={(e) => decrement(e,'twoDecrement')}>Decrement ++</button>
      <button onClick={(e) => increment(e,'twoIncrement')}>Increment ++</button>
      <button onClick={(e) => decrement(e,'oneDecrement')}>Decrement -</button>
      <button onClick={(e) => increment(e,'oneIncrement')}>Increment +</button>

      <br />
      <br />
      <div id="decrementValue">{decrementValue}</div>
      <div id="incrementValue">{incrementValue}</div>
    </div>
  );
};

export default IncrementDecrementComp;