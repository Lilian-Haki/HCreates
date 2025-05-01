import React, { useState } from 'react';
import Logo from '../assets/haki_creations_logo.png';
import { UserOutlined } from '@ant-design/icons';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';


function Home() {
    const [isOpen, setIsOpen] = React.useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    // const closeMenu = () => {
    //     setIsOpen(false);
    // }
    // const menuIcon = isOpen ? <CloseOutlined /> : <MenuOutlined />;
    // const menuClass = isOpen ? 'block' : 'hidden';


    return(
<div>
    <nav className="flex p-0 bg-gray-800  text-white">
        <div className='' >
            <p><img className='h-[70px] w-[100px] ' src={Logo} alt="HakiCreations" /></p>
        </div>
        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <CloseOutlined style={{ fontSize: '24px', paddingTop:'20px',marginLeft:'160px' }} /> : <MenuOutlined style={{ fontSize: '24px', paddingTop:'20px',marginRight:'170px' }} />}
          </button>
        </div>
        <ul className={`md:flex md:ml-[120px] lg:ml-[400px] md:space-x-6 text-[18px] font-medium ${isOpen ? 'block absolute top-[80px] left-0 right-0 bg-gray-800 p-4 space-y-4 z-10' : 'hidden'} md:static md:block md:p-0 md:space-y-0`}>
        {/* <ul className="md:ml-[120px] lg:ml-[400px] items-center font-poppins text-[20px] font-[70px] flex space-x-4 px-4 py-2 float-right "> */}
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
        <div className="items-center hover:bg-gray-700 text-white font-bold py-4 px-4 rounded-[100px] lg:ml-[350px] md:ml-[160px]">
            <UserOutlined />
        </div>
    </nav>
</div>
    )
}
export default Home;
