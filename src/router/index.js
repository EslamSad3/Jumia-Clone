<<<<<<< HEAD
import React, { Fragment } from "react";
=======
<<<<<<< HEAD
import React from "react";
=======
import React, {Fragment} from "react";
>>>>>>> master
>>>>>>> bb7ebe19561af8574db9a1783fd86e039101afed
import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../pages/Home/Home";
import Copmuting from "../pages/Categories/Copmuting";
import ProductsDetails from "../pages/ProuductsDetails/ProuductsDetails";
import Login from "../pages/Login/Login";
import ForgetPass from "../pages/forgetpass/forgetpass";
import Cart from "../pages/Cart/Cart";
import Registraion from "../pages/Registraion/Registraion";
import Identification from "../pages/Identification/Identification";
import NotFound from "../pages/NotFound/NotFound";
<<<<<<< HEAD
import SearchProducts from "../components/Products/Products";
import TestCart from "../pages/testcart/TestCart";
=======
import Products from "../components/Products/Products";
import PrivateRoute from "./guard";
<<<<<<< HEAD
import TestCart from "../pages/testcart/TestCart";
=======
>>>>>>> master
>>>>>>> bb7ebe19561af8574db9a1783fd86e039101afed

function index({ userData, saveUserData }) {
  return (
    <Fragment>
<<<<<<< HEAD
      <Routes>
        <Route element={<Layout userData={userData} />}>
          <Route path="/" element={<Home />} />
          <Route path="/copmuting" element={<Copmuting />} />
          <Route
            path="/productdetails/:id"
            element={<ProductsDetails userData={userData} />}
          />
          <Route path="/testcart" element={<TestCart />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/products" element={<Products />} />
=======
    <Routes>
      <Route element={<Layout userData={userData} />}>
        <Route path="/" element={<Home />} />
        <Route path="/copmuting" element={<Copmuting />} />
<<<<<<< HEAD
        <Route path="/productdetails/:id" element={<ProductsDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/testcart" element={<TestCart />} />
        <Route path="/products" element={<SearchProducts />} />
=======
>>>>>>> bb7ebe19561af8574db9a1783fd86e039101afed
        <Route
          path="/signin"
          element={
            <PrivateRoute>
              {" "}
              <Login saveUserData={saveUserData} />{" "}
            </PrivateRoute>
          }
        />
<<<<<<< HEAD
        <Route
          path="/signup"
          element={
            <PrivateRoute>
              {" "}
              <Registraion />{" "}
            </PrivateRoute>
          }
        />
        <Route
          path="/forgetpassword"
          element={
            <PrivateRoute>
              <ForgetPass />
            </PrivateRoute>
          }
        />
        <Route
          path="/identification"
          element={
            <PrivateRoute>
              <Identification />
            </PrivateRoute>
          }
        />
      </Routes>
=======
        <Route path="/cart" element={<Cart />} />
>>>>>>> master
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="/products" element={<Products />} />
       <Route path="/signin" element={<PrivateRoute> <Login saveUserData={saveUserData} /> </PrivateRoute>} />
        <Route path="/signup" element={<PrivateRoute> <Registraion /> </PrivateRoute>} />
      <Route path="/forgetpassword" element={<PrivateRoute><ForgetPass/></PrivateRoute>} />
      <Route path="/identification" element={<PrivateRoute><Identification /></PrivateRoute>} />
    </Routes>
>>>>>>> bb7ebe19561af8574db9a1783fd86e039101afed
    </Fragment>
  );
}

export default index;
