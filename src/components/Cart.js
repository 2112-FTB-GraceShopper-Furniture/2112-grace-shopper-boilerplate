import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { addNewCart, deleteCart, patchCart, getMyCartProductbyUserId, createProductCart } from '../axios-services/cart';
import { getProductById } from '../axios-services/productScreen';
import "../style/Cart.css";
import { getAllOrders } from '../axios-services/orders';



const Cart = (props) => {
  let history = useHistory();
  const { quantityInCart } = props;
  const [productsInCart, setProductsInCart] = useState([]);
  const [qty, setQty] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [editOpen, setEditOpen] = useState(false);
  const [singleProduct, setSingleProduct] = useState([]);


  const userId = localStorage.getItem('userId');
  const activeCart = JSON.parse(localStorage.getItem('ActiveCart'));

  useEffect(() => {
    (async () => {
      let myDBCartProducts;
      if (userId) {
        myDBCartProducts = await getMyCartProductbyUserId(userId);
        setProductsInCart(myDBCartProducts);
      } else {
        if (activeCart) {
          const newCart = [];
          for (var item of activeCart) {
            const newItem = { ...item };

            let product = await getProductById(item.productId);
            console.log(product);
            newItem.image = product.image;
            newItem.name = product.name;
            newItem.description = product.description;

            newCart.push(newItem);
          }

          console.log(newCart);
          localStorage.setItem("ActiveCartWProducts", JSON.stringify(newCart));
          setProductsInCart(newCart)
        }

      }
    })();
  }, []);

  const activeCartWProducts = JSON.parse(localStorage.getItem('ActiveCart'));

  const handleDeleteCart = async (cartId) => {
    if (userId) {
      const deletedCart = await deleteCart(cartId);
      const myCartList = await getMyCartProductbyUserId(userId);
      setProductsInCart(myCartList)
    } else {
      if (activeCartWProducts) {
        let foundProduct = activeCartWProducts.find(({ productId }) => productId === productId);
        console.log(activeCartWProducts);
        console.log(foundProduct);
        let foundProductIndex = activeCartWProducts.indexof(foundProduct);
        console.log(foundProductIndex);
        activeCartWProducts.splice(foundProductIndex, 1);

        localStorage.setItem("ActiveCartWProducts", JSON.stringify(activeCartWProducts));
        //   localStorage.setItem("ActiveCart", JSON.stringify(activeCart));
      }
    }

  }

  const handleEditCart = async (productId, event) => {
    event.preventDefault();
    try {
      let myDBCartProducts = await getMyCartProductbyUserId(userId);
      if (myDBCartProducts) {
        let foundProduct = myDBCartProducts.find(({ productId }) => productId === productId)
        myDBCartProducts = await patchCart(foundProduct.id, foundProduct.price, qty)
        const myCartList = await getMyCartProductbyUserId(userId);
        setProductsInCart(myCartList)
      } else {
        if (activeCartWProducts) {
          let foundProduct = activeCartWProducts.find(({ productId }) => productId === productId)
          foundProduct.quantity = qty;
          localStorage.setItem("ActiveCartWProducts", JSON.stringify(activeCartWProducts));
          setProductsInCart(activeCartWProducts)
          let activeCartQtyEdit = activeCart.find(({ id }) => id === id)
          activeCartQtyEdit.quantity = qty;
          localStorage.setItem("ActiveCart", JSON.stringify(activeCart));
        }
      }

    }
    catch (error) {
      console.log(error)
    }
  }

  const handleOrder = async () => {
    console.log("We are in order page");
    history.push('/order');
  }
  const handleShop = async () => {
    console.log("We are redirected to Shop Page");
    history.push('/Shop');
  }
  let sumPrice = 0;
  useEffect(() => {
    (async () => {
      sumPrice = 0;
      try {
        if (userId) {
          let myDBCartProducts = await getMyCartProductbyUserId(userId);
          if (myDBCartProducts) {
            myDBCartProducts.map(item => {
              sumPrice += Number(item.price) * Number(item.quantity);
            })

          }
          setTotalPrice(sumPrice);
        } else {
          let activeCartProducts = localStorage.getItem("ActiveCartWProducts");
          console.log("activeCartProducts", activeCartProducts);
          if (activeCartProducts) {
            activeCart.map(item => {
              sumPrice += Number(item.price) * Number(item.quantity);

            })
            console.log("sumPrice", sumPrice);
            setTotalPrice(sumPrice);
          }
        }

      }
      catch (error) {
        console.log(error)
      }
    })();
  }, [sumPrice]);
  console.log(productsInCart)
  return (
    <div>
      <div className='cart__heading'>
        <h2> Here all the items in your cart: </h2>
      </div>
      <div className='cart__container'>

        <div className="cart">
          {!productsInCart ?
            <div> Nothing to show, yet! Add a products to your cart! </div> :
            <div>
              <div className='total__container'>
                <div><span className='titles'>total products:</span> {quantityInCart}</div>
                <div><span className='titles'>total price:</span> ${totalPrice}</div>
              </div>
              {productsInCart.map(product => {
                console.log("PRODUCT: ", { ...product })
                return (<>
                  <div key={product.productId}>
                    <div className="singleProductCart">
                      <div cart__left>
                        <img className='product__image' src={product.image} />
                      </div>
                      <div className='cart__right'>
                        <p><span className='titles'>product name:</span> {product.name}</p>
                        <p><span className='titles'>product description:</span> {product.description}</p>
                        <p><span className='titles'>product id:</span> {product.productId}</p>
                        <p><span className='titles'>product quantity:</span> {product.quantity}</p>
                        <p><span className='titles'>product price($):</span> {product.price}</p>
                        <p><span className='titles'>total($):</span> {product.price * product.quantity}</p>
                        {<button className='list__button' key={product.id} onClick={(event) => { setEditOpen({ open: !editOpen, id: product.id }) }} editOpen={editOpen}> Edit Product</button>}
                        {editOpen.open && editOpen.id === product.id ?
                          <> New Product quantity:
                            <input className='input__field' value={qty} onChange={(event) => setQty(event.target.value)} />
                            <button className='list__button' onClick={(event) => { handleEditCart(product.id, event) }}>Submit Edited cart</button>
                          </> : null}
                        {product.userId ? <button className='list__button' onClick={(id, event) => { handleDeleteCart(product.id, event) }}>Delete</button> : null}</div>
                    </div>

                  </div>

                </>)
              }
              )}
            </div>}
        </div>
      </div>
      <div className='end__section'>
        <div>
          <button className='list__button' onClick={(event) => { handleShop(event) }}>
            Go back to shopping
          </button>
        </div>
        <div> {(productsInCart.length !== 0) &&
          <button className='list__button' onClick={(event) => { handleOrder(event) }}>
            Checkout
          </button>}
        </div>

      </div>
    </div>)

}


export default Cart;
