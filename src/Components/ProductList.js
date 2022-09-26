import React from 'react'
import { BsFillEmojiSmileFill, BsCartFill } from "react-icons/bs";
import { ImSad2 } from "react-icons/im";

const ProductList = ({ prod_image, name, color, stock, price }) => {
    return (
        <tbody className='text-center'>
            <tr>
                <th scope='row'>
                    <img className='image-data' src={prod_image} alt="pics.jpeg" />
                </th>
                <th ><a className='text-info' href="#">{name}</a></th>
                <th className='text-info'>{color}</th>
                <th className={`text-${(stock === 'yes') ? 'success' : 'danger'}`}>{stock === 'yes' ? <BsFillEmojiSmileFill className='mx-1' /> : <ImSad2 className='mx-1' />}{stock === 'yes' ? 'In Stock' : 'Out Of Stock'}</th>
                <th >{price}</th>
                <th >
                    <div className="buy-item">
                        <input className='quantity rounded text-center mx-1' name='quantity' type="text" />
                        <BsCartFill className='cart mx-1' />
                        <input type="checkbox" className='checkbox mx-1' />
                    </div>
                </th>
            </tr>
        </tbody>
    )
}

export default ProductList
