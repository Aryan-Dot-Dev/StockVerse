import { MongoClient, BSON } from 'mongodb';
import {stockData} from './data.js';

const url = "mongodb+srv://suspicious:suspicious@stocks.mwbye.mongodb.net/?retryWrites=true&w=majority&appName=Stocks";

let mongodb;

mongodb = new MongoClient(url);
console.log("Connected to MongoDB");

let db = await mongodb.db('Stocks');
let collection = await db.collection('stocks');

collection.insertMany(stockData);