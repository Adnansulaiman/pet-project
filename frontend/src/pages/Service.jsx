import React from 'react'

const Service = () => {
  return (
    <>
     <div className="service-section">
        <div className="row d-flex justify-content-center align-items-center ">
            <h1 className='text-center my-4 ' >Our Service</h1>
        </div>
        <div className="row s-cards ">
            <div className="service-card col-3">
                <h3>Assisted Living</h3>
                <img className='img-fluid' src="https://www.pawsforpeople.org/wp-content/uploads/2011/07/elders-300x243.jpg" alt="" />
                <p>Therapy teams are trained to use basic behavioral strategies during visits with children on the Autism Spectrum, as kids with this disorder frequently connect well with animals.</p>
                <button >Read More</button>
            </div>
            <div className="service-card col-3">
            <h3>Destress Program</h3>
                
                <img src="https://www.pawsforpeople.org/wp-content/uploads/2021/01/download-7-3-225x300.jpg" alt="" />
                <p>Many DeStress programs are offered through Community Events at PAWS; however, as the demand for these types of interactions increase, some sites have partnered with PAWS ...</p>
                <button >Read More</button>
            </div>
            <div className="service-card col-3">
            <h3>Autism Initiative</h3>
                <img className='img-fluid' src="https://www.pawsforpeople.org/wp-content/uploads/2017/12/Harvey-Rowland-Lesley-e1513019902248-257x300.jpg" alt="" />
                <p>Therapy teams are trained to use basic behavioral strategies during visits with children on the Autism Spectrum, as kids with this disorder frequently connect well with animals.</p>
                <button >Read More</button>
            </div>
        </div>
     </div>
    </>
  )
}

export default Service