
import './App.css'
import Navbar from './commonComponents/Navbar'
import RatingForm from './componentes/RatingForm'
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