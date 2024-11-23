import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import Root from './Components/Root.jsx';
import Home from './Components/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home></Home>,
    loader: ()=> fetch('/data.json')
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
