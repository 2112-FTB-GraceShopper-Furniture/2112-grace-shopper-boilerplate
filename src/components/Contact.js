import React from 'react'
import '../style/Contact.css'
import { Link } from 'react-router-dom'

const Contact = () => {
    return (
        <div className='contact__container'>
            <div className='contact__content'>
                <div className='contact__left'>
                    <div className='contact__details'>
                        <i className='fa fa-map-marker'></i>
                        <div className='topic'>Address</div>
                        <div className='text1'>12345 Adams Dr.</div>
                        <div className='text2'>Aubrey Texas, 76227</div>
                    </div>
                    <div className='contact__details'>
                        <i className='fa fa-phone'></i>
                        <div className='topic'>Phone</div>
                        <div className='text1'>909.455.2345</div>
                        <div className='text2'>(international) 991.312.3121</div>
                    </div>
                    <div className='contact__details'>
                        <i className='fa fa-envelope'></i>
                        <div className='topic'>Email</div>
                        <div className='text1'>info@coconutfurniture.com</div>
                        <div className='text2'>(Warranty Claims) fix@coconutfurniture.com</div>
                    </div>
                </div>
                <div className='contact__right'>
                    <div className='contact__text'>Send us a message</div>
                    <p>If you have any questions or concerns, feel free to reach out to us through the form below. Its our pleasure to serve you!</p>

                    <form action='#'>
                        <div className='input-box'><input type='text' placeholder='Enter your name'></input>
                        </div>
                        <div className='input-box'><input type='text' placeholder='Enter your email'></input>
                        </div>
                        <div className='input-box message-box'>
                            <textarea></textarea>
                        </div>
                        <Link to='/recieved'>
                            <div className='input-button'><input type='button' value='Send Now'></input>
                            </div>
                        </Link>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact