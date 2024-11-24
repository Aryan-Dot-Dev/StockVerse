import type { MetaFunction } from "@remix-run/node";
import { JSXElementConstructor, Key, ReactElement, ReactNode, SetStateAction, useEffect, useState } from "react";
// import Graph from "~/components/Graph";
import { json } from "@remix-run/node";
import { mongodb } from "~/utils/db.server";
import { useLoaderData } from "@remix-run/react";
import { Outlet } from "@remix-run/react";

// const baseURL = process.env.BASE_URL || "http://localhost:5173";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async () => {
  let db = await mongodb.db('Stocks');
  let collection = await db.collection('stocks');
  let data = await collection.find({}).toArray();

  return json(data);
};

export default function Index() {
  const [symbol, setSymbol] = useState("");

  const data = useLoaderData();

  return (
    <div className="flex flex-col items-end">
      <div className="flex flex-col gap-6">
        {data.map((stock: { id: Key | null | undefined; symbol: number | boolean | SetStateAction<string> | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined; }) => (
          <div className="flex" key={stock.id}>
            <button className="p-4 rounded-2xl flex rounded cursor-pointer items-center justify-center" onClick={() => setSymbol(stock.symbol)}>{stock.symbol}</button>
            <Graph symbolData={stock} />
          </div>
        ))}
      </div>
    </div>
  );
}