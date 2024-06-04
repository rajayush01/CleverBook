import React, { useEffect } from 'react';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  useEffect(() => {
    const styleSheet = document.styleSheets[0];
    const keyframes = `
      @keyframes gradientAnimation {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
    `;
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
  }, []);

  const gradientStyle = {
    background: 'linear-gradient(to right, #AA72E1, #F58D86)',
    backgroundSize: '200% 200%',
    animation: 'gradientAnimation 5s ease infinite',
  };

  return (
    <div className="bg-[#151218] flex flex-col justify-center items-center text-white">
      <div
        className="w-full md:w-[750px] lg:w-[1000px] h-[500px] mt-20 flex flex-col items-center justify-center text-center rounded-2xl"
        style={gradientStyle}
      >
        <span className="font-bold text-5xl">You can grow faster than you think</span>
        <span className="w-full md:w-[600px] mt-10 mb-5">
          Plan with Crest to fulfil your demand today, and dreams tomorrow. We bring the methods and technologies of large global companies to help brands of all sizes scale.
        </span>
        <button className="relative w-40 md:w-52 h-10 outline-button text-md md:text-md font-bold rounded-full mt-4 bg-black text-white hover:scale-95">
          Get started with Crest
        </button>
      </div>

      <footer className="text-white py-12 w-full md:w-[1200px] mt-40">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex flex-col mb-4">
              <h2 className="text-3xl md:text-4xl font-bold">CleverBooks</h2>
              <p className="text-gray-400 mt-2">
                Crest is an AI-powered supply chain software that provides companies tools for demand forecasting, inventory planning and more. This helps them have the right amount of stock, optimise space and fulfil every order.
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Explore</h3>
            <ul className="text-gray-400">
              <li className="mb-2">
                <a href="/" className="hover:text-white">Product</a>
              </li>
              <li className="mb-2">
                <a href="/" className="hover:text-white">Pricing</a>
              </li>
              <li className="mb-2">
                <a href="/" className="hover:text-white">Customer Stories</a>
              </li>
              <li className="mb-2">
                <a href="/" className="hover:text-white">Career</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Learn</h3>
            <ul className="text-gray-400">
              <li className="mb-2">
                <a href="/" className="hover:text-white">About us</a>
              </li>
              <li className="mb-2">
                <a href="/" className="hover:text-white">Blog</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Crest</h3>
            <p className="text-gray-400 mb-4">sales@getcrest.ai</p>
            <p className="text-gray-400">
              Registered Office: <br />
              1507, Incubex, 11th cross road, <br />
              19th Main Road, Bengaluru, <br />
              India. 560102
            </p>
            <p className="text-gray-400 mt-4">
              Corporate Office: <br />
              291, All Time Space, 4th Floor, <br />
              15th A Cross, Sector - 6, <br />
              HSR Layout, Bengaluru, <br />
              India. 560102
            </p>
            <div className="flex mt-8">
              <a href="/" className="text-gray-400 hover:text-white mr-4">
                <FaTwitter />
              </a>
              <a href="/" className="text-gray-400 hover:text-white mr-4">
                <FaFacebookF />
              </a>
              <a href="/" className="text-gray-400 hover:text-white mr-4">
                <FaInstagram />
              </a>
              <a href="/" className="text-gray-400 hover:text-white">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col  mt-8 container mx-auto px-4">
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <p className="text-sm md:text-base text-gray-400">
              Copyright 2024 Crest | Terms of Service | Privacy Policy
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-sm md:text-base text-gray-400 flex flex-col">
              <span> Conifer Innovations Private Limited</span>
              <span>CIN: U72900KA2022PTC163144</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
