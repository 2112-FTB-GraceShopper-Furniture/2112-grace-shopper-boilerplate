import React from 'react'
import { Link } from 'react-router-dom'
import '../style/ContactThankYou.css'

const ContactThankYou = () => {
    return (
        <div className='contact__container'>
            <div className='ThankYou__content'>
                <h1>Thank you for reaching out!</h1>
                <h2>We will get back to you shortly</h2>
                <Link to='/'>
                    <button>Back to Home</button>
                </Link>
            </div>
        </div>
    )
}

export default ContactThankYou