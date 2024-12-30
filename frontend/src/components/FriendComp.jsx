import React from 'react';
import { Search } from 'lucide-react';

const FriendComp = () => {
    return (
        <div className="p-4 min-h-full">
            <div className="flex flex-col items-center justify-center w-xs h-80 px-4 bg-white shadow-lg rounded-lg">
                <div className="flex flex-col items-center justify-center mb-2 p-1">
                    <h1 className='font-bold text-xl text-center'>
                        Searching For Hommie?
                    </h1>
                    <h3 className='text-sm text-center mb-2 p-1 leading-tight'>
                        Best Projects are Made with Friends. Search for your friends and start collaborating
                    </h3>
                </div>

                <div className="w-full">
                    <form className='flex items-center h-10 justify-between p-2 border-2 border-gray-300 rounded-full'>
                        <input className='flex-grow px-4 text-sm border-0 focus:outline-none rounded-full'
                            name="friendname"
                            type="text"
                            placeholder="Search for a friend"
                        />
                        <button type="button" className="p-2 focus:outline-none">
                            <Search className="w-5 h-5 text-gray-500" />
                        </button>
                    </form>
                </div>

                <div className="flex flex-col w-full mt-4">
                    <div className="flex items-center p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                        <img className="w-10 h-10 rounded-full" src="https://via.placeholder.com/40" alt="Friend" />
                        <div className="ml-3">
                            <h3 className="text-sm font-semibold">Friend's Username</h3>
                            <p className="text-xs text-gray-500">Active Status</p>
                        </div>
                        <button className="ml-auto px-3 py-1 text-sm text-white bg-blue-500 rounded-full">Add</button>
                    </div>
                    <div className="flex items-center p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                        <img className="w-10 h-10 rounded-full" src="https://via.placeholder.com/40" alt="Friend" />
                        <div className="ml-3">
                            <h3 className="text-sm font-semibold">Friend's Username</h3>
                            <p className="text-xs text-gray-500">Active Status</p>
                        </div>
                        <button className="ml-auto px-3 py-1 text-sm text-white bg-blue-500 rounded-full">Add</button>
                    </div>
                    <div className="flex items-center p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                        <img className="w-10 h-10 rounded-full" src="https://via.placeholder.com/40" alt="Friend" />
                        <div className="ml-3">
                            <h3 className="text-sm font-semibold">Friend's Username</h3>
                            <p className="text-xs text-gray-500">Active Status</p>
                        </div>
                        <button className="ml-auto px-3 py-1 text-sm text-white bg-blue-500 rounded-full">Add</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendComp;