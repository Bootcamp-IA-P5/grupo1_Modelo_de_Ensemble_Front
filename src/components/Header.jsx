import React from "react";

export default function Header() {
  return (
    <header className="bg-green-800 text-white shadow-lg">
      <div className="px-6 py-4">
        <h1 className="text-3xl font-bold">🌿 EcoPredict</h1>
        <p className="text-green-200 text-sm mt-1">
          FireRiskAI: Herramienta de prevención de incendios
        </p>
      </div>
    </header>
  );
}