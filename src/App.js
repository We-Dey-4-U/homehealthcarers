import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EventList from './components/EventList'; // Import EventList component
import ContactPage from './pages/ContactPage'; 
import SportsHomePage from './pages/SportsHomePage';
import AboutUsPage from './pages/AboutUsPage'; // Make sure to update the import path if needed
import PersonalCarePage from './pages/PersonalCarePage';
import MedicationManagementPage from './pages/MedicationManagementPage';
import PhysicalTherapyPage from './pages/PhysicalTherapyPage';
import RehabilitationTherapyPage from './pages/RehabilitationTherapyPage';
import SkilledNursingCarePage from './pages/SkilledNursingCarePage';
import ElderlyCarePage from './pages/ElderlyCarePage';
import CompanionshipAndSocializationPage from './pages/CompanionshipAndSocializationPage';
import LightHousekeepingPage from './pages/LightHousekeepingPage';
import Payslip from './pages/Payslip';






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
          <Route path="/pages/personal-care" element={<PersonalCarePage />} />
          <Route path="/pages/MedicationManagementPage" element={<MedicationManagementPage />} />
          <Route path="/pages/PhysicalTherapyPage" element={<PhysicalTherapyPage />} />
          <Route path="/pages/RehabilitationTherapyPage" element={<RehabilitationTherapyPage />} />
          <Route path="/pages/SkilledNursingCarePage" element={<SkilledNursingCarePage/>} />
          <Route path="/pages/ElderlyCarePage" element={<ElderlyCarePage/>} />
          <Route path="/pages/CompanionshipAndSocializationPage" element={<CompanionshipAndSocializationPage/>} />
          <Route path="/pages/LightHousekeepingPage" element={<LightHousekeepingPage/>} />
          <Route path="/pages/Payslip" element={<Payslip/>} />
        </Routes>
        
      </div>
    </Router>
  );
};
export default App;
