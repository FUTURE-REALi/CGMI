import React, { useState } from "react";

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
    <div className="bg-white border border-gray-300 rounded-lg shadow-md p-6 w-full max-w-md mx-auto">
      {/* Overall Summary */}
      <div className="flex flex-col items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-700 mb-2">Problems Solved</h1>
        <div className="text-3xl font-bold text-green-500">{`${solved}/${totalProblems}`}</div>
        <div className="text-lg font-medium text-blue-500">{`${percentSolved}% Completed`}</div>
      </div>

      {/* Difficulty Breakdown */}
      <div className="bg-gray-100 rounded-lg p-4">
        <h2 className="text-lg font-bold text-gray-700 mb-4">Breakdown</h2>
        <div className="space-y-4">
          {/* Easy */}
          <div className="flex items-center">
            <span className="w-20 text-sm font-medium text-green-600">Easy</span>
            <div className="flex-1 bg-green-200 h-4 rounded-lg overflow-hidden">
              <div
                className="bg-green-500 h-full"
                style={{ width: `${(problems.easy / totalProblems) * 100}%` }}
              ></div>
            </div>
            <span className="w-12 text-right text-sm font-medium text-gray-700">{problems.easy}</span>
          </div>

          {/* Medium */}
          <div className="flex items-center">
            <span className="w-20 text-sm font-medium text-yellow-600">Medium</span>
            <div className="flex-1 bg-yellow-200 h-4 rounded-lg overflow-hidden">
              <div
                className="bg-yellow-500 h-full"
                style={{ width: `${(problems.medium / totalProblems) * 100}%` }}
              ></div>
            </div>
            <span className="w-12 text-right text-sm font-medium text-gray-700">{problems.medium}</span>
          </div>

          {/* Hard */}
          <div className="flex items-center">
            <span className="w-20 text-sm font-medium text-red-600">Hard</span>
            <div className="flex-1 bg-red-200 h-4 rounded-lg overflow-hidden">
              <div
                className="bg-red-500 h-full"
                style={{ width: `${(problems.hard / totalProblems) * 100}%` }}
              ></div>
            </div>
            <span className="w-12 text-right text-sm font-medium text-gray-700">{problems.hard}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemsSolved;
