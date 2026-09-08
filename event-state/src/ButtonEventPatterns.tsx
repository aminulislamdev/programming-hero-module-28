
const ButtonEventPatterns = () => {

  const handlebutton = () => {
    alert("Clicked")
  }

  return (
    <div>
      {/* function reference */}
      <button onClick={handlebutton}>Button 1</button>

      {/* Arrow function with function call */}
      <button onClick={() => handlebutton()}>Button 2</button>

      {/* inline arrow function */}
      <button onClick={() => console.log("Clicked")}>Button 3</button>
    </div>
  );
};

export default ButtonEventPatterns;