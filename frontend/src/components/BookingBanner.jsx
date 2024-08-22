import React from 'react'
import { Link } from 'react-router-dom'

const BookingBanner = () => {
  return (
    <>
    <div className="booking-banner">
        <h2>Make Appointment Now</h2>
        <p>Our pet-therapy animals are amazingly gentle and intuitive when working with adults and children with any type of disability.</p>
        <Link to='/book-now' className='text-decoration-none text-white'><button className='booking-btn'>Book Now</button></Link>
    </div>
    </>
  )
}

export default BookingBanner