import React, { useState } from 'react';
import { Search } from 'lucide-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserDataContext } from '../context/UserContext';
import { useContext } from 'react';
const FriendComp = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeTab, setActiveTab] = useState('friends');

    const friends = [
        { name: "Alice", status: "Online" },
        { name: "Bob", status: "Offline" },
    ];
    const [friendsList, setFriendsList] = useState(friends);

    const addFriend = (newFriend) => {
        setFriendsList([...friendsList, newFriend]);
    };

    const [friendUserName, setAddFriend] = useState('');

    const { user,setUser } = useContext(UserDataContext);
    const navigate = useNavigate();

    const addHandleSubmit = async(e) => {
        e.preventDefault();

        try {
            const token = localStorage.getItem('token');
            const res = await axios.post(
                `${import.meta.env.VITE_BASE_URL}/users/addfriend`,
                { friendUserName },
                {
                    headers: {
                        Authorization: `Bearer ${token}`, // Pass token here
                    },
                }
            );
            console.log(res.data);
            alert('Friend added successfully!');
        } catch (error) {
            console.error('Error adding friend:', error.response?.data || error);
            alert(error.response?.data?.message || 'Failed to add friend.');
        }

        if(response.status === 200){
            addFriend(friendUserName);
            setAddFriend('');
        }
    };

    const reqHandleSubmit = async(e) => {

        if(user === null){
            return;
        }

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/getfriend`, user);

        if(response.status === 200){
            addFriend(response.data);
            setAddFriend('');
        }
    }
    

    return (
        <div className="p-4 h-full background-gray-100 shadow-lg rounded-2xl">
            <div className="flex space-x-9 mb-4 justify-center text-lg font-semibold border-b-2 border-gray-200">
                <button onClick={() => setActiveTab('friends')} className="border-b-2 border-blue-500">
                    Friends
                </button>
                <button onClick={
                    () => {
                        setActiveTab('addfriend')
                        reqHandleSubmit()
                    }

                } className="border-b-2 border-blue-500">
                    Add Friend
                </button>
                <button onClick={() => setActiveTab('requests')} className="border-b-2 border-blue-500">
                    Requests
                </button>
            </div>

            {activeTab === 'friends' && (
                <div>
                    <input
                        type="text"
                        className="px-2 border rounded-lg w-4/5 mb-2 ml-3"
                        placeholder="Search"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <ul>
                        {friends
                            .filter(friend => friend.name.toLowerCase().includes(searchTerm.toLowerCase()))
                            .map(friend => (
                                <li key={friend.name} className="p-2 cursor-pointer flex items-center">
                                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                                    <div>{friend.name}</div>
                                    <div className="ml-auto">{friend.status}</div>
                                </li>
                            ))}
                    </ul>
                </div>
            )}

            {activeTab === 'addfriend' && (
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
                        <form className='flex items-center h-10 justify-between p-2 border-2 border-gray-300 rounded-full'
                            onSubmit={addHandleSubmit}>
                            <input className='flex-grow px-4 text-sm border-0 focus:outline-none rounded-full'
                                value={friendUserName}
                                onChange={(e) => setAddFriend(e.target.value)}
                                name="friendname"
                                type="text"
                                placeholder="Search for a friend"
                            />
                            <button type="submit" className="p-2 focus:outline-none">
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
            )}

            {activeTab === 'requests' && (
                <div>
                    <ul>
                        <li className="p-2 cursor-pointer flex items-center">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                            <div>Friend's Name</div>
                            <button className="ml-auto px-3 py-1 text-sm text-white bg-blue-500 rounded-full">Accept</button>
                        </li>
                        <li className="p-2 cursor-pointer flex items-center">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                            <div>Friend's Name</div>
                            <button className="ml-auto px-3 py-1 text-sm text-white bg-blue-500 rounded-full">Accept</button>
                        </li>
                        <li className="p-2 cursor-pointer flex items-center">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                            <div>Friend's Name</div>
                            <button className="ml-auto px-3 py-1 text-sm text-white bg-blue-500 rounded-full">Accept</button>
                        </li>
                    </ul>
                </div>
            )}



        </div>
    );
};

export default FriendComp;