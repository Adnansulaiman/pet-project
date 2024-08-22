import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeSlider from '../components/HomeSlider';
import BookingBanner from '../components/BookingBanner';
import Service from './Service';
import Blog from './Blog';

const Home = () => {
  return (
    <>
      <HomeSlider/>
      <BookingBanner/>
      <Service/>
      
      <Blog/>
    </>
  )
}

export default Home;
