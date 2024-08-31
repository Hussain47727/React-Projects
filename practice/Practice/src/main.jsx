
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Navbar from './Navbar.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <App />
      </div>
    ),
  },
  {
    path: "/about",
    element: (
      <>
      <Navbar />
      <div>hello i am a about page</div>
      <div>hello i am a about page</div>
      <div>hello i am a about page</div>
      <div>hello i am a about page</div>
      <div>hello i am a about page</div>
      <div>hello i am a about page</div>
      <div>hello i am a about page</div>
      <div>hello i am a about page</div>
      </>
    ),
  },
  {
    path: "/israrhussain",
    element: (
      <>
      <Navbar />
      <div>hello i am a israr hussain</div>
      </>
    ),
  },
]);
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
