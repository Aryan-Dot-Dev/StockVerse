import React from 'react';

const StockCardBroad = ({ stock, Logo }) => {
    return (
        <div className='flex flex-col items-center border border-zinc-800 rounded-3xl bg-[#151515] gap-2 p-4 w-11/12 sm:w-3/4 mx-4 mt-2'>
            <div className='flex items-center justify-between w-full mb-2'>
                <div className='flex items-center gap-4'>
                    <Logo className='text-5xl text-gray-300' />
                    <div className='flex flex-col text-lg text-white'>
                        <p className='font-semibold'>{stock.name}</p>
                        <p className='text-sm text-gray-400'>{stock.symbol}</p>
                    </div>
                </div>
                <div className='flex flex-col items-end'>
                    <p className='text-2xl font-bold text-green-400'>${stock.price.toFixed(2)}</p>
                    <p className='text-sm text-gray-500'>Last updated: now</p>
                </div>
            </div>
            <div className='w-full'>
                <img 
                    src="candlestick-simple.png" 
                    alt={`Candlestick chart for ${stock.name}`} 
                    className='w-full rounded-3xl mt-2'
                />
            </div>
        </div>
    );
};

export default StockCardBroad;
