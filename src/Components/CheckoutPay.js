import React, { useContext, useState } from 'react'
import Context from './Context/Context'
import { Link } from 'react-router-dom'

const CheckoutPay = () => {

    const context = useContext(Context)
    const { cartdata, deteleItem } = context

    const total = () => {
        let arr = cartdata
        let tot = 0
        for (let i = 0; i < cartdata.length; i++) {
            tot += (arr[i].price * arr[i].qty)
        }
        return tot
    }

    const getTotal = async () => {
        const payAmount = await total()
        setTotalPay(payAmount)
    }
    getTotal()

    const [totalPay, setTotalPay] = useState('')

    const confirm = () => {
        let arr = cartdata
        let id 
        let action = 'checkout'
        for(let i = 0; i< cartdata.length; i++){
            id = arr[i].id
            deteleItem(id, action)
        }
    }

    return (
        <div className="container rounded cart-amount-total ">
            <h2 className='mb-3 mt-1'>Cart Total</h2>
            <div className=' d-flex justify-content-between align-items-center' style={{ marginBottom: '-15px' }}>
                <h6 >Subtotal</h6>
                <h6>₹{totalPay}.00</h6>
            </div>
            <hr />
            <div className="d-flex justify-content-between align-items-center">
                <h3>Total</h3>
                <h3 className='text-primary'>₹{totalPay > 0? totalPay: '00'}.00</h3>
            </div>
            <Link onClick={confirm} className="btn my-2 btn-primary btn-add" to='/confirmationPage'>PROCEED TO CHECKOUT</Link>
        </div>
    )
}

export default CheckoutPay
