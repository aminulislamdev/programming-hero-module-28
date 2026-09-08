import { useState } from "react";

const Paragraph = () => {
  const [paragraph,setParagraph] = useState(true);

  const handleParagraph = () => {
    setParagraph(!paragraph)
  }

  return (
    <div>
      <p>-------------------------------------------------</p>
      {paragraph && <h2>React is awesome!</h2>}
      <button onClick={handleParagraph}>{paragraph ? "Hide" : "Show"}</button>
    </div>
  );
};

export default Paragraph;