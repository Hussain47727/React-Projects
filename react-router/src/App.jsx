import { useState } from 'react'
import './App.css'
import Home from './components/Pages/Home'
import About from './components/Pages/About'
import Blog from './components/Pages/Blog'
import Contact from './components/Pages/Contact'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />
    </>
  )
}

export default App
