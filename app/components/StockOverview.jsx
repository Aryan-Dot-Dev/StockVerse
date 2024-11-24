import React from 'react';

function StockOverview({ data }) {
  return (
    <div className="p-4 bg-[#151515] shadow-md border border-zinc-700 rounded-2xl">
      <h2 className="text-2xl font-semibold">{data.stockInfo.companyName} ({data.stockInfo.ticker})</h2>
      <p className="text-gray-600">Stock Exchange: {data.stockInfo.stockExchange}</p>
      <div className="mt-2">
        <p>Current Price: ${data.priceData.currentPrice.toFixed(2)}</p>
        <p className={data.priceData.priceChange > 0 ? 'text-green-500' : 'text-red-500'}>
          Change: {data.priceData.priceChange > 0 ? '+' : ''}{data.priceData.priceChange.toFixed(2)} ({data.priceData.percentageChange}%)
        </p>
        <p>Day's High: ${data.priceData.daysHigh.toFixed(2)} | Day's Low: ${data.priceData.daysLow.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default StockOverview;
