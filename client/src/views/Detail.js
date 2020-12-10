import React, { useEffect, useState } from 'react'
import axios from 'axios';
export default props => {
    const [product, setProduct] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + props.id)
            .then(res => setProduct(res.data))
    }, [])
    return (
        <div>
            <h1>title: {product.title}</h1>
            <p>price: {product.price}</p>
            <p> description: {product.desc}</p>
        </div>
    )
}
