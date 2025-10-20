import React, { useState } from "react";
import MainLayout from "../layout/MainLayout";
import Sidebar from "../components/Sidebar";
import { VIEWS } from "../config/constants.jsx";

export default function Dashboard() {
  const [activeView, setActiveView] = useState("EDA");

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
      </div>
    );
  };

  return (
    <MainLayout>
      <Sidebar activeView={activeView} setActiveView={setActiveView} />
      <main className="flex-1 overflow-y-auto bg-white">
        {renderContent()}
      </main>
    </MainLayout>
  );
}