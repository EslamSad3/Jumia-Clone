import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {

    const navigate = useNavigate()

    const handleDetails = () => {
        navigate(`/productdetails`)
    }

    return (
        <div class="card h-100 p-2 w-auto">
            <div className="d-flex justify-content-center">
                <img
                    style={{ width: "100%", height: "200px" }}
                    src={`https://image.tmdb.org/t/p/w500/${product.backdrop_path}`}
                    class="card-img-top"
                    alt="..."
                />
            </div>
            <div class="card-body" style={{ width: "100%", height: "50px" }}>
                <h6 class="card-title text-black-50 truncate">{product.title}</h6>
            </div>
            <div class=" mt-3 py-2">
                <button
                    className="btn w-100 text-light"
                    style={{ background: "#E07E1B" }}
                >
                    Add to Cart
                </button>
            </div>
            <div class=" mt-3 py-2">
                <button
                    onClick={() => { handleDetails() }}
                    className="btn w-100 text-light"
                    style={{ background: "#E07E1B" }}
                >
                    go to details
                </button>
            </div>
        </div>
    );
}