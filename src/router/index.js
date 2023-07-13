import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../pages/Home/Home";
import Copmuting from "../pages/Categories/Copmuting";
import ProductsDetails from "../pages/ProuductsDetails/ProuductsDetails";
import Login from "../pages/Login/Login";
import ForgetPass from "../pages/forgetpass/forgetpass"
import Cart from "../pages/Cart/Cart";
import Registraion from "../pages/Registraion/Registraion";
import Identification from "../pages/Identification/Identification";
import NotFound from "../pages/NotFound/NotFound";
import Products from "../components/Products/Products";


function index({ userData, saveUserData }) {
  return (
    <Routes>
      <Route element={<Layout userData={userData} />}>
        <Route path="/" element={<Home />} />
        <Route path="/copmuting" element={<Copmuting />} />
        <Route
          path="/productdetails/:id"
          element={<ProductsDetails userData={userData} />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="/products" element={<Products />} />
      <Route path="/signin" element={<Login saveUserData={saveUserData} />} />
      <Route path="/signup" element={<Registraion />} />
      <Route path="/forgetpassword" element={<ForgetPass/>} />
      <Route path="/identification" element={<Identification />} />
    </Routes>
  );
}

export default index;
