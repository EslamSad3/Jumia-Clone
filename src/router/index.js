import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
    Routes
  } from "react-router-dom";
import Layout from '../components/Layout/Layout';
import Home from '../pages/Home/Home';
import Copmuting from '../pages/Categories/Copmuting';
import ProductsDetails from '../pages/ProuductsDetails/ProuductsDetails';
import Login from '../pages/Login/Login';
import Cart from '../pages/Cart/Cart';
  

function index() {
  return (
    <Routes>
        <Route element ={<Layout/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/copmuting' element={<Copmuting/>}/>
            <Route path='/productdetails' element={<ProductsDetails/>}/>
            <Route path='/signin' element={<Login/>}/>
            <Route path='/cart' element={<Cart/>}/>
        </Route> 
    </Routes>
  )
}

export default index
