import React, { useEffect, useState } from 'react';

const PercentageCounter = ({ targetPercentage }) => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setPercentage(0); // Reset percentage on target change
    const interval = setInterval(() => {
      setPercentage(oldPercentage => {
        if (oldPercentage < targetPercentage) return oldPercentage + 1;
        clearInterval(interval);
        return oldPercentage;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [targetPercentage]);

  const gradientText = {
    background: `-webkit-linear-gradient(left, #F58D86, #8b5cf6)`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  const smallText = {
    fontSize: '0.6em',
  };

  const responsiveStyles = {
    fontSize: 'calc(25vh + 10px)', 
  };

  return (
    <div className="text-center mt-20 mb-20 justify-center font-bold text-white text-[10vw]">
      <span style={{ ...gradientText, ...responsiveStyles }}>{percentage}</span>
      <span style={smallText}>
        {targetPercentage === 25 ? ' days' : '%'}
      </span>
      <p className="text-4xl mt-[-20px] ">
        {targetPercentage === 85 && 'Reduction in out-of-stock'}
        {targetPercentage === 25 && 'Reduction in cash recovery time'}
        {targetPercentage === 15 && 'Growth in Revenue'}
      </p>
    </div>
  );
};

export default PercentageCounter;