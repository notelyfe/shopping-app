import React, { useContext, useState } from 'react'
import './Checkout.css'
import CheckoutData from './CheckoutData'
import Context from './Context/Context'
import { FaTrashAlt } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import CheckoutPay from './CheckoutPay';

const Checkout = () => {

    const context = useContext(Context)
    const { cartdata, deteleItem, showAlert } = context

    const clearCart = () => {
        setWarning(true)
    }

    const accept = () => {
        let arr = cartdata
        let id
        let action = 'clear'
        for (let i = 0; i < cartdata.length; i++) {
            id = arr[i].id
            deteleItem(id, action)
        }
        setWarning(false)
        showAlert('Cart has Been Clear SuccessFully', 'success')
    }

    const deny = () => {
        setWarning(false)
    }
    const [warning, setWarning] = useState(false)

    return (
        <>
            <div className={`container d-${warning === true ? 'block' : 'none'} alert alert-danger rounded mt-2 d-flex justify-content-around align-items-center`}
                style={{ width: '464px', height: '50px' }}>
                <strong className='text-danger'>Warning This will Erase All Item from cart</strong>
                <TiTick onClick={accept} className='text-light btn btn-success mx-1 py-0' style={{ width: '45px', height: '30px' }} />
                <button onClick={deny} className='btn btn-danger py-0' style={{ width: '45px', height: '30px', fontSize: '20px' }}><strong>&times;</strong></button>
            </div>

            <div className="container d-flex mt-2">
                <table className="table my-3 checkout-data">
                    <thead className='bg-light text-center'>
                        <tr>
                            <th scope='col'><button disabled={cartdata.length <= 0} onClick={clearCart} className='rounded trash border-0 mt-1 ms-4 '><FaTrashAlt className='trash'/></button> Product</th>
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
                <CheckoutPay />
            </div>
        </>
    )
}

export default Checkout
