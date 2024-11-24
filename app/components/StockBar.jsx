
import { FiBookmark } from 'react-icons/fi'


const StockBar = ( {watchlist} ) => {
    
    return (
        <div className="overflow-x-auto">
            <table className="w-full text-left text-gray-300">
                <thead className="border-b border-gray-600">
                    <tr>
                        <th className="py-2">Name</th>
                        <th className="py-2">Price</th>
                        <th className="py-2">Change</th>
                        <th className="py-2">Market Cap</th>
                        <th className="py-2">Watchlist</th>
                        <th className="py-2"></th>
                    </tr>
                </thead>
                <tbody>
                    {watchlist.map((stock, index) => (
                        <tr key={index} className="border-b border-gray-700 hover:bg-[#1f1f1f]">
                            <td className="py-2 flex items-center gap-2">
                                <div className="w-8 h-8 bg-gray-500 rounded-full">{/* Placeholder for stock icon */}</div>
                                <div>
                                    <span className="font-semibold">{stock.stockInfo.ticker}</span>
                                    <p className="text-sm text-gray-500">{stock.stockInfo.companyName}</p>
                                    <p className="text-xs text-gray-400">{stock.stockInfo.stockExchange}</p>
                                </div>
                            </td>
                            <td className="py-2">{`$${stock.priceData.currentPrice.toFixed(2)}`}</td>
                            <td className={`py-2 ${stock.priceData.priceChange >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                                {stock.priceData.priceChange > 0 ? '+' : ''}{stock.priceData.priceChange.toFixed(2)} 
                                ({stock.priceData.percentageChange.toFixed(2)}%)
                            </td>
                            <td className="py-2">{`$${(stock.tradingData.marketCap / 1e9).toFixed(2)}B`}</td>
                            <td className="py-2 text-center">
                                <button 
                                    className={`text-xl ${stock.isWatchlisted ? 'text-yellow-500' : 'text-gray-400'}`} 
                                    onClick={() => toggleWatchlist(index)}
                                >
                                    <FiBookmark />
                                </button>
                            </td>
                            <td className="py-2 text-right">
                                <button className="px-4 py-1 bg-blue-600 text-white rounded-full">Buy</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            
        </div>
    )
}

export default StockBar;