import React, { useState, useEffect } from 'react';
import { FaSearch, FaBars, FaFacebook, FaTwitter, FaInstagram,  FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';

const LightHousekeepingPage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const isSmallScreen = window.innerWidth <= 600;

    // List of background images for the slide effect
    const images = [
        '/handcare.JPG',
        '/50 care.jpg',
        '/physical therapy.JPG',
        '/rehab.JPG'
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    const heroBackgroundStyles = {
        backgroundImage: `url(${images[currentImageIndex]})`,
        height: '400px',
        width: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 1s ease-in-out',
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const categories = [
        { name: 'Home', id: 1, link: '/' },
        { name: 'About Us', id: 4, link: '/about-us' },
        { name: 'Services', id: 2, link: '/services' },
        { name: 'Blog', id: 3, link: '/blog' },
        { name: 'Contact Us', id: 5, link: '/contact' },
    ];

    const footerCategories = [
        {
            name: 'About Us',
            id: 5,
            dropdownItems: ['Mission', 'Team', 'History', 'Careers', 'Partnerships']
        },
        {
            name: 'Visit Us',
            id: 6,
            dropdownItems: ['104A Ogudu Rd, Ojota, Ikeja, Lagos, Nigeria', '+2348020956712', 'homehealthcarers@gmail.com']
        },
        {
            name: 'Quick Link',
            id: 7,
            dropdownItems: ['About Us', 'Services', 'Collections']
        }
    ];

    const handleWhatsAppClick = () => {
        const message = 'Hello! I have a question.';
        axios.post('/api/send-whatsapp', { message })
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    return (
        <div className="homepage">
            <nav className="navbar">
                <div className="logo">
                    <img
                        src={process.env.PUBLIC_URL + '/logo.JPG'}
                        alt="Logo"
                        style={{
                            width: '70px',
                            height: 'auto',
                            borderRadius: '10px'
                        }}
                    />
                </div>

                <div className="menu-icon" onClick={toggleMenu}>
                    <FaBars />
                </div>

                <div className={`menu-links ${isMenuOpen ? 'active' : ''}`}>
                    {categories.map(category => (
                        <Link
                            key={category.id}
                            to={category.link}
                            onClick={toggleMenu}
                            className="nav-link"
                        >
                            {category.name}
                        </Link>
                    ))}
                </div>

                <div className="search">
                    <input type="text" placeholder="Search..." />
                    <button><FaSearch /></button>
                </div>
            </nav>


            <section className="hero" style={heroBackgroundStyles}>
                <div className="container">
                    <div className="content" style={{ color: 'white', marginBottom: '60px' }}>
                        <h2>Experience the difference with our premium homecare services</h2>
                        <p>Carefully crafted to deliver unparalleled peace of mind</p>
                        <Link
                            to="/contact"
                            className="store-link"
                            style={{
                                display: 'inline-block',
                                padding: '10px 20px',
                                fontSize: isSmallScreen ? '20px' : '35px',
                                color: 'white',
                                backgroundColor: 'transparent',
                                border: '2px solid white',
                                borderRadius: '5px',
                                textDecoration: 'none',
                                transition: 'background-color 0.3s, color 0.3s',
                            }}
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>

            <div className="about-us-section">
                <div className="container">
                    <div className="about-us-content">
                        <div className="about-us-text">
                            <h2>Light Housekeeping</h2>
                            <p>Our Light Housekeeping services include:</p>
                            <ul>
                                <li>Dusting and polishing furniture</li>
                                <li>Vacuuming and sweeping floors</li>
                                <li>Cleaning kitchen surfaces and appliances</li>
                                <li>Changing bed linens and organizing living areas</li>
                            </ul>
                        </div>
                        <div className="about-us-image">
                            <img src="/HouseKeeping.JPG" alt="Light Housekeeping Image" style={{ width: "100%", height: "auto", borderRadius: "8px" }} />
                            <figcaption>
                                <strong>Why Choose Our Light Housekeeping Services?</strong>
                                <br />
                                - Thorough and efficient cleaning tailored to your home
                                <br />
                                - Friendly and professional staff dedicated to your satisfaction
                                <br />
                                - Flexible scheduling to fit your lifestyle
                                <br />
                                - Affordable rates for top-quality service
                                <br />
                                - Commitment to maintaining a clean and welcoming home environment
                            </figcaption>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="footer">
                {footerCategories.map(category => (
                    <div className="footer-column" key={category.id}>
                        <h2>{category.name}</h2>
                        <ul>
                            {category.dropdownItems.map((item, index) => (
                                <li key={index}>
                                    <Link to={`/${item}`}>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
                <div className="footer-column social-media">
                    <h2>Follow Us</h2>
                    <div className="social-icons">
                        <a href=""><FaFacebook /></a>
                        <a href="#"><FaTwitter /></a>
                        <a href=""><FaInstagram /></a>
                    </div>
                    <div className="logo">
                        <img 
                            src={process.env.PUBLIC_URL + '/logo.JPG'} 
                            alt="Logo" 
                            style={{ 
                                width: '70px', 
                                height: 'auto',
                                borderRadius: '10px'  // Adjust the border radius as per your design
                            }} 
                        />
                    </div>
                </div>
            </footer>

            <div className="copyright">
                <p>© 2015 home healthcare services. All rights reserved.</p>
            </div>

            <div className="whatsapp-container">
                <div className="whatsapp-text-container">
                    <span className="whatsapp-text">How can I help you?</span>
                </div>
                <button className="whatsapp-button" onClick={handleWhatsAppClick}>
                    <FaWhatsapp />
                </button>
            </div>
        </div>
    );
};

export default LightHousekeepingPage;