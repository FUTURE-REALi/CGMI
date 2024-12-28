import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UserLogin from './pages/UserLogin';
import UserSignUp from './pages/UserSignUp';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element= {<HomePage/>} />
        <Route path="/login" element= {<UserLogin/>} />
        <Route path="/signup" element= {<UserSignUp/>} />
      </Routes>
    </div>
  )
}

export default App;