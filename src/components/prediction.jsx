// src/components/Prediction.jsx

// Import React and the useState hook to manage state (variables that can change)
import React, { useState, useEffect } from "react";
// Import axios library to make HTTP requests to your backend
import axios from "axios";
// Import the base API URL from your config file
import { API_BASE_URL } from "../config/constants";

// Define and export your React component
export default function Predicciones() {
    const [prediction, setPrediction] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Placeholder data matching the 54 features required by the Forest Cover Type model
    // This is the structure your FastAPI Pydantic model requires!
    const SAMPLE_FEATURES = [
        2596, 51, 3, 258, 0, 510, 221, 232, 148, 6279, // First 10 numerical features
        // Add 44 more values (e.g., zeros for binary features) to reach 54 elements
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
        0, 0, 0, 0
    ];

    useEffect(() => {
        handlePredict(); 
    }, []);

    const handlePredict = async () => {
        setLoading(true);
        setError(null);

        try {
            // CRITICAL: The input data structure must EXACTLY match the PredictRequest Pydantic model
            const inputData = {
                features: SAMPLE_FEATURES, // The list of 54 numbers
                user_id: "demo_user_001", 
                location: { lat: 40.0, lon: -105.0 }, // Location object
            };
            
            console.log("Sending data to backend:", inputData); // Debug log

            const response = await axios.post(`${API_BASE_URL}/predict`, inputData);

            setPrediction(response.data);
        } catch (err) {
            // Improved error handling to show specific FastAPI validation errors
            const detail = err.response?.data?.detail 
                           ? JSON.stringify(err.response.data.detail, null, 2)
                           : err.message;
            setError(detail);
        } finally {
            setLoading(false);
        }
    };

    // JSX (Your JSX looks correct for displaying the data)
    return (
        <div className="p-6 text-center">
            <h2 className="text-2xl font-bold mb-4">🔮 Predicciones</h2>

            {/* Display a button to manually trigger the prediction */}
            <button
                onClick={handlePredict}
                disabled={loading}
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded shadow-md disabled:bg-gray-400 transition duration-150"
            >
                {loading ? '🔮 Ejecutando Predicción...' : '✨ Enviar Datos de Prueba y Predecir'}
            </button>
            
            {loading && <p className="mt-4 text-gray-500">Cargando...</p>}

            {error && <pre className="mt-4 p-2 bg-red-100 text-left text-red-500 border border-red-400 rounded">Error: {error}</pre>}

            {prediction && (
                <div className="mt-6 p-4 bg-green-100 rounded">
                    <h3 className="font-semibold">Resultado del Modelo:</h3>
                    <pre className="text-left">{JSON.stringify(prediction, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}