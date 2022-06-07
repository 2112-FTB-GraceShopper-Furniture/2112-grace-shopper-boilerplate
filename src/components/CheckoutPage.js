import React from 'react';
import { Link } from 'react-router-dom';
import '../style/ThankYou.css'

const CheckoutPage = () => {
	return (
		<div className='thankyou__hero'>
			<h1 className='thankyou__header'>Order Submitted successfully!!</h1>
			<h3 className='thankyou__subheader'>Your order will ship shortly</h3>
			<Link to='/'> Go Back to Home Page </Link>
		</div>
	);
};

export default CheckoutPage;
