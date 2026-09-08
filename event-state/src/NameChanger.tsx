import { useState } from "react";

const NameChanger = () => {

  const [name, setName] = useState("Aminul");

  const handleNameChange = () => {
    if (name === "Aminul") {
      setName("Developer")
    } else {
      setName("Aminul")
    }
  }

  return (
    <div>
      <p>--------------------------------------------------</p>
      <h3>Hello, {name}</h3>
      <button onClick={handleNameChange}>Change Name</button>
    </div>
  );
};

export default NameChanger;