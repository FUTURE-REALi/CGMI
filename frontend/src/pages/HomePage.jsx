import React from 'react';
import FriendComp from '../components/FriendComp';
import Message from '../components/Message';

const HomePage = () => {
  return (
    <div className="relative flex justify-end items-end h-screen p-4 space-x-4">
      <div className="flex flex-col items-end space-y-4 w-96">
        <FriendComp />
        <Message />
      </div>
    </div>
  );
};

export default HomePage;