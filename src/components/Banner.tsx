import React from 'react';

const Banner: React.FC = () => {
  return (
    <div className="bg-peniel-secondary hover:bg-peniel-main transition-colors duration-300 text-white p-2 sm:p-3 md:p-4 text-center">
      <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold">
        Approved by The Institute of Leadership and Management (UK)
      </p>
    </div>
  );
};

export default Banner;