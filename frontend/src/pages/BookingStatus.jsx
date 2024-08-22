import React, { useEffect, useState } from 'react'
import {  Table } from 'antd';
import { AiOutlineDelete } from "react-icons/ai";
import Link from 'antd/es/typography/Link';



  
  const columns = [
    {
      title: 'SNo',
      dataIndex: 'key',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email ',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Animal',
      dataIndex: 'animal',
      key: 'animal',
    },
    {
      title: 'Booking Time',
      dataIndex: 'time',
      key: 'time',
    },
    {
      title: 'Booking Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Action',
      dataIndex: 'action',
    },
  ];
  
const BookingStatus = () => {

  

  const [allbookings,setAllbookings] = useState([]);

    const fetchInfo = async()=>{
        const token = localStorage.getItem('auth-token');
        await fetch("http://localhost:4000/mybookings", {
        method: "GET",
        headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Authorization": token
      }
    })
    .then((resp) => resp.json())
    .then((data) =>{
            setAllbookings(data)
        })
    }
    console.log(allbookings);
    useEffect(()=>{
        fetchInfo();
    },[])

    const removeBooking = async(_id) =>{
      if(window.confirm("Are you sure?")){
          await fetch('http://localhost:4000/deletebooking',{
          method:'POST',
          headers:{
              Accept:'application/json',
              'Content-Type':'application/json'
          },
          body:JSON.stringify({_id:_id})
      })
       await fetchInfo();
      }
      
  }

  const data1 = Array.isArray(allbookings) 
  ? allbookings.map((booking, index) => ({
      key: index + 1,
      name: booking.name,
      email: booking.email,
      phone: booking.phone,
      animal: booking.animal,
      time: booking.time,
      date: booking.date,
      action: (
        <>
          <Link className='ms-3 fs-5 text-danger' to='/' onClick={() => { removeBooking(booking._id) }}><AiOutlineDelete /></Link>
        </>
      ),
    }))
  : [];

  
  return (
    <>
<div className="booking-status ">
    <h2 className='text-dark mb-3'>Booking Status</h2>
    <Table dataSource={data1} columns={columns} />
    </div>
    </>
  )
}

export default BookingStatus