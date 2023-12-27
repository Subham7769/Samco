import React from 'react'
import './SearchSection.css'
import SearchBar from './SearchBar'
import SearchFilters from './SearchFilters'

const SearchSection = () => {
  return (
    <div className='SearchSection'>
        <div>
        <SearchBar/>
        <SearchFilters/>
        </div>
    </div>
  )
}

export default SearchSection