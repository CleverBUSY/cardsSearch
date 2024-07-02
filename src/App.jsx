import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from './page/Home/Home'
import AboutUs from './page/AboutUs/AboutUs'
import Contact from './page/Contact/Contact'

const App = () => {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='about' element={<AboutUs/>}/>
      <Route path='contact' element={<Contact/>}/>
    </Route>
  ))
  return <RouterProvider router={router}/>
}

export default App