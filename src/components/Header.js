import React, { useState, useEffect } from 'react';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`sticky top-0 z-10 transition-opacity ${isScrolled ? 'bg-opacity-90' : 'bg-opacity-100'} bg-[#151218]`}>
      <div className='flex flex-row items-center justify-between py-4 px-4 md:px-1'>
        <div className='text-white text-[30px]'>
          <a href="/">CleverBooks</a>
        </div>
        <div className='text-white hidden md:flex space-x-4 md:space-x-9 mt-4 md:mt-0'>
          <a href='/' className='hover:text-[#FC907E]'>Product</a>
          <a href='/' className='hover:text-[#FC907E]'>Pricing</a>
          <a href='/' className='hover:text-[#FC907E]'>Industry</a>
          <a href='/' className='hover:text-[#FC907E]'>Customer Stories</a>
          <a href='/' className='hover:text-[#FC907E]'>About</a>
          <a href='/' className='hover:text-[#FC907E]'>Blog</a>
        </div>
        <div className='hidden md:flex items-center space-x-4 md:space-x-8 mt-4 md:mt-0'>
          <span className='text-gradient'>Login</span>
          <button className='rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 px-4 hover:scale-95'>
            Talk to Us
          </button>
        </div>
        {/* Dropdown menu icon for small screens */}
        <div className="md:hidden flex items-center justify-end space-x-4 relative">
          <button onClick={toggleMenu} className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
          {showMenu && (
            <div className="absolute top-14 right-0 w-60 bg-white p-6 rounded-md shadow-lg animate-slide-down">
              <div className="flex flex-col space-y-4 text-black">
                <span className='text-lg'>Product</span>
                <span className='text-lg'>Pricing</span>
                <span className='text-lg'>Industry</span>
                <span className='text-lg'>Customer Stories</span>
                <span className='text-lg'>About</span>
                <span className='text-lg'>Blog</span>
              </div>
              <div className="flex flex-col space-y-4 mt-6">
                <span className='text-lg text-gradient'>Login</span>
                <button className='rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 px-4 hover:scale-95'>
                  Talk to Us
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
