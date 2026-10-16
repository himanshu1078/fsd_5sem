
import React, { useEffect, useState } from "react";
import ImageSlider from "./ImageSlider";

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    console.log("increment clicked");
  };

  useEffect(() => {
    document.title = `Count: ${count}`;
    console.log("component rendered.");
  }, [count]);

  return (
    <div>
      <h1>Counter</h1>

      <div>{count}</div>

      <button onClick={increment}>
        Increment
      </button>

      <hr />

      <ImageSlider />
    </div>
  );
};

export default App;

