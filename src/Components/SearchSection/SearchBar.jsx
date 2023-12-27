import React from 'react'
import { FaSearch } from "react-icons/fa";



const SearchBar = () => {
  return (
    <div className='SearchBar'>
      <div>
        <h3>Search Mutual Funds</h3>
        <form className='searchbox'>
          <input type="text" placeholder='Search Funds' /> 
          <button id='SearchBtn'><FaSearch style={{fontSize:"1.5rem"}}/></button>
        </form>
      </div>
    </div>
  )
}

export default SearchBar