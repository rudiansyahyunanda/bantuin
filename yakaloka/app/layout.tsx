import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "YAKALOKA - Rental Mobil Terpercaya",
  description: "Layanan rental mobil terbaik di Indonesia dengan harga terjangkau dan armada lengkap",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
