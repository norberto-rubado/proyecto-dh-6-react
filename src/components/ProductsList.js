import {React, Fragment, useState, useEffect} from "react"

import ProductItem from "../components/ProductItem"

/* Se saca este codigo para hacer el Item Stateless (componente ProductItem) 
import {Link} from "react-router-dom"
*/

function ProductsList() {
    const [products, setProducts] = useState([])

    useEffect(function () {
        fetch("https://localhost:3001/api/productos")
        .then(response => response.json())
        .then(json => setProducts(json))
    } , [])

    return (
        <Fragment>
            <h1>Listado de Productos</h1>
            <div>
                {
                    products.map(product =>
                        <ProductItem product={product} />    
/* Se saca este codigo para hacer el Item Stateless (componente ProductItem)                        
                        {
                        return <div key={products.id}>
                            <Link to={"/products/${product.id}"}>
                            <p>{products.name}</p>
                            </Link>
                        </div> 
                        }*/
                    )
                }
            </div>
        </Fragment>
    )
}

export default ProductsList