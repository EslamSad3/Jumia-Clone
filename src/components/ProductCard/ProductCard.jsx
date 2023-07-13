import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { cartContext } from "../../Context/CartContext";

export default function ProductCard({ product }) {
<<<<<<< HEAD
  const navigate = useNavigate();
=======
    let { addToCart, setnumOfCartItems } = useContext(cartContext)

    async function addProduct(id) {
        let response = await addToCart(id)
        setnumOfCartItems(response.data.numOfCartItems)
        console.log(response)
    }
>>>>>>> bb7ebe19561af8574db9a1783fd86e039101afed

  let { addToCart, setnumOfCartItems } = useContext(cartContext);

  async function addProduct(id) {
    if (localStorage.getItem("UserToken")) {
      let response = await addToCart(id);
      setnumOfCartItems(response.data.numOfCartItems);
      console.log(response);
    } else {
      navigate("/signin");
    }
  }
  const handleDetails = (id) => {
    navigate(`/productdetails/${id}`);
  };

<<<<<<< HEAD
  return (
    <div class="card h-100 p-2 w-auto">
      <div
        style={{ cursor: "pointer" }}
        onClick={() => {
          handleDetails(product._id);
        }}
      >
        <div className="d-flex justify-content-center">
          <img
            style={{ width: "100%", height: "200px" }}
            src={product.imageCover}
            class="card-img-top"
            alt="..."
          />
=======
    return (
        <div class="card h-100 p-2 w-auto">
            <div style={{ cursor: "pointer" }} onClick={() => { handleDetails(product._id) }}>

                <div className="d-flex justify-content-center">
                    <img
                        style={{ width: "100%", height: "200px" }}
                        src={product.imageCover}
                        class="card-img-top"
                        alt="..."
                    />
                </div>
                <div class="card-body" style={{ width: "100%", height: "50px" }}>
                    <h6 class="card-title text-black-50 truncate">{product.name}</h6>
                </div>
                <div className="ms-3 mt-3">
                    {`EGP ${product.price}`}
                </div>
            </div>

            <div class=" mt-3 py-2">
                <button
                    className="btn w-100 text-light"
                    style={{ background: "#E07E1B" }}
                    onClick={() => { addProduct(product._id) }}
                >
                    Add to Cart
                </button>
            </div>
>>>>>>> bb7ebe19561af8574db9a1783fd86e039101afed
        </div>
        <div class="card-body" style={{ width: "100%", height: "50px" }}>
          <h6 class="card-title text-black-50 truncate">{product.name}</h6>
        </div>
        <div className="ms-3 mt-3">{`EGP ${product.price}`}</div>
      </div>

      <div class=" mt-3 py-2">
        <button
          className="btn w-100 text-light"
          style={{ background: "#E07E1B" }}
          onClick={() => {
            addProduct(product._id);
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
