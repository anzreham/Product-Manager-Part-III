import React from 'react'
import axios from 'axios';
import { Router, Link } from '@reach/router';

export default props => {
    return (
        <div>
            {props.product.map((product, idx)=>{
                // return <p key={idx}>  {product.title}, {product.price}</p>
                return <p key={idx}>  {product.title}, {product.price} <Link to={"/product/" + product._id} className="btn btn-outline-primary">View </Link>  </p>
                
            })}
               
        </div>
    )
}
