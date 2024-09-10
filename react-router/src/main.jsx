import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Home from './components/Pages/Home'
import About from './components/Pages/About'
import Blog from './components/Pages/Blog'
import Contact from './components/Pages/Contact'

const router = createBrowserRouter([
  {
    path : '/',
    element : <App />,
    children: [
      {
        path : '/',
        element : <Home />
      },
      {
        path : '/about',
        element : <About />
      },
      {
        path : '/blog',
        element : <Blog />
      },
      {
        path : '/contact',
        element : <Contact />
      }
    ]
  }
 
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
