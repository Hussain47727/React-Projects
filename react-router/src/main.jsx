import { StrictMode } from 'react'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Routes,
} from "react-router-dom";






createRoot(document.getElementById('root')).render(
  <StrictMode>
   <App/>
  </StrictMode>
);
