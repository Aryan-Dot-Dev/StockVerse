import { useEffect, useState } from 'react'
import { json, MetaFunction, useLoaderData } from '@remix-run/react';
import TopBar from "~/components/TopBar";
import StockCard from "~/components/StockCard";
import Favorites from "~/components/Favorites";
import MarketTrend from "~/components/MarketTrend";
import { FaChartLine } from "react-icons/fa";
import SidebarButton from '~/components/SidebarButton';
import { MdOutlineBookmarkBorder } from 'react-icons/md';
import { IoWalletOutline } from 'react-icons/io5';
import { LuLayoutGrid } from 'react-icons/lu';
import StockBar from '~/components/StockBar';
import StockMarketOverview from '~/components/StockMarketOverview';
import { LoaderFunction } from '@remix-run/node';
import { getStockData } from '~/utils/stockData';
import CandlestickChart from "~/components/CandleStickChart";

export const meta: MetaFunction = () => {
	return [
		{ title: "Dashboard" },
		{ name: "description", content: "Welcome to Remix!" },
	];
};

export const loader: LoaderFunction = async () => {
	const data = await getStockData();
	return json(data);
}

const index = () => {
	const data = useLoaderData();
	const [tab, setTab] = useState('Dashboard');
	const [selectedStock, setSelectedStock] = useState(data[0]);
	const [selectedCategory, setSelectedCategory] = useState('Finance Service');
	const categories = [
		'Finance Service', 'Energy', 'Materials', 'Technology',
		'Consumer Staples', 'Media', 'Industrials', 'Healthcare'
	];

	useEffect(() => {
		if (data && Object.keys(data).length > 0) {
			console.log('Full Data:', data);
		} else {
			console.log('No data available');
		}
	}, [data]);

	useEffect(() => {
		console.log('Selected Stock:', selectedStock);
	}, [selectedStock]);


	return (
		<div className="flex flex-col font-[Ubuntu]">
			<TopBar />
			<div className="flex">
				{/* Sidebar */}
				<div className="flex flex-col bg-[#151515] px-1 py-3 w-fit max-h-max gap-3 rounded-br-xl">
					<SidebarButton
						image={LuLayoutGrid}
						title="Dashboard"
						active={tab === 'Dashboard'}
						onClick={() => setTab('Dashboard')}
					/>
					<SidebarButton
						image={FaChartLine}
						title="Stock"
						active={tab === 'Stock'}
						onClick={() => setTab('Stock')}
					/>
					<SidebarButton
						image={MdOutlineBookmarkBorder}
						title="Favorite"
						active={tab === 'Favorite'}
						onClick={() => setTab('Favorite')}
					/>
					<SidebarButton
						image={IoWalletOutline}
						title="Wallet"
						active={tab === 'Wallet'}
						onClick={() => setTab('Wallet')}
					/>
				</div>

				{/* Dashboard Tab */}
				{tab === 'Dashboard' && (
					<div className="relative flex flex-col h-fit w-full p-4">
						<p className="text-2xl font-[Ubuntu] mb-4">My Portfolio</p>

						{/* Stock Ticker */}
						<div className="relative overflow-hidden w-[80vw] h-20 mx-4 rounded-xl mb-2">
							<div className="flex items-center gap-4 animate-scroll w-[200%] my-4">
								{[...data, ...data].map((stock: any, index: number) => (
									<div key={`${stock._id}-${index}`} onClick={() => setSelectedStock(stock)}>
										<StockCard
											stock={{
												symbol: stock.stockInfo.ticker,
												percentage: stock.priceData.percentageChange,
											}}
										/>
									</div>
								))}
							</div>
						</div>

						{/* CandlestickChart and Favorites Section */}
						<div className="flex gap-4 w-full">
							<div className="flex-1 bg-[#151515] rounded-xl border p-6 border-zinc-700 shadow-md">
								{selectedStock && (
									<CandlestickChart
										data={selectedStock.charts.priceChart.data}
										stockName={selectedStock.stockInfo.ticker}
									/>
								)}
							</div>
							<div className="w-1/3 bg-[#151515] p-4 rounded-xl border border-zinc-700 shadow-md">
								<Favorites />
							</div>
						</div>

						{/* Market Trends */}
						<div className="mt-2">
							<MarketTrend stocks={data} />
						</div>
					</div>
				)}

				{/* Stock Tab */}
				{tab === 'Stock' && (
					<div className="flex flex-col w-full h-fit p-4 gap-4">
						<div className="flex gap-4">
							<div className="p-4 bg-[#151515] border border-zinc-700 rounded-2xl shadow-md flex-1">
								<div className="mb-4">
									<p className="text-2xl font-semibold text-white">Stock Market</p>
								</div>
								<div className="flex flex-wrap gap-2 mb-4">
									{categories.map((category) => (
										<button
											key={category}
											onClick={() => setSelectedCategory(category)}
											className={`px-3 py-1 border rounded-full ${selectedCategory === category
													? 'bg-white text-black'
													: 'bg-[#1f1f1f] text-gray-300 border-gray-600'
												} hover:bg-gray-700 transition-colors`}
										>
											{category}
										</button>
									))}
								</div>
								<StockBar watchlist={data} />
							</div>
							<StockMarketOverview />
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default index