

export const Search = ({setSearch,setActivePage}) => {
  
  return (
  <input onKeyUp={(evt) => {
    setActivePage(1)
    setSearch(evt.target.value)}} 
     className="form-control mx-auto w-50 mb-5"  type="search" placeholder="search" />

  )
}
