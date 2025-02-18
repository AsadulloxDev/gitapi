import React, { useEffect } from 'react'
import Sidebar from './Components/Sidebar'
import { Outlet, useNavigate } from 'react-router-dom'
import Login from './Login'
import Layout from './Layout'

function App() {
  const token = localStorage.getItem('token')
  const navigate = useNavigate()
  useEffect(()=>{
    if(!token){
      navigate('/login')
    } else {
      navigate('/')
    }
  }, [])
  return token ? <Layout/> : <Login/>
}
export default App