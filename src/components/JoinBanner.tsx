import React from 'react';

const JoinBanner: React.FC = () => {
  return (
    <div className="bg-white p-4 sm:p-6 lg:p-8">
      <div className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8 rounded-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h2 className="text-2xl font-bold">We Are Waiting For You</h2>
          <button className="bg-white text-black px-6 py-2 rounded-md font-semibold hover:bg-gray-200 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinBanner;
