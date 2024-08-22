import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
    
        <div className="row ">
            <nav className='d-flex justify-content-between align-items-center navbar-section'>
                <div className="logo d-flex align-items-center justify-content-center gap-1">
                    <img src="../public/images/pet-logo.png" alt="" />
                    <p>SUPPORTING PAWS</p>
                </div>
                <div className="menus ">
                  <ul className=''>
                    <li><Link to='/' className='text-decoration-none text-dark'>Home</Link></li>
                    <li><Link to='/about' className='text-decoration-none text-dark'>About</Link></li>
                    <li><Link to='/service' className='text-decoration-none text-dark'>Service</Link></li>
                    <li><Link to='/blog' className='text-decoration-none text-dark'>Blog</Link></li>
                    
                    <li className=''>
                      {localStorage.getItem('auth-token') ? 
                      <Link to='/book-now' className='book-btn text-decoration-none'>Book Now</Link>
                    :
                    <Link to='/login' className='book-btn text-decoration-none'>Book Now</Link>}
                      </li>
                    <li><div className="">
                {localStorage.getItem('auth-token')
                ?
                <button className='nav-btn' onClick={()=>{
                  localStorage.removeItem('auth-token');
                  navigate('/',{replace:true})
                  window.location.href = window.location.href;
                 

                }
                  }>Logout</button>
                  :
                  <Link to='/login' className='text-decoration-none nav-btn'>Login</Link>                  }
                 
              </div></li>
                    
                  </ul>
                </div>
                
            </nav>
        </div>
    
    </>
  )
}

export default Navbar