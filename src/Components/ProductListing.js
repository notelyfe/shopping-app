import React, { useContext } from 'react'
import ProductList from './ProductList';
import { BiUpArrow, BiDownArrow } from "react-icons/bi";
import './ProductListing.css'
import Context from './Context/Context'

const ProductListing = ({keyWord}) => {

    const context = useContext(Context)
    const { productData } = context

    const data = productData.filter((x) => {
        if(keyWord === ''){
            return x;
        }
        else{
            return x.name.toLowerCase().includes(keyWord);
        }
    })

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
                {(data.map((item) => {
                    return <ProductList key={item.id}
                    name={item.name}
                    prod_image={item.prod_photo}
                    color={item.color}
                    stock={item.stock}
                    price={item.price}
                    />
                }))}
            </table>
        </div>
    )
}

export default ProductListing