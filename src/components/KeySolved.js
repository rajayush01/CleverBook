import React from 'react';

const KeySolved = () => {
  return (
    <div className='w-screen' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '100px' }}>
      <span className='text-center font-bold text-[40px]' style={{ marginBottom: '20px' }}>Four key questions answered by Crest</span>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 max-w-screen-lg mt-12 mb-8'>
        <div className='bg-[#F1E9FC] rounded-lg p-6 text-left'>
          <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63f63ee54595853ca5e31682_what%20to%20orderr%20(1).svg" alt="" className='w-10  mb-4' />
          <h3 className='font-bold mb-2'>What to order</h3>
          <p>Get accurate demand and days to stock out. Automate purchase planning so you can always have what you need for your next sales cycle.</p>
        </div>
        <div className='bg-[#F1E9FC] rounded-lg p-6 text-left'>
          <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63bd0d2fab2e360025df922a_when%20to%20orderr.svg" alt="" className='w-10  mb-4' />
          <h3 className='font-bold mb-2'>When to order</h3>
          <p>Have up-to-date inventory, storage, sales velocity, and demand. Get timely order suggestions so you're never left guessing.</p>
        </div>
        <div className='bg-[#F1E9FC] rounded-lg p-6 text-left'>
          <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63bd0cc629ab7f2d8cb0a8bd_how%20much%20to%20stock.svg" alt="" className='w-10  mb-4' />
          <h3 className='font-bold mb-2'>How much to stock</h3>
          <p>Get inventory requirements for every node, for every SKU. So you avoid out-of-stock situations, even during demand spikes.</p>
        </div>
        <div className='bg-[#F1E9FC] rounded-lg p-6 text-left'>
          <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63bd0c2c27cde81ffea6515b_where%20to%20placee.svg" alt="" className='w-10 mb-4' />
          <h3 className='font-bold mb-2'>Where to place</h3>
          <p>Our tool suggests how to move stock within your supply chain. So you'll always have products available across cities.</p>
        </div>
      </div>
    </div>
  );
};

export default KeySolved;
