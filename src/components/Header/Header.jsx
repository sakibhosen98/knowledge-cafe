import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <nav className='header'>
      <h2>Knowledge Cafe</h2>
      <div>
        <a href="/blog">Blog</a>
        <a href="/contact">Contact Us</a>
        <a href="/login">Login</a>
      </div>
    </nav>
  );
};

export default Header;