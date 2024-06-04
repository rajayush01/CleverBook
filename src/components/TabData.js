"use client"
import { useState } from 'react';

const TabData = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const faqs = [
    {
      question: 'Accurate Demand Forecasting',
      answer: 'Dynamically predict future demand across all channels, with high accuracy and lowest granularity. Crest takes into account what traditional forecasts do\'nt: trends, real-time market signals, promotional activities, and even logistics disruptions.',
      image: 'https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63f64bb2507621d0bf7da369_Demand%20forecasting-p-1080.webp',
    },
    {
      question: 'HELIX: Workflow Automation',
      answer: 'Build and automate custom S&OP workflows to enhance productivity and streamline your processes. Crest helps you get a bird\'s eye view of your supply chain, and help you do things a spreadsheet never can.',
    },
    {
      question: 'Automated Purchase Planning',
      answer: 'Never miss an order, and know exactly how much to order, when, and from whom. This is made possible with constant inventory tracking and automated PO generation. What\'s more, Crest improves with every planning cycle as the data set gets richer.',
    },
    {
        question: 'Automated Distribution Planning',
        answer: 'Faster replenishment cycles mean more working capital for you. Granular warehouse and store-level insights help you optimally allocate materials and inventory. Say goodbye to stock-outs and excess inventory.',
      },
      {
        question: 'Easy Integration',
        answer: 'From all online store solutions to cloud ERPs, Crest integrates seamlessly with your current tech and ops stack. What\'s more? Connecting them to Crest will give you actionable insights.',
      },
      {
        question: 'Custom Dashboard',
        answer: 'Create customised dashboards to identify important trends, patterns, and insights. Tailor them to match the unique requirements of your team, empowering them to extract data in a user-friendly format that can be easily comprehended.',
      },
      {
        question: 'Consensus Planning',
        answer: 'Get inputs from all major stakeholders for the forecast numbers with a multi-level approval process. Compare &amp; visualise the impact of the numbers on major KPIs in real time and take informed decisions with Scenario Planning',
      },
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className=" py-12">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-center mb-8">
          Things your spreadsheet wishes it could do
        </h2>
        <div className="flex flex-row sm:flex-col md:flex-row justify-between gap-10 mt-20">
          <div className=''>
            <div>
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className=" p-6 rounded-lg border-b-2 border-gray-300 "
                >
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => handleToggle(index)}
                  >
                    <h3 className="text-base sm:text-lg md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#F58D86] to-purple-600">
                      {faq.question}
                    </h3>
                  </div>
                  {activeIndex === index && (
                    <p className="mt-4  sm:text-base md:text-md text-black">
                      {faq.answer}
                      <a href="/" className=" flex items-center mt-5 text-transparent bg-clip-text bg-gradient-to-r from-[#F58D86] to-purple-600">
                        Learn more 
                      </a>
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className='hidden md:block w-full h-auto md:w-[550px] md:h-[700px] rounded-lg bg-gradient-to-r from-[#F58D86] to-purple-600 flex items-center justify-center'>
    <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63f64bb2507621d0bf7da369_Demand%20forecasting-p-1080.webp" alt="" className="w-full h-auto md:w-auto md:h-auto" />
  </div>
        </div>
        <div className="flex items-center justify-center mt-16">
          <button className='relative items-center text-center justify-center w-auto md:w-52 h-10 outline-button text-md md:text-lg rounded-full mt-4 text-transparent bg-clip-text bg-gradient-to-r from-[#F58D86] to-purple-600 border border-purple-600 transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-purple-600 hover:to-[#F58D86] hover:scale-95'>
            Features
          </button>
        </div>
      </div>
    </div>
  );
};

export default TabData;
