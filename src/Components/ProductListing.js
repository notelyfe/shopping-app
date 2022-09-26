import React from 'react'
import ProductList from './ProductList';
import { BiUpArrow, BiDownArrow } from "react-icons/bi";
import Data from '../data.json'
import './ProductListing.css'

const ProductListing = () => {
    return (
        <div className='container table-container my-3'>
            <table className='table '>
                <thead className='text-center'>
                    <tr>
                        <th scope='col' className='bg-light'>Image</th>
                        <th scope='col' className='bg-light'>Name  <BiUpArrow className='uparrow' /><BiDownArrow className='downarrow' /></th>
                        <th scope='col' className='bg-light'>Color <BiUpArrow className='uparrow' /><BiDownArrow className='downarrow' /></th>
                        <th scope='col' className='bg-light'>Stock <BiUpArrow className='uparrow' /><BiDownArrow className='downarrow' /></th>
                        <th scope='col' className='bg-light'>Price <BiUpArrow className='uparrow' /><BiDownArrow className='downarrow' /></th>
                        <th scope='col' className='bg-light'>Buy</th>
                    </tr>
                </thead>
                {(Data.map((items) => {
                    return <ProductList key={items.id}
                    name={items.name}
                    prod_image={items.prod_photo}
                    color={items.color}
                    stock={items.stock}
                    price={items.price}
                    />
                }))}
            </table>
        </div>
    )
}

export default ProductListing
