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

const router = createBrowserRouter(
  createsRoutesFromElements(
  <Routes path='/' element={<App/>}>
    <Routes main element={<Home/>}>
  </Routes>
  )
)



createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>
);
