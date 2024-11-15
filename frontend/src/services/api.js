import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001', // Make sure this matches your backend port
  headers: {
    'Content-Type': 'application/json'
  }
});

api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
});

export const register = async (email, name) => {
  try {
    const response = await api.post('/users/register', { email, name });
    console.log('API Register Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('API Register Error:', error.response?.data || error.message);
    throw error;
  }
};

export const login = async (email) => {
  try {
    const response = await api.post('/users/login', { email });
    return response.data;
  } catch (error) {
    console.error('API Login Error:', error.response?.data || error.message);
    throw error;
  }
};

export const getNotes = async () => {
  const response = await api.get('/notes');
  return response.data;
};

export const createNote = async (note) => {
  const response = await api.post('/notes', note);
  return response.data;
};

export const updateNote = async (id, note) => {
  const response = await api.put(`/notes/${id}`, note);
  return response.data;
};

export const deleteNote = async (id) => {
  const response = await api.delete(`/notes/${id}`);
  return response.data;
};