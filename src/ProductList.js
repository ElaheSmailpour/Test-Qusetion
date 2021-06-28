import { getProductList } from './api/productApi'
import { useEffect, useState } from 'react'
import ProductItem from './ProductItem'
const ProductList = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProductList().then((res) => {
            setProducts(res.data)
        }).catch((error) => {
            console.log("error", error)
        })
    }, [])
    return (

        <div className="Category">
            <h1>productlist</h1>
            {products.map((item) => <ProductItem  productname={item.name}
            productPrice={item.price}
            productCategory={item.category.name}
            />)}
        </div>
    )
}


export default ProductList