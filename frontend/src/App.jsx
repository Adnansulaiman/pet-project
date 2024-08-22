import {BrowserRouter,Route,Routes } from 'react-router-dom'

import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import Service from './pages/Service'
import About from './pages/About'
import Blog from './pages/Blog'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Booking from './pages/Booking'
import BookingStatus from './pages/BookingStatus'

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/service' element={<Service/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/book-now' element={<Booking/>} />
        <Route path='/book-status' element={<BookingStatus/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
