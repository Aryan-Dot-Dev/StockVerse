import { LoaderFunction } from "@remix-run/node";
import { useLoaderData, json } from "@remix-run/react";
import { getStockData } from "~/utils/stockData";
import { Link } from "@remix-run/react";

type NewsItem = {
  headline: string;
  date: string;
  source: string;
  link: string;
};

type Stock = {
  _id: string;
  name: string;
  symbol: string;
  latestNews: NewsItem[];
};

export const loader: LoaderFunction = async () => {
  const data: Stock[] = await getStockData();
  return json(data);
};

export default function News() {
  const data = useLoaderData<Stock[]>();

  return (
    <div className="flex flex-col gap-6 p-4">
      <h1 className="text-3xl font-bold text-gray-200">Stock News</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((stock) => (
          <div
            key={stock._id}
            className="flex flex-col gap-4 p-6 rounded-3xl cursor-pointer items-start justify-start border border-zinc-800 bg-[#151515] transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-black/50"
          >
            <Link to={`/news/${stock.symbol}`} >
              <h2 className="text-xl font-semibold text-white">
                {stock.name} <span className="text-gray-400">({stock.symbol})</span>
              </h2>
            </Link>
            <div className="flex flex-col gap-2">
              {stock.latestNews.map((news, index) => (
                <div
                  key={index}
                  className="p-3 bg-zinc-900 rounded-lg hover:bg-zinc-800 transition-colors"
                >
                  <a
                    href={news.link}
                    target="_self"
                    rel="noopener noreferrer"
                    className="text-lg font-medium text-blue-400 hover:underline"
                  >
                    {news.headline}
                  </a>
                  <p className="text-sm text-gray-400 mt-1">
                    {news.source} - {news.date}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
