import { MongoClient } from "mongodb";

async function connectToDatabase() {
  // @ts-ignore
  const dbUrl = import.meta.env.MONGODB_URI;
  const client = new MongoClient(dbUrl);

  try {
    await client.connect();
    console.log("Connected to the database");

    const dbName = "users";
    const dbCollection = "registered";

    const database = client.db(dbName);
    const collection = database.collection(dbCollection);

    const findResult = await collection.find({}).toArray();;
    const userMap: Record<string, string> = {};

    findResult.forEach((entry) => {
      userMap[entry.username] = entry.pubkey;
    });

    const json = {
      names: Object.fromEntries(Object.entries(userMap).sort()),
    };

    if (json) {
      return json;
    } else {
      return {}; // Return blank JSON if no result found
    }
  } catch (err) {
    console.error("Failed to connect to the database:", err);
    return { error: "Failed to connect to the database" };
  } finally {
    await client.close();
    console.log("Disconnected from the database");
  }
}

// Example usage
async function handleRequest() {
  const json = await connectToDatabase();
  console.log("Result:", json);
  return {
    body: JSON.stringify(json),
  };
}

// Usage
handleRequest();