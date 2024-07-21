import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, RuterProvider } from 'react-router-dom'
import EComFile from './EComFile'
import Home from './page/Home'
import Menu from './page/Menu'
import About from './page/About'
import Contact from './page/Contact'
import Login from './page/Login'
import NewProduct from './page/NewProduct'
import Signup from './page/Signup'
import { Provider } from 'react-redux'
import { store } from './store/Store'
import Cart from './page/Cart'

const EComMainFile = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<EComFile/>}>
        <Route index element={<Home/>}/>
        <Route path='menu/:id' element={<Menu/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='newProduct' element={<NewProduct/>}/>
        <Route path='signup' element={<Signup/>}/>
        <Route path='cart' element={<Cart/>}/>
        </Route>

    )
  )
  return (
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  )
}

export default EComMainFile