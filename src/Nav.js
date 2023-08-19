import React from 'react'
import ScrollShadow from './ScrollShadow';

const Nav = () => {
  return (
    <div className='flex-column p-0'>
        <nav className='navbar fixed-top navbar-expand-lg bg-light flex-row' id='nav'>
            <div className='navbar-brand ps-4 d-flex align-items-center'>
              <a href='#home'>
              <img src={require("./assets/images/icons/logo.png")} className='navlogo mx-5'/>
              <span className='d-inline d-md-none d-lg-none'>SMT's Portfolio</span>
              </a>
            </div>
            <ul className='navbar-nav flex-row ms-auto d-none d-md-flex d-lg-flex pe-5 align-items-center'>
                <li className='nav-item mx-3 me-lg-5 navhover d-none d-lg-inline d-md-inline'><a href='#home'>Home</a></li>
                <li className='nav-item me-3 me-lg-5 navhover'><a href='#projects'>Projects</a></li>
                <li className='nav-item me-3 me-lg-5 navhover'><a href='#skillsets'>Skillsets</a></li>
                <li className='nav-item me-3 me-lg-5 navhover'><a href='#about-me'>About Me</a></li>
                <li className='nav-item nav-btn shadow-sm button-size' data-bs-toggle="modal" data-bs-target="#contacts">Contact Me</li>
            </ul>
            <ul className='navbar-nav flex-row mx-auto d-lg-none d-md-none d-flex pt-1 align-items-center'>
                <li className='nav-item me-3 me-lg-5 navhover'><a href='#projects'>Projects</a></li>
                <li className='nav-item me-3 me-lg-5 navhover'><a href='#skillsets'>Skillsets</a></li>
                <li className='nav-item me-3 me-lg-5 navhover'><a href='#about-me'>About Me</a></li>
                <li className='nav-item nav-btn shadow-sm button-size' data-bs-toggle="modal" data-bs-target="#contacts">Contact Me</li>
            </ul>
        </nav>
        <ScrollShadow />
    </div>
  )
};

export default Nav;