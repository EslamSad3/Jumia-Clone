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
            products
        </div>

    </div>
    </>
}

export default SearchProducts
