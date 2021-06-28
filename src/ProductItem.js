const ProductItem = ({productname,productPrice,productCategory}) => {
    return (
        <div className="ProductItem">
            <li>
                <p>{productname }</p>
                <p>{productPrice}</p>
                <p>{productCategory}</p>
            </li>
        </div>
    )
}

export default ProductItem