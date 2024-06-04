import React, { useState } from 'react';

const BlogSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const blogPosts = [
    {
      id: 1,
      title: 'Impact of RPA (Robotic Process Automation) in Supply Chain',
      date: 'Oct 12, 2023',
      imageUrl:
        'https://cdn.prod.website-files.com/639b3e775b326d0848ea3e74/6527d12579fe9fb6cfc0c8eb_RPA%20BLOG%20THUMBNAIL.png',
    },
    {
      id: 2,
      title: 'Creating an Impact with Inventory Planning: The QSR Edition',
      date: 'Aug 28, 2023',
      imageUrl:
        'https://cdn.prod.website-files.com/639b3e775b326d0848ea3e74/64ec7b71e9332bfe4b920ba3_thumbnail%20QSR%20(1).png',
    },
    {
      id: 3,
      title: 'The Ultimate Guide to Supply Chain Success',
      date: 'Aug 4, 2023',
      imageUrl:
        'https://cdn.prod.website-files.com/639b3e775b326d0848ea3e74/64ccbab82ea1c2946724d96f_blog-thumbnail.jpg',
    },
    // Add more blog posts if needed
  ];

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? blogPosts.length - 1 : prevSlide - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === blogPosts.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-start md:items-center h-screen gap-10 p-8">
      <div className="w-full md:w-1/3 mb-6 md:mb-0">
        <h1 className="text-4xl font-extrabold mb-4">Delivered: The Crest blog</h1>
        <p className="mb-6">
          Insights from years of working in various supply-chain roles (and an itch to write). We hope you find these posts interesting!
        </p>
        <div className="flex justify-start mb-4">
          <button onClick={goToPrevSlide} className="bg-gray-300 rounded-full p-3 mr-2">
            <span className="text-xl text-purple-500">{'<'}</span>
          </button>
          <button onClick={goToNextSlide} className="bg-gray-300 rounded-full p-3">
            <span className="text-xl text-purple-500">{'>'}</span>
          </button>
        </div>
        <button className='relative w-40 md:w-52 h-10 outline-button text-md md:text-lg rounded-full mt-4 text-transparent bg-clip-text bg-gradient-to-r from-[#F58D86] to-purple-600 border border-purple-600 transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-500 hover:scale-95'>
          View all blogs
        </button>
      </div>
      <div className="w-full md:w-1/3 flex justify-center items-center overflow-hidden bg-[#F1E9FC] h-92">
        <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {blogPosts.map((post, index) => (
            <div key={index} className="min-w-full md:min-w-1/2 lg:min-w-1/3 p-4">
              <div className="relative bg-white rounded-lg shadow-md overflow-hidden">
                <img src={post.imageUrl} alt={post.title} className="w-full h-auto object-contain hover:scale-105" />
                <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-90 p-4">
                  <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                  <p>{post.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSlider;
