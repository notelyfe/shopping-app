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

    const handelToggleFilterType = (e) => {
        e.preventDefault()
        typeDiv === true ? setTypeDiv(false) : setTypeDiv(true)
    }
    const [typeDiv, setTypeDiv] = useState(false)

    const handelToggleFilterSize = (e) => {
        e.preventDefault()
        sizeDiv === true ? setSizeDiv(false) : setSizeDiv(true)
    }
    const [sizeDiv, setSizeDiv] = useState(false)

    const filterByType = (e) => {
        let outfit = e.target.value
        fetchData(outfit, undefined)
        setTypeDiv(false)
    }

    const filterBySize = (e) => {
        let size = e.target.value
        fetchData(undefined, size)
        setSizeDiv(false)
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
                            <button
                                onClick={handelToggleFilterType}
                                className="btn btn-light btn-filter text-uppercase dropdown-toggle"
                                type="button">
                                {outFit !== null ? outFit : 'Type'}
                            </button>
                            <div className={`bg-light d-${typeDiv === true ? 'flex' : 'none'} container-filter rounded type-container`}>
                                <button onClick={filterByType} value='shirt' className="btn border-0 btn-type">Shirt</button>
                                <button onClick={filterByType} value='hoodie' className="btn border-0 btn-type">Hoodie</button>
                            </div>
                        </div>
                        <div className="dropdown mx-1">
                            <button onClick={handelToggleFilterSize} className="btn btn-light text-uppercase btn-filter-size dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                {productSize !== null ? productSize : 'size'}
                            </button>
                            <div className={`size-container bg-light d-${sizeDiv === true ? 'flex' : 'none'} container-filter rounded`}>
                                <button onClick={filterBySize} value='small' className="btn btn-type border-0">S</button>
                                <button onClick={filterBySize} value='medium' className="btn btn-type border-0">M</button>
                                <button onClick={filterBySize} value='large' className="btn btn-type border-0">L</button>
                                <button onClick={filterBySize} value='extralarge' className="btn btn-type border-0">XL</button>
                            </div>
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
            <ProductListing keyWord={keyWord} />
        </>
    )
}

export default SearchFilter