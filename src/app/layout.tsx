export const metadata = {
  title: "Shopify Next.js Store",
  description: "Ein Next.js Shopify-Store mit TypeScript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>
        <header style={{ padding: "20px", background: "#f5f5f5" }}>
          <h1>Shopify Next.js Store</h1>
        </header>
        {children}
      </body>
    </html>
  );
}
