import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './Components/Utilities/router.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Authprovider from './Components/AuthProvider/Authprovider.jsx';




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authprovider router={<RouterProvider router={router}></RouterProvider>}>

    </Authprovider>
  </StrictMode>,
)

