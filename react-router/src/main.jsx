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
  Path : '/',
  Element : <app></app>
  )
)



createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>
);
