import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="about">About Us</Link>
      </div>
    ),
  },
  {
    path: "about",
    element: (
      <div>
      <h2>navbar</h2>
      <Link to="/">home</Link>
        <div>About israr mamtu</div>
      </div>
    )
  },
]);
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
