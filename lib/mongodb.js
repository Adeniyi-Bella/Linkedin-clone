// This approach is taken from https://github.com/vercel/next.js/tree/canary/examples/with-mongodb


// To connect with adapter and authentication
import { MongoClient } from 'mongodb'

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"')
}

let uri = process.env.MONGODB_URI;
let dbName = process.env.MONGODB_DB;

// console.log(uri);
let cachedClient = null;
let cachedDb = null;

if (!uri) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

if (!dbName) {
  throw new Error(
    "Please define the MONGODB_DB environment variable inside .env.local"
  );
}

const options = {}

let client
let clientPromise
// let clientPromise: Promise<MongoClient>

if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options)
    global._mongoClientPromise = client.connect()
  }
  clientPromise = global._mongoClientPromise
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(uri, options)
  clientPromise = client.connect()
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise


//connect to the database and sends requests and fetch request from the database
export async function connectToDatabase() {

  //if the client and db are already cached, set them to null and return them
if (cachedClient && cachedDb) {
  return { client: cachedClient, db: cachedDb };
}

//if the client and db are not cached, connect to the database and cache them
const client = await MongoClient.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//get the database to be accessed which is dbName
const db = await client.db(dbName);
console.log("Connected to database");
// set the client and db to the cachedClient and cachedDb
cachedClient = client;
cachedDb = db;

return { client, db };
}