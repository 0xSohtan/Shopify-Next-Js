import { fetchShopifyData } from "@/utils/shopify-client";
import { GET_PRODUCTS_QUERY } from "@/utils/queries";

export default async function Home() {
  const data = await fetchShopifyData(GET_PRODUCTS_QUERY);
  const products = data.products.edges;

  return (
    <main style={{ padding: "20px" }}>
      <h1>Produkte</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
        {products.map(({ node }: any) => (
          <div key={node.id} style={{ border: "1px solid #ddd", padding: "10px" }}>
            <img src={node.images.edges[0]?.node.url} alt={node.title} style={{ width: "100%" }} />
            <h2>{node.title}</h2>
            <p>{node.description}</p>
            <p>
              Preis: {node.priceRange.minVariantPrice.amount} {node.priceRange.minVariantPrice.currencyCode}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
