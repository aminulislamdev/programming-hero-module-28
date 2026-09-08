import { useState } from "react";

const ClickMessage = () => {
  const [message,setMessage] = useState(false);
  const toggleButton = () => {
    setMessage(!message);
  }

  return (
    <div>
      <p>------------------------------------------</p>
      <h4>{message ? "Button was clicked!" : "Waiting for click..."}</h4>
      <button onClick={toggleButton}>Click Me</button>
    </div>
  );
};

export default ClickMessage;