import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserDataContext } from '../context/UserContext';
import axios from 'axios';

const UserLogin = () => {
    const [useEmail, setUseEmail] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const toggleInputType = () => {
        setUseEmail(!useEmail);
    };

    const { user,setUser } = useContext(UserDataContext);
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        const userData ={
            email: email,
            username: username,
            password: password,
        };

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData);

        if (response.status === 200) {
            const data = response.data
            setUser(data.user)
            localStorage.setItem('token',data.token)
            navigate('/home')
        }

        setEmail('');
        setUsername('');
        setPassword('');
    };

    

    return (
        <div>
            <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray">
                <div className="bg-white dark:bg-gray p-8 rounded-lg shadow-lg w-full max-w-md">
                    <h2 className="text-4xl font-bold font-['Outfit'] mb-6 text-center">LOGIN</h2>
                    <form onSubmit={e => handleSubmit(e)}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-xl font-bold font-['Outfit'] mb-2" htmlFor="identifier">
                                {useEmail ? "Whats's your Email" : "Whats's your Username"}
                            </label>
                            <input
                                value={useEmail ? email : username}
                                onChange={(e) => (useEmail ? setEmail(e.target.value) : setUsername(e.target.value))}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="identifier"
                                type="text"
                                placeholder={useEmail ? 'Enter Email' : 'Enter Username'}
                            />
                            <button
                                type="button"
                                className="text-blue-500 text-sm hover:underline mt-2"
                                onClick={() => {
                                    toggleInputType();
                                    setEmail('');
                                    setUsername('');
                                }}
                            >
                                {useEmail ? 'Sign in with Username' : 'Sign in with Email'}
                            </button>
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-xl font-bold font-['Outfit'] mb-2" htmlFor="password">
                                Enter Password
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
                                className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Sign In
                            </button>
                            <div className="text-right">
                                <Link to = "# "
                                    className="inline-block align-baseline text-sm text-blue-500 hover:text-blue-800"
                                >
                                    Forgot Password?
                                </Link>
                                <br />
                                <Link to = "/signup"
                                    className="inline-block align-baseline text-sm text-blue-500 hover:text-blue-800"
                                >
                                    New Here? Sign Up
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default UserLogin