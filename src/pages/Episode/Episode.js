"./character.css"
import { useEffect, useState } from "react"
// import { Card } from "../../components/Card/Card"
// import {Search} from "../../components/Search/Search"
// import useDebounce from "../../components/Debounse/Debounse"
import EpisodeFilter from "../../components/EpisodeFilter/EpisodeFilter"

export const Episode = () => {
  // const [activePage, setActivePage] = useState(1)
  const [data,setData] = useState([])
  const {results} = data
  const [id, setId] = useState(1)
  let api = `https://rickandmortyapi.com/api/episode?page=2`
 
  

  useEffect(() => {
   (async () => {
   const data = await fetch(api).then(res => res.json())
   setData(data);
  //  console.log(data)
   })()
  },[api])

  return (
    <>
        
        
      <div className="row">
        <div className="col-3">
          <EpisodeFilter num={50} setId={setId} />
        </div>
        <div className="col-9">
          {
            results?.length ? (
              <div className="d-flex flex-wrap gap-5">
                {
                  results.map(item => (
                  <h3>{item.name}</h3>
                  ))
                }
              </div>
            ) :(<h3>Not found</h3>)
          }
        </div>
      </div>
    </>
  )
}
