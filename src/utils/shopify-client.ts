import { GraphQLClient } from "graphql-request";

const endpoint = `${process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN}/api/2023-01/graphql.json`;

export const shopifyClient = new GraphQLClient(endpoint, {
    headers: {
      "X-Shopify-Storefront-Access-Token": process.env.NEXT_PUBLIC_SHOPIFY_ACCESS_TOKEN!,
    },
  });

export const fetchShopifyData = async (query: string, variables = {}) => {
  try {
    const data = await shopifyClient.request(query, variables);
    return data;
  } catch (error) {
    console.error("Shopify API Fehler:", error);
    throw error;
  }
};
