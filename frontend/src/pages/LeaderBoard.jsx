import React, { useState, useEffect } from "react";
import axios from "axios";

const Leaderboard = () => {
  const [users, setUsers] = useState([]);
  const [friends, setFriends] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState("global");
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response =
          activeTab === "global"
            ? await axios.get("/api/leaderboard/global")
            : await axios.get("/api/leaderboard/friends");
        console.log("Response data:", response.data);
        if (activeTab === "global") setUsers(response.data);
        else setFriends(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchLeaderboard();
  }, [activeTab]);
  
  

  const filteredUsers =
  activeTab === "global"
    ? (Array.isArray(users) ? users : []).filter((user) =>
        user.username.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : (Array.isArray(friends) ? friends : []).filter((user) =>
        user.username.toLowerCase().includes(searchQuery.toLowerCase())
      );


  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const displayedUsers = filteredUsers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const switchTab = (tab) => {
    setActiveTab(tab);
    setCurrentPage(1);
    setSearchQuery("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Leaderboard</h2>

        <div className="flex justify-center mb-4">
          <button
            className={`py-2 px-4 mx-2 rounded ${
              activeTab === "global"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => switchTab("global")}
          >
            Global Rank
          </button>
          <button
            className={`py-2 px-4 mx-2 rounded ${
              activeTab === "friends"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => switchTab("friends")}
          >
            Friends Ranking
          </button>
        </div>

        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Search by username"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>

        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-4 text-left">Rank</th>
              <th className="border border-gray-300 px-8 py-4 text-left">Username</th>
              <th className="border border-gray-300 px-4 py-4 text-left">
                Problems Solved
              </th>
              <th className="border border-gray-300 px-8 py-4 text-left">Country</th>
            </tr>
          </thead>
          <tbody>
            {displayedUsers.map((user, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">{user.rank}</td>
                <td className="border border-gray-300 px-4 py-2">{user.username}</td>
                <td className="border border-gray-300 px-4 py-2">{user.solved}</td>
                <td className="border border-gray-300 px-4 py-2">{user.country}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-between items-center mt-4">
          <button
            className={`py-2 px-4 rounded ${
              currentPage === 1
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-700 text-white"
            }`}
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="text-gray-700">
            Page {currentPage} of {totalPages}
          </span>
          <button
            className={`py-2 px-4 rounded ${
              currentPage === totalPages
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-700 text-white"
            }`}
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
 
