import jwtDecode from "jwt-decode";
import axios from "axios";
import { useFormik } from "formik";
import { useNavigate } from "react-router";
import { productsContext } from "../../Context/ProductsContext";
import { useContext } from "react";

function Sellerlogin() {
  const navigate = useNavigate();
  const { handleLogin } = useContext(productsContext);

  async function completelogin(values) {
    const { data } = await handleLogin(values);
    localStorage.setItem("UserToken", data.token);
    saveUserData();
  }

  function saveUserData() {
    let userlogintoken = localStorage.getItem("UserToken");
    if (userlogintoken) {
      let decodedToken = jwtDecode(userlogintoken);
      if (decodedToken.role !== "seller") {
        navigate("/signin");
      } else navigate("/seller");
    }
  }

  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      role: "seller",
    },
    onSubmit: completelogin,
  });
  return (
    <div className="w-75 mx-auto py-4">
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email">email</label>
        <input
          class="form-control my-2 py-3"
          type="email"
          name="email"
          id="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />

        <label htmlFor="password">password</label>
        <input
          class="form-control my-2 py-3"
          type="password"
          name="password"
          id="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <button className="btn btn-success" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Sellerlogin;