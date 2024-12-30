import React from 'react';
import FriendComp from '../components/FriendComp';
import Message from '../components/Message';

const HomePage = () => {
  return (
    <div className="relative flex flex-col items-end h-screen p-4 space-y-2">
      <div className="w-96 h-1/2">
        <FriendComp />
      </div>
      <div className="w-96 h-1/2">
        <Message />
      </div>
    </div>
  );
};

export default HomePage;