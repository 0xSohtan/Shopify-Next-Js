import "../styles/global.css";
import { Outfit } from 'next/font/google';
import { Bodoni_Moda } from 'next/font/google'


const bodoniModa = Bodoni_Moda ({
  subset: ['latin'],
  weight: ['400', '700'],
  variable: "--font-bodoniModa",
})

const outfit = Outfit({
  subset: ['latin'],
  weight: ['400'],
  variable: "--font-outfit",
})

export const metadata = {
  title: "Stoff und Stange",
  description: "Ein Next.js Shopify-Store mit TypeScript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={outfit.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
