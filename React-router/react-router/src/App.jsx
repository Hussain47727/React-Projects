import './App.css'
import Navbar from './Components/Navbar'
import Home from './page/home/home'
import About from './page/About'
import Contact from './page/contact'
import Blog from './page/blog'
function App() {
  return (
    <>
   <Navbar />
   <Home/>
   <About />
   <Blog />
   <Contact />
    </>
  )
}

export default App
