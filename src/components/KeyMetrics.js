import React, { useState } from 'react';
import Timeline from './Timeline';
import PercentageCounter from './Percent';

const KeyMetrics = () => {
  const [targetPercentage, setTargetPercentage] = useState(85);

  const handleSelect = (step) => {
    const targets = [85, 25, 15];
    setTargetPercentage(targets[step - 1]);
  };

  return (
    <div className='mt-40 min-h-screen bg-gradient-to-br from-[#151218] via-[#151218] to-[#3A2B43]'>
      <div className="flex flex-col md:flex-row h-full">
        <div className="m-10">
          <Timeline onSelect={handleSelect} />
        </div>
        <div className="flex-grow flex items-center justify-center  md:m-0">
          <PercentageCounter targetPercentage={targetPercentage} />
        </div>
      </div>
    </div>
  );
};

export default KeyMetrics;
