import React, { useState, useEffect } from 'react';
import { FaSearch, FaShoppingCart, FaUser , FaPercent ,FaTruck , FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './SportsHomePage.css'; // Import CSS file for styling


const SportsHomePage = () => {

    const [texts, setTexts] = useState([
        "Up to 50% off",
        "Ready to be shipped in 7 to 13 days",
        "Customer Reviews: 5.0 / 5.0 out of 3,221 Customer Reviews"
    ]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % texts.length);
        }, 5000); // Change text every 5 seconds

        return () => clearInterval(interval);
    }, [texts.length]);







    const [categories, setCategories] = useState([
        { name: 'Football', id: 1, dropdownItems: ['Item 1', 'Item 2', 'Item 3'] },
        { name: 'Basketball', id: 2, dropdownItems: ['Item 4', 'Item 5', 'Item 6'] },
        { name: 'Tennis', id: 3, dropdownItems: ['Item 7', 'Item 8', 'Item 9'] },
        // Add more categories as needed
    ]);

    

    // Define courses array with sample data
    const courses = [
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




    return (
        <div className="homepage">
            <nav className="navbar">
                <div className="logo">
                    <img src="/path/to/logo.png" alt="Logo" />
                </div>
                <div className="links">
                    <div className="dropdown">
                    <Link to="/sports">Soorts</Link>
                        <div className="dropdown-content">
                            {categories.map(category => (
                                <a key={category.id} onClick={() => handleCategoryClick(category)}>{category.name}</a>
                            ))}
                        </div>
                    </div>
                    <div className="dropdown">
                    <Link to="/Products">Prodcts </Link>
                        <div className="dropdown-content">
                            {categories.map(category => (
                                <a key={category.id} onClick={() => handleCategoryClick(category)}>{category.name}</a>
                            ))}
                        </div>
                    </div>
                    <div className="dropdown">
                    <Link to="/Strengths">Strengths </Link>
                        
                        <div className="dropdown-content">
                            {/* Strengths categories */}
                        </div>
                    </div>
                    <div className="dropdown">
                    <Link to="/Strengths">Strengths </Link>
                        <div className="dropdown-content">
                            {/* Support categories */}
                        </div>
                    </div>
                    <div className="dropdown">
                    <Link to="/Strengths">About Owayo </Link>
                        
                        <div className="dropdown-content">
                            {/* About Owayo categories */}
                        </div>
                    </div>
                    <div className="dropdown">
                    <Link to="/Contact">Contact </Link>
                        <div className="dropdown-content">
                            {/* Contact categories */}
                        </div>
                    </div>
                    
                    <div className="dropdown">
                    <Link to="/Contact">Contact </Link>
                        <div className="dropdown-content">
                            {/* Magazine categories */}
                        </div>
                    </div>
                </div>
                <div className="search">
                    <input type="text" placeholder="Search..." />
                    <button><FaSearch /></button>
                </div>
                <div className="cart">
                    <button><FaShoppingCart /> Add to Cart</button>
                </div>
            </nav>

            <div className="newsletter">
            <h2>Our customer</h2>
            <div className="marquee-container">
                {texts.map((text, index) => (
                    <p key={index} className={index === currentIndex ? 'visible' : 'hidden'}>
                        {text}
                    </p>
                ))}
            </div>
        </div>
            
            <div className="hero">
                {/* Hero section with changing pictures */}
                <img src={images[currentImageIndex]} alt="Hero Image" />
            </div>


            <div className="newsletter">
            <h2>Our customer</h2>
            <div className="marquee-container">
                {texts.map((text, index) => (
                    <p key={index} className={index === currentIndex ? 'visible' : 'hidden'}>
                        {text}
                    </p>
                ))}
            </div>
        </div>
           
           
            


      {/* Popular Courses section */}
      <section className="courses">
               
                <div className="container courses_container">
                    {courses.map((course, index) => (
                        <div className="course" key={index}>
                            <div className="course_image">
                                <img src={course.imageSrc} alt="" />
                            </div>
                            <div className="course_info">
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
            Discover effective coping mechanisms to deal with stress and challenges. Learn different
            techniques such as mindfulness, breathing exercises, and positive affirmations.
          </p>
        </section>
  
        <section className="section">
        <h2>Meditation Guides</h2>
          <p>
            Receive personalized recommendations based on your preferences and needs. Our system
            analyzes your interactions and provides content tailored to your mental health goals.
          </p>
        </section>
        
        <section className="section">
        <h2>Meditation Guides</h2>
          <p>
            Track and visualize your mood changes over time to better understand your mental
            well-being. Use our mood tracking feature to log your emotions and identify patterns.
          </p>
        </section>
  
        <section className="section">
          <h2>Meditation Guides</h2>
          <p>
            Access meditation guides to help you relax and center yourself. Our collection includes
            guided meditations, breathing exercises, and soothing sounds to support your mental
            wellness.
          </p>
        </section>
  
        <section className="section">
          
        <h2>Meditation Guides</h2>
          <p>
            Join our supportive community to connect with others on similar journeys. Share your
            experiences, provide encouragement, and engage in discussions that promote mental health
            awareness and understanding.
          </p>
        </section>
        
      </div>

       {/* Footer */}
       <footer className="footer">
                <div className="footer-column">
                    <h2>Sports</h2>
                    <ul>
                        <li><Link to="/football">Football</Link></li>
                        <li><Link to="/basketball">Basketball</Link></li>
                        <li><Link to="/tennis">Tennis</Link></li>
                        {/* Add more sports links */}
                    </ul>
                </div>
                <div className="footer-column">
                    <h2>Products</h2>
                    <ul>
                        <li><Link to="/jerseys">Jerseys</Link></li>
                        <li><Link to="/shoes">Shoes</Link></li>
                        <li><Link to="/equipment">Equipment</Link></li>
                        {/* Add more product links */}
                    </ul>
                </div>
                <div className="footer-column">
                    <h2>About</h2>
                    <ul>
                        <li><Link to="/about-us">About Us</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        {/* Add more about links */}
                    </ul>
                </div>
                <div className="footer-column">
                    <h2>Support</h2>
                    <ul>
                        <li><Link to="/faq">FAQ</Link></li>
                        <li><Link to="/support">Support</Link></li>
                        {/* Add more support links */}
                    </ul>
                </div>
                <div className="footer-column">
                    <h2>Magazine</h2>
                    <ul>
                        <li><Link to="/articles">Articles</Link></li>
                        <li><Link to="/news">News</Link></li>
                        {/* Add more magazine links */}
                    </ul>
                </div>
            </footer>
        </div>
    );
}

export default SportsHomePage;