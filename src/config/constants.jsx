export const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

export const VIEWS = {
  EDA: {
    icon: "🌍",
    title: "Exploratory Data Analysis (EDA)",
    description: "Aquí se mostrarán gráficos y estadísticas del dataset",
    extra: <b> covtype.data.gz</b>,
    suffix: " almacenado en MongoDB."
  },
  EDACleanData: {
    icon: "🔥",
    title: "Clean Data (EDA)",
    description: "Aquí se mostrarán gráficos y estadísticas optimizados del dataset limpio",
    extra: <b> covtype.data.gz</b>,
    suffix: " procesado y almacenado en MongoDB."
  },
  Modelos: {
    icon: "🤖",
    title: "Modelos de Machine Learning",
    description: "Aquí se mostrarán los resultados de los modelos entrenados (Random Forest, XGBoost, LightGBM) y sus métricas de evaluación."
  },
  Predicciones: {
    icon: "🔮",
    title: "Predicciones",
    description: "Aquí se visualizarán las predicciones del modelo más eficiente y los resultados interpretables (SHAP, probabilidades, etc.)."
  }
};