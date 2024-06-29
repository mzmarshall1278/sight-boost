import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Provider from "./components/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sight Boost",
  description: "Eye Care At Its Best",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const session = null;

  return (
    <html lang="en">
      <body className={`font-sans min-h-screen bg-gray-200`}>
        <Provider session={session}>
          <Header />
          <main className="mt-24">
            {children}
          </main>
          <Footer/>
        </Provider>
      </body>
    </html>
  );
}
