import React, { useState, useEffect } from 'react';
import { FaSearch, FaShoppingCart, FaUser, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaBars, FaPoundSign, FaFlag, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './SportsHomePage.css'; // Import CSS file for styling
import '@fortawesome/fontawesome-free/css/all.css';
import axios from 'axios';
import EventList from '../components/EventList'; 




const SportsHomePage = () => {

  


    const [brands, setBrands] = useState([
        // Your brand logo images here
        "textile.jpg",
        "recycle.jpg",
        "sedex.jpg",
        "iso.jpg",
        "bsci.jpg",
      
       
        
     ]);


   
   
    const [partners, setPartners]= useState([
        // Your customer logo images here
        "Planet.jpg",
        "Arex.jpg",
        "sportic.jpg",
        "humm.jpg",
        "kap.jpg",
        "gag.jpg",
      
    ]);




    // Define categories array with dropdown items
    const categories = [
        {
            name: 'Home',
            id: 1,
            dropdownItems: [
                'Contact',
                'Contact Form',
                'Owayo Newsletter',
                'Legal Information',
                'Terms & Conditions',
                'Privacy Policy',
                'Cookies & Tracking'
               
            ]
        },

        {
            name: 'About Us',
            id: 4,
            dropdownItems: [
                'Events Calendar',
                'Upcoming Activities',
                'Event Schedule',
                'Event Calendar',
                'Upcoming Events',
                'Upcoming Events',
                'Event Agenda'
            ]
        },


      
        
        {
            name: 'Services',
            id: 2,
            dropdownItems: [
                'Customized Designs',
                'Efficient Logistics',
                'Flexible Quantities',
                'Reorder Assurance',
                'Innovative Research',
                'Comprehensive Production',
                'Direct Printing',
                'Team-Specific Designs',
                 'Branding Solutions'
            ]
        },


        {
            name: 'Workwear',
            id: 2,
            dropdownItems: [
                'My Design',
                'Precise Logistics',
                'One or ten thousand',
                'Guaranteed Reorders',
                'Research & Development',
                'All-in-One Producer',
                'Print, no pressing',
                'Individual Team Design',
                'Corporate Identity'
            ]
        },


        {
            name: 'contact Us',
            id: 2,
            dropdownItems: [
                'Contact',
                'Contact Form',
                'Owayo Newsletter',
                'Legal Information',
                'Terms & Conditions',
                'Privacy Policy',
                'Cookies & Tracking'
            ]
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
            name: 'Quick Link',
            id: 6,
            dropdownItems: [
                'FAQ', 
                'Shipping', 
                'Support']
        },
        {
            name: 'Categories',
            id: 7,
            dropdownItems: [
                'Products', 
                'Promotions', 
                'Collections']
        }
    ]);

    // Define courses array with sample data
    const products = [
        {
            imageSrc: 'https://static.owayo-cdn.com/newhp/img/productSelection/f5_gesamt_front.png',
            title: 'Responsive social media website ui design',
            description: 'Your website is the center of your digital eco-system,',
        },
        {
            imageSrc: 'https://static.owayo-cdn.com/newhp/img/productSelection/f3_gesamt_front.png',
            title: 'Responsive ecommerce web design',
            description: 'Your website is the center of your digital eco-system,',
        },
        {
            imageSrc: 'https://static.owayo-cdn.com/newhp/img/productSelection/fl3_gesamt_front.png',
            title: 'Responsive admin dashboard ui design',
            description: 'Your website is the center of your digital eco-system,',
        },
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [
        "doctor-thumb-01.jpg",
        "paypal.jpeg",
        "hero3.jpg",
       
      
    ]; // Add paths to your images


    const [services, setServices] = useState([
        {
            id: 1,
            title: ' Personal Care',
            image: 'service1.jpg',
            link: '/services/customized-designs'
        },
        {
            id: 2,
            title: 'Medication Managemen',
            image: 'service2.jpg',
            link: '/services/efficient-logistics'
        },
        {
            id: 3,
            title: 'in home Physical Therapy',
            image: 'service3.jpg',
            link: '/services/flexible-quantities'
        },
        {
            id: 4,
            title: ' Rehabilitation and Therapy',
            image: 'service4.jpg',
            link: '/services/reorder-assurance'
        },
        {
            id: 5,
            title: 'Skilled Nursing Care',
            image: 'service5.jpg',
            link: '/services/innovative-research'
        },
        {
            id: 6,
            title: 'Respite Care',
            image: 'service6.jpg',
            link: '/services/comprehensive-production'
        },
        {
            id: 7,
            title: ' Companionship and Socialization',
            image: 'service7.jpg',
            link: '/services/direct-printing'
        },
        {
            id: 8,
            title: ' Light Housekeeping',
            image: 'service8.jpg',
            link: '/services/team-specific-designs'
        },
        {
            id: 9,
            title: 'Home Base Medicalcare',
            image: 'service9.jpg',
            link: '/services/branding-solutions'
        },
    ]);

   
   
   
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, []);

    const handleCategoryClick = (category) => {
        // Handle category click
    };

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const [selectedCurrency, setSelectedCurrency] = useState('');
    const [selectedCountry, setSelectedCountry] = useState('');

    const handleCurrencyChange = (currency) => {
        setSelectedCurrency(currency);
    };

    const handleCountryChange = (country) => {
        setSelectedCountry(country);
    };

    
    
    const handleWhatsAppClick = () => {
        // Replace 'YOUR_WHATSAPP_NUMBER' with your actual WhatsApp number
        //const phoneNumber = '+2349052632663';
        const message = 'Hello! I have a question.';

         // Make an HTTP POST request to your backend
    axios.post('/api/send-whatsapp', { message })
    .then(response => {
        console.log(response.data);
        // Handle success if needed
    })
    .catch(error => {
        console.error('Error:', error);
        // Handle error if needed
    });

       
    };


  

    return (
        <div className="homepage">
            <nav className="navbar">
                <div className="logo">
                    <img src="" alt="Logo" />
                </div>
               
                <div className="menu-icon" onClick={toggleMenu}>
                    <FaBars />
                </div>



                <div className={`menu-links ${isMenuOpen ? 'active' : ''}`}>
                    {categories.map(category => (
                        <div className="dropdown" key={category.id}>
                            <a href={category.name === 'Online-Store' ? "https://we-dey-4u-4life-if7p-git-main-we-dey-4-u.vercel.app/" : `/${category.name}`} onClick={toggleMenu}>
                                {category.name}
                            </a>
                            <div className="dropdown-content">
                                {category.dropdownItems.map((item, index) => (
                                    <a key={index} onClick={() => handleCategoryClick(item)} href={`/${category.name}/${item}`}>{item}</a>
                                ))}
                                {/* Add the online store link here */}
                                {category.name === 'Online-Store' && (
                                    <a href="https://we-dey-4u-4life-if7p-git-main-we-dey-4-u.vercel.app/">SHOP NOW</a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
           
           
                <div className="search">
                    <input type="text" placeholder="Search..." />
                    <button><FaSearch /></button>
                </div>

                
                
                
                <div className="dropdown">
                <button className="dropbtn currency-btn"> GBP</button>
                        <div className="dropdown-content">
                        <button className="dropdown-item" onClick={() => handleCurrencyChange('USD')}>
                            <span className="item-icon">$</span> USD
                      </button>
                         <button className="dropdown-item" onClick={() => handleCurrencyChange('Euro')}>
                            <span className="item-icon">€</span> Euro
                       </button>
                         <button className="dropdown-item" onClick={() => handleCurrencyChange('GBP')}>
                          <span className="item-icon">£</span> GBP
                        </button>
                        </div>
                    </div>
                   
                    
                    
                    
                    <div className="dropdown">
                    <button className="dropbtn country-btn">  ENG</button>
                        <div className="dropdown-content" width="200px" >
                        <button className="dropdown-item" onClick={() => handleCountryChange('USA 🇺🇸')}>
                        <img className="item-icon"  src="/eng flag.jpg" alt="flag" />
                         <span>English</span>
                      </button>
                      <button className="dropdown-item" onClick={() => handleCountryChange('USA 🇺🇸')}>
                        <img className="item-icon" src="/french.jpg" alt="flag" />
                         <span>French</span>
                      </button>
                      <button className="dropdown-item" onClick={() => handleCountryChange('USA 🇺🇸')}>
                        <img className="item-icon" src="/spanish.jpg" alt="flag" />
                         <span>Spanish</span>
                      </button>
                      <button className="dropdown-item" onClick={() => handleCountryChange('USA 🇺🇸')}>
                        <img className="item-icon" src="/italian.jpg" alt="flag" />
                         <span>Italian</span>
                      </button>
                      <button className="dropdown-item" onClick={() => handleCountryChange('USA 🇺🇸')}>
                        <img className="item-icon" src="/dutch.jpg" alt="flag" />
                         <span>Dutch</span>
                      </button>
                 </div>
             </div>



                <div className="cart">
                <a href="https://we-dey-4u-4life-if7p-git-main-we-dey-4-u.vercel.app/">
                    <button><FaShoppingCart /> </button>
                    </a>
                </div>
            </nav>





            <div className="hero" style={{ position: "relative" }}>
    {/* Hero section with changing pictures */}
    <img src={images[currentImageIndex]} alt="Hero Image" style={{ width: "100%", height: "400px", objectFit: "cover" }} />
    <div className="hero-text" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
        {/* <h1>Welcome to My Portfolio</h1> */}
        {/* Add more text content here */}
    </div>
</div>





<div className="container">
      <section className="promo-section">
        <div className="container">
          <div className="promo-content">
            <div className="promo-text">
              <h2>At our homecare services agency, we offer exceptional, personalized services designed to provide you with the peace of mind you deserve</h2>
            </div>
          </div>
          <div className="services-grid">
            {services.map(service => (
              <div key={service.id} className="service-container">
                <img src={service.image} alt={service.title} className="service-image" />
                <h3>{service.title}</h3>
                <a href={service.link}>Read more</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>


   {/* Store Section */}
<section className="store-section" style={{ backgroundImage: `url('/buybeta blue.png')`, height: '400px', width: '100%', backgroundSize: 'cover', backgroundPosition: 'center' }}>
    <div className="container">
    <div className="content" style={{ color: 'white', marginBottom: '60px' }}>
            <h2>Discover Unique Customized Brand Items</h2>
            <p>Explore our store and find customized brand items that will make your soulmate feel special</p>
            <Link to="https://we-dey-4u-4life.vercel.app/" className="store-link">Visit Our Store</Link>
        </div>
    </div>
</section>


         
<div class="container">
            {/* Popular product section */}
            <section className="products">
                <div className="container products_container">
                    {products.map((course, index) => (
                        <div className="product" key={index}>
                            <div className="product_image">
                                <img src={course.imageSrc} alt="" />
                            </div>
                            <div className="product_info">
                                <h4>{course.title}</h4>
                                <p>{course.description}</p>
                                <a href="course.html" className="btn btn-primary">
                                    Learn more
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="how-it-works">
                <h2>How It Works</h2>
                <div className="icon-grid">
                    <div className="icon">
                        <FaSearch />
                        <p>Search</p>
                    </div>
                    <div className="icon">
                        <FaShoppingCart />
                        <p>Shop</p>
                    </div>
                    <div className="icon">
                        <FaUser />
                        <p>Account</p>
                    </div>
                </div>
            </section>

            <div className="home-container">
                <section className="section">
                    <h2>Meditation Guides</h2>
                    <p>
                        Explore a variety of mental health resources to support your well-being. Find articles,
                        videos, and tools to help you navigate your mental health journey.
                    </p>
                </section>

                <section className="section">
                    <h2>Meditation Guides</h2>
                    <p>
                        Explore a variety of mental health resources to support your well-being. Find articles,
                        videos, and tools to help you navigate your mental health journey.
                    </p>
                </section>

                <section className="section">
                    <h2>Meditation Guides</h2>
                    <p>
                        Explore a variety of mental health resources to support your well-being. Find articles,
                        videos, and tools to help you navigate your mental health journey.
                    </p>
                </section>

                <section className="section">
                    <h2>Meditation Guides</h2>
                    <p>
                        Explore a variety of mental health resources to support your well-being. Find articles,
                        videos, and tools to help you navigate your mental health journey.
                    </p>
                </section>

                <section className="section">
                    <h2>Meditation Guides</h2>
                    <p>
                        Explore a variety of mental health resources to support your well-being. Find articles,
                        videos, and tools to help you navigate your mental health journey.
                    </p>
                </section>

                <section className="section">
                    <h2>Meditation Guides</h2>
                    <p>
                        Explore a variety of mental health resources to support your well-being. Find articles,
                        videos, and tools to help you navigate your mental health journey.
                    </p>
                </section>

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
            <a href="https://www.facebook.com/share/hgi5x3MKEztwx8hd/?mibextid=K35XfP"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="https://www.instagram.com/mazidukeduchess?igsh=MndnZjJja2tzNzI0&utm_source=qr"><FaInstagram /></a>
            {/* Add more social media icons as needed */}
        </div>
    </div>
 </footer>

  {/* Card Images Section */}
  <div className="container-fluid footer-bottom">
    <div className="delivery-image">
        {/* Add your card icons here */}
        <img src="/paypal.jpeg" alt="" />
                
        {/* Add more card icons if needed */}
    </div>
    <div className="delivery-image2">
                {/* Add your delivery icons here */}
                <img src="/dhl.jpeg" alt="" />
                <img src="/emirates.png" alt="DHL+" />
                <img src="https://th.bing.com/th?id=OSK.toZONM9548Dp29GG29hnkXOQnbs_PA3cilnYrOLKiRg&w=120&h=120&c=7&rs=1&qlt=80&o=6&pid=SANGAM" alt="Qatar" />
            </div>
        </div>

 


<div className="copyright">
    <p>© 2015 home health services. All rights reserved.</p>
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