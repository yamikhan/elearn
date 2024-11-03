import React from 'react';
import './home.css';

const NavBar = () => {
  return (
    <div>
      <header className='header'>
        <a href='/' className='logo'>ProLearn</a>
        <nav className='navbar'>
          <a href='/'>Home</a>
          <a href='/'>Courses</a>
          <a href='/'>Payment</a>
          <a href='/'>Login</a>
          <a href='/Signup'>Signup</a>
          <a href='/'>Feedback</a>
          <a href='/'>Contact</a>
        </nav>
      </header>
      <body>
         <div className='content'>
         <h1>Welcome To Prolearn</h1>
         <h3 className='h3'>Learn and practice</h3>
         <button className='cta-button'>Get Started</button>
         </div>
         </body>
    </div>
  );
};

export default NavBar;