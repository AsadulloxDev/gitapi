import React from 'react'
import Sidebar from './Components/Sidebar'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
        <Sidebar></Sidebar>
        <Outlet></Outlet>
    </div>
  )
}

export default Layout