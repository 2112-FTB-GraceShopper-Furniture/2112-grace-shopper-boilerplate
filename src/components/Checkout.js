import React from 'react'
import "../style/Checkout.css"
import Cbanner from '../Assets/Cart Banner.jpg'
import Subtotal from './Subtotal'
import CurrencyFormat from 'react-currency-format'

const Checkout = () => {
  return (
    <div className='checkout'>
        <div className='checkout_left'>
            <img className='checkout__banner'
            src={Cbanner}
            alt='luxurious, well furnished room with a green forest theme'
            />
            <div>
                <h2 className='checkout__title'>Your shopping basket</h2>
            </div>
        </div>
        <div className='checkout__right'>
            <Subtotal />
        </div>
    </div>
  )
}

export default Checkout