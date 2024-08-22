import React from 'react'

const About = () => {
  return (
    <>
    <div class="about">
         <div class="container_width">
            <div class="row d_flex grig">
               <div class="col-md-6">
                  <div class="about_img">
                     <figure><img src="https://cdn.pixabay.com/photo/2013/08/25/08/02/dog-and-man-175549_640.jpg" alt="#"/>
                     </figure>
                  </div>
               </div>
               <div class="col-md-6 order">
                  <div class="titlepage d-flex flex-column  text_align_left">
                     <h2 className='text-dark'>About Our Center</h2>
                     <p className='text-dark'>Many DeStress programs are offered through Community Events at PAWS; however, as the demand for these types of interactions increase, some sites have partnered with PAWS to provide regular DeStress sessions to their populations.</p>
                     
                  </div>
               </div>
            </div>
         </div>
      </div>
    </>
  )
}

export default About