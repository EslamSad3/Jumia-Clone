import "./App.css";
import Route from "../src/router/index";
import { BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import toast, { Toaster } from "react-hot-toast";
import { CartContextProvider } from "./Context/CartContext";
import { ProductsContextProvider } from "./Context/ProductsContext";

function App() {
  const [userData, setuserData] = useState(null);
  function saveUserData() {
    let userlogintoken = localStorage.getItem("UserToken");
    if (userlogintoken) {
      let decodedToken = jwtDecode(userlogintoken);
      setuserData(decodedToken.name);
      // console.log(decodedToken);
    }
  }
  useEffect(() => {
    saveUserData();
  }, []);
  return (
    <ProductsContextProvider>
      <CartContextProvider>
        <Toaster />
        <BrowserRouter>
          <Route saveUserData={saveUserData} userData={userData} />
        </BrowserRouter>
      </CartContextProvider>
    </ProductsContextProvider>
  );
}

export default App;
