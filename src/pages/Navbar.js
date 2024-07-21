import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaBars } from 'react-icons/fa';
import './contact.css';

const Navbar = ({ categories = [] }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className="navbar">
            <div className="logo">
                <img src={process.env.PUBLIC_URL + '/logo.JPG'} alt="Logo" style={{ width: '70px', height: 'auto', borderRadius: '10px' }} />
            </div>
            <div className="menu-icon" onClick={toggleMenu}>
                <FaBars />
            </div>
            <div className={`menu-links ${isMenuOpen ? 'active' : ''}`}>
                {categories.map(category => (
                    <Link key={category.id} to={category.link} onClick={toggleMenu} className="nav-link">
                        {category.name}
                    </Link>
                ))}
            </div>
            <div className="search">
                <input type="text" placeholder="Search..." />
                <button><FaSearch /></button>
            </div>
        </nav>
    );
};

export default Navbar;