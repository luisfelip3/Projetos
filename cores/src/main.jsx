import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Home from './Routes/Home.jsx'
import Branco from './Routes/Branco.jsx'
import Preto from './Routes/Preto.jsx'
import Cinza from './Routes/Cinza.jsx'
import Amarelo from './Routes/Amarelo.jsx'
import Laranja from './Routes/Laranja.jsx'
import Vermelho from './Routes/Vermelho.jsx'
import Azul from './Routes/Azul.jsx'
import Violeta from './Routes/Violeta.jsx'
import Verde from './Routes/Verde.jsx'
import Marrom from './Routes/Marrom.jsx'

import { createBrowserRouter, RouterProvider, Route, Link} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [

      {
        path: "/amarelo",
        element: <Amarelo />
      },
      {
        path: "/azul",
        element: <Azul />
      },
      {
        path: "/branco",
        element: <Branco />
      },
      {
        path: "/cinza",
        element: <Cinza />
      },
      {
        path: "/laranja",
        element: <Laranja />
      },
      {
        path: "/marrom",
        element: <Marrom />
      },
      {
        path: "/preto",
        element: <Preto />
      },
      {
        path: "/verde",
        element: <Verde />
      },
      {
        path: "/vermelho",
        element: <Vermelho />
      },
      {
        path: "/violeta",
        element: <Violeta />
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
