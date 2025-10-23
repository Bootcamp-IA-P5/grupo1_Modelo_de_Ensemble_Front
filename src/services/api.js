// src/services/api.js
import { API_BASE_URL } from "../config/constants";

// --- General Utility Functions (Already defined) ---

export const fetchData = async (endpoint) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`);
    if (!response.ok) throw new Error(`API request failed with status: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error("API Fetch Error:", error);
    throw error;
  }
};

export const postData = async (endpoint, data) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    // Check for non-2xx status codes
    if (!response.ok) {
        const errorDetail = await response.json().catch(() => ({ detail: 'No additional details.' }));
        throw new Error(`API POST failed with status: ${response.status}. Details: ${errorDetail.detail}`);
    }
    return await response.json();
  } catch (error) {
    console.error("API POST Error:", error);
    throw error;
  }
};

// --- Specific Backend Route Functions for Predictions ---

/**
 * Endpoint: POST /predict
 * @param {object} predictionData - Features, user_id, location, etc.
 * @returns {Promise<object>} Prediction results (risk_level, confidence, etc.)
 */
export const postPrediction = async (predictionData) => {
  // Calls http://localhost:8000/predict
  return postData("/predict", predictionData); 
};

/**
 * Endpoint: GET /predictions/recent
 * @param {number} limit - Number of recent predictions to fetch
 * @returns {Promise<object>} List of recent predictions
 */
export const fetchRecentPredictions = async (limit = 10) => {
  // Calls http://localhost:8000/predictions/recent?limit=...
  return fetchData(`/predictions/recent?limit=${limit}`);
};

/**
 * Endpoint: GET /predictions/stats
 * @returns {Promise<object>} Prediction statistics and analysis
 */
export const fetchPredictionStats = async () => {
  // Calls http://localhost:8000/predictions/stats
  return fetchData("/predictions/stats");
};