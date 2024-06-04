import React from 'react';
import img from '../assets/img.png';
import img1 from '../assets/img8.png';
import img2 from '../assets/img1.png';
import img4 from '../assets/img2.png';
import img5 from '../assets/img4.png';
import img6 from '../assets/img5.png';
import img7 from '../assets/img6.png';
import img8 from '../assets/img7.png';
import img3 from '../assets/img3.png';
import img9 from '../assets/img9.png';
import img10 from '../assets/img10.png';
import img11 from '../assets/img11.png';
import img12 from '../assets/img12.png';


const LogosSlider = () => {
  return (
    <div className="logos overflow-hidden whitespace-nowrap relative flex mt-10 mb-10 w-screen">
      <div className="logos-before absolute top-0 left-0 w-250 h-full bg-gradient-to-r from-transparent to-white z-2"></div>
      <div className="logos-after absolute top-0 right-0 w-250 h-full bg-gradient-to-l from-transparent to-white z-2"></div>
      <div className="logos-slide flex animate-slide infinite linear">
        <img src={img} alt="1" className="h-16 mx-10" />
        <img src={img1} alt="2" className="h-16 mx-10" />
        <img src={img2} alt="3" className="h-16 mx-10" />
        <img src={img4} alt="5" className="h-16 mx-10" />
        <img src={img5} alt="6" className="h-16 mx-10" />
        <img src={img6} alt="7" className="h-16 mx-10" />
        <img src={img7} alt="8" className="h-16 mx-10" />
        <img src={img8} alt="9" className="h-16 mx-10" />
        <img src={img3} alt="9" className="h-16 mx-10" />
        <img src={img9} alt="9" className="h-16 mx-10" />
        <img src={img10} alt="9" className="h-16 mx-10" />
        <img src={img11} alt="9" className="h-16 mx-10" />
        <img src={img12} alt="9" className="h-16 mx-10" />

      </div>
    </div>
  );
};

export default LogosSlider;

