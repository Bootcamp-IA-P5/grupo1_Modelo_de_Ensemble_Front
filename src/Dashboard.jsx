import React, { useState } from "react";

/*
  Dashboard base sin conexión a backend.
  Contiene:
  - Sidebar lateral con tres secciones: EDA, Modelos, Predicciones.
  - Área principal que cambia según la vista seleccionada.
  - Estructura visual básica con Tailwind.
*/

export default function Dashboard() {
  // Estado para controlar qué vista se está mostrando
  const [activeView, setActiveView] = useState("EDA");

  // Renderiza contenido según la vista seleccionada
  const renderContent = () => {
    switch (activeView) {
      case "EDA":
        return (
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">
              🌍 Exploratory Data Analysis (EDA)
            </h2>
            <p className="text-gray-700">
              Aquí se mostrarán gráficos y estadísticas del dataset
              <b> covtype.data.gz</b> almacenado en MongoDB.
            </p>
          </div>
        );
      case "Modelos":
        return (
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">
              🤖 Modelos de Machine Learning
            </h2>
            <p className="text-gray-700">
              Aquí se mostrarán los resultados de los modelos entrenados
              (Random Forest, XGBoost, LightGBM) y sus métricas de evaluación.
            </p>
          </div>
        );
      case "Predicciones":
        return (
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">
              🔮 Predicciones
            </h2>
            <p className="text-gray-700">
              Aquí se visualizarán las predicciones del modelo más eficiente y
              los resultados interpretables (SHAP, probabilidades, etc.).
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-green-50">
      {/* Sidebar lateral */}
      <aside className="w-64 bg-green-700 text-white flex flex-col">
        <div className="p-4 text-2xl font-bold border-b border-green-600">
          EcoPredict
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <button
            onClick={() => setActiveView("EDA")}
            className={`w-full text-left px-3 py-2 rounded-lg ${
              activeView === "EDA"
                ? "bg-green-500 font-semibold"
                : "hover:bg-green-600"
            }`}
          >
            📊 EDA
          </button>
          <button
            onClick={() => setActiveView("Modelos")}
            className={`w-full text-left px-3 py-2 rounded-lg ${
              activeView === "Modelos"
                ? "bg-green-500 font-semibold"
                : "hover:bg-green-600"
            }`}
          >
            🤖 Modelos
          </button>
          <button
            onClick={() => setActiveView("Predicciones")}
            className={`w-full text-left px-3 py-2 rounded-lg ${
              activeView === "Predicciones"
                ? "bg-green-500 font-semibold"
                : "hover:bg-green-600"
            }`}
          >
            🔮 Predicciones
          </button>
        </nav>
      </aside>

      {/* Contenido principal */}
      <main className="flex-1 overflow-y-auto">{renderContent()}</main>
    </div>
  );
}
