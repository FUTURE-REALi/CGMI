import React, { useState } from 'react'

const UserLogin = () => {
    const [useEmail, setUseEmail] = useState(true);

    const toggleInputType = () => {
        setUseEmail(!useEmail);
    };

    return (
        <div>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                    <h2 className="text-4xl font-bold mb-6 text-center">Login</h2>
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-xl font-bold mb-2" htmlFor="identifier">
                                {useEmail ? 'Email' : 'Username'}
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="identifier"
                                type="text"
                                placeholder={useEmail ? 'Enter Email' : 'Enter Username'}
                            />
                            <button
                                type="button"
                                className="text-blue-500 text-sm hover:underline mt-2"
                                onClick={toggleInputType}
                            >
                                {useEmail ? 'Sign in with Username' : 'Sign in with Email'}
                            </button>
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-xl font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                type="password"
                                placeholder="Enter password"
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="button"
                            >
                                Sign In
                            </button>
                            <a
                                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                                href="#"
                            >
                                Forgot Password?
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default UserLogin