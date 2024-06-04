import React, { useState, useEffect } from "react";

const ImageSlider = ({ data }) => {
  const [slide, setSlide] = useState(0);
  const interval = 3000;

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, interval);
    return () => clearInterval(slideInterval);
  }, [slide]);

  return (
    <div className="flex flex-col items-center justify-center h-screen mt-20 mb-40">
      <span className="font-extrabold text-5xl mb-10">Get Crest and get...</span>
      <div className="flex justify-center items-center relative w-full h-full">
        <button
          onClick={prevSlide}
          className="absolute left-10 bg-gradient-to-r from-[#F58D86] to-purple-600 text-white p-2 rounded-full z-10 hover:scale-95"
        >
          &lt;
        </button>
        <div className="carousel flex justify-center items-center w-[1100px] h-[700px] p-4 bg-white shadow-lg rounded-lg overflow-hidden relative">
          {data.map((item, idx) => (
            <div
              key={idx}
              className={`slide flex items-center w-full h-full absolute transition-transform duration-700 ease-in-out ${
                slide === idx ? "transform translate-x-0" : "transform translate-x-full"
              }`}
              style={{
                transform: `translateX(${(idx - slide) * 100}%)`,
                transition: 'transform 1s ease'
              }}
            >
              <div className="w-1/2">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="w-1/2 p-4">
                <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={nextSlide}
          className="absolute right-10 bg-gradient-to-r from-[#F58D86] to-purple-600 text-white p-2 rounded-full z-10 hover:scale-95"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
