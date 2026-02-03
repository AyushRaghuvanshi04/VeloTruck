import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VeloTruck - Tech-Enabled Logistics Platform",
  description: "Connect shippers with carriers for seamless freight transportation. Velocity meets logistics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
