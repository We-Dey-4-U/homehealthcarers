import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './contact.css';

const Hero = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const isSmallScreen = window.innerWidth <= 600;

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

    return (
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
    );
};

export default Hero;