import axios from "axios";
import { useEffect, useState } from "react";
import Context from './Context'

const State = (props) => {

    const [productData, setProductData] = useState([])

    useEffect(() => {
        fetchData();
        handelReset()
    }, [])

    const fetchData = async (type) => {
        console.log(type)
        const url = `https://shopping-data-server.herokuapp.com/productData${type !== undefined ? '?type=' : ''}${type !== undefined ? type : ''}`
        return await axios.get(url)
            .then((response) => setProductData(response.data))
    }

    const handelReset = async () => {
        const url = 'https://shopping-data-server.herokuapp.com/productData'
        return await axios.get(url)
            .then((response) => setProductData(response.data))
    }

    return (
        <Context.Provider value={{ productData, fetchData, handelReset }} >
            {props.children}
        </Context.Provider>
    )
}

export default State;