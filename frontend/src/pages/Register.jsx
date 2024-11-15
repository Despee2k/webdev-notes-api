import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../services/api';

const Register = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError('');
      const response = await register(email, name);
      console.log('Registration response:', response);
      alert('Registration successful! Please login.');
      navigate('/login');
    } catch (error) {
      console.error('Registration error:', error);
      setError(error.response?.data?.message || error.message || 'Registration failed');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 text-white rounded-lg shadow">
        <h2 className="text-3xl font-bold text-center">Register</h2>
        {error && (
          <div className="p-3 bg-red-500 text-white rounded">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 mt-1 bg-gray-700 text-white border-gray-600 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 mt-1 bg-gray-700 text-white border-gray-600 rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-gray-400 text-black rounded hover:bg-gray-300"
          >
            Register
          </button>
          <div className="text-center">
            <a 
              href="/login" 
              className="text-sm text-gray-400 hover:text-gray-300"
            >
              Already have an account? Login
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;