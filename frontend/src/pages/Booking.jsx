import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Booking = () => {
  const [bookingDetails, setBookingDetails] = useState({
    name: "",
    email: "",
    phone: "",
    time: "",
    date: "",
    animal: "",
    message: "",
  });

  const changeHandler = (e) => {
    setBookingDetails({ ...bookingDetails, [e.target.name]: e.target.value });
  };

  const addBooking = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    console.log(bookingDetails);

    await fetch("http://localhost:4000/booking-details", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Authorization": token
      },
      body: JSON.stringify(bookingDetails), // Corrected from training to bookingDetails
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.success) {
          toast.success("Booking successfully!");
        } else {
          toast.error("Failed to book.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred. Please try again.");
      });
  };

  return (
    <>
   
    <div className="booking-wrapper">
      <Link to='/book-status' className="btn btn-outline-light">Booking Status</Link>
      <div className="booking-section">
        <div className="booking-title mt-5 d-flex flex-column align-items-center justify-content-center">
          <h2 className="fs-1 fw-bold text-white">Make Appointment</h2>
          <p className="fs-5 text-white">
            Our pet-therapy animals are amazingly gentle and intuitive when working with adults and children with any type of disability.
          </p>
        </div>
        <form onSubmit={addBooking}>
          <div className="booking-form d-flex flex-column justify-content-center align-items-center">
            <div className="row gap-4 mt-4">
              <input
                type="text"
                placeholder="Name"
                className="form-control"
                name="name"
                value={bookingDetails.name}
                onChange={changeHandler}
              />
              <input
                type="email"
                placeholder="Email"
                className="form-control"
                name="email"
                value={bookingDetails.email}
                onChange={changeHandler}
              />
            </div>
            <div className="row gap-4 mt-4">
              <input
                type="number"
                placeholder="Phone Number"
                className="form-control"
                name="phone"
                value={bookingDetails.phone}
                onChange={changeHandler}
              />
              <input
                type="date"
                placeholder="Select Date"
                className="form-control"
                name="date"
                value={bookingDetails.date}
                onChange={changeHandler}
              />
            </div>
            <div className="row gap-4 mt-4">
              <select
                className="form-select"
                aria-label="Default select example"
                name="animal"
                value={bookingDetails.animal}
                onChange={changeHandler}
              >
                <option value="">Select Animal</option>
                <option value="Dog">Dog</option>
                <option value="Cat">Cat</option>
                <option value="Rabbit">Rabbit</option>
              </select>
              <input
                type="time"
                placeholder="Select Time"
                className="form-control"
                name="time"
                value={bookingDetails.time}
                onChange={changeHandler}
              />
            </div>
            <textarea
              cols={98}
              rows={3}
              placeholder="Write Any Message If You Want"
              className="form-control mt-4"
              name="message"
              value={bookingDetails.message}
              onChange={changeHandler}
            />
            <button type="submit" className="btn btn-outline-light mt-4">
              Book Now
            </button>
          </div>
        </form>
      </div>

    </div>
    <ToastContainer
            position="top-right"
            autoClose={2500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            
            />
    </>
  );
};

export default Booking;
