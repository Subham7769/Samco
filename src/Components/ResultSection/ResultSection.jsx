import React from 'react'
import ResultHeader from './ResultHeader/ResultHeader'
import ResultBody from './ResultBody/ResultBody'
import './ResultSection.css'

const ResultSection = () => {
  return (
    <div className='ResultSection'>
        <ResultHeader/>
        <ResultBody/>
    </div>
  )
}

export default ResultSection