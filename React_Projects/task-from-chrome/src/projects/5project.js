import React, { useState, useEffect, useRef } from "react";
export default function FifthProject() {
  const [type, setType] = useState("users")
  const [data, setData] = useState([])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const renderCounter = useRef(1);
  const someRef = useRef(null)
  //*Викликається тільки тоді, коли йде перерендеринг компонента, тобто коли міняється State
  useEffect(() => {
    console.log(type)
  })

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(response => response.json())
      .then(json => setData(json))
    console.log(someRef.current)
    return () => {
      console.log("Hellos")
    }
  }, [type])//* [type] означає що виклик іде тільки тоді, коли помінявся state, type, якщо інші помінялись, то це тоді не викликається 
  const mouseMove = (event) => {
    renderCounter.current++
    setMousePosition({
      x: event.clientX,
      y: event.clientY
    })
  }
  useEffect(() => {
    window.addEventListener('mousemove', mouseMove)
    return () => {
      window.removeEventListener('mousemove', mouseMove)
    }
  }, [])
  const divStyle = {
    padding: '20px'
  }
  return (
    <div style={divStyle}>
      <div>
        <h1> Pecans {type}</h1>
        <button ref={someRef} onClick={(prevType) => setType(prevType = "users")}>Пользователь</button>
        <button onClick={(prevType) => setType(prevType = "todos")}>Todos</button>
        <button onClick={(prevType) => setType(prevType = "posts")}>Пости</button>
      </div>
      <pre style={divStyle}>{JSON.stringify(data, null, 2)}</pre>
      <pre style={divStyle}>{JSON.stringify(mousePosition, null, 2)}</pre>
    </div >
  )

}