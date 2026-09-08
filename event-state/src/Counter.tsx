import { useState } from "react"

export default function Counter() {

  const [count, setCount] = useState(0)
  const handleIncresde = () => {
    setCount(count + 1);
  }

  const handleDecrease = () => {
    if (count>0){
      setCount(count-1)
    }
  }

  const handleReset = () => {
    setCount(0);
  }

  return (
    <div>
      <h3>Count : {count}</h3>
      <button onClick={handleIncresde}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}
