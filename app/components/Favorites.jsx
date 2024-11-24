import React from 'react';
import { GoTriangleDown } from "react-icons/go";
import { FaApple } from "react-icons/fa";

const Favorites = () => {
  return (
    <div className='bg-[#151515] border border-zinc-800 rounded-3xl p-4 w-full shadow-md flex flex-col gap-4'>
      {/* Header */}
      <div className='flex justify-between items-center'>
        <p className='text-lg font-semibold text-white'>My Favorites</p>
        <p className='text-sm text-gray-400 cursor-pointer hover:underline'>See all</p>
      </div>

      {/* Favorite Items */}
      {Array(3).fill(null).map((_, index) => (
        <div
          key={index}
          className='flex items-center bg-[#1c1c1c] border border-zinc-700 rounded-2xl p-3 hover:bg-[#2a2a2a] transition-all'
        >
          {/* Image container */}
          <div className='flex-shrink-0 w-14 h-14 rounded-xl overflow-hidden flex items-center justify-center bg-gray-800'>
            <FaApple className='text-white text-2xl' />
          </div>

          {/* Stock information */}
          <div className='flex flex-col flex-grow ml-4'>
            <p className='text-lg font-medium text-white'>Apple</p>
            <p className='text-sm text-gray-400'>AAPL</p>
          </div>

          {/* Price information */}
          <div className='flex flex-col items-end'>
            <p className='text-lg font-semibold text-green-400'>$201.01</p>
            <p className='text-sm text-red-500 flex items-center'>
              -201.01 <GoTriangleDown className='ml-1' />
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Favorites;
