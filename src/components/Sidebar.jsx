// Sidebar.jsx (updated)
import React from "react";

// Accept className prop and apply it to the <aside> element
export default function Sidebar({ activeView, setActiveView, className = "" }) { 
  const menuItems = [
    { id: "EDA", icon: "📊", label: "EDA" },
    { id: "EDACleanData", icon: "🔥", label: "Clean Data (EDA)" },
    { id: "Modelos", icon: "🤖", label: "Modelos" },
    { id: "Predicciones", icon: "🔮", label: "Predicciones" }
  ];

  return (
    // Apply the className prop here
    <aside className={`w-64 bg-green-700 text-white shadow-lg flex-shrink-0 ${className}`}>
      <nav className="p-4 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            // Use the passed setActiveView function
            onClick={() => setActiveView(item.id)} 
            className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
              activeView === item.id
                ? "bg-green-500 font-semibold shadow-md"
                : "hover:bg-green-600"
            }`}
          >
            {item.icon} {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
}