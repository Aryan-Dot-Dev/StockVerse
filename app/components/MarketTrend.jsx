import React from 'react';
import { FiBookmark } from "react-icons/fi";
import { FaApple } from 'react-icons/fa6';

const MarketTrend = ({ stocks }) => {
  return (
    <div className='bg-[#151515] border border-zinc-700 rounded-3xl p-4 w-[11/12] mt-2 shadow-md'>
      {/* Header */}
      <div className='flex justify-between items-center mb-4'>
        <p className='text-lg font-semibold text-white'>Market Trend</p>
        <p className='text-sm text-gray-400 cursor-pointer hover:underline'>See all</p>
      </div>

      {/* Table Container */}
      <div className='overflow-x-auto'>
        <table className='w-full text-left border-collapse'>
          <thead className='text-center'>
            <tr className='bg-[#151515] text-gray-400'>
              <th className='p-3 border-b border-zinc-700'></th>
              <th className='p-3 border-b border-zinc-700'>Name</th>
              <th className='p-3 border-b border-zinc-700'>Price</th>
              <th className='p-3 border-b border-zinc-700'>Balance</th>
              <th className='p-3 border-b border-zinc-700'>Value</th>
              <th className='p-3 border-b border-zinc-700'>Watchlist</th>
              <th className='p-3 border-b border-zinc-700'></th>
            </tr>
          </thead>
          <tbody className='text-center'>
            {stocks.length > 0 ? (
              stocks.map((stock, index) => (
                <tr
                  key={stock.symbol || index}
                  className='hover:bg-zinc-800 transition-colors text-center'
                >
                  <td className='p-3 text-white border-b text-3xl border-zinc-700 align-middle'>
                    <div className='flex justify-center items-center'>
                      <FaApple />
                    </div>
                  </td>
                  <td className='p-3 text-white border-b border-zinc-700 align-middle'>
                    <div className='flex justify-center gap-2 items-center'>
                      <p className='font-semibold'>{stock.stockInfo.ticker}</p>
                      <p className='text-sm text-gray-400'>{stock.stockInfo.companyName}</p>
                    </div>
                  </td>
                  <td className='p-3 text-white border-b border-zinc-700 align-middle'>
                    ${stock.priceData.currentPrice.toFixed(2)}
                  </td>
                  <td
                    className={`p-3 border-b border-zinc-700 align-middle ${
                      stock.balance < 0 ? 'text-red-500' : 'text-green-500'
                    }`}
                  >
                    {stock.priceData.priceChange > 0 ? '+' : ''}
                    {stock.priceData.priceChange.toFixed(2)}
                  </td>
                  <td className='p-3 text-white border-b border-zinc-700 align-middle'>
                    ${stock.priceData.percentageChange.toFixed(2)}
                  </td>
                  <td className='p-3 text-indigo-500 border-b border-zinc-700 align-middle'>
                    <div className='flex justify-center items-center text-2xl'>
                      <FiBookmark />
                    </div>
                  </td>
                  <td className='p-3 border-b border-zinc-700 align-middle'>
                    <button className='bg-blue-500 hover:bg-indigo-800 text-white py-2 px-4 rounded-3xl text-sm'>
                      Get Started
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className='p-3 text-gray-400 text-center'>
                  No stock data available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MarketTrend;
