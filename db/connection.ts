import { MongoClient } from "mongodb";

const uri = process.env.CONNECTION_STRING as string;

const dbName = "chris_portfolio";

let client;

async function connect() {
  try {
    if (!global._mongodbClient) {
      client = new MongoClient(uri);

      global._mongodbClient = await client.connect();
    } else {
      client = global._mongodbClient;
    }
    return true;
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    return false;
  }
}

function getDatabase() {
  return client.db(dbName);
}

function close() {
  client.close();
}

export { connect, getDatabase, close };
