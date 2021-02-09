import {React, useState, useEffect} from "react"
import {useParams, useHistory} from "react-router-dom"

function ProductDetail() {

    let params = useParams()
    let history = useHistory()

    const [post, setPost] = useState ({
        id : null,
        name : "",
        category : "",
        price : null,
        description : "",
        image : "",
    })

    useEffect(function() {
        fetch("https://localhost:3001/api/productos/${params.id}")
        .then(response => response.json())
        .then(json => {setPost = json})
    }, [])

    return (
        <div>
            <h1>Detalle de Producto</h1>
            <h2>{post.name}</h2>
            <p>{post.category}</p>
            <p>{post.price}</p>
            <p>{post.description}</p>
            <img src={post.image} alt= "Imagen del producto"></img>
            <button onClick={() => {history.goBack()}}>
                Volver
            </button>
        </div>
    )
}

export default ProductDetail