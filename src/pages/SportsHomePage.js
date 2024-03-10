import React, { useState, useEffect } from 'react';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube ,FaBars} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import './SportsHomePage.css'; // Import CSS file for styling
import '@fortawesome/fontawesome-free/css/all.css';
import { FaPoundSign, FaFlag  } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import axios from 'axios';
import { FaDhl, FaDhlPlus  } from 'react-icons/fa'; 
import $ from 'jquery'; 

const SportsHomePage = () => {

  


    const [brands, setBrands] = useState([
        // Your brand logo images here
        "https://static.owayo-cdn.com/newhp/img/owayo-logo-language-web.svg",
        "https://static.owayo-cdn.com/newhp/img/owayo-logo-language-web.svg",
        "https://static.owayo-cdn.com/newhp/img/owayo-logo-language-web.svg",
        "https://static.owayo-cdn.com/newhp/img/owayo-logo-language-web.svg",
        "https://static.owayo-cdn.com/newhp/img/owayo-logo-language-web.svg",
        "https://static.owayo-cdn.com/newhp/img/owayo-logo-language-web.svg",
        "https://static.owayo-cdn.com/newhp/img/owayo-logo-language-web.svg",
        "https://static.owayo-cdn.com/newhp/img/owayo-logo-language-web.svg",
        "https://static.owayo-cdn.com/newhp/img/owayo-logo-language-web.svg",
       
       
       
        
     ]);


   
   
    const [partners, setPartners]= useState([
        // Your customer logo images here
        "https://static.owayo-cdn.com/newhp/img/owayo-logo-language-web.svg",
        "https://static.owayo-cdn.com/newhp/img/owayo-logo-language-web.svg",
        "https://static.owayo-cdn.com/newhp/img/owayo-logo-language-web.svg",
        "https://static.owayo-cdn.com/newhp/img/owayo-logo-language-web.svg",
        "https://static.owayo-cdn.com/newhp/img/owayo-logo-language-web.svg",
        "https://static.owayo-cdn.com/newhp/img/owayo-logo-language-web.svg",
        "https://static.owayo-cdn.com/newhp/img/owayo-logo-language-web.svg",
        "https://static.owayo-cdn.com/newhp/img/owayo-logo-language-web.svg",
        "https://static.owayo-cdn.com/newhp/img/owayo-logo-language-web.svg",
        "https://static.owayo-cdn.com/newhp/img/owayo-logo-language-web.svg",
       
        
       
    ]);
     
   
    

    useEffect(() => {
        const interval = setInterval(() => {
            $('#brand-marquee-container img').animate({marginLeft: '-100%'}, 10000, function() {
                $(this).css({marginLeft: '100%', opacity: 1}).parent().find('img:last').after($(this));
            });
        }, 15000);
    
        return () => clearInterval(interval);
    }, [brands]);
    
    useEffect(() => {
        const interval = setInterval(() => {
            $('#partner-marquee-container img').animate({marginLeft: '-100%'}, 10000, function() {
                $(this).css({marginLeft: '100%', opacity: 1}).parent().find('img:last').after($(this));
            });
        }, 15000);
    
        return () => clearInterval(interval);
    }, [partners]);
   









    // Define categories array with dropdown items
    const categories = [
        {
            name: 'About Us',
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
            name: 'Sportwear',
            id: 4,
            dropdownItems: [
                'Get in Touch',
                'Contact Form',
                'Newsletter Subscription',
                'Legal Info',
                'Terms of Service',
                'Privacy Policy',
                'Cookie Policy'
            ]
        },


      
        
        {
            name: 'Promotion Wear',
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
                'History']
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
        'https://static.owayo-cdn.com/newhp/img/sporthome/slider/desktop/en/custom-football-jersey-15.jpg',
        'https://static.owayo-cdn.com/newhp/img/sporthome/slider/desktop/en/print-on-jersey-15.jpg',
        'https://static.owayo-cdn.com/newhp/img/sporthome/slider/desktop/en/buy-football-jersey-15.jpg',
        'https://static.owayo-cdn.com/newhp/img/sporthome/slider/desktop/en/custom-football-jersey-16.jpg',
    ]; // Add paths to your images

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

        // Construct the WhatsApp URL
       // const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        // Open WhatsApp in a new tab
       // window.open(url, '_blank');
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
                            <Link to={`/${category.name}`} onClick={toggleMenu}>
                                {category.name}
                            </Link>
                            <div className="dropdown-content">
                                {category.dropdownItems.map((item, index) => (
                                    <a key={index} onClick={() => handleCategoryClick(item)}>{item}</a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
           
           
           
                <div className="search">
                    <input type="text" placeholder="Search..." />
                    <button><FaSearch /></button>
                </div>

                <div className="dropdown">
                <button className="dropbtn currency-btn"><FaPoundSign /> GBP</button>
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
                    <button className="dropbtn country-btn"> <FaFlag /> Country</button>
                        <div className="dropdown-content">
                        <button className="dropdown-item" onClick={() => handleCountryChange('USA 🇺🇸')}>
                         <span className="item-icon">🇺🇸</span> USA
                     </button>
                   <button className="dropdown-item" onClick={() => handleCountryChange('Italy 🇮🇹')}>
                  <span className="item-icon">🇮🇹</span> Italy
                  </button>
                 </div>
             </div>






                <div className="cart">
                    <button><FaShoppingCart /> </button>
                </div>
            </nav>

            
            <div className="newsletter">
    <div id="brand-marquee-container" className="marquee-container">
        <h2>Our Brand</h2>
        <div className="vertical-line"></div>
        <div className="marquee-inner">
            {brands.map((imageUrl, index) => (
                <img key={index} src={imageUrl} alt={`brand Logo ${index}`} />
            ))}
        </div>
    </div>
    </div>

            <div className="hero">
                {/* Hero section with changing pictures */}
                <img src={images[currentImageIndex]} alt="Hero Image" width="100%" />
            </div>



            <div className="newsletter">
    <div id="partner-marquee-container" className="marquee-container">
        <h2>Our Partners</h2>
        <div className="vertical-line"></div>
        <div className="marquee-inner">
            {partners.map((imageUrl, index) => (
                <img key={index} src={imageUrl} alt={`partner Logo ${index}`} />
            ))}
        </div>
    </div>
</div>


            
           
           
            <div class="container">
    <section class="promo-section">
    <div class="container">
        <div class="promo-content">
            <div class="promo-text">
                <h2>Promotional Section</h2>
                <p>Here you can add some promotional text describing your products or services.</p>
            </div>
            <div class="promo-buttons">
                <button class="btn btn-left">Left Button</button>
                <button class="btn btn-right">Right Button</button>
            </div>
        </div>
    </div>
</section>

         
         
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
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            {/* Add more social media icons as needed */}
        </div>
    </div>
 </footer>

  {/* Card Images Section */}
  <div className="container-fluid footer-bottom">
    <div className="delivery-image">
        {/* Add your card icons here */}
        <img src="https://th.bing.com/th/id/OIP.brvyVSLjZHtJj-re9nzn7QHaCT?pid=ImgDet&w=474&h=147&rs=1" alt="" />
                
        {/* Add more card icons if needed */}
    </div>
    <div className="delivery-image">
                {/* Add your delivery icons here */}
                <img src="https://th.bing.com/th/id/OIP.lh3nPxgg7nSZy_cpTnesXAHaFj?w=202&h=180&c=7&r=0&o=5&pid=1.7" alt="" />
                <img src="https://th.bing.com/th?id=OSK.3IjzF0nGWNqDr_72yQQCtOvFJOMjZwl0WWL-MawT-V4&w=80&h=80&c=7&o=6&pid=SANGAM" alt="DHL+" />
                <img src="https://th.bing.com/th?id=OSK.Z5dLO4oDnFYEphhm11lCLUA2hkj7FZ9LkFrxUVxPuwc&w=120&h=120&c=7&rs=1&qlt=80&o=6&pid=SANGAM" alt="Emirate" />
                <img src="https://th.bing.com/th?id=OSK.toZONM9548Dp29GG29hnkXOQnbs_PA3cilnYrOLKiRg&w=120&h=120&c=7&rs=1&qlt=80&o=6&pid=SANGAM" alt="Qatar" />
            </div>
        </div>

 


<div className="copyright">
    <p>© 2024 owayo GmbH. All rights reserved.</p>
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