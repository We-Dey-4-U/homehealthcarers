import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EventList from './components/EventList'; // Import EventList component
import ContactPage from './pages/ContactPage'; 
import SportsHomePage from './pages/SportsHomePage';
import AboutUsPage from './pages/AboutUsPage'; // Make sure to update the import path if needed


const App = () => {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<SportsHomePage/>} /> 
          <Route path="/contact" element={<ContactPage />} /> 
          <Route path="/events" element={<EventList />} /> {/* Add route for EventList */}
          <Route path="/about-us" element={<AboutUsPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;