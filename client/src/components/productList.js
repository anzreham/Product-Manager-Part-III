import React from 'react'
import axios from 'axios';
import { Router, Link } from '@reach/router';

export default props => {
    const remove = _id => {
        axios.delete(`http://localhost:8000/api/product/delete/${_id}`)
          .then(res => {
            console.log(res);
          
          }).catch(err => console.error(err));
      }
    


    return (
        <div>
            {props.product.map((product, idx)=>{
                // return <p key={idx}>  {product.title}, {product.price}</p>
return <p key={idx}>  {product.title}, {product.price} <Link to={"/product/" + product._id} className="btn btn-outline-primary">View </Link> 
<Link to={"/product/edit/" + product._id}>
Edit
</Link>


<button className="btn btn-outline-danger" onClick={e => remove(product._id)}>Remove</button>
</p>
                
            })}
               
        </div>
    )
}
