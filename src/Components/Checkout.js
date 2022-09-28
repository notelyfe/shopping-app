import React, { useContext } from 'react'
import './Checkout.css'
import CheckoutData from './CheckoutData'
import Context from './Context/Context'

const Checkout = () => {

    const context = useContext(Context)
    const { cartdata } = context

    return (
        <>
            {/* <small className='text-danger stock'>Maximum Stock Available </small> */}
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
                    {(cartdata.map((data) => {
                        return <CheckoutData length={cartdata.length} key={data.id}
                            id={data.id}
                            prod_image={data.prod_image}
                            name={data.name}
                            price={data.price}
                            stock={data.stock}
                            qty={data.qty} />
                    }))}
                </table>

                <div className="container rounded cart-amount-total ">
                    <h2 className='mb-3 mt-1'>Cart Total</h2>
                    <div className=' d-flex justify-content-between align-items-center' style={{ marginBottom: '-15px' }}>
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
        </>
    )
}

export default Checkout
