import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Footer from './Components/Footer/Footer'
import CertiP from './Pages/CertiP/CertiP'

const App = () => {
  return (
    <>
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/certificates' element={<CertiP/>}></Route>
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App