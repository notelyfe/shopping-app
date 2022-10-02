import React, { useContext } from 'react'
import Context from './Context/Context'
import { AiFillCheckCircle, AiFillWarning, AiFillInfoCircle } from "react-icons/ai";
import { MdDangerous } from "react-icons/md";

const Alert = () => {

    const context = useContext(Context)
    const { alert } = context

    return (
        <>
            {alert && <div
                className={`alert alert-${alert.type} text-center container mt-1`}
                style={{
                    position: 'fixed',
                    top: '52px',
                    maxWidth: '40%',
                    zIndex: '1',
                    left: '30%'
                }}>

                {(alert.type === 'success') ? <AiFillCheckCircle
                    className='text-success mx-3'
                    style={{ fontSize: '22px' }} /> : ''}
                {(alert.type === 'warning') ? <AiFillWarning
                    className='text-warning mx-3'
                    style={{ fontSize: '22px' }} /> : ''}
                {(alert.type === 'danger') ? <MdDangerous
                    className='text-danger mx-3'
                    style={{ fontSize: '22px' }} /> : ''}
                {(alert.type === 'info') ? <AiFillInfoCircle
                    className='text-info mx-3'
                    style={{ fontSize: '22px' }} /> : ''}
                {alert.msg}
            </div>}
        </>
    )
}

export default Alert
