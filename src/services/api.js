import { API_BASE_URL } from "../config/constants";

export const fetchData = async (endpoint) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`);
    if (!response.ok) throw new Error("API request failed");
    return await response.json();
  } catch (error) {
    console.error("API Error:", error);
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
    if (!response.ok) throw new Error("API request failed");
    return await response.json();
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};