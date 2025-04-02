import { GeistSans } from 'geist/font/sans';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Appcon Milan 2025 | Showing Ethereum Apps to the World',
  description: 'Discover the top Ethereum apps at Appcon in Milan, April 7-13.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${GeistSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
