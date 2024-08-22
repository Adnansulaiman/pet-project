import React from 'react'

const Blog = () => {
  return (
    <>
    <div class="blog">
         <div class="container">
            <div class="row">
               <div class="col-md-12 mt-5">
                  <div class="titlepage mt-5 d-flex flex-column justify-content-center align-items-center text_align_center ">
                     <h2 className='fs-1 text-dark fw-bold '>Our Latest Events</h2>
                     <p className='fs-5 text-dark '>PAWS events are our system of beliefs designed specifically to create value to our customers and volunteers.</p>
                  </div>
               </div>
            </div>
            <div class="row">
               <div class="col-md-10 offset-md-1">
                  <div class="row">
                     <div class="col-md-6">
                        <div class="our_priceing text_align_center">
                           <div class="our_pri">
                              <h3 className='text-center'>Visiting Relief Centres</h3>
                              <figure><img src="https://www.pawsforpeople.org/wp-content/uploads/2020/04/de-state-news-cover-pic-400x250.jpg" alt="#"/></figure>
                           </div>
                           
                        </div>
                     </div>
                     <div class="col-md-6">
                        <div class="our_priceing text_align_center">
                           <div class="our_pri">
                              <h3 className='text-center'>PAWS Meetup in banglore</h3>
                              <figure><img src="https://www.pawsforpeople.org/wp-content/uploads/2021/05/BARK-Ranger-Group-Photo-400x250.jpg" alt="#"/></figure>

                           </div>
                           
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </>
  )
}

export default Blog