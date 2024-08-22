import React, { useEffect, useState } from 'react'
import {Table} from 'antd';

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
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    
  ];
const Users = () => {

  const [allusers,setAllusers] = useState([]);

    const fetchInfo = async()=>{
        await fetch('http://localhost:4000/allusers')
        .then((res)=>res.json())
        .then((data)=>{
            setAllusers(data)
        })
    }
    console.log(allusers);
    useEffect(()=>{
        fetchInfo();
    },[])

    const data1 = allusers.map((user, index) => ({
      key: index + 1,
      name: user.name,
      email: user.email,
     
  }));

  return (
    <>
    <h2>Users</h2>
    <Table dataSource={data1} columns={columns} />;
    
    </>
  )
}

export default Users