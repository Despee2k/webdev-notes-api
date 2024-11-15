import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/api';

const Login = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { token } = await login(email);
      localStorage.setItem('token', token);
      navigate('/dashboard');
    } catch (error) {
      alert('Login failed');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
    <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 text-white rounded-lg shadow">
      <h2 className="text-3xl font-bold text-center">Login</h2>
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
        <button
          type="submit"
          className="w-full px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-500"
        >
          Login
        </button>
      </form>
    </div>
  </div>  
  );
};

export default Login;