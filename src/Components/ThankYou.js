import React from 'react'
import { Link } from 'react-router-dom'

const ThankYou = () => {
    return (
        <div className='mt-5 text-center'>
            <h1 className='text-center'>Order has been Confirmed.</h1>
            <p className='text-center'>Thank You for Shopping with us</p>
            <Link  to='/'>Go to Home</Link>
        </div>
    )
}

export default ThankYou
