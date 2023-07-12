import React from 'react'
import "./SearchProducts.css"
import SearchSIdeBar from './SearchSIdeBar'
function SearchProducts() {
    return <>
    <div className="row mx-0 justify-content-evenly">
        <div className="col-2 ">
            <SearchSIdeBar/>
        </div>
        <div className="col-8 my-4 p-3 bg-white">
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

    </div>
    </>
}

export default SearchProducts
