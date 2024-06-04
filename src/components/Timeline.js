// Timeline.js
import React, { useState } from 'react';

const Timeline = ({ onSelect }) => {
  const [activeStep, setActiveStep] = useState(1);

  const handleStepClick = (step) => {
    setActiveStep(step);
    onSelect(step);
  };

  return (
    <div className="flex">
      <div className="flex-1 relative">
        <div className="h-full w-1 absolute top-0 left-1/2 transform -translate-x-1/2 "></div>
        <div className="h-full w-0.5 bg-gray-300 absolute top-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#F58D86] to-purple-600"></div>
        <div className="flex flex-col justify-center items-center h-90 ">
          <div className={`relative mb-12 ${activeStep === 1 ? 'opacity-100' : 'opacity-0'}`}>
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-[#F58D86] to-purple-600 text-white">1</div>
            <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d8009ea3ec5_Avoid%20stockouts-icon.svg" loading="lazy" alt="Stockouts Icon" className="absolute bottom-3.5 left-1/2 transform -translate-x-1/2"/>
          </div>

          <div className={`relative mb-12 ${activeStep === 2 ? 'opacity-100' : 'opacity-0'}`}>
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-[#F58D86] to-purple-600 text-white">2</div>
            <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d16ecea3ef7_reduced-icon.svg" loading="lazy" alt="Cash Recovery Icon" className="absolute bottom-3.5 left-1/2 transform -translate-x-1/2"/>
          </div>
          <div className={`relative ${activeStep === 3 ? 'opacity-100' : 'opacity-0'}`}>
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-[#F58D86] to-purple-600 text-white">3</div>
            <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d83fbea3ef8_Impact-icon.svg" loading="lazy" alt="Revenue Icon" className="absolute bottom-3.5 left-1/2 transform -translate-x-1/2"/>
          </div>
        </div>
      </div>
      <div className="flex-1 mx-4">
        <div className="flex flex-col justify-between h-full">
          <button className={`text-center hover:scale-95 py-2 ${activeStep === 1 ? 'bg-gradient-to-r border rounded-full from-[#F58D86] to-purple-600 text-white' : 'text-white'}`} onClick={() => handleStepClick(1)}>
            STOCKOUTS
          </button>
          <button className={`text-center hover:scale-95 py-2  ${activeStep === 2 ? 'bg-gradient-to-r border rounded-full from-[#F58D86] to-purple-600 text-white' : 'text-white'}`} onClick={() => handleStepClick(2)}>
            CASH RECOVERY CYCLE
          </button>
          <button className={`text-center hover:scale-95 py-2 ${activeStep === 3 ? 'bg-gradient-to-r border rounded-full from-[#F58D86] to-purple-600 text-white' : 'text-white'}`} onClick={() => handleStepClick(3)}>
            REVENUE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
