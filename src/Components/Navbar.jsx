import React from "react";
import { FaLeaf } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import Logo from '../assets/logo.png'
import { Button } from 'antd'
import { NavLink,Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
    // A state variable for the menu icon and the popup menu
    const [showMenu, setShowMenu] = useState(false);

    // A function that toggles the menu icon and the popup menu
    const toggleMenu = () => {
        setShowMenu(!showMenu);
        if(showMenu){
            
            document.body.style.overflow='auto'
        }else{
            document.body.style.overflow='hidden'
        }
        
    };

    // A function that hides the menu icon and the popup menu on larger screens
    const hideMenu = () => {
        if (window.innerWidth > 768) {
            setShowMenu(false);
        }
    };

    // An effect that adds an event listener for the window resize and calls the hideMenu function
    useEffect(() => {
        window.addEventListener("resize", hideMenu);
        return () => {
            window.removeEventListener("resize", hideMenu);
        };
    }, []);
    return (
        <div className="flex md:bg-gray-100 justify-between items-center border-b-2 border-green-400 p-4 text-white mx-2 rounded-md">
           <div className='flex items-center space-x-3'>
           <Link to="/" className="flex items-center p-[-1rem]">
                <img src={Logo} className="text-4xl text-green-400 scale-125 h-[4rem] w-[4rem]" />
            </Link>
            <p className="font-bold text-[1.5rem]   text-amber-800">Kpm seeds</p>
           </div>
            
            <div className="flex  justify-between items-center space-x-5 md:hidden">
              
                <MdMenu
                    className="text-green-300 text-3xl"
                    onClick={toggleMenu}
                />
            </div>
            <div className="hidden md:flex space-x-4 ">
                <a
                    href="#about"
                    className="text-black hover:bg-green-300 hover:rounded-full py-1 px-2"
                    activeStyle={{ backgroundColor: "green" }}
                >
                    About Us
                </a>
                <a
                    href="#products"
                    className="text-black hover:bg-green-300 hover:rounded-full py-1 px-2"
                    activeStyle={{ backgroundColor: "green" }}
                >
                    Products
                </a>
                <a href="#contact"
                    className="text-black hover:bg-green-300 hover:rounded-full py-1 px-2"
                    activeStyle={{ backgroundColor: "green" }}
                >
                    Contact
                </a>
            </div>
            <div
                className={`${showMenu ? "block" : "hidden"
                    } absolute h-screen w-[17rem] z-10 right-0 top-0 mt-16 bg-green-300 p-4 text-white`}
            >
                <div className="flex flex-col z-10 space-y-4">
                    <a
                        href="#about"
                        className="hover:bg-green-600 p-2 text-black"
                        activeStyle={{ backgroundColor: "green" }}
                        onClick={toggleMenu}
                    >
                       <p className="font-bold">About Us</p> 
                    </a>
                    <a
                        href="#products"
                        className="hover:bg-green-600 p-2 text-black"
                        activeStyle={{ backgroundColor: "green" }}
                        onClick={toggleMenu}
                    >
                         <p className="font-bold">Products</p> 
                    </a>
                    <a
                        href="#contact"
                        className="hover:bg-green-600 p-2 text-black"
                        activeStyle={{ backgroundColor: "green" }}
                        onClick={toggleMenu}
                    >
                        <p className="font-bold">Contact Us</p> 
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;