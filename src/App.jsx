import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Components/Layout/Home/Home'
import About from './Components/Layout/About/About'
import Portfolio from './Components/Layout/Portfolio/Portfolio'
import NotFound from './Components/Layout/NotFound/NotFound'
import Contact from './Components/Layout/Contact/Contact'

function App() {

  let routes = createBrowserRouter([
    {
      path: '/', element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: '/react-portfolio', element: <Home /> },
        { path: '/about', element: <About /> },
        { path: '/portfolio', element: <Portfolio /> },
        { path: '/contact', element: <Contact /> },
        { path: '*', element: <NotFound /> },
      ]
    }

  ])

  return (
    <RouterProvider router={routes} />
  )
}

export default App
