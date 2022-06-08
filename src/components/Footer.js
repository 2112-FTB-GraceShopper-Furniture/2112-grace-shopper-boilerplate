import React from "react";
import "../style/Footer.css";

const Logo = "/Assets/Coconut Furniture Logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__first">
          <img className="footer_logo" src={Logo} alt="Coconut Logo" />
          <h1>Furniture</h1>
        </div>
        <div className="footer__second">
          <h3>Contact Us</h3>
          <p>Phone: (909) 455-2345</p>
          <email>info@coconutfurniture.com</email>
        </div>
        <div className="footer__third">
          <ul><h3>Quick Links</h3></ul>
          <li>Home</li>
          <li>Shop</li>
          <li>Contact Us</li>
        </div>
      </div>
    </div>
  );
};

export default Footer;
