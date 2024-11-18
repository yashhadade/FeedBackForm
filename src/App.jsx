
import './App.css'
import Navbar from './commonComponents/Navbar'

import {  Route, Routes } from 'react-router-dom'
import ClientSiteAdd from './Componentes/clientSiteAdd'
import RatingForm from './componentes/RatingForm'

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