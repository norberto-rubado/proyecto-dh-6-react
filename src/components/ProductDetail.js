import {React, useState, useEffect} from "react"
import {useParams, useHistory} from "react-router-dom"

function ProductDetail() {

    console.log("por aca")
    let params = useParams()
    let history = useHistory()

    let [post, setPost] = useState ({
        id : null,
        name : "",
        category : "",
        price : null,
        description : "",
        image : "",
    })
    console.log(params)

    useEffect(function() {
        fetch("http://localhost:3001/api/productos/${params.id}")
        .then(response => response.json())
        .then(json => {setPost = json})
        .catch(error => console.log("1",error))
    }, [])

    console.log(post)
    return (
        <div>
            <h1>Detalle de Producto</h1>
            <h2>{post.name}</h2>
            <p>{post.category}</p>
            <p>{post.price}</p>
            <p>{post.description}</p>
{/*             <img src={post.image} alt= "Imagen del producto"></img> */}
            <button onClick={() => {history.goBack()}}>
                Volver
            </button>
        </div>
    )
}

export default ProductDetail