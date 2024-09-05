import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Navbar from './Navbar.jsx';
import Contact from './pages/contact/Contact.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <h2>hello i am home page</h2>
      </div>
    ),
  },
  {
    path: "about",
    element: (
      <div>
        <Contact />
      </div>
    )
  },
  {
    path: "blog",
    element: (
      <div>
        <Navbar />
        <div>hello i am  blog page</div>
      </div>
    )
  },
  {
    path: "contact",
    element: (
      <div>
        <Navbar />
        <div>hello i am  contact page</div>
      </div>
    )
  },
  
]);
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
