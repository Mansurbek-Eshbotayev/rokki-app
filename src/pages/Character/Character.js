"./character.css"
import { useEffect, useState } from "react"
import { Card } from "../../components/Card/Card"
import {Filter} from "../../components/Filter/Filter"
import {Search} from "../../components/Search/Search"
import useDebounce from "../../components/Debounse/Debounse"

export const Character = () => {
  const [activePage, setActivePage] = useState(1)
  const [search, setSearch] = useState("")
  const [status,setStatus] = useState("")
  const [gender,setGender] = useState("")
  const [species, setSpecies] = useState("")
  const debouncedValue = useDebounce(search,2000)
  const [data,setData] = useState([])
  const {info,results} = data

  let api = `https://rickandmortyapi.com/api/character/?page=${activePage}&name=${debouncedValue}&status=${status}&gender=${gender}&species=${species}`

  useEffect(() => {
   (async () => {
   const data = await fetch(api).then(res => res.json())
   setData(data);
   })()
  },[api])

  return (
    <>
        <Search setSearch={setSearch} setActivePage={setActivePage} />
      <div className="row">
        <div className="col-3">
          <Filter setStatus={setStatus} setGender={setGender} setSpecies={setSpecies} />
        </div>
        <div className="col-9">
          {
            results?.length ? (
              <div className="d-flex flex-wrap gap-5">
                {
                  results.map(item => (
                    <Card image = {item.image} name = {item.name} key={item.id} location ={item.location.name} status={item.status} />
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
