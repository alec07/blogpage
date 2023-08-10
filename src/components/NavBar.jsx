import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'
import { useRef } from 'react';
import '../assets/nav.css';

function NavBar(){
    const navRef = useRef();

    const showNavBar = () =>{
        navRef.current.classList.toggle("responsive_nav")
    }
    return(
        <header>
            <h1 className=" font-bold text-xl uppercase flex items-center">Corina Alexandra</h1>
            <nav className='ml-auto' ref={navRef}>
                <Link to="/blogpage/" className=" mr-5 hover:text-gray-300">Home</Link>
                <Link to="/blogpage/about" className="mr-5 hover:text-gray-300">About</Link>
				<Link to="/blogpage/blog" className="mr-5 hover:text-gray-300">Blog</Link>
				<Link to="/blogpage/projects" className=" hover:text-gray-300">Projects</Link>
                <button className='nav-btn nav-close-btn' onClick={showNavBar}>
                    <FaTimes />
                </button>
            </nav>
            <button className='nav-btn' onClick={showNavBar}>
                <FaBars />
            </button>

        </header>

    );
};
export default NavBar;