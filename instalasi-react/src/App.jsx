import { useState } from "react";
import Header from "./components/Header";

function App() {
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  const [value, setValue] = useState(0);
  function plus() {
    setValue(value + 1);
    if (value > 9) {
      setValue("Done!");
    }
  }
  function minus() {
    setValue(value - 1);
    if (value === 0) {
      setValue("Done!");
    }
  }
  function reset() {
    setValue(0);
  }
  const smartphones = ["Xperia 5", "Pixel 4", "iPhone 11 Pro"];
  return (
    <div>
      <Header author="ardian" />
      <ul>
        {smartphones.map((smartphone) => (
          <li key={smartphone}>{smartphone}</li>
        ))}
      </ul>
      <button onClick={handleClick}>like ({likes})</button>
      <div>
        <button
          id="minus"
          onClick={minus}
          disabled={value === "Done!" ? true : false}
        >
          -
        </button>
        <span>{value}</span>
        <button
          id="plus"
          onClick={plus}
          disabled={value === "Done!" ? true : false}
        >
          +
        </button>
        <br />
        <button
          id="reset"
          onClick={reset}
          disabled={value === "Done!" ? false : true}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
