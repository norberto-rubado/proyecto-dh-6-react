import {React, Fragment, useState, useEffect} from "react"

import ProductItem from "../components/ProductItem"

/* Se saca este codigo para hacer el Item Stateless (componente ProductItem)  */
/* import {Link} from "react-router-dom" */


function ProductsList() {

    let products= ([])

    let [productsList, setProductsList] = useState([])

    useEffect(function () {
        fetch("http://localhost:3001/api/productos")
        .then(response => response.json())
        .then(json => {products = json})
        .catch(error => console.log("1",error))
    } , [])

    console.log(products)
    setProductsList = products.products
    console.log(productsList)

    return (
        <Fragment>
            <h1>Listado de Productos</h1>
            <div>
                {
                    productsList.map(product => <ProductItem product={product} /> )  
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