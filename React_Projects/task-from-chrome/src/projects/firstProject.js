import { useState } from 'react';

const someComputed = () => {
  console.log("processing")
  return 2 + 34
}

function FirstProject() {
  const [couter, setCouter] = useState(() => someComputed())
  const [obj, setObj] = useState({
    title: "Hello world",
    date: Date.now()
  })

  return (
    <div className="App">
      <h1> Counter {couter}</h1>
      <button onClick={() => setCouter(prevCouter => prevCouter + 1)}>increment</button>
      <button onClick={() => setCouter(prevCouter => prevCouter - 1)}>decrements </button>
      <button onClick={() => setObj(prevObj => {
        return {
          ...prevObj,
          title: "asdkfja;sdj"
        }
      })}>changeTitle </button>
      <pre>
        {JSON.stringify(obj, null, 2)}
      </pre>
    </div >
  );
}

export default FirstProject