import React from 'react';
const Banner = () => {
  return (
    <div>
      <div className="carousel w-full h-[80vh]">
        <div id="slide1"
          style={{ backgroundImage: `url(/images/1.png)`, backgroundRepeat: 'no-repeat' }}
          className="carousel-item relative w-full flex items-center">
          <div className='ml-[18%] text-black'>
            <p className='uppercase text-[14px] leading-[40px]'>new connection</p>
            <h1 className='text-7xl font-bold tracking-tight'>Luxury Brands</h1>
            <h1 className='text-7xl font-normal -tracking-[0.2px]'>Without Labels</h1>
            <button className='py-4 px-10 bg-[#333] rounded-md border-[1px] text-white font-bold w-[160px] uppercase text-[14px] mt-6 hover:bg-[#4eb370]'>Shop Now</button>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2"
          style={{ backgroundImage: `url(/images/2.png)`, backgroundRepeat: 'no-repeat' }}
          className="carousel-item relative w-full flex items-center">
          <div className=' ml-[60%] text-black'>
            <h1 className='text-7xl font-bold tracking-tight'>Making</h1>
            <h1 className='text-7xl font-medium -tracking-[0.2px] my-2'>Bold Moves</h1>
            <p className='text-[20px] leading-[1.2]'>Upgrade your wardrobe with a variation of styles</p>
            <button className='py-4 px-8 bg-[#333] rounded-md border-[1px] text-white font-bold w-[160px] uppercase text-[14px] mt-6 hover:bg-[#4eb370] mr-6'>Shop Women</button>
            <button className='py-4 px-10 bg-[#fff] rounded-md border-[1px] border-[#333] text-[#292929] font-semibold w-[160px] uppercase text-[14px] mt-6 hover:bg-[#333] hover:text-white'>Shop Men</button>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;