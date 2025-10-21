// Dashboard.jsx
import React, { useState } from "react";
import MainLayout from "../layout/MainLayout";
import Sidebar from "../components/Sidebar";
import { VIEWS } from "../config/constants.jsx";

// Component for the mobile menu button (defined here for simplicity)
const MobileMenuButton = ({ isOpen, onClick }) => (
  <button
    onClick={onClick}
    // Fixed position, hidden on screens 'sm' and up
    className="sm:hidden fixed top-4 right-4 z-30 p-3 rounded-full bg-green-700 text-white shadow-lg transition-transform hover:scale-105"
    aria-label="Toggle menu"
  >
    {isOpen ? '✕' : '☰'}
  </button>
);

export default function Dashboard() {
  const [activeView, setActiveView] = useState("EDA");
  // 1. New state to control sidebar visibility on mobile
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to handle view change and automatically close sidebar on mobile
  const handleSetActiveView = (view) => {
    setActiveView(view);
    setIsSidebarOpen(false); // Close sidebar after selection on mobile
  };

  const renderContent = () => {
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
        {/* Placeholder for your Maps/Graphics components */}
        <div className="mt-8 h-96 border border-dashed border-gray-400 flex items-center justify-center">
            {activeView} Content (Maps/Charts) Placeholder
        </div>
      </div>
    );
  };

  return (
    <MainLayout>
      {/* 2. Mobile Menu Button */}
      <MobileMenuButton
        isOpen={isSidebarOpen}
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      />

      {/* 3. Sidebar with Responsive Classes */}
      <Sidebar 
        activeView={activeView} 
        setActiveView={handleSetActiveView} // Use the new handler
        className={`
          ${isSidebarOpen ? 'block' : 'hidden'} 
          sm:block 
          sm:relative 
          absolute z-20 h-full
        `} 
      />

      {/* 4. Main Content Area */}
      {/* a. flex-1 overflow-y-auto bg-white: Enables vertical scrolling for content.
          b. w-full: Takes full width.
      */}
      <main className="flex-1 overflow-y-auto bg-white w-full">
        {/*
            c. Mobile Content Constraint (max-width: 600px equivalent)
               - max-w-xl: Sets max-width to 36rem (576px) on mobile (default).
               - mx-auto: Centers the content block horizontally when max-w is active.
               - sm:max-w-none: Removes the max-width on screens 'sm' and up to use full available space.
               - overflow-x-auto: Ensures content scrolls horizontally if it exceeds 576px on small screens.
        */}
        <div className="max-w-xl mx-auto overflow-x-auto sm:max-w-none">
          {renderContent()}
        </div>
      </main>
    </MainLayout>
  );
}