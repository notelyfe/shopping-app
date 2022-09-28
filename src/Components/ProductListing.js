import React, { useContext } from 'react'
import ProductList from './ProductList';
import { BiUpArrow, BiDownArrow } from "react-icons/bi";
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

    const SortByPriceAcs = () => {
        let field = 'price'
        let order = 'asc'
        fetchData(field, order)
    }
    const SortByPriceDesc = () => {
        let field = 'price'
        let order = 'desc'
        fetchData(field, order)
    }

    const SortByNameAcs = () => {
        let field = 'name'
        let order = 'asc'
        fetchData(field, order)
    }
    const SortByNameDesc = () => {
        let field = 'name'
        let order = 'desc'
        fetchData(field, order)
    }

    const SortBySizeAsc = () => {
        let field = 'size'
        let order = 'asc'
        fetchData(field, order)
    }
    const SortBySizeDesc = () => {
        let field = 'size'
        let order = 'desc'
        fetchData(field, order)
    }

    return (
        <div className='container table-container my-3'>
            <table className='table '>
                <thead className='text-center'>
                    <tr>
                        <th scope='col' className='bg-light'>Image</th>

                        <th scope='col' className='bg-light'>Name
                            <abbr title="Sort item in Ascending order">
                                <BiUpArrow onClick={SortByNameAcs} className='uparrow' />
                            </abbr>
                            <abbr title="Sort item in Descending order">
                                <BiDownArrow onClick={SortByNameDesc} className='downarrow' />
                            </abbr>
                        </th>

                        <th scope='col' className='bg-light'>Size
                            <abbr title="Sort item in Ascending order">
                                <BiUpArrow onClick={SortBySizeDesc} className='uparrow' />
                            </abbr>
                            <abbr title="Sort item in Descending order">
                                <BiDownArrow onClick={SortBySizeAsc} className='downarrow' />
                            </abbr>
                        </th>

                        <th scope='col' className='bg-light'>Color </th>

                        <th scope='col' className='bg-light'>Stock </th>

                        <th scope='col' className='bg-light'>Stock Left</th>

                        <th scope='col' className='bg-light'>Price
                            <abbr title="Sort item in Ascending order">
                                <BiUpArrow onClick={SortByPriceAcs} className='uparrow' />
                            </abbr>
                            <abbr title="Sort item in Descending order">
                                <BiDownArrow onClick={SortByPriceDesc} className='downarrow' />
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
                    />
                }))}
            </table>
        </div>
    )
}

export default ProductListing