import React from 'react'
import './style.css'

const SearchInput = (props) => {
  return(
    <input 
    className="search-input" 
    type={props.type}
    placeholder={props.placeholder}
    onChange={props.onChange}
    />
  )
}

export default SearchInput
