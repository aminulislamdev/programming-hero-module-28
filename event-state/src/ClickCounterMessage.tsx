import { useState } from "react";

const ClickCounterMessage = () => {

  const [count, setCount] = useState(0);

  const handleClickCounterMessage = () => {
    setCount(count + 1);
  }
  const handleReset = () => {
    setCount(0);
  }


  return (
    <div>
      <p>------------------------------------------------</p>
      <h4>You clicked {count} {count > 1 ? "Times" : "Time"}</h4>
      <button onClick={handleClickCounterMessage}>Click</button>
      <button onClick={handleReset}>reset</button>
    </div>
  );
};

export default ClickCounterMessage;