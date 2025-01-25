"use client";

import { fetchShopifyData } from "@/utils/shopify-client";
import { GET_PRODUCTS_QUERY } from "@/utils/queries";
import { getTranslations } from "@/utils/i18n";

import VideoBackground from "@/components/video-background";

export default async function Home() {
  const data = await fetchShopifyData(GET_PRODUCTS_QUERY);
  const products = data.products.edges;

  const lang = "de";
  const tVideo = getTranslations(lang, "videoBlock")

  return (
    <main className="overflow-hidden">
      <VideoBackground
        title={tVideo["title"]}
        description={tVideo["description"]}
        background="https://cdn.shopify.com/videos/c/o/v/93716580e2f448fe93cb67da3f9b24bf.mp4"
        isVideo={true}
        buttons={[
          { label: tVideo["buttons"]["shopNow"], onClick: () => alert(tVideo["buttons"]["shopNow"]) },
          { label: tVideo["buttons"]["learnMore"], onClick: () => alert(tVideo["buttons"]["learnMore"]) },
        ]}
      />

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
