import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './commonComponents/Navbar'
import CommanRatingField from './commonComponents/CommanRatingField'
import RatingForm from './componentes/RatingForm'
import { BrowserRouter } from 'react-router-dom'

function App() {
 

  return (
    <>
     <BrowserRouter>
      <Navbar/>
      <RatingForm/>
     </BrowserRouter>
    </>
  )
}

export default App









 

