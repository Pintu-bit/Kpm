import { useState } from 'react'

import { Carousel } from 'react-responsive-carousel';
import viteLogo from '/vite.svg'
import Navbar from '../Components/Navbar.jsx'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import About from '../Components/About.jsx';
import Products from '../Components/Products.comp.jsx';
import Contact from '../Components/Contact.comp.jsx';
import Footer from '../Components/Footer.jsx';
import Intro from '../Components/Intro.jsx';

import seed1 from '../assets/seed1.png'
import seed2 from '../assets/seed2.png'
import seed3 from '../assets/seed3.png'
import seed4 from '../assets/seed4.png'


function App() {
    const images = [
        "https://lvivity.com/wp-content/uploads/2020/04/iot-in-agriculture.jpg",
        "https://www.financialexpress.com/wp-content/uploads/2023/04/smart-agriculture-iot-with-hand-planting-tree-background-1.jpg",
        "https://www.hindustantimes.com/ht-img/img/2023/08/10/1600x900/Fertilisers-and-Pesticides-Dealers-Association--Mo_1685647369755_1691669070157.jpg",
    ];

    return (
        <>
            {/* Navbar */}
            <Navbar />
            {/* Intro */}
            <Intro />

            {/* Home */}
            <div className=' rounded-md z-1'>
                <Carousel
                    showArrows={true}
                    showStatus={false}
                    showThumbs={false}
                    infiniteLoop={true}
                    autoPlay={true}
                    interval={3000}
                    transitionTime={200}
                    className='rounded-md'
                >
                    <div className='relative flex justify-center bg-green-100'>
                        <div className='h-[25rem] md:h-[35rem] md:w-[40%] '>
                            <img className='h-[20rem] md:h-[35rem] w-[10%]' src={seed1} alt="Legend 1" />
                            {/* <div className='absolute inset-0 bg-black opacity-40'></div> */}
                            <div className='absolute inset-0 flex items-center justify-center text-white'>
                            <a href="#gangaprasad">
                                <button className="bg-white mt-[7rem] border font-bold border-green-500 text-black py-2 px-4 rounded-full hover:bg-black hover:text-white transition duration-300">
                                    Know More
                                </button>
                                </a>
                            </div>
                        </div>

                    </div>

                    <div className='relative flex justify-center bg-green-100'>
                        <div className='h-[25rem] md:h-[35rem] md:w-[40%]'>
                            <img className='h-[20rem] md:h-[35rem] w-[10%]' src={seed2} alt="Legend 2" />
                            {/* <div className='absolute inset-0 bg-black opacity-20'></div> */}
                            <div className='absolute inset-0 flex items-center justify-center text-white'>
                            <a href="#subhajit">
                                <button className="bg-white mt-[7rem] font-bold border border-green-500 text-black py-2 px-4 rounded-full hover:bg-black hover:text-white transition duration-300">
                                    Know More
                                </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className='relative flex justify-center bg-green-100'>
                        <div className='h-[25rem] md:h-[35rem] md:w-[40%]'>
                            <img className='h-[20rem] md:h-[35rem] w-[10%]' src={seed3} alt="Legend 3" />
                            {/* <div className='absolute inset-0 bg-black opacity-40'></div> */}
                            <div className='absolute inset-0 flex items-center justify-center text-white'>
                            <a href="#villain">
                                <button className="bg-white mt-[7rem] font-bold border border-green-500 text-black py-2 px-4 rounded-full hover:bg-black hover:text-white transition duration-300">
                                    Know More
                                 </button>
                                </a>

                            </div>
                        </div>
                    </div>

                    <div className='relative flex justify-center bg-green-100'>
                        <div className='h-[25rem] md:h-[35rem] md:w-[40%]'>
                            <img className='h-[20rem] md:h-[35rem] w-[10%]' src={seed4} alt="Legend 3" />
                            {/* <div className='absolute inset-0 bg-black opacity-40'></div> */}
                            <div className='absolute inset-0 flex items-center justify-center text-white'>
                            <a href="#villain">
                                <button className="bg-white mt-[7rem] font-bold border border-green-500 text-black py-2 px-4 rounded-full hover:bg-black hover:text-white transition duration-300">
                                    Know More
                                 </button>
                                </a>

                            </div>
                        </div>
                    </div>

                </Carousel>
                <section id='about' className='border-b-2 border-gray-800'>
                    <About />
                </section>
                <section id='products' className='border-b-2 border-gray-800'>
                    <Products />
                </section>
                <section id='contact' className='border-b-2 border-gray-800'>
                    <Contact />
                </section>
                <Footer />
            </div>
        </>
    )
}

export default App
