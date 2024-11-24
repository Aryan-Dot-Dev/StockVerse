import { json, LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getStockDataBySymbol } from "~/utils/stockData";

type Stock = {
  _id: string;
  name: string;
  symbol: string;
  latestNews: {
    headline: string;
    link: string;
    source: string;
    date: string;
  }[];
};

export const loader: LoaderFunction = async ({ params }) => {
  const { symbol } = params;
  const data = await getStockDataBySymbol(symbol); // Fetch news by symbol
  return json(data);
};

export default function News() {
  const stock: Stock = useLoaderData();

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-gray-300 p-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-100 mb-2">{stock.name} ({stock.symbol})</h1>
        <p className="text-lg text-gray-500">Stay updated on the latest news for this stock.</p>
      </header>

      <div className="space-y-6">
        {stock[0].latestNews.map((news, index) => (
          <div
            key={index}
            className="group relative rounded-lg overflow-hidden border border-gray-800 bg-[#161616] hover:bg-[#1e1e1e] shadow-md transition-all p-6"
          >
            <h3 className="text-lg font-semibold text-emerald-400 transition-colors">
              <a
                href={news.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-500 transition-colors"
              >
                {news.headline}
              </a>
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              {news.source} - <span className="text-gray-400">{news.date}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
