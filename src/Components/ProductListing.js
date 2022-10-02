import React, { useContext } from 'react'
import ProductList from './ProductList';
import './ProductListing.css'
import Context from './Context/Context'

const ProductListing = ({ keyWord }) => {

    const context = useContext(Context)
    const { productData, fetchData } = context

    const data = productData.filter((x) => {
        if (keyWord === '') {
            return x;
        }
        else {
            return x.name.toLowerCase().includes(keyWord);
        }
    })

    const SortByPrice = (e) => {
        let order = e.target.value
        let field = 'price'
        fetchData(field, order)
    }

    const SortByName = (e) => {
        let field = 'name'
        let order = e.target.value
        fetchData(field, order)
    }

    const SortBySize = (e) => {
        let field = 'size'
        let order = e.target.value
        fetchData(field, order)
    }
    return (
        <div className='container table-container my-3'>
            <table className='table '>
                <thead className='text-center'>
                    <tr>
                        <th scope='col' className='bg-light'>Image</th>

                        <th scope='col' className='bg-light' >Name
                                <abbr title="Sort item in Ascending order">
                                    <button onClick={SortByName} value='asc' className="btn border-0 p-0 fw-bolder uparrow">&#8638;</button>
                                </abbr>
                                <abbr title="Sort item in Descending order">
                                    <button onClick={SortByName} value='desc' className="btn border-0 p-0 fw-bolder downarrow">&#8643;</button>
                                </abbr>
                        </th>

                        <th scope='col' className='bg-light'>Size
                            <abbr title="Sort item in Ascending order">
                                <button onClick={SortBySize} value='desc' className="btn border-0 p-0 fw-bolder uparrow">&#8638;</button>
                            </abbr>
                            <abbr title="Sort item in Descending order">
                                <button onClick={SortBySize} value='asc' className="btn border-0 p-0 fw-bolder downarrow">&#8643;</button>
                            </abbr>
                        </th>

                        <th scope='col' className='bg-light'>Color </th>

                        <th scope='col' className='bg-light'>Stock </th>

                        <th scope='col' className='bg-light'style={{ width: '100px'}}>Stock Left</th>

                        <th scope='col' className='bg-light' style={{ width: '90px'}}>Price 
                            <abbr title="Sort item in Ascending order">
                                <button onClick={SortByPrice} value='asc' className="btn border-0 p-0 fw-bolder uparrow">&#8638;</button>
                            </abbr>
                            <abbr title="Sort item in Descending order">
                                <button onClick={SortBySize} value='desc' className="btn border-0 p-0 fw-bolder downarrow">&#8643;</button>
                            </abbr>
                        </th>

                        <th scope='col' className='bg-light'>Buy</th>
                    </tr>
                </thead>
                {(data.map((item) => {
                    return <ProductList key={item.id}
                        id={item.id}
                        name={item.name}
                        size={item.size}
                        prod_image={item.prod_photo}
                        color={item.color}
                        stock={item.stock}
                        price={item.price}
                        product_Id={item.product_Id}
                    />
                }))}
            </table>
        </div>
    )
}

export default ProductListing