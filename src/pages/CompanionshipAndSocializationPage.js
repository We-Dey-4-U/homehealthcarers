import React, { useState, useEffect } from 'react';
import { FaSearch, FaBars, FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CompanionshipAndSocializationPage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = ["50 care.jpg", "handcare.jpg", "elder lady home care.jpg"];// Add paths to your images

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, []);

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


            <div className="hero" style={{ position: "relative" }}>
                <img src={images[currentImageIndex]} alt="Hero Image" style={{ width: "100%", height: "400px", objectFit: "cover" }} />
                <div className="hero-text" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
                    {/* <h1>Companionship and Socialization Services</h1> */}
                </div>
            </div>

            <div className="about-us-section">
                <div className="container">
                    <div className="about-us-content">
                        <div className="about-us-text">
                            <h2>Companionship and Socialization</h2>
                            <p>Our Companionship and Socialization services include:</p>
                            <ul>
                                <li>Personalized companionship for emotional support</li>
                                <li>Engaging in meaningful conversations and activities</li>
                                <li>Participating in social outings and events</li>
                                <li>Providing cognitive stimulation and mental engagement</li>
                            </ul>
                        </div>
                        <div className="about-us-image">
                            <img src="/companion.jpg" alt="Companionship and Socialization Image" style={{ width: "100%", height: "auto", borderRadius: "8px" }} />
                            <figcaption>
                                <strong>Why Choose Our Companionship and Socialization Services?</strong>
                                <br />
                                - Tailored companionship programs to meet individual needs
                                <br />
                                - Friendly and engaging caregivers who promote social interaction
                                <br />
                                - Activities designed to stimulate mental and emotional well-being
                                <br />
                                - Opportunities for socialization through planned outings and events
                                <br />
                                - Supportive environment that fosters connection and engagement
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

export default CompanionshipAndSocializationPage;