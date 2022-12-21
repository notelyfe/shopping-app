import axios from "axios";
import { useEffect, useState } from "react";
import Context from './Context'

const State = (props) => {

    const [productData, setProductData] = useState([])

    useEffect(() => {
        fetchCartData()
        fetchData()
    }, [])

    const fetchData = async () => {

        const url = `https://shopping-app-3424.onrender.com`

        return await axios.get(url)
            .then((response) => setProductData(response.data))
    }

    //fetch cart data
    const fetchCartData = async () => {
        const url = "https://shopping-app-3424.onrender.com/cartData"
        return await axios.get(url)
            .then((response) => setCartData(response.data))
    }
    const [cartdata, setCartData] = useState([])

    //add data to cart
    const cartDetail = async ({ prod_image, name, price, stock, qty, product_Id }) => {
        const res = await fetch('https://shopping-app-3424.onrender.com/cartData', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ prod_image, name, price, stock, qty, product_Id })
        });
        const data = await res.json()
        setCartData([...cartdata, data])
    }

    //deleted item from cart
    const deteleItem = async (id, action) => {
        await fetch(`https://shopping-app-3424.onrender.com/cartData/${id}`, {
            method: 'DELETE'
        })
        if (action === 'clear') {
            setCartData([])
            showAlert('Cart has Been Clear SuccessFully', 'success')
        }
        else if (action === 'checkout') {
            setCartData([])
        }
        else if (action === 'QtyDelete') {
            setCartData(cartdata.filter((cartdata) => cartdata.id !== id))
            showAlert('Item Deleted Because Quantity goes below 1', 'info')
        }
        else {
            setCartData(cartdata.filter((cartdata) => cartdata.id !== id))
            showAlert('Item Deleted SuccessFully', 'success')
        }
    }

    //edit quantity into the cartdata
    const editQty = async ( {prod_image, product_Id, name, price, stock, qty, id} ) => {
        const res = await fetch(`https://shopping-app-3424.onrender.com/cartData/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ prod_image, product_Id, name, price, stock, qty, id })
        });
        const json = await res.json();

        let newdata = JSON.parse(JSON.stringify(cartdata))
        for (let i = 0; i < newdata.length; i++) {
            const newQty = newdata[i];
            if (newQty.id === id) {
                newdata[i].qty = qty;
                break;
            }
        }
        setCartData(newdata)
    }

    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(() => {
            setAlert('')
        }, 2000);
    }

    const [alert, setAlert] = useState(null)

    return (
        <Context.Provider
            value={{
                fetchData,
                setProductData,
                productData,
                cartDetail,
                cartdata,
                deteleItem,
                editQty,
                showAlert,
                alert
            }} >
            {props.children}
        </Context.Provider>
    )
}

export default State;