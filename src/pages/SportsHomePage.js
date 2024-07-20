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
  



const SportsHomePage = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [serviceImages, setServiceImages] = useState([
        '/images/elder lady home care.jpg',
        '/images/50 care.JPG',
        '/images/physical therapy.JPG',
        '/images/rehab.JPG',
        '/images/skill nursing.JPG',
        '/images/eldercare.JPG',
        '/images/companion.JPG',
        '/images/HouseKeeping.JPG'
    ]);
    const isSmallScreen = window.innerWidth <= 600;

    // List of background images for the slide effect
    const heroImages = [
        '/handcare.JPG',
        '/50 care.jpg',
        '/physical therapy.JPG',
        '/rehab.JPG'
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, [heroImages.length]);

    const heroBackgroundStyles = {
        backgroundImage: `url(${heroImages[currentImageIndex]})`,
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



            <div className="container">
                <section className="promo-section">
                    <div className="promo-content">
                        <div className="promo-text">
                            <h2>
                                At our homecare services agency, we offer exceptional, personalized services designed to
                                provide you with the peace of mind you deserve
                            </h2>
                        </div>
                    </div>
                    <div className="services-grid">
                        {serviceImages.map((image, index) => (
                            <div className="service-container" key={index}>
                                <img src={process.env.PUBLIC_URL + image} alt={`Service ${index + 1}`} className="service-image" />
                                <h3>{['Personal Care', 'Medication Management', 'In Home Physical Therapy', 'Rehabilitation and Therapy', 'Skilled Nursing Care', 'Elderly Care', 'Companionship and Socialization', 'Light Housekeeping'][index]}</h3>
                                <Link to={`/pages/${['personal-care', 'MedicationManagementPage', 'PhysicalTherapyPage', 'RehabilitationTherapyPage', 'SkilledNursingCarePage', 'ElderlyCarePage', 'CompanionshipPage', 'LightHousekeepingPage'][index]}`}>Read more</Link>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

   {/* contact Section */}
 {/* Store Section */}
 <section className="store-section" style={{ backgroundImage: `url('/care happy.JPG')`, height: '400px', width: '100%', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="container">
                    <div className="content" style={{ color: 'white', marginBottom: '60px' }}>
                        <h2>Experience the difference with our premium homecare services</h2>
                        <p>carefully crafted to deliver unparalleled peace of mind</p>
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
        <FaEnvelope
          className="contact-icon"
          style={{ marginRight: '10px' }}
        />
        Contact Us
      </Link>
      <h3
        style={{
          marginLeft: isSmallScreen ? '20px' : '300px',
          marginTop: isSmallScreen ? '20px' : '100px',
          fontSize: isSmallScreen ? '15px' : '25px',
          color: 'white',
        }}
      >
        call our landline 24/7 Service Available
      </h3>
      <h3
        style={{
          marginLeft: isSmallScreen ? '20px' : '300px',
          fontSize: isSmallScreen ? '20px' : '35px',
          color: 'white',
        }}
      >
        <FaPhone
          className="contact-icon"
          style={{ marginRight: '10px' }}
        />
        017360442 or send us a message
      </h3>
                    </div>
                </div>
            </section>

         
<div className="container">
           
            

            <div className="home-container">
                

                {/* Add more sections as needed */}

            </div>
            </div>
            {/* Footer */}

           
           
           
           
           
           
           
           
           
           
           
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
                 {/* Social media icons */}
    <div className="footer-column social-media">
        <h2>Follow Us</h2>
        <div className="social-icons">
            <a href=""><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href=""><FaInstagram /></a>
            {/* Add more social media icons as needed */}
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

{/* WhatsApp button */}

<div className="whatsapp-container">
<div className="whatsapp-text-container">
<span className="whatsapp-text">How can I help you ?</span>
</div>
    <button className="whatsapp-button" onClick={handleWhatsAppClick}>
        <FaWhatsapp />
    </button>
    </div>  
</div>
    );
}


export default SportsHomePage;