import React from 'react';

const StockMarketOverview = () => {
  const stockList = [
    { name: 'AAPL', company: 'Apple Inc', icon: '🖼', trend: 'up' }, // Replace with actual image/icon sources
    { name: 'MSFT', company: 'Microsoft', icon: '🖼', trend: 'down' },
  ];

  return (
    <div className="p-4 bg-[#151515] rounded-2xl shadow-lg border border-zinc-700 w-1/4 ">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-white">Stock Market</h2>
        <a href="#" className="text-blue-400">See All</a>
      </div>

      {/* Navigation Buttons */}
      <div className="flex gap-2 mb-4">
        <button className="px-3 py-1 border rounded-full bg-[#1f1f1f] text-gray-300 border-gray-600 hover:bg-gray-700">Get Started</button>
        <button className="px-3 py-1 border rounded-full bg-white text-black">Get Started</button>
      </div>

      {/* Stock List */}
      <div className="space-y-4">
        {stockList.map((stock, index) => (
          <div key={index} className="flex items-center justify-between">
            {/* Stock Details */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center bg-gray-500 rounded-full">
                {stock.icon} {/* Replace with an <img> tag if needed */}
              </div>
              <div>
                <span className="font-semibold text-white">{stock.name}</span>
                <p className="text-sm text-gray-500">{stock.company}</p>
              </div>
            </div>

            {/* Trend Line Placeholder */}
            <div className={`w-24 h-8 rounded ${stock.trend === 'up' ? 'bg-green-500' : 'bg-red-500'}`}>
              {/* Use a chart library like Chart.js or an SVG for a real trend graph */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StockMarketOverview;
