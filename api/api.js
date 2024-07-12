import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000'; // Replace with your API base URL

// Register user
export const register = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/register`, userData);
    console.log(response)

    return response.data;
  } catch (error) {
    console.log(error)

    throw error.response.data;
  }
};

// Login user
export const login = async (credentials) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/login`, credentials);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Fetch body parts
export const fetchBodyParts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/body-parts`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Fetch exercises by body part
export const fetchExercisesByBodyPart = async (bodyPart) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/exercises/${bodyPart}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
