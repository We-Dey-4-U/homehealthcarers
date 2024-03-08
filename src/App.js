import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import SportsHomePage from './pages/SportsHomePage';

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<SportsHomePage/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;