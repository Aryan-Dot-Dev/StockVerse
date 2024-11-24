import type { MetaFunction } from "@remix-run/node";
// import Graph from "~/components/Graph";
import { json } from "@remix-run/node";
import { mongodb } from "~/utils/db.server";
import { useLoaderData } from "@remix-run/react";
import { useEffect, useState } from "react";

// const baseURL = process.env.BASE_URL || "http://localhost:5173";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async ({ params }) => {
  let db = await mongodb.db('Stocks');
  let collection = await db.collection('stocks');

  const { symbol } = params;
  
  const query = { symbol };
  let data = await collection.find(query).toArray();
  
  return json(data);
};

export default function Index() {
  const [stock, setStock] = useState([]);
  const data = useLoaderData();
  
  useEffect(() => {
    setStock(data);
  }, [data]);

  return (
    <div className="flex flex-col gap-6">
        <p>{stock.symbol}</p>
        <Graph symbolData={stock} />
    </div>
  );
}