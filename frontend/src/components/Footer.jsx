import React from 'react'

import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-dark">
        <div className="container">
          <div className="row d-flex justify-content-between pt-5 ">
            <div className="col-3">
              <div className="poster-footer">
                <img
                  className="img-fluid"
                  src="https://static.toiimg.com/thumb/imgsize-23456,msid-100814829,width-600,resizemode-4/100814829.jpg"
                  alt="#"
                />
                <p className="w-100 text-white">
                  Animal-assisted therapy has been practised for about 20 years
                  in the country,but grew in the last 5 years...
                </p>
              </div>
            </div>
            <div className="col-3">
              <div className="menu-footer ">
                <h5 className="text-white">Menu</h5>
                <li>About</li>
                <li>Service</li>
                <li>Blog</li>
                <li>Contact us</li>
              </div>
            </div>
            <div className="col-3">
              <div className="newsletter-footer">
                <h5 className="text-white">Newsletter</h5>
                <input
                  type="email"
                  placeholder="Email"
                  className="form-control"
                />
                <button className="btn btn-outline-warning my-3">
                  SUBSCRIBE
                </button>
                
              </div>
            </div>
          </div>

        </div>
      </footer>
      <footer>
         <div className="copyright d-flex  justify-content-center align-items-center flex-column">
            <h3 className='text-warning mt-5'>Follow Us</h3>
            <ul className='d-flex gap-3 '>
               <li><FaFacebook className='fs-3'/></li>
               <li><FaSquareInstagram className='fs-3' /></li>
               <li><FaLinkedin className='fs-3'/></li>
               <li><FaSquareXTwitter className='fs-3'/></li>
            </ul>
            <p className='fs-6 mb-5'>© 2023 All Rights Reserved.</p>
         </div>
      </footer>
    </>
  );
}

export default Footer