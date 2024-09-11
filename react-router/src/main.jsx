import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path : '/',
    element : <App />
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Routerprovid router = {router} />
  </StrictMode>,
)
