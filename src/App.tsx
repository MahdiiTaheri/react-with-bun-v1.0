import axios from "axios"
import { useEffect, useState } from "react"

export default function App() {
const [count,setCount] = useState(0);
const [users,setUsers] = useState([]);

useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then(res => setUsers(res.data)).catch(err => console.log(err));
})

  return (
   <div>
    <h1>This is a React app using Bun V1.0</h1>
    <div>
        <h2>A simple count State:</h2>
        <button onClick={() => setCount(cur => cur - 1)}>-</button>
        <span>Count : {count}</span>
        <button onClick={() => setCount(cur => cur + 1)}>+</button>
        <button onClick={() => setCount(0)}>RESET</button>
    </div>
    <div>
        <h2>Fetching some data with a fake API:</h2>
        {users.map(user => <p key={user.id}>{user.name}</p>)}
    </div>
   </div>
  )
}
