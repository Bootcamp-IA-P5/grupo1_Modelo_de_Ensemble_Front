// src/components/prediction.jsx

import React, { useState, useEffect } from 'react';
import { postPrediction, fetchRecentPredictions } from '../services/api';

const PredictionsView = () => {
    
    const [predictionResult, setPredictionResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    // NEW STATE for storing recent predictions
    const [recentPredictions, setRecentPredictions] = useState([]);
    const [recentLoading, setRecentLoading] = useState(true);
    const [recentError, setRecentError] = useState(null);

    // --- 1. FUNCTION TO FETCH RECENT PREDICTIONS (GET REQUEST) ---
    const loadRecentPredictions = async (limit = 5) => {
        setRecentLoading(true);
        setRecentError(null);
        try {
            const data = await fetchRecentPredictions(limit);
            if (data.success) {
                setRecentPredictions(data.predictions);
            } else {
                setRecentError(`Backend error: ${data.message}`);
            }
        } catch (err) {
            console.error("Fetch Recent Error:", err);
            setRecentError(`Failed to load recent predictions. Details: ${err.message || "Unknown error."}`);
        } finally {
            setRecentLoading(false);
        }
    };
    
    // --- 2. useEffect: Runs once when the component mounts ---
    useEffect(() => {
        // Load the last 5 predictions when the view opens
        loadRecentPredictions(5); 
    }, []); 

    // --- (Keep handlePredict for the original button if needed, or remove it) ---
    const handlePredict = async () => { /* ... (same logic as before) ... */ }; 
    // ...

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6 text-green-800">Modelo de Predicciones</h1>

            {/* Replaced button functionality: Now reloads recent predictions */}
            <button 
                onClick={() => loadRecentPredictions(5)} 
                disabled={recentLoading}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded shadow-md disabled:bg-gray-400 transition duration-150"
            >
                {recentLoading ? '⏳ Cargando Historial...' : '🔄 Recargar Predicciones Recientes'}
            </button>
            
            <p className="mt-4 text-sm text-gray-600">
                Esta sección muestra las últimas predicciones guardadas en MongoDB.
            </p>

            {/* Error Display for Recent Predictions */}
            {recentError && (
                <div className="mt-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                    <p className="font-bold">Error al cargar historial:</p>
                    <p>{recentError}</p>
                </div>
            )}
            
            {/* --- Recent Predictions Table --- */}
            <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-700">Historial Reciente ({recentPredictions.length})</h3>
                
                {recentLoading && <p>Cargando datos...</p>}
                
                {!recentLoading && recentPredictions.length === 0 && !recentError && (
                    <p className="text-gray-500">No se encontraron predicciones recientes. Intenta ejecutar una predicción primero.</p>
                )}

                {!recentLoading && recentPredictions.length > 0 && (
                    <div className="overflow-x-auto shadow-md rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-green-100">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Fecha</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Clase</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Riesgo</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Confianza</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Features (Preview)</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {recentPredictions.map((pred, index) => (
                                    <tr key={pred._id || index}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {new Date(pred.timestamp).toLocaleTimeString()}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{pred.class_name}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold">
                                            {pred.risk_level}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {(pred.confidence * 100).toFixed(1)}%
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            [{pred.features_preview.join(', ')}...]
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
            {/* Removed the single prediction block */}

        </div>
    );
};

export default PredictionsView;