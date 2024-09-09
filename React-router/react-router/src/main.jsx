import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainBlog from './page/blog/MainBlog.jsx';
import About from './page/About/About.jsx';
import Contact from './page/contact/Contact.jsx';
// import Home from './page/hontact/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div><App /></div>,
  },
  {
    path: "/about",
    element: <div><About /></div>,
  },
  {
    path: "/blog",
    element: <div><MainBlog/></div>,
  },
  {
    path: "/contact",
    element: <div><Contact/></div>,
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>,
)
