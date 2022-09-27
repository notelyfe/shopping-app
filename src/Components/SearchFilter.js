import React, { useContext, useState } from 'react'
import './SearchFilter.css'
import ProductListing from './ProductListing'
import { BiReset } from "react-icons/bi";
import Context from './Context/Context'

const SearchFilter = () => {

    const context = useContext(Context)
    const { fetchData, handelReset } = context;

    const filterProd = (e) => {
        e.preventDefault();
        setType(e.target.value)
        fetchData(type)
    }
    const [type, setType] = useState('')

    const reset =(e) => {
        e.preventDefault();
        setType('')
        setKeyWord('')
        handelReset()
    }

    
    // const filterShirt =(e) => {
    //     e.preventDefault();
    //     setType('shirt')
    //     filterProd(type)
    // }
    // const filterHoodie =(e) => {
    //     e.preventDefault();
    //     setType('hoodie')
    //     filterProd(type)
    // }
    
    const search = (e) => {
        setKeyWord(e.target.value)
    }
    const [keyWord, setKeyWord] = useState('')

    return (
        <>
            <div className='container my-2'>
                <div className="product-listing">
                    <div className="container filter-container mx-1 my-1">

                        <select className='form-select mx-1 select-width' onChange={filterProd} name="filter_by_name" id="filter_by_name">
                            <option >Select...</option>
                            <option value="shirt">Shirt</option>
                            <option value="hoodie">Hoodie</option>
                        </select>
                        {/* <div className="dropdown">
                            <button className="btn btn-secondary text-uppercase dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                {type}
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" onClick={filterShirt} id='shirt' href="#">Shirt</a></li>
                                <li><a className="dropdown-item" onClick={filterHoodie} id='hoodie' href="#">Hoodie</a></li>
                            </ul>
                        </div> */}
                        <select className='form-select mx-1 select-width' name="filter_by_size" id="filter_by_size">
                            <option >Select...</option>
                            <option value="small">S</option>
                            <option value="medium">M</option>
                            <option value="large">L</option>
                            <option value="extralarge">XL</option>
                        </select>

                        <button className="btn mx-1 text-info border-0" onClick={reset}><BiReset />Reset</button>
                    </div>

                    <div className="container search-add mx-1">
                        <label className='mx-1 input' htmlFor="search" id='search'>Search</label>
                        <input className='mx-1 form-control input-width' type="text" value={keyWord} onChange={search} placeholder='Search BY Name' />
                        <button className='btn btn-info text-light mx-1'>Add To Cart</button>
                    </div>
                </div>
            </div>
            <ProductListing keyWord={keyWord} />
        </>
    )
}

export default SearchFilter