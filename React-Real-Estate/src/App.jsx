import React from 'react'
import "./App.css"
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Companies from './Components/Companies/Companies'
import Resi from './Components/Residencies/Resi'
import Value from './Components/Value/Value'
import Contact from './Components/Contact/Contact'
import GetStarted from './Components/Getstarted/GetStarted'
import Footer from './Components/Footer/Footer'
const App = () => {
  return (
  
   <div className='App'>
    
    <Header/>
   <Hero/>
   <Companies/>
   <Resi />
   <Value /> 
   <Contact/>
   <GetStarted/>
   <Footer/> 
    
   </div>
   
  )
}

export default App
