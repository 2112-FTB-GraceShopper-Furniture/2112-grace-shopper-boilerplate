import React from "react";
import "../style/Home.scss";
import FeaturedProduct from "./FeaturedProduct";
import { Link } from "react-router-dom";
import ImageSlider from "./Slider";


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
            key={6}
            id="6"
            title="Schaerfler Living-Room Set"
            price={5433}
            image='https://i.imgur.com/NwoxGTp.png'
            reviewstars={5}
          />
          <FeaturedProduct
            key={2}
            id="2"
            title="Konway Classical 2 Seater Sofa"
            price={799}
            image='https://i.imgur.com/ruj2sTH.jpg'
            reviewstars={5}
          />
        </div>
        <div className="home__row">
          <FeaturedProduct
            key={17}
            id="17"
            title="Retro Dining-Room Chair"
            price={49}
            image='https://i.imgur.com/wlRFyd4.jpg'
            reviewstars={5}
          />
          <FeaturedProduct
            key={3}
            id="3"
            title="Celene Coffee Table"
            price={518}
            image='https://i.imgur.com/zZgRePf.jpg'
            reviewstars={5}
          />
          <FeaturedProduct
            key={8}
            id="8"
            title="Smolly Classic Love Sofa"
            price={349}
            image='https://i.imgur.com/s9OvTlm.jpg'
            reviewstars={5}
          />
        </div>

        <div className="home__row">
          <FeaturedProduct
            key={13}
            id="13"
            title="Convallis Dining Set"
            price={1410}
            image='https://i.imgur.com/k9SzT8w.png'
            reviewstars={5}
          />
        </div>
      </div>
      <div className="about__us__container">
        <div className="about__us__left">
          <img src="https://i.imgur.com/ovgWQvY.jpg" alt="Man woodworking" />
        </div>
        <div className="about__us__right">
          <h1>About Us</h1>
          <h4>Quality over quantity</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit scelerisque et conubia suscipit erat eros, pharetra class litora senectus nec phasellus convallis vehicula porta magnis montes odio. Lectus facilisi dignissim duis mauris augue aliquet eu sed fermentum rutrum in metus velit, consequat purus nisl vehicula viverra elementum dis sociis class etiam interdum. Turpis euismod lectus ut a nibh neque libero semper, iaculis placerat lacus duis gravida enim pharetra facilisis, non sem suscipit torquent mi odio leo.
            <br></br>
            <br></br>
            Ligula lectus etiam euismod auctor scelerisque vehicula, habitasse morbi netus pretium est posuere interdum, suspendisse elementum hendrerit tristique porttitor. Tortor molestie semper a inceptos vulputate sociis, imperdiet penatibus litora euismod proin vehicula volutpat, hac etiam nostra duis viverra. Magna parturient ac ut sem felis arcu platea aliquet a, turpis mi faucibus volutpat pharetra sodales dignissim dictum, ridiculus luctus in per himenaeos non nisi vivamus.</p>
          <Link to='/contact'>
            <button className="contact__button">
              Contact Us
            </button>
          </Link>
        </div>

      </div>
      <div className="slider__container">
        <div className="slider__text">
          <h1>See what others have said about us!</h1>
        </div>
        <div className="carousel-content">
          <ImageSlider />
        </div>
      </div>


    </div>
  );
}

export default Home;
