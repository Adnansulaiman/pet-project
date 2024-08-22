import React from "react";
import SliderImg1 from "../../public/images/slider-img1.jpg";
import SliderImg2 from "../../public/images/slider-img2.jpg";
import SliderImg3 from "../../public/images/slider-img3.jpg";
const HomeSlider = () => {
  return (
    <>
      <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src={SliderImg1} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h3>Supporting Paws is a nonprofit organization committed to improving the lives of people in our community by lovingly providing individualized, therapeutic visits with our specially trained volunteers and their certified gentle, affectionate pets.

</h3>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={SliderImg2} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h3>Many DeStress programs are offered through Community Events at PAWS; however, as the demand for these types of interactions increase, some sites have partnered with PAWS to provide regular DeStress sessions to their populations.

</h3>
      </div>
    </div>
    <div className="carousel-item">
      <img src={SliderImg3} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h3>PAWS teams visit elders who have moved into assisted living facilities, many of whom have had to leave their pets behind and are thrilled to see a furry face.

</h3>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
  );
};

export default HomeSlider;
