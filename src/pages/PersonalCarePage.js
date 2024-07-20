import React, { useState, useEffect } from 'react';
import {
    FaEnvelope,
    FaSearch,
    FaShoppingCart,
    FaUser,
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaLinkedin,
    FaYoutube,
    FaBars,
    FaFlag,
    FaWhatsapp,
    FaPhone,
} from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Correct import
import './SportsHomePage.css'; // Import CSS file for styling
import '@fortawesome/fontawesome-free/css/all.css';
  import axios from 'axios';
  import EventList from '../components/EventList';
  



const PersonalCarePage = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // Check if the screen width is small
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
        {
            name: 'Home',
            id: 1,
            link: '/'  // Direct link for the 'Home' category
        },
        {
            name: 'About Us',
            id: 4,
            link: '/about-us'  // Direct link for the 'About Us' category
        },
        {
            name: 'Services',
            id: 2,
            link: '/services'  // Direct link for the 'Services' category
        },
        {
            name: 'blog',
            id: 3,
            link: '/workwear'  // Direct link for the 'Workwear' category
        },
        {
            name: 'Contact Us',
            id: 5,
            link: '/contact'  // Direct link for the 'Contact Us' category
        },
    ];


          //footer data
    const [footerCategories, setFooterCategories] = useState([
        {
            name: 'About Us',
            id: 5,
            dropdownItems: [
                'Mission', 
                'Team', 
                'History', 
                'Careers', 
                'Partnerships'

            ]
        },
        {
            name: 'Visit Us',
            id: 6,
            dropdownItems: [
                '104A Ogudu Rd, Ojota, Ikeja, Lagos, Nigeria', 
                '+2348020956712', 
                'homehealthcarers@gmail.com']
        },
        {
            name: 'Quick Link',
            id: 7,
            dropdownItems: [
                'About us', 
                'Services'
                
            ]
        }
    ]);

    // Define courses array with sample data
   
    



    
    
    const handleWhatsAppClick = () => {
        // Replace 'YOUR_WHATSAPP_NUMBER' with your actual WhatsApp number
        const phoneNumber = '+2348020956712';
        const message = 'Hello! I have a question.';
    
        // Encode the message
        const encodedMessage = encodeURIComponent(message);
    
        // Create the WhatsApp URL
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
        // Open the WhatsApp chat
        window.open(whatsappURL, '_blank');
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
                            <h2>Personal Care</h2>
                            <p>Our Personal Care services include:</p>
                            <ul>
                                <li>Bathing and grooming</li>
                                <li>Dressing and undressing</li>
                                <li>Toileting and incontinence care</li>
                                <li>Transferring and mobility assistance</li>
                            </ul>
                        </div>
                        <div className="about-us-image">
                            <img src="/images/elder lady home care.jpg" alt="Personal Care Image" style={{ width: "100%", height: "auto", borderRadius: "8px" }} />
                            <figcaption>
    <strong>Why Choose Our Personal Care Services?</strong>
    <br />
    - Customized care plans designed to meet your individual needs
    <br />
    - Convenient scheduling options and competitive pricing
    <br />
    - Expert caregivers with ongoing training and support
    <br />
    - Commitment to continuous improvement and quality assurance
    <br />
    - Empathetic and attentive customer support
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

export default PersonalCarePage;