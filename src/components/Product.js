import React, { useState } from "react";
import "../style/Product.css";
import { Link } from "react-router-dom";

const isUserLoggedIn = true; // change this later

function Product({ id, title, image, price, rating, alt }) {
  const [activeCart, setActiveCart] = useState([]);

  const handleAddProduct = (product) => {
    //check if product is already in cart and update quantity
    const ProductExist = activeCart.find((item) => item.id === product.id);
    //if product is in cart, update quantity  else add product to cart
    if (ProductExist) {
      if (isUserLoggedIn) {
        //increase quantity in database
      } else {
        // increase quantity in localstorage
      }
    } else {
      if (isUserLoggedIn) {
        // add to cart in database
      } else {
        // add to cart in localstorage
      }
    }

    //   setActiveCart(
    //     activeCart.map((item) =>
    //       item.id === product.id
    //         ? { ...item, quantity: item.quantity + 1 }
    //         : item
    //     )
    //   );
    // } else {
    //   setActiveCart([...activeCart, { ...product, quantity: 1 }]);
    // }
  };

  return (
    <div className="product" key={id}>
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>

      <Link to={`/products/${id}`}>
        <img src={image} alt={alt} />
      </Link>

      <button onClick={() => handleAddProduct(id)}>Add to Cart</button>
    </div>
  );
}

export default Product;
