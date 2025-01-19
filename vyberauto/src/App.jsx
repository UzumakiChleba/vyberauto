import React, { useState } from 'react';
import Navbar from './component/Navbar.jsx';
import CarFilter from './component/Filtr.jsx';
import CarList from './component/CarList.jsx';
import LoginPage from './component/LoginPage.jsx';
import RegisterPage from './component/RegisterPage.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './CSSstyly/App.css';

function App() {
  const [filters, setFilters] = useState({});
  
  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    console.log('Applied filters:', newFilters); // Ověření, že filtry se mění
  };

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <div className="container">
              <div className="filter-section">
                <CarFilter onFilterChange={handleFilterChange} />
              </div>
              <div className="car-list-section">
                <CarList filters={filters} />
              </div>
            </div>
          } />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
