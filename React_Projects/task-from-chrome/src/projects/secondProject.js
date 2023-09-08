import { useState } from 'react';


function SecondProject() {
  const [counter, setCounter] = useState(0);
  let style = {
    width: 200,
    height: 200,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue"
  };
  if (counter > 18) {
    style.backgroundColor = "orange";
  }
  if (counter > 30) {
    style.backgroundColor = "#ff6a00";
  }
  if (counter > 35) {
    style.backgroundColor = "red";
  }
  if (counter < 5) {
    style.backgroundColor = "#00faff";
  }
  return (
    <div style={style} className="App">
      <h1> c° {counter}</h1>
      <button onClick={() => setCounter(prevCounter => prevCounter + 1)}>+</button>
      <button onClick={() => setCounter(prevCounter => prevCounter - 1)}>- </button>
    </div>
  );
}

export default SecondProject