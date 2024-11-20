'use client';
import React, { useState } from 'react';

import Link from "next/link"
import Image from "next/image"
import logo from '../../public/images/logo.png'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
  setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
    <header>
      <div id="logo">
        <Image src={logo} alt="shoe logo" width={90} height={70}></Image>
        <h3>Sr Shoes</h3>
      </div>
      <ul>
        <li>
            <Link className="link" href='/'>Home</Link>
        </li>
       
        <li>
            <Link className="link" href='products'>Products</Link>
        </li>
        <li>
            <Link className="link" href='trending'>Trending</Link>
        </li>
        <li>
            <Link className="link" href='about'>About</Link>
        </li>
      </ul>
      
      <div id='toggle-btn'
            onClick={toggleMenu}
          >
            {/* Hamburger icon */}
            <svg
              className={` ${isMenuOpen ? 'hidden' : 'block'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 6h16M4 12h16m-7 6h7" />
            </svg>

            {/* Close icon */}
            <svg
              className={`${isMenuOpen ? 'block' : 'hidden'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
     
    </header>
     {isMenuOpen && (
      <div id='toggleNavbar'>
        <Link className='link' href="/"  onClick={toggleMenu}> 
            <p>Home</p>
        </Link>
        <Link className='link'  href="products" onClick={toggleMenu}>
        <p>Products</p>
        </Link>
        <Link className='link'  href="trending" onClick={toggleMenu}>
         <p>Trending</p>
        </Link>
        <Link className='link'  href="about" onClick={toggleMenu}>
         <p>About</p>
        </Link>
        
      </div>
   
    )}
    </>
  )
}

export default Header
