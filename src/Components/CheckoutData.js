import React, { useContext, useState } from 'react'
import Context from './Context/Context';

const CheckoutData = ({ id, image, name, price, quantity, length }) => {

    const context = useContext(Context)
    const {deteleItem} = context

    const subTotal = () => {
        let unitPrice = price;
        let unit = quantity;
        const Subtotal = unitPrice * unit;

        return Subtotal
    }
    
    const getTotal = async () => {
        const x = await subTotal();
        setProductTotal(x)
    }
    getTotal()
    const [productTotal, setProductTotal] = useState('')

    const incQuantity = () => {
        
    }
    const decQuantity = (e) => {
        
    }

    const removeItem = () => {
        deteleItem(id)
    }

    return (
        <tbody>
            <tr>
                <th scope='row' style={{ width: '20rem' }}>
                    <div className="container m-auto d-flex justify-content-around align-items-center">
                        <button className="btn text-danger mx-2 delete" onClick={removeItem}>&times;</button>
                        <img className='prod-pic mx-2' src={image} alt="product" />
                        <h5 className='d-inline mx-3' style={{width: '200px'}}>{name}</h5>
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
                        <div className="container qty m-0 border-left border-right">{quantity}</div>
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
