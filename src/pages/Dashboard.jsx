// src\pages\Dashboard.jsx (CORRECTED AND COMPLETE)

import React, { useState } from "react";
import MainLayout from "../layout/MainLayout.jsx"; 
import Sidebar from "../components/Sidebar.jsx"; 
import { VIEWS } from "../config/constants.jsx";
import PredictionsView from '../components/Prediction.jsx'; 

// --- 1. Mobile Menu Button Component (REQUIRED FOR SIDEBAR TOGGLE) ---
const MobileMenuButton = ({ isOpen, onClick }) => (
  <button
    onClick={onClick}
    className="sm:hidden fixed top-4 right-4 z-30 p-3 rounded-full bg-green-700 text-white shadow-lg transition-transform hover:scale-105"
    aria-label="Toggle menu"
  >
    {isOpen ? '✕' : '☰'}
  </button>
);

// ---------------------------------------------------------------------

export default function Dashboard() {
  const [activeView, setActiveView] = useState("EDA");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // <-- Required for mobile toggle

  // Function to handle view change and automatically close sidebar on mobile
  const handleSetActiveView = (view) => {
    setActiveView(view);
    setIsSidebarOpen(false); // Close sidebar after selection on mobile
  };

  const renderContent = () => {
    // Logic to render PredictionsView
    if (activeView === "Predicciones") {
      return <PredictionsView />; 
    }

    // Existing logic for other views
    const view = VIEWS[activeView];
    if (!view) return null;

    return (
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">
          {view.icon} {view.title}
        </h2>
        <p className="text-gray-700">
          {view.description}
          {view.extra}
          {view.suffix}
        </p>
      </div>
    );
  };

  return (
    <MainLayout> {/* <-- START of MainLayout (which provides h-screen) */}
      
      {/* 2. Mobile Menu Button */}
      <MobileMenuButton
        isOpen={isSidebarOpen}
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      />

      {/* 3. Sidebar with Responsive Classes (Hidden/Absolute on mobile, Static on PC) */}
      <Sidebar 
        activeView={activeView} 
        setActiveView={handleSetActiveView}
        className={`
          ${isSidebarOpen ? 'block' : 'hidden'} 
          sm:block 
          sm:relative 
          absolute z-20 h-full
        `} 
      />

      {/* 4. Main Content Area */}
      <main className="flex-1 overflow-y-auto bg-white w-full">
        {/* Mobile max-width constraint wrapper */}
        <div className="max-w-xl mx-auto overflow-x-auto sm:max-w-none">
          {renderContent()} 
        </div>
      </main>

    </MainLayout> /* <-- END of MainLayout */
  );
}