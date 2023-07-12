import React, { useEffect, useState } from 'react'
import "./Products.css"
import ProductsSideBar from './ProductsSideBar'
import axios from 'axios'
import { Link } from 'react-router-dom'
function SearchProducts() {
    const [products, setproducts] = useState([])
    useEffect(() => {
        axios.get("https://jumia-clone-api-9qqm.onrender.com/api/team2/products?limit=8").then(res => {
            const prodata = res.data.Products
            setproducts(prodata)
        })
    }, [])
    return <>
        <div className="row mx-0 justify-content-evenly">
            <div className="col-2 ">
                <ProductsSideBar />
            </div>
            <div className="col-8 my-4 p-3 bg-white">
                <div >
                    <div className='d-flex justify-content-between'>
                        <br />
                        <div className="dropdown cursor-pointer">
                            <span className=" dropdown-toggle" id="triggerId" data-bs-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                                <h6 className='d-inline'>Sort By </h6> <span>: Popularity</span>
                            </span>
                            <div className="dropdown-menu sorted" aria-labelledby="triggerId">
                                <a className="dropdown-item" href="#">Popularity</a>
                                <a className="dropdown-item" href="#">Newest Arrivals</a>
                                <a className="dropdown-item" href="#">Price : Low To High</a>
                                <a className="dropdown-item" href="#">Product Rating</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='products-from-api d-flex flex-wrap'>
                    {products.map((item) => {
                        return <>
                            <div className='col-3 p-3 h-100'  >
                                <Link to={`/productdetails/${item.id}`} className='w-100 text-decoration-none '>
                                    <div className="card " >
                                        <img className="w-100 pt-2" style={{ maxHeight: '300px' }} src={item.imageCover} alt="Title" />
                                        <div className="card-body">
                                            <h6 className="card-title products-title">{item.name}</h6>
                                            <p className="card-text price m-0" >EFP {item.priceAfterDiscount}</p>
                                            <small className=" card-text prev-price"> EGP {item.price}</small>
                                        </div>
                                    </div>

                                </Link>
                            </div>
                        </>
                    })}
                </div>
            </div>

        </div>
    </>
}

export default SearchProducts
