import React from "react";
import { Link } from "react-router-dom";
import "../style/ThankYou.css";

const CheckoutPage = () => {
	return (
		<div className="thankyou__hero">
			<div className="thankyou__hero__container">
				<h1>Order Submitted successfully!!</h1>
				<h2>Your order will ship shortly</h2>
				<Link to="/">
					<button className="thankyou__button">Go Back to Home Page </button>
				</Link>
			</div>
		</div>
	);
};

export default CheckoutPage;
