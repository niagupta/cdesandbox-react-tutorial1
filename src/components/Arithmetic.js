import React, { useEffect, useState } from "react";
import "./styles.css";
const Arithmetic = () => {
  const [value, setValue] = useState(0);
  // useEffect(() => {
  //   if (value < 0) {
  //     setValue(0);
  //   }
  // }, [value]);
  return (
    <div className="Arithmetic">
      <button className="marginRight" onClick={() => setValue(value + 1)}>
        +
      </button>
      <p>{value}</p>
      <button className="marginLeft" onClick={() => value>0?setValue(value - 1):null}>
        -
      </button>
    </div>
  );
};
export default Arithmetic;
