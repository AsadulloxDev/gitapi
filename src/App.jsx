import React from 'react'
import Sidebar from './Components/Sidebar'
import { Outlet } from 'react-router-dom'
import Home from './Components/Home'

function App() {
  return (
    <>
    <Sidebar></Sidebar>
    <Outlet></Outlet>
    </>
  )
}

export default App