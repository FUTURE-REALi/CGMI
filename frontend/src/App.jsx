import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UserLogin from './pages/UserLogin';
import UserSignUp from './pages/UserSignUp';
import LeaderBoard from './pages/LeaderBoard';  

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignUp />} />
        <Route path="/leaderboard" element={<LeaderBoard />} /> {/* Add this route */}
        <Route path="/leaderboard/global" element={<LeaderBoard />} />
        <Route path="/leaderboard/friends" element={<LeaderBoard />} />
      </Routes>
    </div>
  );
};

export default App;
