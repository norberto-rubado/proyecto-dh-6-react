
import {Link} from "react-router-dom"


function ProductItem(product) {
    return (<div key={product.id}>
                <Link to={"/products/${product.id}"}>
                <p>{product.name}</p>
                </Link>
            </div> 
    )
}

export default ProductItem