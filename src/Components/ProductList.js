import React, { useContext, useState } from 'react'
import { BsFillEmojiSmileFill } from "react-icons/bs";
import { FaCartPlus } from "react-icons/fa";
import { ImSad2 } from "react-icons/im";
import { Link } from 'react-router-dom'
import Context from './Context/Context';

const ProductList = ({ product_Id, prod_image, name, color, stock, price, size, id }) => {

    const context = useContext(Context)
    const { cartDetail, showAlert, cartdata, editQty } = context

    const productQty = (e) => {
        e.preventDefault()
        setQty(e.target.value)
    }

    let [qty, setQty] = useState('')

    const bthChecked = (e) => {
        setChecked(e.target.checked)
    }
    const [checked, setChecked] = useState(false)

    const addProduct = (e) => {
        e.preventDefault()
        if ((checked === true) && (qty !== '')) {
            if (parseInt(qty) <= 0) {
                showAlert('Please Select a Valid Quantity.', 'warning')
            }
            else if (parseInt(qty) <= parseInt(stock)) {
                let arr = cartdata
                if (arr.length <= 0) {
                    cartDetail({ prod_image, product_Id, name, price, stock, qty })
                    showAlert('Item Added to Cart Successfully', 'success')
                }
                else {
                    let i = 0
                    let prodID = []
                    arr.map((item) => {
                        prodID[i] = item.product_Id
                        i++
                    })
                    if (prodID.includes(product_Id)) {
                        showAlert('Item Already Exist into the cart, Please increase the quantity from there', 'warning')
                    }
                    else {
                        cartDetail({ prod_image, product_Id, name, price, stock, qty })
                        showAlert('Item Added to Cart Successfully', 'success')
                    }
                }
                setQty('')
                setChecked(false)
            }
            else {
                setQty(stock)
                showAlert('We are reseting your Quantity to max Available Quantity, please click on cart again to Add', 'info')
            }
        }
        else if (stock === 0) {
            showAlert('Item Out Of Stock', 'danger')
        }
        else {
            showAlert('Please Select Provided Input', 'warning')
        }
    }

    return (
        <tbody className='text-center'>
            <tr >
                <th scope='row'>
                    <img className='image-data' src={prod_image} alt="pics.jpeg" />
                </th>
                <th ><Link className='text-info' to="#">{name}</Link></th>
                <th className='text-dark text-capitalize'>{size}</th>
                <th className='text-capitalize'>{color}</th>
                <th className={` text-${(stock !== 0) ? 'success' : 'danger'}`}>{stock !== 0 ? <BsFillEmojiSmileFill className='mx-1' /> : <ImSad2 className='mx-1' />}{stock !== 0 ? 'In Stock' : 'Out Of Stock'}</th>
                <th>{stock}</th>
                <th >₹{price}</th>
                <th >
                    <div className="buy-item">
                        <input
                            className='quantity rounded text-center mx-1'
                            name='quantity'
                            type="text"
                            value={qty}
                            onChange={productQty} />
                        <FaCartPlus
                            onClick={addProduct}
                            className='cart mx-1'
                        />
                        <input disabled={stock === 0}
                            type="checkbox"
                            className='checkbox mx-1 disabled'
                            onChange={bthChecked}
                            value={checked}
                            checked={checked}
                        />
                    </div>
                </th>
            </tr>
        </tbody>
    )
}

export default ProductList