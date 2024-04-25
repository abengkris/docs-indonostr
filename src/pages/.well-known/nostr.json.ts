import type { APIRoute } from "astro";
import { MongoClient } from "mongodb";

import config from "../../../site.config";

const { dbName, dbCollection } = config;

export const GET: APIRoute = async function get({ request }) {
  // @ts-ignore
  const dbUrl = import.meta.env.MONGODB_URI;
  const client = new MongoClient(dbUrl);

  try {
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection(dbCollection);

    const params = new URL(request.url).searchParams;
    const searchUser = params.get("name");

    const queryParams = searchUser ? { username: searchUser } : {};

    const findResult = await collection.find(queryParams).toArray();
    const userMap: Record<string, string> = {};

    findResult.forEach((entry) => {
      userMap[entry.username] = entry.pubkey;
    });

    const sortedUserMap = Object.fromEntries(Object.entries(userMap).sort());

    return new Response(
      JSON.stringify({ names: sortedUserMap }),
      { headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Failed to fetch users:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch users" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  } finally {
    await client.close();
  }
};