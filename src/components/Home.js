import React from "react";
import "../style/Home.css";
import FeaturedProduct from "./FeaturedProduct";


const Hero = "/Assets/Home Hero Image.jpg";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src={Hero}
          alt="Beautiful modern patio furniture with some green shrubbery on the foreground"
        />

        <div className="home__row">
          <FeaturedProduct
            id="1"
            title="Test Name"
            price={599.99}
            image='https://i.imgur.com/NwoxGTp.png'
            rating={5}
          />
          <FeaturedProduct
            id="2"
            title="Modern End Table"
            price={199.95}
            image='https://i.imgur.com/NwoxGTp.png'
            rating={4}
          />
        </div>
        <div className="home__row">
          <FeaturedProduct
            id="3"
            title="Antique Wooden Chair"
            price={99.95}
            image='https://i.imgur.com/NwoxGTp.png'
            rating={4}
          />
          <FeaturedProduct
            id="4"
            title="Stylish End Table Sets"
            price={199.95}
            image='https://i.imgur.com/NwoxGTp.png'
            rating={5}
          />
          <FeaturedProduct
            id="5"
            title="Child Wooden Night Stand"
            price={279.95}
            image='https://i.imgur.com/NwoxGTp.png'
            rating={5}
          />
        </div>

        <div className="home__row">
          <FeaturedProduct
            id="6"
            title="Bobby Living Room Set"
            price={1279.95}
            image='https://i.imgur.com/NwoxGTp.png'
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
