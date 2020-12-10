import React, { useEffect, useState } from 'react'
import axios from 'axios';
export default (props ) => {
    //keep track of what is being typed via useState hook
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState("");
    const [desc, setDesc] = useState("");
    const { id } = props;
 
   

    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + id)
            .then(res => {
                
            
                 setTitle(res.data.title);
                setPrice(res.data.price);
                 setDesc(res.data.desc);   
                
             } )
    }, [])

     const onSubmitUpdate = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.put('http://localhost:8000/api/product/'+ id, {
            title,
            price,
            desc
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }

    return (
        <form  onSubmit={onSubmitUpdate}>
            <p>
                <label>Title</label><br/>
                <input type="text" onChange = {(e)=>setTitle(e.target.value)}  value = {title} />
            </p>
            <p>
                <label>Price</label><br/>
                <input type="text" onChange = {(e)=>setPrice(e.target.value)} value = {price} />
            </p>


            <p>
                <label>Description</label><br/>
                <input type="text" onChange = {(e)=>setDesc(e.target.value)} value = {desc}/>
            </p>
            <input type="submit"/>
        </form>
      
    )
}
