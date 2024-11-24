import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getStockDataBySymbol } from "~/utils/stockData";

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

export const loader: LoaderFunction = async ({ params }) => {
  const { symbol, id } = params;

  if (!symbol) {
    throw new Response("Stock symbol is required", { status: 400 });
  }

  const stock: Stock | null = await getStockDataBySymbol(symbol);

  if (!stock) {
    throw new Response("Stock not found", { status: 404 });
  }

  const newsIndex = id ? parseInt(id, 10) : 0;

  return json({ stock, newsIndex });
};

export default function News() {
  const { stock, newsIndex } = useLoaderData<{ stock: Stock; newsIndex: number }>();
  const news = stock[0].latestNews[newsIndex];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">News for {stock.name} ({stock.symbol})</h1>
      <div className="mt-4">
        <h2 className="text-lg font-semibold">{news.headline}</h2>
        <p className="text-sm text-gray-600">{news.source} - {news.date}</p>
        <a
          href={news.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline mt-2 inline-block"
        >
          Read more
        </a>
      </div>
    </div>
  );
}
