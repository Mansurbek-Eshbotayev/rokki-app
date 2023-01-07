import React from 'react'

export const FilterBtn = ({text,index,name,setState}) => {
  return (
    <div>
    <div>
    <input onClick={(evt) => setState(text)} type="radio"  id= {`${name}-${index}`} name={name} className='btn-check ' autoComplete="off" />
    <label className="btn btn-outline-primary mb-3" htmlFor={`${name}-${index}`}>{text}</label>
    </div>
    
    </div>
    )
  }
  