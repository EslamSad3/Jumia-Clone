import React from "react";
import {createBrowserRouter, RouterProvider, Route,Link,Routes} from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../pages/Home/Home";
import Copmuting from "../pages/Categories/Copmuting";
import ProductsDetails from "../pages/ProuductsDetails/ProuductsDetails";
import Login from "../pages/Login/Login";
import Cart from "../pages/Cart/Cart";
import Registraion from "../pages/Registraion/Registraion";
import Identification from "../pages/Identification/Identification";
import NotFound from "../pages/NotFound/NotFound";
import SearchProducts from "../components/SearchForProducts/SearchProducts";

function index({ userData, saveUserData }) {
  console.log(userData);
  return (
    <Routes>
      <Route element={<Layout userData={userData} />}>
          <Route path="/" element={<Home />} />
          <Route path="/copmuting" element={<Copmuting />} />
          {/* <Route path="/productdetails" element={<ProductsDetails />} /> */}
          <Route path="/productdetails/:id"   element={<ProductsDetails userData={userData}  />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/search" element={<SearchProducts/>} />
          <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="/signin" element={<Login saveUserData={saveUserData} />} />
      <Route path="/signup" element={<Registraion />} />
      <Route path="/identification" element={<Identification />} />
    </Routes>
  );
}

export default index;

