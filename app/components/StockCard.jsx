import React from 'react';

const StockCard = ({ stock }) => {
  return (
    <div className='flex p-4 rounded-3xl cursor-pointer items-center justify-center border border-zinc-800 bg-[#151515] transition-transform transform hover:scale-[110%] hover:shadow-lg hover:shadow-black/50' onClick={() => {console.log(stock)}}>
      <div className='flex items-center gap-3' >
        {stock.symbol}

        {stock.percentage > 0 ? (
          <p className='text-green-500'>+{stock.percentage}%</p>
        ) : (
          <p className='text-red-500'>{stock.percentage}%</p>
        )}
      </div>
    </div>
  );
};

export default StockCard;