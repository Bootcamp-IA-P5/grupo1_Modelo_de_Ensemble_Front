// src/components/prediction.jsx

import React, { useState } from 'react';
import { postPrediction } from '../services/api'; // Only need postPrediction here

const PredictionsView = () => {
    
    const [predictionResult, setPredictionResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    // Placeholder features matching the required 54 features for the backend
    // You should replace this with a form or dynamic input later!
    const SAMPLE_FEATURES = [
        2596, 51, 3, 258, 0, 510, 221, 232, 148, 6279, // Numerical features
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, // Soil Types
        0, 0, 0 // Wilderness Areas
    ];

    const handlePredict = async () => {
        setLoading(true);
        setError(null);
        
        try {
            // Structure matches the PredictRequest schema expected by your FastAPI backend
            const predictionData = { 
                features: SAMPLE_FEATURES,
                user_id: "demo_user_123", // Example data
                location: { lat: 40.0, lon: -105.0 } // Example data
            };
            
            const result = await postPrediction(predictionData);
            console.log("Prediction Result:", result);
            setPredictionResult(result);
            
        } catch (err) {
            // Use err.message to display the detailed error thrown from api.js
            console.error("Prediction Error:", err);
            setError(`Error running prediction. Details: ${err.message || "Unknown error."}`);
            
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6 text-green-800">Modelo de Predicciones</h1>

            <button 
                onClick={handlePredict} 
                disabled={loading}
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded shadow-md disabled:bg-gray-400 transition duration-150"
            >
                {loading ? '🔮 Ejecutando Predicción...' : '✨ Enviar Datos de Prueba y Predecir'}
            </button>
            
            <p className="mt-4 text-sm text-gray-600">
                Usando datos de prueba por defecto. La predicción se conecta a: <code className="bg-gray-100 p-1 rounded">http://localhost:8000/predict</code>
            </p>

            {/* Error Display */}
            {error && (
                <div className="mt-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                    <p className="font-bold">Error:</p>
                    <p>{error}</p>
                </div>
            )}
            
            {/* Prediction Result Display */}
            {predictionResult && (
                <div className="mt-8 p-6 bg-white border border-green-200 rounded-lg shadow-xl">
                    <h3 className="text-xl font-semibold mb-4 text-green-700">Resultado de la Predicción</h3>
                    <div className="space-y-2">
                        <p><strong>Clase Predicha:</strong> <span className="font-mono bg-green-100 p-1 rounded">{predictionResult.class_name}</span> ({predictionResult.prediction})</p>
                        <p><strong>Nivel de Riesgo:</strong> <span className={`font-bold ${predictionResult.risk_level === 'HIGH' ? 'text-red-500' : predictionResult.risk_level === 'MEDIUM' ? 'text-yellow-600' : 'text-green-500'}`}>{predictionResult.risk_level}</span></p>
                        <p><strong>Confianza:</strong> <span className="font-bold">{(predictionResult.confidence * 100).toFixed(2)}%</span></p>
                        <p><strong>Tiempo de Procesamiento:</strong> {predictionResult.processing_time_ms.toFixed(2)} ms</p>
                    </div>
                </div>
            )}
            
            {/* You can add calls to fetchRecentPredictions/fetchPredictionStats here later */}
            <div className="mt-10">
                {/* Placeholder for Recent Predictions Table/Stats */}
            </div>
        </div>
    );
};

export default PredictionsView;