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
import TestCart from "../pages/testcart/TestCart";
import Checkout from "../pages/checkout/Checkout";
import Orders from "../pages/orders/Orders";
import SellerSignUp from "../components/sellersignUp/sellerSignUp.jsx";
import AllProducts from "../components/allProducts/AllProducts";
import Add from "../components/actions/Add";
import Update from "../components/actions/Update";
import ProtectedRoute from "../components/protectedRoute/ProtectedRoute";
import PrivateRoute from "./guard";
import PrivateRouteT from "./guard2";
import UsersList from "../components/admin/User/Userslist"
import AddUser from "../components/admin/User/addUser"
import EditUser from "../components/admin/User/editUser"
import ProductList from "../components/admin/Product/ProductsList"
import AddProduct from "../components/admin/Product/addProduct"
import EditProduct from "../components/admin/Product/editProduct"
import OrdersList from "../components/admin/Order/ordersList"
import Welcome from "../components/admin/welcome"
import AdminLayout from "../components/Layout/AdminLayout";
import SellerLayout from "../components/Layout/SellerLayout";

function index({ userData, saveUserData }) {
  return (
    <Fragment>
      <Routes>
        <Route element={<Layout userData={userData} />}>
          <Route path="/" element={<Home />} />
          <Route path="/copmuting" element={<Copmuting />} />
          <Route path="/productdetails/:id" element={<ProductsDetails userData={userData} />} />
          <Route path="/cart" element={<TestCart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orders" element={<Orders />} />
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
      <Routes>
      {/* admin */}
      <Route element={<AdminLayout userData={userData} />}>
      <Route
        path="/admin"
        element={
          <PrivateRoute>
            <Welcome />
          </PrivateRoute>
        }
      />
      {/* <Route path="/adminWelcome"  element={<PrivateRoute><Welcome /> </PrivateRoute>} /> */}
      {/* <Route path="/signIn" element={<Signin />} /> */}
      <Route
        path="/userslist"
        element={
          <PrivateRouteT>
            {" "}
            <UsersList />{" "}
          </PrivateRouteT>
        }
      />
      <Route
        path="/edituser/:id"
        element={
          <PrivateRouteT>
            <EditUser />{" "}
          </PrivateRouteT>
        }
      />
      <Route
        path="/adduser"
        element={
          <PrivateRouteT>
            <AddUser />
          </PrivateRouteT>
        }
      />
      <Route
        path="/addproduct"
        element={
          <PrivateRouteT>
            <AddProduct />
          </PrivateRouteT>
        }
      />
      <Route
        path="/productslist"
        element={
          <PrivateRouteT>
            <ProductList />
          </PrivateRouteT>
        }
      />
      <Route
        path="/editproduct/:id"
        element={
          <PrivateRouteT>
            <EditProduct />
          </PrivateRouteT>
        }
      />
      <Route
        path="/ordersList"
        element={
          <PrivateRouteT>
            <OrdersList />
          </PrivateRouteT>
        }
      />
</Route>
      {/* admin */}
      </Routes>
      <Routes>

    {/* seller */}
     <Route element={<SellerLayout userData={userData} />}>
      <Route
        path="/seller"
        element={
          <ProtectedRoute>
            <AllProducts />
          </ProtectedRoute>
        }
        userData={userData}
      />
      <Route
        path="/selleraddproducts"
        element={
          <ProtectedRoute>
            <Add />
          </ProtectedRoute>
        }
      />
      <Route
        path="/selleraupdateproducts/:id"
        element={
          <ProtectedRoute>
            {" "}
            <Update />
          </ProtectedRoute>
        }
      />
      {/* seller */}
      </Route>
      </Routes>
    
    </Fragment>
  );
}

export default index;
