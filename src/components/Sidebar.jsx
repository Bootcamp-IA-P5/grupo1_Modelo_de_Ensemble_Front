import React from "react";

export default function Sidebar({ activeView, setActiveView }) {
  const menuItems = [
    { id: "EDA", icon: "📊", label: "EDA" },
    { id: "EDACleanData", icon: "🔥", label: "Clean Data (EDA)" },
    { id: "Modelos", icon: "🤖", label: "Modelos" },
    { id: "Predicciones", icon: "🔮", label: "Predicciones" }
  ];

  return (
    <aside className="w-64 bg-green-700 text-white shadow-lg">
      <nav className="p-4 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
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