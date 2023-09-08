import { useState } from "react"
const ForthProject = () => {
  const [array, setArray] = useState([]);
  const [obj, setObj] = useState({})
  const formStyle = {
    width: "400px",
    padding: "30px 20px",
    backgroundColor: "#fff",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    borderRadius: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  }
  const inputStyle = {
    padding: "10px",
    margin: "10px 0",
    backgroundColor: "#2222"
  }
  const onChange = (e) => {
    if (e.target.value === '') return
    setObj((prevOjb) => {
      console.log(prevOjb)
      return { ...prevOjb, [e.target.name]: e.target.value }
    })
  }
  const onSubmit = (e) => {
    e.preventDefault();
    setArray(prevArray => {
      const newArray = [obj, ...prevArray];
      console.log(newArray)
      return newArray;
    })
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(array)
    };
    fetch('../data/inputValues.json', requestOptions)
    setObj({
      firstName: "",
      lastName: "",
      email: ""
    })
  }
  return (
    <form onSubmit={onSubmit} style={formStyle} className="form">
      <input placeholder="firstName" value={obj.firstName} style={inputStyle} onChange={onChange} type='text' name="firstName" />
      <input placeholder="lastName" value={obj.lastName} style={inputStyle} onChange={onChange} type='text' name="lastName" />
      <input placeholder="email" value={obj.email} style={inputStyle} onChange={onChange} type='text' name="email" />
      <button >sent</button>
    </form>
  )
}
export default ForthProject