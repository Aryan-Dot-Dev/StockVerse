import { MongoClient, BSON } from 'mongodb';

const url = process.env.MONGODB_URL;

let mongodb;

if (process.env.NODE_ENV === "production") {
    mongodb = new MongoClient(url);
    console.log("Connected to MongoDB");
} else {
    if (!global.__db) {
        global.__db = new MongoClient(url);
    }
    mongodb = global.__db;
    console.log("Connected to MongoDB");
}

let ObjectId = BSON.ObjectId;

export {
    mongodb,
    ObjectId
};