import React, { useState, useEffect} from 'react';
import { Menu, Search, Code2, MessageSquare, Bell, User,Settings, LogOut, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Navbar = () => {
  const [showDropdown, setShowDropDown] = useState(false);
  const [user, setUser] = useState({});
  
  const toggleDropdown = ()=>{
    setShowDropDown((prev) => !prev);
  }

  const UserName = () => {

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setUser(response.data);
            } catch (error) {
                console.error('Error fetching user:', error.response?.data || error);
            }
        };
        fetchUser();
    }, []);
    return user;
  }
  UserName();
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button className="p-1 rounded-lg text-gray-500 lg:hidden hover:bg-gray-100">
              <Menu size={20} />
            </button>
            <div className="flex items-center ml-8">
              <div className="flex items-center gap-2">
                <Code2 className="h-8 w-8 text-yellow-500" />
                <span className="font-bold text-xl hidden sm:block">CGMI</span>
              </div>
              <div className="flex gap-6 ml-6">
                <Link to="/explore" className="text-black font-normal px-4 py-2 hover:text-gray-800">Explore</Link>
                <Link to="/problems" className="text-black font-normal px-4 py-2 hover:text-gray-800">Problems</Link>
                <Link to="/contest" className="text-black font-normal px-4 py-2 hover:text-gray-800">Contest</Link>
                <Link to="/discuss" className="text-black font-normal px-4 py-2 hover:text-gray-800">Discuss</Link>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-20">
            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                className="pl-10 pr-4 py-2 w-80 border border-gray-300 rounded-lg bg-gray-50 text-sm text-gray-700 focus:outline-none focus:border-yellow-500"
                placeholder="Search..."
              />
            </div>
            <div className="flex gap-4">
              <button className="p-1 rounded-lg text-gray-500 hover:bg-gray-100">
                <MessageSquare size={20} />
              </button>
              <button className="p-1 rounded-lg text-gray-500 hover:bg-gray-100">
                <Bell size={20} />
              </button>
              <button onClick={toggleDropdown} className="p-1 rounded-lg text-gray-500 hover:bg-gray-100">
                <User size={20} />
              </button>
              {showDropdown && (
                <div className="absolute top-12 right-0 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <div className="p-4 flex items-center gap-2 border-b border-gray-100">
                    <User className="h-6 w-6 text-gray-500" />
                    <span className="text-sm font-medium">{user.username}</span>
                  </div>
                  <ul className="py-2">
                    <li className="px-4 py-2 hover:bg-gray-100 flex items-center gap-2">
                      <Settings size={16} />
                      <Link to="/settings" className="text-sm text-gray-700">Settings</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 flex items-center gap-2">
                      <Users size={16} />
                      <Link to="/friends" className="text-sm text-gray-700">Friends</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 flex items-center gap-2">
                      <LogOut size={16} />
                      <Link to="/logout" className="text-sm text-gray-700">Logout</Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;