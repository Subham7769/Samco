import React from 'react'
import { FaSearch } from "react-icons/fa";

import './ResultHeader.css'

const ResultHeader = () => {
  return (
    <div className='ResultHeader'>
      <div className='part1'>
          <button href="">First</button>
          <button href="">Previous</button>
          <span>1</span>
          <button href="">Next</button>
          <button href="">Last</button>
      </div>
      <div className='part2'>
          <div>
            <FaSearch style={{color:"grey",fontSize:"1.5rem"}}/>
            <input type="text" placeholder='Search Fund'/>
          </div>
          <div>
            <span>Page 1 of 1 [Total Data : 23]</span>
          </div>
      </div>
    </div>
  )
}

export default ResultHeader