import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import Test from './Test.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <Test />
  // </StrictMode>,
)
