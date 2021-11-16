import React from 'react'
import './style.css'

import SearchInput from '../../atoms/searchInput/index'

const Search = (props) => {
  return(
    <section className="search-form">
      <SearchInput 
      id="search-input"
      placeholder="Digite o nome do produto"
      onChange={props.onSearch}
      />
    </section>
  )
}

export default Search 
