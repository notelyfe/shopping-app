import axios from "axios";
import { useEffect, useState } from "react";
import Context from './Context'

const State = (props) => {

    const [productData, setProductData] = useState([])

    useEffect(() => {
        fetchData();
        filterSize()
        handelReset()
    }, [])

    const fetchData = async (type) => {
        setOutFit(type)
        const url = `https://shopping-data-server.herokuapp.com/productData${type !== undefined ? '?type=' : ''}${type !== undefined ? type : ''}`
        return await axios.get(url)
            .then((response) => setProductData(response.data))
    }
    const [outFit, setOutFit] = useState('type')

    const filterSize = async (size) => {
        setProductSize(size)
        const url = `https://shopping-data-server.herokuapp.com/productData?size=${size}`
        return await axios.get(url)
            .then((response) => setProductData(response.data))
    }
    const [productSize, setProductSize] = useState('Size')

    const handelReset = async () => {
        setOutFit('type')
        setProductSize('Size')
        const url = 'https://shopping-data-server.herokuapp.com/productData'
        return await axios.get(url)
            .then((response) => setProductData(response.data))
    }

    return (
        <Context.Provider value={{ productData, fetchData, handelReset, outFit, filterSize, productSize }} >
            {props.children}
        </Context.Provider>
    )
}

export default State;