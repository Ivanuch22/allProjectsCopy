import { useState } from "react"
const ThirdProject = () => {
  const usersInfo = require('../data/mock_data.json')
  const [data, setData] = useState(usersInfo);
  const showDataItem = (array) => {
    const item = array.map((element, id) => <li key={id}>{element.first_name}</li>)
    return item;
  }

  const search = (e) => {
    if (e.target.value === '') {
      setData(usersInfo)
    } else {
      const newData = usersInfo.filter((item) => {
        return item.first_name.toLowerCase().includes(e.target.value.toLowerCase()) > 0
      })
      setData(newData)
    }
  }
  const items = showDataItem(data);

  return (
    <form>
      <h1> Search:</h1>
      <input type='text' onChange={search} />
      <ul>
        {items}
      </ul>
    </form>
  )
}
export default ThirdProject