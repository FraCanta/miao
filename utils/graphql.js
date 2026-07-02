// utils/graphql.js
import { GraphQLClient } from "graphql-request";

const endpoint =
  process.env.WORDPRESS_GRAPHQL_URL ||
  "https://mithablog.mithacreative.it/graphql";
const requestTimeout = 8000;

const wordpressFetch = async (input, init = {}) => {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), requestTimeout);

  try {
    return await fetch(input, { ...init, signal: controller.signal });
  } finally {
    clearTimeout(timeout);
  }
};

export const client = new GraphQLClient(endpoint, { fetch: wordpressFetch });

export async function requestWordPress(query, variables = {}, fallback = {}) {
  try {
    return await client.request(query, variables);
  } catch (error) {
    console.error("WordPress non raggiungibile:", error?.message || error);
    return fallback;
  }
}
