import { useEffect, useState } from "react"
import { useParams , useNavigate } from "react-router-dom"


export const SinglUser = () => {
  const [post, setPost] = useState([])
  const {id} = useParams()
  const navigate = useNavigate()
 
   useEffect(()=> {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    .then(response => response.json())
    .then(json => setPost(json))
    
   },[id])

  return (
    <div>
        <button onClick={()=> navigate(-1)}>Bakck</button>
      <ul>
        {
          post.map(p => (
            <li key={p.id}>
              {p.title}
            </li>
          ))
        }
      </ul>
    </div>
  )
}
