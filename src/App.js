import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EventList from './components/EventList'; // Import EventList component
import ContactPage from './pages/ContactPage'; 
import SportsHomePage from './pages/SportsHomePage';
import AboutUsPage from './pages/AboutUsPage'; // Make sure to update the import path if needed
import PersonalCarePage from './services/PersonalCarePage';
import MedicationManagementPage from './services/MedicationManagementPage';
import PhysicalTherapyPage from './services/PhysicalTherapyPage';
import RehabilitationTherapyPage from './services/RehabilitationTherapyPage';
import SkilledNursingCarePage from './services/SkilledNursingCarePage';
import ElderlyCarePage from './services/ElderlyCarePage';
import CompanionshipAndSocializationPage from './services/CompanionshipAndSocializationPage';
import LightHousekeepingPage from './services/LightHousekeepingPage';







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
          <Route path="/services/personal-care" element={<PersonalCarePage />} />
          <Route path="/services/MedicationManagementPage" element={<MedicationManagementPage />} />
          <Route path="/services/PhysicalTherapyPage" element={<PhysicalTherapyPage />} />
          <Route path="/services/RehabilitationTherapyPage" element={<RehabilitationTherapyPage />} />
          <Route path="/services/SkilledNursingCarePage" element={<SkilledNursingCarePage/>} />
          <Route path="/services/ElderlyCarePage" element={<ElderlyCarePage/>} />
          <Route path="/services/CompanionshipAndSocializationPage" element={<CompanionshipAndSocializationPage/>} />
          <Route path="/services/LightHousekeepingPage" element={<LightHousekeepingPage/>} />
        </Routes>
      </div>
    </Router>
  );
};
export default App;
