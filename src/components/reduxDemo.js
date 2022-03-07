import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Add, Square, SquareRoot } from "../redux/Counter/counter.action";
import "./styles.css";
const ReduxDemo = () => {
  const count = useSelector((state) => state?.counter?.count);
  const dispatch = useDispatch();

  return (
    <div className="marginTop">
      <button onClick={() => dispatch(Add(2))}>Add</button>
      <p className="p">{count}</p>
      <button onClick={() => dispatch(Square())}>Square</button>
      <p className="p">{count}</p>
      <button onClick={() => dispatch(SquareRoot())}>SquareRoot</button>
    </div>
  );
};
export default ReduxDemo;
