import React, { useEffect, useRef, useState } from 'react';

const Founder = () => {
  const [isImageScaled, setIsImageScaled] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !isImageScaled) {
            setIsImageScaled(true);
          } else if (!entry.isIntersecting && isImageScaled) {
            setIsImageScaled(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, [isImageScaled]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-8">
      <div className="relative flex justify-center">
        <img
          ref={imageRef}
          src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64df240c8d5e1c29b06d3a95_Founders%20Photo-p-500.webp"
          alt="Founders"
          className={`rounded-lg transition-all duration-1000 ease-in-out ${
            isImageScaled ? 'scale-90 rotate-0 ' : 'scale-100 rotate-3'
          }`}
        />
        <div className="absolute bottom-0 right-0 w-72 bg-[#F1E9FC] bg-opacity-90 rounded-lg p-3 text-md py-6 px-6 text-gray-800">
          <span className="font-semibold">
            Rahul Vishwakarma, Akhil Kumar & Yogesh Byahatti -
          </span>{' '}
          Founders
        </div>
      </div>
      <div className="text-center md:text-left">
        <h2 className="text-4xl font-extrabold">From the founders</h2>
        <p className="mt-8 text-[15px]">
          We are a young company solving an age-old problem: Supply Chain. Our
          goal is simple: to eradicate stock outs for businesses that want to
          grow faster. Our background, tech expertise, and empathy allow us to
          do just that.
        </p>
        <p className="mt-4 text-[15px]">
          Thank you for checking out Crest, and we hope to help you always be in
          stock!
        </p>
        <button className="mt-6 px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:opacity-90 hover:scale-95">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default Founder;