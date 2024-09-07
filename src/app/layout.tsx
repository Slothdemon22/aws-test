import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Medic Plus Healthcare | Book Now",
  description: "An Aapointment booking app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.className} `}>
  {children}
</body>

    </html>
  );
}
