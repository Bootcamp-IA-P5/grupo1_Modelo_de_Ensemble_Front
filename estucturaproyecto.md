# Estructura del Proyecto EcoPredict - Frontend
```
GRUPO1_MODELO_DE_ECOPREDICT/
├── node_modules/
├── public/
│   ├── vite.svg
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   ├── images/
│   │   │   ├── logo.svg
│   │   │   └── background.jpg
│   │   └── icons/
│   │       ├── forest.svg
│   │       └── alert.svg
│   ├── components/
│   │   ├── common/
│   │   │   ├── Header.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── Loading.jsx
│   │   │   └── Modal.jsx
│   │   ├── dashboard/
│   │   │   ├── StatsCard.jsx
│   │   │   ├── RiskMeter.jsx
│   │   │   ├── PredictionSummary.jsx
│   │   │   └── RecentPredictions.jsx
│   │   ├── prediction/
│   │   │   ├── PredictionForm.jsx
│   │   │   ├── CoordinateInput.jsx
│   │   │   ├── ManualDataInput.jsx
│   │   │   ├── FileUpload.jsx
│   │   │   └── PredictionResult.jsx
│   │   ├── visualization/
│   │   │   ├── MapView.jsx
│   │   │   ├── RiskHeatmap.jsx
│   │   │   ├── ChartComponent.jsx
│   │   │   ├── SHAPVisualization.jsx
│   │   │   └── FeatureImportance.jsx
│   │   └── analysis/
│   │       ├── HistoricalData.jsx
│   │       ├── ComparisonView.jsx
│   │       └── ExportData.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Prediction.jsx
│   │   ├── Analysis.jsx
│   │   ├── History.jsx
│   │   └── About.jsx
│   ├── services/
│   │   ├── api.js
│   │   ├── predictionService.js
│   │   ├── mapService.js
│   │   └── storageService.js
│   ├── hooks/
│   │   ├── usePrediction.js
│   │   ├── useMap.js
│   │   └── useLocalStorage.js
│   ├── utils/
│   │   ├── constants.js
│   │   ├── validators.js
│   │   ├── formatters.js
│   │   └── helpers.js
│   ├── context/
│   │   ├── AppContext.jsx
│   │   └── PredictionContext.jsx
│   ├── styles/
│   │   ├── globals.css
│   │   └── variables.css
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .env
├── .env.example
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── vite.config.js
```

## Descripción Detallada de la Estructura

### 📁 **src/components/**
Componentes reutilizables organizados por funcionalidad:

- **common/**: Componentes genéricos (botones, tarjetas, modales)
- **dashboard/**: Componentes específicos del dashboard principal
- **prediction/**: Componentes para el formulario y resultados de predicción
- **visualization/**: Componentes de mapas, gráficos y visualizaciones
- **analysis/**: Componentes para análisis histórico y comparaciones

### 📁 **src/pages/**
Vistas principales de la aplicación:

- **Home.jsx**: Página de inicio
- **Dashboard.jsx**: Panel principal con estadísticas
- **Prediction.jsx**: Página para realizar predicciones
- **Analysis.jsx**: Análisis avanzado de datos
- **History.jsx**: Historial de predicciones

### 📁 **src/services/**
Lógica de comunicación con APIs y servicios externos:

- **api.js**: Configuración base de Axios/Fetch
- **predictionService.js**: Llamadas al backend de ML
- **mapService.js**: Integración con mapas (Leaflet/Mapbox)

### 📁 **src/hooks/**
Custom hooks de React para lógica reutilizable

### 📁 **src/utils/**
Funciones auxiliares, constantes y validadores

### 📁 **src/context/**
Context API para manejo de estado global

## Librerías Recomendadas para EcoPredict
```json
{
  "dependencies": {
    "react-router-dom": "^6.x",
    "axios": "^1.x",
    "recharts": "^2.x",
    "leaflet": "^1.x",
    "react-leaflet": "^4.x",
    "framer-motion": "^11.x",
    "react-hot-toast": "^2.x",
    "lucide-react": "^0.x"
  }
}
```