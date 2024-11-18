
import './App.css'
import Navbar from './commonComponents/Navbar'

import {  Route, Routes } from 'react-router-dom'
import ClientSiteAdd from './componentes/ClientSiteAdd.jsx'
import RatingForm from './componentes/RatingForm.jsx'

function App() {
  return (
    <>
     
      <Navbar/>
      <RatingForm/>
      {/* <RatingForm/> */}
      <Routes>
        <Route  path='/feedBackForm/:ratingId' element={<RatingForm/>}/>
        <Route path='/clientSiteAdd' element={<ClientSiteAdd/>}/>
      </Routes>
    
      </>
  )
}

export default App