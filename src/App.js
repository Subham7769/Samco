import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import SearchSection from './Components/SearchSection/SearchSection'
import ResultSection from './Components/ResultSection/ResultSection'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <SearchSection/>
      <ResultSection/>
      <Footer/>
    </div>
  )
}

export default App
