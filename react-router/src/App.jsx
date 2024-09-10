import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Outlet />
    </>
  )
}

export default App
