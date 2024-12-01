import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/home";
import DisplayOwnerViewPage from "./pages/ownerViewPage";
import DisplayEmployeeViewPage from "./pages/employeeViewPage";
import DisplayDriverViewPage from "./pages/driverViewPage";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/display-owner-view" element={<DisplayOwnerViewPage />} />
        <Route path="/employees-view" element={<DisplayEmployeeViewPage />} />
        <Route path="/drivers-view" element={<DisplayDriverViewPage />} />
      </Routes>
    </Router>
  );
}

export default App;
