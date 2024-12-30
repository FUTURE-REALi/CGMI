import React, { useState } from 'react';
import axios from 'axios';

const ProblemsSolved = () => {
  const [problems, setProblems] = useState({
    easy: 18,
    medium: 6,
    hard: 20,
  });

  const totalProblems = 100;
  const solved = problems.easy + problems.medium + problems.hard;
  const percentSolved = ((solved / totalProblems) * 100).toFixed(2);

  return (
    <div className="flex bg-gray-100 border-2 border-gray-300 rounded-xl shadow-md w-1/5 mx-auto flex-row justify-between p-8">
      <div className="flex flex-col items-center justify-center">
        <div className="text-2xl font-bold text-green-500">{`${solved}/${totalProblems}`}</div>
        <div className="text-lg font-medium text-blue-500">{`${percentSolved}%`}</div>
      </div>
      <div className="flex flex-col">
        <div className="text-center text-base font-bold p-2 m-1 bg-gray-200 rounded-lg shadow">
          <div className="text-lg font-bold">Easy</div>
          <div>{`${problems.easy}/${totalProblems}`}</div>
        </div>
        <div className="text-center text-base font-bold p-2 m-1 bg-gray-200 rounded-lg shadow">
          <div className="text-lg font-bold">Medium</div>
          <div>{`${problems.medium}/${totalProblems}`}</div>
        </div>
        <div className="text-center text-base font-bold p-2 m-1 bg-gray-200 rounded-lg shadow">
          <div className="text-lg font-bold">Hard</div>
          <div>{`${problems.hard}/${totalProblems}`}</div>
        </div>
      </div>
    </div>
  );
};

export default ProblemsSolved;
