import React, { useEffect, useState } from "react";
import { getProductById } from "../axios-services/productScreen";
import {useParams, useHistory} from 'react-router-dom';
import { Link } from "react-router-dom";
import {addNewCart, createProductCart} from "../axios-services/cart"


const ProductScreen = () => {
  
const { id } = useParams();
const [singleProduct, setSingleProduct] = useState({})
const [qty, setQty] = useState([]);

useEffect(() => {
    (async () => {
        const singleProduct = await getProductById(id);
        console.log("singleproduct",singleProduct);
        setSingleProduct(singleProduct);
    })();
  }, []);

  const handleAddToCart = async (event) => {
    event.preventDefault();
    let cart = localStorage.getItem('cart')
    let cartId;
    if(!cart){
        const newCart = await addNewCart();
        console.log("newCart", newCart)
        cartId = newCart.id;
    } else {
        cartId = cart.id
    }
         try{
            
            const addedItem = await createProductCart(cartId, singleProduct.id, qty, singleProduct.price)
        }
         catch(error){
           console.log(error)
         }
     }


  return (
    <div className="product">
        
        <img src = {singleProduct.image} alt={singleProduct.name}></img>
        <h1>Name : {singleProduct.name}</h1>
        <p>Description : {singleProduct.description}</p>
        <strong> Price : {singleProduct.price}</strong>
        <p> {singleProduct.stock > 0 ? 'In Stock' : 'Out Of Stock'}</p>
        
        <label>
            Quantity 
        </label>

        <select 
            value={ qty } 
            onChange={(event) => setQty(event.target.value)}>
            {[...Array(singleProduct.stock).keys()].map((x) => (
                <option key = {x+1} value={x+1}>
                    {x+1}
                </option>
            ))}
        </select>

        {/* <button>Add to Cart</button> */}
        <button onClick={(event) => { handleAddToCart(event) }}>Add to Cart</button>
 
        <Link to = "/Shop"> Go Back to Home Page </Link>
        
      
    </div>
  );
};

export default ProductScreen;
