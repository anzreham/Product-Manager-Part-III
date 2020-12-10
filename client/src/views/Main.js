import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductList from '../components/productList';
import ProductForm from '../components/PersonForm';


export default () => {

    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/product')
            .then(res=>{
                setProduct(res.data);
                setLoaded(true);
            });
    },[])
        

    return (
        <div>
            
            <ProductForm/>
            <hr/>
           {loaded && <ProductList product={product}/>}

        </div>
    )
}
