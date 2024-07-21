import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import './contact.css';
import axios from 'axios'; // Import axios

const Footer = ({ footerCategories = [] }) => {
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
                    <a href="#"><FaFacebook /></a>
                    <a href="#"><FaTwitter /></a>
                    <a href="#"><FaInstagram /></a>
                </div>
                <div className="logo">
                    <img src={process.env.PUBLIC_URL + '/logo.JPG'} alt="Logo" style={{ width: '70px', height: 'auto', borderRadius: '10px' }} />
                </div>
            </div>
            <div className="whatsapp-container">
                <div className="whatsapp-text-container">
                    <span className="whatsapp-text">Reach us quickly via WhatsApp</span>
                </div>
                <a href="https://wa.me/+2348020956712" onClick={handleWhatsAppClick} className="whatsapp-button">
                    <FaWhatsapp className="whatsapp-icon" />
                    <span>WhatsApp</span>
                </a>
            </div>
            <div className="copyright">
                <p>© 2015 home healthcare services. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;