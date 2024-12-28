import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UserLogin from './pages/UserLogin';
import UserSignUp from './pages/UserSignUp';
import LandingPage from './pages/LandingPage';
import UserProtectedWrapper from './pages/UserProtectedWrapper';
import UserLogout from './pages/UserLogout';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element= {<LandingPage/>} />
        <Route path="/login" element= {<UserLogin/>} />
        <Route path="/signup" element= {<UserSignUp/>} />
        <Route path="/home" element= {
          <UserProtectedWrapper>
            <HomePage/>
          </UserProtectedWrapper>
        } />
        <Route path="/logout" element= {
          <UserProtectedWrapper>
            <UserLogout/>
          </UserProtectedWrapper>} />

      </Routes>
    </div>
  )
}
export default App;