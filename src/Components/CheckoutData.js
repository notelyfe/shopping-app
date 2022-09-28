import React, { useContext, useState } from 'react'
import Context from './Context/Context';

const CheckoutData = ({ id, length, prod_image, name, price, qty, stock }) => {

    const context = useContext(Context)
    const { deteleItem, editQty, showAlert } = context

    const subTotal = () => {
        let unitPrice = price;
        let unit = qty;
        const Subtotal = unitPrice * unit;

        return Subtotal
    }

    const getminiTotal = async () => {
        const subtotal = await subTotal();
        setProductTotal(subtotal)
    }
    getminiTotal()
    const [productTotal, setProductTotal] = useState('')

    const totalCartValue = async () => {

    }
    totalCartValue()
    // const [total, setTotal] = useState('')

    const incQuantity = () => {
        qty = parseInt(qty) + 1
        if (qty <= stock) {
            editQty({ id, qty, prod_image, name, price, stock })
        }
    }

    const decQuantity = () => {
        if (parseInt(qty) < 1) {
            deteleItem(id)
        } else {
            qty = parseInt(qty) - 1
            editQty({ id, qty, prod_image, name, price, stock })
        }
    }

    const removeItem = () => {
        deteleItem(id)
        showAlert('Item Deleted SuccessFully', 'success')
    }

    return (

        <tbody>
            <tr>
                <th scope='row' style={{ width: '20rem' }}>
                    <div className="container m-auto d-flex justify-content-around align-items-center">
                        <button className="btn text-danger mx-2 delete" onClick={removeItem}>&times;</button>
                        <img className='prod-pic mx-2' src={prod_image} alt="product" />
                        <h5 className='d-inline mx-3' style={{ width: '200px' }}>{name}</h5>
                    </div>
                </th>
                <th scope='row'>
                    <div className="container checkout-detail">
                        ₹{price}
                    </div>
                </th >
                <th scope='row'>
                    <div className="container checkout-quantity">
                        <button className="decreased left-radius px-2 qty-btn border-right" onClick={decQuantity}>-</button>
                        <div className="container qty m-0 border-left border-right">{qty}</div>
                        <button className="increase right-radius px-2 qty-btn border-left" onClick={incQuantity}>+</button>
                    </div>
                </th>
                <th scope='row'>
                    <div className="container checkout-detail text-primary">
                        ₹{productTotal}.00
                    </div>
                </th>
            </tr>
        </tbody>
    )
}

export default CheckoutData
