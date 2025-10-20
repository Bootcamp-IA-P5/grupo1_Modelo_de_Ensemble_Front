import React from "react";

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white shadow-lg">
      <div className="px-6 py-4 flex justify-between items-center">
        <p className="text-sm">
          © 2025 EcoPredict - Machine Learning Forest Analysis
        </p>
        <p className="text-sm text-green-200">
          Powered by MongoDB, React & ML Models
        </p>
      </div>
    </footer>
  );
}