import { FilterBtn } from "../FilterBTN/FilterBtn"


export const Filter = ({setStatus ,setGender,setSpecies}) => {
  const statusData = ["alive","dead","unknown"]
  const genderData = ["male","female","unknown","genderless"]
  const speciesData = ["Human","Alien","Humanoid","Animal","Unknown","Disease","Robot","Planet","Robot"];

 
  return (
    <>
    <h3 className="h3 text-center" >Filter</h3>
    <p className="text-primary text-decoration-underline text-center mb-5" style={{cursor:"pointer"}}
    onClick={() => {
      setStatus("");
      setGender("");
      setSpecies("");
    }} > Clear All</p>

    <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Filter By Status
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
       {
        statusData.map((item,index) => (
          <FilterBtn setState={setStatus} key={index} text= {item} index={index} name="status"/>
        ))
       }
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Filter By Species
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      {
        speciesData.map((item,index) => (
          <FilterBtn setState={setSpecies} key={index} text= {item} index={index} name="status"/>
        ))
       }
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Filter By Generation
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      {
        genderData.map((item,index) => (
          <FilterBtn setState={setGender} key={index} text= {item} index={index} name="gender"/>
        ))
       }
      </div>
    </div>
  </div>
</div>
  
    </>
  )
}
