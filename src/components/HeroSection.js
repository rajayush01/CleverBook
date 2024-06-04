import React from 'react';
import right from '../assets/right1.png';

const HeroSection = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center' style={{ background: 'linear-gradient(to right, #151218 50%, #362846 100%)', borderRadius: '0 0 150px 150px' }}>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 text-white p-4 justify-center text-start mt-[-50px] md:mt-[-100px]'>
        <div className='flex flex-col justify-center mx-4 md:mx-20'>
          <span className="text-[30px] md:text-[50px] font-semibold mb-4 lg:text-[70px]">
            Every order fulfilled,{' '}
            <span className="bg-gradient-to-r from-[#F58D86] to-[#8b3cbd] bg-clip-text text-transparent">
              on time.
            </span>
          </span>
          <span className='text-[14px] md:text-[16px]'>
            Eliminate overstocking and under-stocking with Crest. Built by supply-chain experts, it brings the same technology used by large global brands to power fast-growing startups. In short, we make supply meet demand, and then help you grow both.
          </span>
          <button className='relative w-40 md:w-52 h-10 outline-button text-md md:text-lg rounded-full mt-4 text-transparent bg-clip-text bg-gradient-to-r from-[#F58D86] to-purple-600 border border-purple-600 transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-500 hover:scale-95'>
            Get started with Crest
          </button>
        </div>
        <div className='flex justify-center items-center mt-[-50px] md:mt-[-105px] mx-[-10px]'>
          <img src={right} alt="right" className='w-[280px] h-[320px] md:w-full md:h-[640px]' />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
