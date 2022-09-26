import React from 'react'
import pic from './pic7.jpeg'
import './Checkout.css'

const Checkout = () => {
    return (
        <div className="container">
            <table className="table my-3 checkout-data">
                <thead className='bg-light text-center'>
                    <tr>
                        <th scope='col'>Product</th>
                        <th scope='col'>Price</th>
                        <th scope='col'>Quantity</th>
                        <th scope='col'>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope='row' style={{ width: '20rem' }}>
                            <div className="container m-auto d-flex justify-content-around align-items-center">
                                <button className="btn text-danger mx-2 delete">&times;</button>
                                <img className='prod-pic mx-2' src={pic} alt="product image" />
                                <h5 className='d-inline mx-3'>Branded</h5>
                            </div>
                        </th>
                        <th scope='row'>
                            <div className="container checkout-detail">
                                $21.00
                            </div>
                        </th >
                        <th scope='row'>
                            <div className="container checkout-quantity">
                                <button className="decreased left-radius px-2 qty-btn border-right">-</button>
                                <div className="container qty m-0 border-left border-right">0</div>
                                <button className="increase right-radius px-2 qty-btn border-left">+</button>
                            </div>
                        </th>
                        <th scope='row'>
                            <div className="container checkout-detail text-primary">
                                $50.00
                            </div>
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Checkout
