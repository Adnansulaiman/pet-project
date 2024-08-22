import React, { useState } from 'react';
import {useNavigate,Outlet, Link} from 'react-router-dom'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';


import { Button, Layout, Menu, theme } from 'antd';
import { HiOutlineUsers} from "react-icons/hi2";


import { CiBoxList } from "react-icons/ci";


const { Header, Sider, Content } = Layout;


const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigate = useNavigate()
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" >
          <h2 className='text-white fs-5 text-center mb-0 py-3'><span className='text-white'>Supporting Paws</span></h2>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['']}
          onClick={({key})=>{
            if(key == 'signout'){

            }else{
              navigate(key)
            }
          }}
          items={[
            
            {
              key: '',
              icon: <HiOutlineUsers />,
              label: 'Customers',
            },
            {
              key: 'booking-status',
              icon: <CiBoxList />,
              label: 'Booking Status',
            },
            
            
           
          ]}
        />
      </Sider>
      <Layout>
        <Header
        className='d-flex justify-content-between ps-1 pe-5'
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
          
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          
          <Outlet/>
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;