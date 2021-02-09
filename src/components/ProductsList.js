import {React, Fragment, useState, useEffect} from "react"

import ProductItem from "../components/ProductItem"

/* Se saca este codigo para hacer el Item Stateless (componente ProductItem)  */
/* import {Link} from "react-router-dom" */


function ProductsList() {

/*     let products= ([]) */

    let [products, setProducts] = useState([])

    useEffect(function () {
        fetch("http://localhost:3001/api/productos")
        .then(response => response.json())
        .then(json => setProducts(json.products))
        .catch(error => console.log("1",error))
    } , [])

    console.log(products)
/*     setProductsList = products.products
    console.log(products) */

    return (
        <Fragment>
            <h1>Listado de Productos</h1>
            <div>
                {
                    products.map((product, i) => <ProductItem product={product} key={i}/> )  
                }
{/* Se saca este codigo para hacer el Item Stateless (componente ProductItem)     */}                    
{/*                     return {
                            <div key={product.id}>
                                <Link to={"/products/${product.id}"}>
                                <p>{product.name}</p>
                                </Link>
                            </div>  
                        } */}
            </div>
        </Fragment>
    )
}

export default ProductsList