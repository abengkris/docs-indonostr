import type { APIRoute } from "astro";
import { MongoClient } from "mongodb";

import config from "../../../../site.config";

// Connection URL
// @ts-ignore
const dbUrl = import.meta.env.MONGODB_URI;
const client = new MongoClient(dbUrl);

export const GET: APIRoute = async function get({ params }) {
  const localUsername = params.username;

  try {
    await client.connect();
    const { dbName, dbCollection } = config;
    const db = client.db(dbName);
    const collection = db.collection(dbCollection);

    const findResult = await collection
      .find({ username: localUsername })
      .toArray();

    const { lightningAddress } = findResult?.[0] ?? {};

    if (!lightningAddress) {
      return new Response(null, {
        status: 404,
        statusText: "Not found",
      });
    }

    const [redirectUsername, redirectDomain] = lightningAddress.split("@");

    const response = await fetch(
      `https://${redirectDomain}/.well-known/lnurlp/${redirectUsername}`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch LNURLP: ${response.statusText}`);
    }

    const json = await response.json();

    return new Response(JSON.stringify(json), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("Error:", error);
    return new Response(null, {
      status: 500,
      statusText: "Internal Server Error",
    });
  } finally {
    await client.close();
  }
};