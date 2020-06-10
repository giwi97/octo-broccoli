import { MongoClient } from "https://deno.land/x/mongo@v0.8.0/mod.ts";

const client = new MongoClient();
client.connectWithUri("mongodb+srv://giwi:0721248175@denoproducts-c2pb7.mongodb.net/<dbname>?retryWrites=true&w=majority");

const db = client.database('products');

export default db