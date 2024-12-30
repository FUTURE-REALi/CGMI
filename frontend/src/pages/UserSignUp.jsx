import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserDataContext } from '../context/UserContext';
import axios from 'axios';

const UserSignUp = () => {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const { user,setUser } = useContext(UserDataContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      fullname: {firstname: firstname, lastname: lastname},
      email: email,
      username: username,
      password: password,
    };

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, userData);
      if (response.status === 201) {
        const data = response.data;
        setUser(data.user);
        localStorage.setItem('token', data.token);
        navigate('/home');
      }
    } catch (error) {
      console.error('Error registering user:', error);
    }

    setEmail('');
    setUsername('');
    setPassword('');
    setFirstName('');
    setLastName('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray">
      <div className="bg-white dark:bg-gray p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-4xl font-bold mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex justify-between mb-4 gap-4">
            <div>
              <label className="block text-gray-700 text-xl font-bold mb-2" htmlFor="firstName">
                First Name
              </label>
              <input
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="firstName"
                type="text"
                placeholder="Enter First Name"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-xl font-bold mb-2" htmlFor="lastName">
                Last Name
              </label>
              <input
                value={lastname}
                onChange={(e) => setLastName(e.target.value )}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="lastName"
                type="text"
                placeholder="Enter Last Name"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-xl font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-xl font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Enter Username"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-xl font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter password"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign Up
            </button>
            <Link to="/login" className="inline-block align-baseline text-sm text-blue-500 hover:text-blue-800">
              Already have an account? Sign In
            </Link>
          </div>
        </form>
        <p className="mt-6 text-center text-gray-600 text-sm leading-tight">
          By proceeding, you agree to share your data with us. We value your privacy and will handle your information with the utmost care. Your data helps us enhance your coding experience and provide you with personalized content. Welcome to our coding community!
        </p>
      </div>
    </div>
  );
};

export default UserSignUp;