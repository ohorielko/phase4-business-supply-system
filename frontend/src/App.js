import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/home";
import DisplayOwnerViewPage from "./pages/ownerViewPage";
import DisplayEmployeeViewPage from "./pages/employeeViewPage";
import DisplayDriverViewPage from "./pages/driverViewPage";
import AddOwnerPage from './pages/AddOwnerPage';
import AddEmployeePage from './pages/AddEmployeePage';
import AddDriverPage from './pages/AddDriverPage';
import StartFundingPage from './pages/StartFundingPage';
import HireEmployeePage from './pages/HireEmployeePage';
import FireEmployeePage from './pages/FireEmployeePage';
import RemoveDriverRolePage from './pages/RemoveDriverRolePage';
import AddWorkerRolePage from './pages/AddWorkerRolePage';
import AddProductPage from './pages/AddProductPage';
import PurchaseProductPage from './pages/PurchaseProductPage';
import RemoveProductPage from './pages/RemoveProductPage';
import AddVanPage from './pages/AddVanPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/display-owner-view" element={<DisplayOwnerViewPage />} />
        <Route path="/employees-view" element={<DisplayEmployeeViewPage />} />
        <Route path="/drivers-view" element={<DisplayDriverViewPage />} />
        
        <Route path="/add-owner" element={<AddOwnerPage />} />
        <Route path="/start-funding" element={<StartFundingPage />} />

        <Route path="/add-employee" element={<AddEmployeePage />} />
        <Route path="/hire-employee" element={<HireEmployeePage />} />
        <Route path="/fire-employee" element={<FireEmployeePage />} />
        
        <Route path="/add-driver-role" element={<AddDriverPage />} />
        <Route path="/remove-driver-role" element={<RemoveDriverRolePage />} />

        <Route path="/add-worker-role" element={<AddWorkerRolePage />} />

        <Route path="/add-product" element={<AddProductPage />} />
        <Route path="/purchase-product" element={<PurchaseProductPage />} />
        <Route path="/remove-product" element={<RemoveProductPage />} />

        <Route path="/add-van" element={<AddVanPage />} />
      </Routes>
    </Router>
  );
}

export default App;
