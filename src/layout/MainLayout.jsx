import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MainLayout({ children }) {
  return (
    <div className="flex flex-col h-screen bg-green-50">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        {children}
      </div>
      <Footer />
    </div>
  );
}