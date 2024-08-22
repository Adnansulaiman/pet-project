


import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast,ToastContainer } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      const response = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      const responseData = await response.json();

      if (responseData.success) {
        localStorage.setItem("auth-token", responseData.token);
        toast.success("Successfully logged in");
        
        navigate("/"); // Redirect to home page after successful login
        window.location.href = window.location.href;
      } else {
        toast.error(responseData.errors);
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred during login. Please try again.");
    }
  };

  return (
    <>
    
    <div className="login d-flex justify-content-center align-items-center row">
      
      
      <div className="col-6 login-form d-flex flex-column justify-content-center align-items-center gap-4">
        <div className="login-title">
          <h1 className="text-center">Login</h1>
          <p>Welcome back! Please Login to your account </p>
        </div>
        <form 
        onSubmit={login}
        >
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="emailInput"
              placeholder="name@example.com"
              value={formData.email}
              onChange={changeHandler}
              name="email"
            />
            <label htmlFor="emailInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="passwordInput"
              placeholder="Password"
              value={formData.password}
              onChange={changeHandler}
              name="password"
            />
            <label htmlFor="passwordInput">Password</label>
          </div>
          <p className="forget-password">Forget Password?</p>

          <button type="submit" className="log-btn">
            Login
          </button>
          <p>
            New User?
            <Link to="/signup" className="sign-nav">
              Sign Up
            </Link>
          </p>
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

export default Login;

