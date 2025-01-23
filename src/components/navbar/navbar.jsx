import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './navbar.css'

const Navbar = () => {
    return (
        <nav className='navbar'>
          <ul className='navbar-links'>
            <li><a href='#about'>HOME</a></li>
            <li><a href='#projects'>PROJECTS</a></li>
            <li><a href='#skills'>SKILLS</a></li>
            <li><a href='#contact'>CONTACT</a></li>
          </ul>
        </nav>
    );
};

export default Navbar;