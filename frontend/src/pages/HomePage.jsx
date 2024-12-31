import React from 'react';
import FriendComp from '../components/FriendComp';
import Message from '../components/Message';
import Calendar from '../components/Calendar';
import ProblemsSolved from '../components/ProblemsSolved';

const HomePage = () => {
  return (
    <div className="flex justify-between items-start h-screen p-4 bg-gray-50 space-x-4">
      {/* Left Section: Calendar and ProblemsSolved */}
      <div className="flex flex-col w-1/4 space-y-4">
        <div className="h-1/2  rounded-lg p-2">
          <Calendar />
        </div>
        <div className="h-1/2 rounded-lg p-2">
          <ProblemsSolved />
        </div>
      </div>

      {/* Middle Section: Leaderboard */}
      <div className="flex flex-col w-1/2">
        <div className="h-full bg-white shadow-md rounded-lg p-2">
          {/* <Leaderboard /> */}
        </div>
      </div>

      {/* Right Section: FriendComp and Message */}
      <div className="flex flex-col w-1/4 space-y-4">
        <div className="h-1/2  rounded-lg p-2">
          <FriendComp />
        </div>
        <div className="h-1/2  rounded-lg p-2">
          <Message />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
