import { MongoClient } from 'mongodb';
import mongodb from 'mongodb'
async function getDB() {
    const MongoClient = mongodb.MongoClient
    const server = await MongoClient.connect('mongodb+srv://u1:p1@cluster.qdoqw52.mongodb.net/');
    const db = server.db("sms")
    return db;
}

export default getDB;