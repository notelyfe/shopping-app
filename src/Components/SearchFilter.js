import React, { useContext, useState } from 'react'
import './SearchFilter.css'
import ProductListing from './ProductListing'
import { BiReset } from "react-icons/bi";
import Context from './Context/Context'
import { Link } from 'react-router-dom'

const SearchFilter = () => {

    const context = useContext(Context)
    const { fetchData, handelReset, outFit, filterSize, productSize, cartdata, showAlert } = context;

    // const filterProd = (e) => {
    //     e.preventDefault();
    //     console.log(type)
    //     setType(e.target.value)
    //     console.log(type)
    //     fetchData(type)
    // }
    // const [type, setType] = useState('')

    const reset = (e) => {
        setKeyWord('')
        handelReset()
        showAlert('Data Reset Success', 'success')
    }


    const filterShirt = (e) => {
        e.preventDefault();
        const outfit = 'shirt'
        fetchData(outfit)
    }
    const filterHoodie = (e) => {
        e.preventDefault();
        const outfit = 'hoodie'
        fetchData(outfit)
    }

    const small = (e) => {
        e.preventDefault()
        const size = 'small'
        filterSize(size)
    }
    const medium = (e) => {
        e.preventDefault()
        const size = 'medium'
        filterSize(size)
    }
    const large = (e) => {
        e.preventDefault()
        const size = 'large'
        filterSize(size)
    }
    const extraLarge = (e) => {
        e.preventDefault()
        const size = 'extralarge'
        filterSize(size)
    }

    const search = (e) => {
        setKeyWord(e.target.value)
    }
    const [keyWord, setKeyWord] = useState('')

    return (
        <>
            <div className='container my-2'>
                <div className="product-listing">
                    <div className="container filter-container mx-1 my-1">

                        {/* <select className='form-select mx-1 select-width' onChange={filterProd} name="filter_by_name" id="filter_by_name">
                            <option >Select...</option>
                            <option value="shirt">Shirt</option>
                            <option value="hoodie">Hoodie</option>
                        </select> */}
                        <div className="dropdown mx-1">
                            <button className="btn btn-light btn-filter text-uppercase dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                {outFit}
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><Link className="dropdown-item" onClick={filterShirt} id='shirt' to="#">Shirt</Link></li>
                                <li><Link className="dropdown-item" onClick={filterHoodie} id='hoodie' to="#">Hoodie</Link></li>
                            </ul>
                        </div>
                        {/* <select className='form-select mx-1 select-width' name="filter_by_size" id="filter_by_size">
                            <option >Select...</option>
                            <option value="small">S</option>
                            <option value="medium">M</option>
                            <option value="large">L</option>
                            <option value="extralarge">XL</option>
                        </select> */}
                        <div className="dropdown mx-1">
                            <button className="btn btn-light text-uppercase btn-filter-size dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                {productSize}
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><Link className="dropdown-item" onClick={small} to="#">S</Link></li>
                                <li><Link className="dropdown-item" onClick={medium} to="#">M</Link></li>
                                <li><Link className="dropdown-item" onClick={large} to="#">L</Link></li>
                                <li><Link className="dropdown-item" onClick={extraLarge} to="#">XL</Link></li>
                            </ul>
                        </div>

                        <button
                            className="btn mx-1 text-info border-0"
                            onClick={reset}>
                            <BiReset />Reset
                        </button>
                    </div>

                    <div className="container search-add mx-1">
                        <label className='mx-1 input' htmlFor="search" id='search'>Search</label>
                        <input
                            className='mx-1 form-control input-width'
                            type="text" value={keyWord}
                            onChange={search}
                            placeholder='Search BY Name' />
                        <Link
                            className={`btn btn-info text-light mx-1 ${(cartdata.length) <= 0 ? 'disabled' : ''}`}
                            to='/checkout'>
                            Add To Cart
                        </Link>
                    </div>
                </div>
            </div>
            <ProductListing keyWord={keyWord}/>
        </>
    )
}

export default SearchFilter