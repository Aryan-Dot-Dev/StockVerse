import {mongodb} from "./db.server";

export async function getStockData() {
    let db = await mongodb.db('Stocks');
    let collection = await db.collection('stocks');

    let data = await collection.find({}).toArray();
    
    return data;
}

export async function getStockDataBySymbol(symbol) {
    let db = await mongodb.db('Stocks');
    let collection = await db.collection('stocks');

    const query = { symbol };
    let data = await collection.find(query).toArray();
    return data;
} 