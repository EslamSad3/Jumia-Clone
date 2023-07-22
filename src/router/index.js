import React, { Fragment } from "react";
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
import Products from "../components/Products/Products";
import PrivateRoute from "./guard";
import TestCart from "../pages/testcart/TestCart";
import Checkout from "../pages/checkout/Checkout";
import Orders from "../pages/orders/Orders";
import SellerSignUp from "../components/sellersignUp/sellerSignUp.jsx";
import AllProducts from "../components/allProducts/AllProducts";
import Add from "../components/actions/Add";
import Update from "../components/actions/Update";
import Sellerlogin from "../components/login/Login";

function index({ userData, saveUserData }) {
  return (
    <Fragment>
      <Routes>
        <Route element={<Layout userData={userData} />}>
          <Route path="/" element={<Home />} />
          <Route path="/copmuting" element={<Copmuting />} />
          <Route
            path="/productdetails/:id"
            element={<ProductsDetails userData={userData} />}
          />
          <Route path="/cart" element={<TestCart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orders" element={<Orders />} />

          {/* seller */}

          <Route path="/seller" element={<AllProducts />}  userData={userData}  />
          <Route path="/selleraddproducts" element={<Add />} />
          <Route path="/selleraupdateproducts/:id" element={<Update />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/products" element={<Products />} />

        <Route
          path="/signin"
          element={
            <PrivateRoute>
              {" "}
              <Login saveUserData={saveUserData} />{" "}
            </PrivateRoute>
          }
        />
        <Route
          path="/sellerlogin"
          element={
            <PrivateRoute>
              <Sellerlogin userData={userData}  />
            </PrivateRoute>
          }
        />
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
          path="/sellersignup"
          element={
            <PrivateRoute>
              <SellerSignUp />
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
    </Fragment>
  );
}

export default index;
