import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UserLogin from './pages/UserLogin';
import UserSignUp from './pages/UserSignUp';
import LandingPage from './pages/LandingPage';
import UserProtectedWrapper from './pages/UserProtectedWrapper';
import UserLogout from './pages/UserLogout';
import Navbar from './components/NavBar';
import Message from './components/Message';
import LeaderBoard from './pages/LeaderBoard'; 
import Contest from './pages/Contest';
const App = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/signup" element={<UserSignUp />} />
        <Route path="/leaderboard" element={<LeaderBoard />} /> {/* Add this route */}
        <Route path="/leaderboard/global" element={<LeaderBoard />} />
        <Route path="/leaderboard/friends" element={<LeaderBoard />} />
          <Route path="/home" element= {
            <UserProtectedWrapper>
              <HomePage/>
            </UserProtectedWrapper>
          } />
          <Route path="/logout" element= {
            <UserProtectedWrapper>
              <UserLogout/>
            </UserProtectedWrapper>}
          />
          <Route path = "/contest" element = {<Contest/>} />
          <Route path="/message" element = {<Message/>} />
        </Routes>
    </div>
  )
}

export default App;
