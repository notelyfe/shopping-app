import React from 'react'
import './Checkout.css'

const Checkout = () => {
    return (
        <div className="container d-flex mt-2">
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
                                <img className='prod-pic mx-2' src="" alt="product" />
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

            <div className="container rounded cart-amount-total ">
                <h2 className='mb-3 mt-1'>Cart Total</h2>
                <div className=' d-flex justify-content-between align-items-center' style={{ marginBottom: '-15px'}}>
                    <h6 >Subtotal</h6>
                    <h6>$101.00</h6>
                </div>
                <hr />
                <div className="d-flex justify-content-between align-items-center">
                    <h3>Total</h3>
                    <h3 className='text-primary'>$101.00</h3>
                </div>
                <button className="btn my-2 btn-primary btn-add">PROCEED TO CHECKOUT</button>
            </div>

        </div>
    )
}

export default Checkout
