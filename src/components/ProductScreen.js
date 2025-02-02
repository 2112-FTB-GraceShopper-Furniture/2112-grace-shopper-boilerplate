import React, { useEffect, useState } from "react";
import { getProductById } from "../axios-services/productScreen";
import { useParams, useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createProductCart, addNewCart, getMyCartProductbyUserId, patchCart } from "../axios-services/cart";
import '../style/ProductScreen.css'




const ProductScreen = (props) => {
    let history = useHistory();

    const { id } = useParams();
    const [singleProduct, setSingleProduct] = useState({})
    const [qty, setQty] = useState(1);
    const [myCart, setMyCart] = useState([]);
    const { quantityInCart, setQuantityInCart } = props;

    const userId = localStorage.getItem('userId');
    const cartProductArray = JSON.parse(localStorage.getItem('cartProductArray'));
    const cart = JSON.parse(localStorage.getItem('cart'))


    useEffect(() => {
        (async () => {
            const singleProduct = await getProductById(id);

            setSingleProduct(singleProduct);
        })();
    }, []);

    const handleAddToCart = async (event) => {
        event.preventDefault();
        let userId = localStorage.getItem('userId')
        let productInActiveCart = [];
        let cartArray = [];
        let addProdToCart;
        let foundProduct;
        try {





            if (userId) {
                let myDBCartProducts = await getMyCartProductbyUserId(userId);

                foundProduct = myDBCartProducts.find(({ productId }) => productId === singleProduct.id)

                if (foundProduct) {
                    foundProduct.quantity = foundProduct.quantity + qty;
                    myDBCartProducts = await patchCart(foundProduct.id, foundProduct.price, foundProduct.quantity)

                    setMyCart(myDBCartProducts);
                } else {
                    foundProduct = await createProductCart(userId, singleProduct.id, singleProduct.price, qty)

                    setMyCart(myDBCartProducts);
                }
            } else {
                let activeCart = localStorage.getItem('ActiveCart')
                if (activeCart) {
                    productInActiveCart = JSON.parse(localStorage.getItem('ActiveCart'));
                    foundProduct = productInActiveCart.find(({ productId }) => productId === singleProduct.id)
                    if (foundProduct) {
                        foundProduct.quantity = Number(foundProduct.quantity) + Number(qty);
                        console.log("qty", typeof (qty));
                        console.log("foundProduct.quantity", typeof (foundProduct.quantity));
                        cartArray = foundProduct
                        // setMyCart(cartArray);
                        localStorage.setItem('ActiveCart', JSON.stringify(productInActiveCart))
                    } else {
                        foundProduct = await createProductCart(userId, singleProduct.id, singleProduct.price, qty)
                        productInActiveCart.push(...foundProduct);
                        localStorage.setItem('ActiveCart', JSON.stringify(productInActiveCart))
                    }
                } else {
                    foundProduct = await createProductCart(userId, singleProduct.id, singleProduct.price, qty)
                    localStorage.setItem('ActiveCart', JSON.stringify(foundProduct))
                }

            }
        } catch (error) {
            console.log(error);
        }
        finally {
            setMyCart(foundProduct);
            setQuantityInCart(quantityInCart + qty);
            history.push('/cart');
        }



    }



    return (
        <div>
            <Card className="product__container" >
                <div className="left__side__product">
                    <CardMedia
                        component="img"
                        image={singleProduct.image}
                        alt={singleProduct.name}

                    />
                </div>
                <div className="right__side__product">
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            <h2>{singleProduct.name}</h2>
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <h3> Description : {singleProduct.description}</h3>
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <strong> Price : ${singleProduct.price} </strong>
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <h4> Availability : {singleProduct.stock > 0 ? 'In Stock' : 'Out Of Stock'} </h4>
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <label>
                                <strong>Quantity</strong>
                            </label>

                            <select
                                value={qty}
                                onChange={(event) => setQty(event.target.value)}>
                                {[...Array(singleProduct.stock).keys()].map((x) => (
                                    <option key={x} value={(x)}>
                                        {x}
                                        {console.log(typeof (x))}
                                    </option>
                                ))}
                            </select>


                        </Typography>
                    </CardContent>

                    <CardActions className="test__class">
                        <Typography variant="body2" color="text.secondary">
                            {singleProduct.stock > 0 ? <button className="product__button" onClick={(event) => {
                                handleAddToCart(event)
                            }}>Add to Cart</button> : <div><button className="product__button" disabled = {true}>Add to Cart</button><p> Product is out of stock </p></div>}
                        </Typography>

                        <Typography variant="body2" color="text.secondary">
                            <Link to="/Shop"> Go Back to Home Page </Link>
                        </Typography>
                    </CardActions>
                </div>

            </Card>
        </div>

    )
}

export default ProductScreen;