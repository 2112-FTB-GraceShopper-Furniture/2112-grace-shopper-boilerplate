import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'

function ImageSlider() {
    let settings = {
        dots: true,
        Infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: 'linear'
    }
    return (
        <Slider {...settings}>
            <div className='card-wrapper'>
                <div className='card'>
                    <div className='card-image'>
                        <img src="https://i.imgur.com/9G3FoZ7.jpg" />
                    </div>
                    <ul className='social-icons'>
                        <li>
                            <a href='#'>
                                <i className='fa fa-facebook'></i>
                            </a>

                        </li>
                        <li>
                            <a href='#'>
                                <i className='fa fa-instagram'></i>
                            </a>

                        </li>
                        <li>
                            <a href='#'>
                                <i className='fa fa-twitter'></i>
                            </a>

                        </li>
                        <li>
                            <a href='#'>
                                <i className='fa fa-youtube'></i>
                            </a>

                        </li>
                    </ul>
                    <div className='details'>
                        <h2>Jack and Tammy Jacobs <span className='location'>Best furniture we've ever purchased! Dallas, Texas</span></h2>
                    </div>
                </div>
            </div>
            <div className='card-wrapper'>
                <div className='card'>
                    <div className='card-image'>
                        <img src="https://i.imgur.com/UKAq2qX.jpg" />
                    </div>
                    <ul className='social-icons'>
                        <li>
                            <a href='#'>
                                <i className='fa fa-facebook'></i>
                            </a>

                        </li>
                        <li>
                            <a href='#'>
                                <i className='fa fa-instagram'></i>
                            </a>

                        </li>
                        <li>
                            <a href='#'>
                                <i className='fa fa-twitter'></i>
                            </a>

                        </li>
                        <li>
                            <a href='#'>
                                <i className='fa fa-youtube'></i>
                            </a>

                        </li>
                    </ul>
                    <div className='details'>
                        <h2>The Gonzalez Family <span className='location'>Amazing service! I'll never go to IKEA. Tuscon, Arizona</span></h2>
                    </div>
                </div>
            </div>
            <div className='card-wrapper'>
                <div className='card'>
                    <div className='card-image'>
                        <img src="https://i.imgur.com/HcDOzNK.jpg" />
                    </div>
                    <ul className='social-icons'>
                        <li>
                            <a href='#'>
                                <i className='fa fa-facebook'></i>
                            </a>

                        </li>
                        <li>
                            <a href='#'>
                                <i className='fa fa-instagram'></i>
                            </a>

                        </li>
                        <li>
                            <a href='#'>
                                <i className='fa fa-twitter'></i>
                            </a>

                        </li>
                        <li>
                            <a href='#'>
                                <i className='fa fa-youtube'></i>
                            </a>

                        </li>
                    </ul>
                    <div className='details'>
                        <h2>Johanson Family <span className='location'>How can it be so affordable!<br></br> Quohog, Rhode Island</span></h2>
                    </div>
                </div>
            </div>
            <div className='card-wrapper'>
                <div className='card'>
                    <div className='card-image'>
                        <img src="https://i.imgur.com/ERfihLb.jpg" />
                    </div>
                    <ul className='social-icons'>
                        <li>
                            <a href='#'>
                                <i className='fa fa-facebook'></i>
                            </a>

                        </li>
                        <li>
                            <a href='#'>
                                <i className='fa fa-instagram'></i>
                            </a>

                        </li>
                        <li>
                            <a href='#'>
                                <i className='fa fa-twitter'></i>
                            </a>

                        </li>
                        <li>
                            <a href='#'>
                                <i className='fa fa-youtube'></i>
                            </a>

                        </li>
                    </ul>
                    <div className='details'>
                        <h2>The Jefferson Family <span className='location'>You really get your money's worth! Raleigh, North Carolina</span></h2>
                    </div>
                </div>
            </div>
            <div className='card-wrapper'>
                <div className='card'>
                    <div className='card-image'>
                        <img src="https://i.imgur.com/uVFtTBR.jpg" />
                    </div>
                    <ul className='social-icons'>
                        <li>
                            <a href='#'>
                                <i className='fa fa-facebook'></i>
                            </a>

                        </li>
                        <li>
                            <a href='#'>
                                <i className='fa fa-instagram'></i>
                            </a>

                        </li>
                        <li>
                            <a href='#'>
                                <i className='fa fa-twitter'></i>
                            </a>

                        </li>
                        <li>
                            <a href='#'>
                                <i className='fa fa-youtube'></i>
                            </a>

                        </li>
                    </ul>
                    <div className='details'>
                        <h2>The Jacobs <span className='location'>Best nights sleep ever!<br></br> Chicaco, Illinois</span></h2>
                    </div>
                </div>
            </div>
            <div className='card-wrapper'>
                <div className='card'>
                    <div className='card-image'>
                        <img src="https://i.imgur.com/KdEhyGc.jpg" />
                    </div>
                    <ul className='social-icons'>
                        <li>
                            <a href='#'>
                                <i className='fa fa-facebook'></i>
                            </a>

                        </li>
                        <li>
                            <a href='#'>
                                <i className='fa fa-instagram'></i>
                            </a>

                        </li>
                        <li>
                            <a href='#'>
                                <i className='fa fa-twitter'></i>
                            </a>

                        </li>
                        <li>
                            <a href='#'>
                                <i className='fa fa-youtube'></i>
                            </a>

                        </li>
                    </ul>
                    <div className='details'>
                        <h2>Tod Philip <span className='location'>This will run IKEA out of business!<br></br> Riverside, California</span></h2>
                    </div>
                </div>
            </div>
        </Slider>
    )
}

export default ImageSlider