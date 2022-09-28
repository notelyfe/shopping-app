import axios from "axios";
import { useEffect, useState } from "react";
import Context from './Context'

const State = (props) => {

    const [productData, setProductData] = useState([])

    useEffect(() => {
        fetchData();
        filterSize()
        handelReset()
        fetchCartData()
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
    //fetch cart data
    const fetchCartData = async () => {
        const url = "https://shopping-data-server.herokuapp.com/cartData"
        return await axios.get(url)
            .then((response) => setCartData(response.data))
    }
    const [cartdata, setCartData] = useState([])

    //add data to cart
    const cartDetail = async (prod_image, name, price, stock, qty) => {
        const res = await fetch('https://shopping-data-server.herokuapp.com/cartData', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(prod_image, name, price, stock, qty)
        });
        const data = await res.json()
        setCartData([...cartdata, data])
    }

    //deleted item from cart
    const deteleItem = async (id) => {
        await fetch(`https://shopping-data-server.herokuapp.com/cartData/${id}`, {
            method: 'DELETE'
        })
        setCartData(cartdata.filter((cartdata) => cartdata.id !== id))
    }

    //edit quantity into the cartdata
    const editQty = async ( {prod_image, name, price, stock, qty, id} ) => {
        const res = await fetch(`https://shopping-data-server.herokuapp.com/cartData/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({prod_image, name, price, stock, qty, id})
        });
        const json = await res.json();

        let newdata = JSON.parse(JSON.stringify(cartdata))
        for( let i=0; i<newdata.length; i++){
            const newQty = newdata[i];
            if(newQty.id === id){
                newdata[i].qty = qty;
                break;
            }
        }
        setCartData(newdata)
    }

    return (
        <Context.Provider value={{ productData, fetchData, handelReset, outFit, filterSize, productSize, cartDetail, cartdata, deteleItem, editQty }} >
            {props.children}
        </Context.Provider>
    )
}

export default State;