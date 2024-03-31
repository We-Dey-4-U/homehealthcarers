import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EventList from './components/EventList'; // Import EventList component

import SportsHomePage from './pages/SportsHomePage';

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<SportsHomePage/>} />
          <Route path="/events" element={<EventList />} /> {/* Add route for EventList */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;