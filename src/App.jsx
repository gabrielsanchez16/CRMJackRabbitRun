import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import AsideBar from './Components/AsideBar/AsideBar'
import Home from './Components/Home/Home'


function App() {

  return (
    <div className='app'>
      <AsideBar />
      <Routes>
        // aquí va todo el contenido de la aplicación
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
