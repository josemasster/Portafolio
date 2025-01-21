import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './navbar.css'

const Navbar = () => {
    return (
        <nav className='navbar'>
          <ul className='navbar-links'>
            <li><a href='#about'>About Me</a></li>
            <li><a href='#projects'>Projects</a></li>
            <li><a href='#skills'>Skills</a></li>
            <li><a href='#contact'>Contact</a></li>
          </ul>
        </nav>
    );
};

export default Navbar;