// Import React and the useState hook to manage state (variables that can change)
import React, { useState, useEffect } from "react";
// Import axios library to make HTTP requests to your backend
import axios from "axios";
// Import the base API URL from your config file
import { API_BASE_URL } from "../config/constants";

// Define and export your React component
export default function Predicciones() {
  // Create state variables using React's useState hook
  const [prediction, setPrediction] = useState(null); // stores API response data
  const [loading, setLoading] = useState(false); // shows loading message while waiting
  const [error, setError] = useState(null); // stores any error message from the API

  // useEffect runs automatically when the component is first loaded (mounted)
  useEffect(() => {
    handlePredict(); // call the prediction API automatically when user opens this view
  }, []);

  // Define an async function to call your backend /predict endpoint
  const handlePredict = async () => {
    setLoading(true); // show "loading" message
    setError(null); // clear any previous error

    try {
      // Example data to send — your backend expects certain input fields.
      // You must send the correct structure that matches your FastAPI model.
      const inputData = {
        feature1: 3.5,
        feature2: 1.2,
        // add other input fields expected by your backend
      };

      // Send POST request to backend
      const response = await axios.post(`${API_BASE_URL}/predict`, inputData);

      // If the backend returns valid JSON, axios puts it in response.data
      setPrediction(response.data); // save response in state so we can show it on screen
    } catch (err) {
      // If there's any error (connection, invalid data, etc.), handle it
      setError(err.response?.data?.detail || err.message);
    } finally {
      // This code always runs (success or error)
      setLoading(false); // stop showing the loading message
    }
  };

  // JSX (what this component renders on the screen)
  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-bold mb-4">🔮 Predicciones</h2>

      {/* Show loading message while waiting */}
      {loading && <p className="mt-4 text-gray-500">Cargando...</p>}

      {/* Show error message if API call fails */}
      {error && <p className="mt-4 text-red-500">Error: {error}</p>}

      {/* Show the prediction data if it exists */}
      {prediction && (
        <div className="mt-6 p-4 bg-green-100 rounded">
          <h3 className="font-semibold">Resultado del Modelo:</h3>
          {/* JSON.stringify formats the JSON nicely */}
          <pre className="text-left">{JSON.stringify(prediction, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
