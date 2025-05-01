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
    {/* hero section */}
    <div className='bg-gray-800'>
        <p>
            <img src={Logo} alt="" />
        </p>
        <h1 className='mt-[-250px] text-[70px] font-bold text-center'>Haki Creations</h1>
    </div>
    {/* about section */}
    <div className='text-amber-600 p-4'>
        <h2 className='text-[40px] font-bold text-center'>About Us</h2>
        <p className='text-[20px] text-center'>We are a team of passionate creators dedicated to bringing your ideas to life.</p>
        <p className='text-[20px] text-center'>Our mission is to provide high-quality products and services that exceed your expectations.</p>
    </div>
    {/* projects section */}
    <div className='bg-gray-800 text-white p-4'>
        <h2 className='text-[40px] font-bold text-center'>Our Projects</h2>
        <p className='text-[20px] text-center'>Check out our latest projects and see what we can do for you.</p>
        <p className='text-[20px] text-center'>We specialize in web development, graphic design, and more.</p>
    </div>
    {/* contact section */}
    <div className='bg-gray-800 text-white p-4'>
        <h2 className='text-[40px] font-bold text-center'>Contact Us</h2>
        <p className='text-[20px] text-center'>Have a question or want to work with us?</p>
        <p className='text-[20px] text-center'>Get in touch and let's make something amazing together!</p>
    </div>
    {/* footer section */}
    <div className='bg-gray-800 text-white p-4'>
        <p className='text-center'>© 2023 Haki Creations. All rights reserved.</p>
        <p className='text-center'>Follow us on social media:</p>
        <p className='text-center'>Facebook | Twitter | Instagram</p>
        <p className='text-center'>Privacy Policy | Terms of Service</p>
        <p className='text-center'>Contact:</p>
    </div>

    </div>
    )
}
export default Home;
