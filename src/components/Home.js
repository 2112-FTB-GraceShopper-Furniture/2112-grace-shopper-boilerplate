import React from "react";
import "../style/Home.css";
import FeaturedProduct from "./FeaturedProduct";
import { Link } from "react-router-dom";


const Hero = "/Assets/Home Hero Image.jpg";

function Home() {
  return (
    <div className="home">
      <div className="home__hero">
        <div className="home__hero__container">
          <h1>Welcome to Coconut Furniture</h1>
          <h2>From house to home a click away</h2>
          <Link to='/shop'>
            <button className="home__hero__container__button">Shop All Funiture</button>
          </Link >
        </div>
      </div>
      <div className="home__container">
        <div className="home__container__heading">
          <h2>See our featured products</h2>
        </div>
        <div className="home__row">
          <FeaturedProduct
            key={1}
            id="1"
            title="Test Name"
            price={599.99}
            image='https://i.imgur.com/NwoxGTp.png'
            rating={5}
          />
          <FeaturedProduct
            key={2}
            id="2"
            title="Modern End Table"
            price={199.95}
            image='https://i.imgur.com/NwoxGTp.png'
            rating={4}
          />
        </div>
        <div className="home__row">
          <FeaturedProduct
            key={3}
            id="3"
            title="Antique Wooden Chair"
            price={99.95}
            image='https://i.imgur.com/NwoxGTp.png'
            rating={4}
          />
          <FeaturedProduct
            key={4}
            id="4"
            title="Stylish End Table Sets"
            price={199.95}
            image='https://i.imgur.com/NwoxGTp.png'
            rating={5}
          />
          <FeaturedProduct
            key={5}
            id="5"
            title="Child Wooden Night Stand"
            price={279.95}
            image='https://i.imgur.com/NwoxGTp.png'
            rating={5}
          />
        </div>

        <div className="home__row">
          <FeaturedProduct
            key={6}
            id="6"
            title="Bobby Living Room Set"
            price={1279.95}
            image='https://i.imgur.com/NwoxGTp.png'
            rating={5}
          />
        </div>
      </div>
      <div>
        <h1>Testing</h1>
      </div>
    </div>
  );
}

export default Home;
