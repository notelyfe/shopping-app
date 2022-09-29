import React, { useContext, useState } from 'react'
import './SearchFilter.css'
import ProductListing from './ProductListing'
import { BiReset, BiCart } from "react-icons/bi";
import Context from './Context/Context'
import { Link } from 'react-router-dom'

const SearchFilter = () => {

    const context = useContext(Context)
    const { fetchData, handelReset, outFit, productSize, cartdata, showAlert } = context;

    const reset = (e) => {
        setKeyWord('')
        handelReset()
        showAlert('Data Reset Success', 'success')
        localStorage.removeItem('type')
        localStorage.removeItem('size')
        localStorage.removeItem('order')
        localStorage.removeItem('field')
    }

    const filterShirt = (e) => {
        e.preventDefault();
        const outfit = 'shirt'
        fetchData(outfit, undefined)
    }
    const filterHoodie = (e) => {
        e.preventDefault();
        const outfit = 'hoodie'
        fetchData(outfit, undefined)
    }

    const small = (e) => {
        e.preventDefault()
        const size = 'small'
        fetchData(undefined, size)
    }
    const medium = (e) => {
        e.preventDefault()
        const size = 'medium'
        fetchData(undefined, size)
    }
    const large = (e) => {
        e.preventDefault()
        const size = 'large'
        fetchData(undefined, size)
    }
    const extraLarge = (e) => {
        e.preventDefault()
        const size = 'extralarge'
        fetchData(undefined, size)
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
                        <div className="dropdown mx-1">
                            <button  className="btn btn-light btn-filter text-uppercase dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                {outFit !== null?outFit:'type'}
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><Link className="dropdown-item" onClick={filterShirt} id='shirt' to="#">Shirt</Link></li>
                                <li><Link className="dropdown-item" onClick={filterHoodie} id='hoodie' to="#">Hoodie</Link></li>
                            </ul>
                        </div>
                        <div className="dropdown mx-1">
                            <button  className="btn btn-light text-uppercase btn-filter-size dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                {productSize !== null?productSize:'size'}
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
                            className={`btn p-0 btn-cart text-dark border-0 mx-1 ${(cartdata.length) <= 0 ? 'disabled' : ''}`}
                            to='/checkout'>
                            <BiCart />
                        </Link>
                        <div className={`Qty-indicator bg-info d-${cartdata.length > 0 ? 'block' : 'none'}`}>{cartdata.length}</div>
                    </div>
                </div>
            </div>
            <ProductListing keyWord={keyWord}/>
        </>
    )
}

export default SearchFilter