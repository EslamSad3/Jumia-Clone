import React, { useEffect, useState } from "react";
// import { products } from "../../data/products";
// import axiosInstance from "../../APIs/config";
// import axiosInstance from "../../APIs/config";

// import { useNavigate } from "react-router-dom";

import PaginationComponent from "../Pagination/Pagination";
import axios from "axios";
import Loader from "../Loader/Loader";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductList() {

    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState();
    const [productsList, setProducts] = useState([]);
    // const navigate = useNavigate()

    // const handleDetails = (id) => {
    //     navigate(`/product-details/${id}`)
    // }

    const getPage = (page) => {
        setPage(page);
    };

    useEffect(() => {
        setIsLoading(true)
        axios
            .get(`https://api.themoviedb.org/3/movie/popular/`, {
                params: {
                    api_key: "c434411f1d306978a9d0e9b9b95ad354",
                    page: page
                },

            })
            .then((res) => {
                setProducts(res.data.results)
                setIsLoading(false)
            })
            .catch((err) => {
                console.log(err)
                setIsLoading(false)
            });
    }, [page]);
    return (
        <div>
            {isLoading && <Loader />}
            <div class="row row-cols-sm-2 row-cols-2 row-cols-lg-4 row-cols-md-2 g-4">
                {productsList.map((product) => {
                    return (
                        <div class="col" key={product.id}>
                            <ProductCard product={product} />
                        </div>
                    );
                })}
            </div>
            <PaginationComponent getPage={getPage} />
        </div>
    );
}
