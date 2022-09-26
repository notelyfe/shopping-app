import React from 'react'
import './SearchFilter.css'
import ProductListing from './ProductListing'
import { BiReset } from "react-icons/bi";

const SearchFilter = () => {

    return (
        <>
            <div className='container my-2'>
                <div className="product-listing">
                    <div className="container filter-container mx-1 my-1">

                        <select className='form-select mx-1 select-width' name="filter_by_name" id="filter_by_name">
                            <option >Select...</option>
                            <option value="Shirt">Shirt</option>
                            <option value="Hoodie">Hoodie</option>
                        </select>
                        <select className='form-select mx-1 select-width' name="filter_by_size" id="filter_by_size">
                            <option >Select...</option>
                            <option value="small">S</option>
                            <option value="medium">M</option>
                            <option value="large">L</option>
                            <option value="extralarge">XL</option>
                        </select>

                        <button className="btn mx-1 text-info "><BiReset />Reset</button>
                    </div>

                    <div className="container search-add mx-1">
                        <label className='mx-1 input' htmlFor="search" id='search'>Search</label>
                        <input className='mx-1 form-control input-width' type="text" placeholder='Search' />
                        <button className='btn btn-info text-light mx-1'>Add To Cart</button>
                    </div>
                </div>
            </div>
            <ProductListing />
        </>
    )
}

export default SearchFilter
