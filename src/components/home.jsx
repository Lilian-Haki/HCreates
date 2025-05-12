import React, { useState } from 'react';
import Logo from '../assets/haki_creations_logo.png';
import Project from '../assets/Earthy Essence.png';
import Mail from '../assets/message.png';
import Email from '../assets/email.png';
import Comments from '../assets/comments.png';
import Contact from '../assets/+.png';
import { Link } from 'react-router-dom';
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
    {/* services section */}
    <div className='text-amber-600 p-9 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-9 items-center'>
        {/* card 1 */}
    <div class="w-[250px] rounded overflow-hidden shadow-lg">
    <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </p>
    </div>
   </div>
        {/* card 2 */}
    <div class="w-[250px] rounded overflow-hidden shadow-lg">
    <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </p>
    </div>
   </div>
        {/* card 3 */}
    <div class="w-[250px] rounded overflow-hidden shadow-lg">
    <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </p>
    </div>
   </div>
        {/* card 4 */}
    <div class="w-[250px] rounded overflow-hidden shadow-lg">
    <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </p>
    </div>
   </div>
    </div>
     {/* about section */}
     <div className='text-amber-600 p-4'>
        <h2 className='text-[40px] font-bold text-center'>About Us</h2>
        <p className='text-[20px] text-center'>We are a team of passionate creators dedicated to bringing your ideas to life.</p>
        <p className='text-[20px] text-center'>Our mission is to provide high-quality products and services that exceed your expectations.</p>
    </div>
    {/* services section */}
    <section id='services' class="s-services target-section darker">

        <div class="row section-header bit-narrow" data-aos="fade-up">
            <div class="col-full">
                <h3 class="subhead">What we do</h3>
                <h1 class="display-1">
                We take pride in what we do. Our services are designed to help 
                your business stand out and turn your ideas into digital realities.
                </h1>
            </div>
        </div>

        <div class="row bit-narrow services block-1-2 block-tab-full">

            <div class="col-block item-service" data-aos="fade-up">
                <div class="item-service__icon">
                    <i class="icon-star"></i>
                </div>
                <div class="item-service__text">
                    <h3 class="item-title">Brand Identity</h3>
                    <p>Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. 
                    Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis.
                    Sunt suscipit voluptas ipsa in tempora esse soluta sint.
                    </p>
                </div>
            </div>

            <div class="col-block item-service" data-aos="fade-up">
                <div class="item-service__icon">
                    <i class="icon-group"></i>
                </div>
                <div class="item-service__text">
                    <h3 class="item-title">Illustration</h3>
                    <p>Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. 
                    Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis.
                    Sunt suscipit voluptas ipsa in tempora esse soluta sint.
                    </p>
                </div>
            </div>

            <div class="col-block item-service" data-aos="fade-up">
                <div class="item-service__icon">
                    <i class="icon-pie-chart"></i>
                </div>  
                <div class="item-service__text">
                    <h3 class="item-title">Marketing</h3>
                    <p>Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. 
                    Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis.
                    Sunt suscipit voluptas ipsa in tempora esse soluta sint.
                    </p>
                </div>
            </div>

            <div class="col-block item-service" data-aos="fade-up">
                <div class="item-service__icon">
                    <i class="icon-image"></i>
                </div>
                <div class="item-service__text">
                    <h3 class="item-title">Photography</h3>
                    <p>Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. 
                    Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis.
                    Sunt suscipit voluptas ipsa in tempora esse soluta sint.
                    </p>
                </div>
            </div>

            <div class="col-block item-service" data-aos="fade-up">
                <div class="item-service__icon">
                    <i class="icon-cube"></i>
                </div>
                <div class="item-service__text">
                    <h3 class="item-title">UI/UX Design</h3>
                    <p>Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. 
                    Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis.
                    Sunt suscipit voluptas ipsa in tempora esse soluta sint.
                    </p>
                </div>
            </div>
    
            <div class="col-block item-service" data-aos="fade-up">
                <div class="item-service__icon"><i class="icon-lego-block"></i></div>
                <div class="item-service__text">
                    <h3 class="item-title">Frontend Design</h3>
                    <p>Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. 
                    Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis.
                    Sunt suscipit voluptas ipsa in tempora esse soluta sint.
                    </p>
                </div>
            </div>
        </div>
    </section>
    {/* contact section */}
    <div className='bg-gray-800 text-white p-4 '>
        <h2 className='text-[40px] font-bold text-center'>Contact Us</h2>
        <p className='text-[20px] text-center'>Have a question or want to work with us?</p>
        <p className='text-[20px] text-center'>Get in touch and let's make something amazing together!</p>
        <div className='flex lg:grid-cols-2 gap-3 items-center'>
        <div className=''>
        <img className='lg:ml-16' src={Contact} alt="" />
        </div>
        <form className='md:mt-8 flex flex-col'>
            <input type="text" placeholder="Your Name" className='p-2 mb-4 h-14 lg:w-[500px] md:w-[400px] sm:w-[100px] rounded-[60px]' />
            <input type="email" placeholder="Your Email" className='p-2 mb-4 h-14 w-[500px] rounded-[60px]' />
            <textarea placeholder="Your Message" className='p-2 mb-4 w-[500px] h-[100px] rounded-[60px]'></textarea>
            <button type="submit" className='bg-amber-600 text-white p-2 m-6 h-[45px] w-[190px] rounded-[40px]'>Send Message</button>
        </form>
        </div>
    </div>
    {/* contact */}

    {/* footer section */}
    <div className='bg-gray-800 text-white p-4'>
        <p className='text-center'>© 2023 Haki Creations. All rights reserved.</p>
        <p className='text-center'>Follow us on social media:</p>
        <p className='text-center'>Facebook | Twitter | Instagram</p>
        <p className='text-center'>Privacy Policy | Terms of Service</p>
    </div>

    </div>
    )
}
export default Home;
