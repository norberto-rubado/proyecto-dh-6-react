import {Link} from "react-router-dom"

import ProductDetail from "../components/ProductDetail"

function ProductItem({product}) {
    return (<div key={product.id}>
                <Link to={"/productos/${product.id}"}>
                <p>{product.name}</p>
                </Link>
            </div> 
            )
}

export default ProductItem