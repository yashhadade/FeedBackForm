import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './commonComponents/Navbar'
import CommanRatingField from './commonComponents/CommanRatingField'
import RatingForm from './componentes/RatingForm'
// import ClientSiteAdd from './componentes/ClientSiteAdd'
import {  Route, Routes } from 'react-router-dom'
import ClientSiteAdd from './componentes/clientSiteAdd'

function App() {
  return (
    <>
     
      <Navbar/>
      {/* <RatingForm/> */}
      <Routes>
        <Route  path='/feedBackForm/:ratingId' element={<RatingForm/>}/>
        <Route path='/clientSiteAdd' element={<ClientSiteAdd/>}/>
      </Routes>
    
    </>
  )
}

export default App









 

