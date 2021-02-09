import {  
    BrowserRouter as Router,
    Link,
    Switch, 
    Route 
} from "react-router-dom"

import ProductDetail from "../components/ProductDetail"

function ProductItem({product}) {
    return (<div key={product.id}>
                <Router>
                    <Link to={"/productos/${product.id}"}>
                    <p>{product.name}</p>
                    </Link>
                    <Route exact path= "/productos/${product.id}">
                        <ProductDetail />
                    </Route>  
                </Router>
            </div> 
            )
}

export default ProductItem