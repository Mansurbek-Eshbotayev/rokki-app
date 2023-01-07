import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export const Location = () => {
 
  const [user, setUser] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => setUser(json))
  },[])

  return (
    <div>
      <h2>Location</h2>
      <ul>
        {
          user.map(us => (
            <li key={us.id}>
              <Link to={`/user/${us.id}`}>{us.name}</Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}