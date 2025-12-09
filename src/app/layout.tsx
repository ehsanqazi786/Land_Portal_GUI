import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "LuxeProperty - Premium Real Estate",
  description: "Discover luxury properties with LuxeProperty - Your premium real estate marketplace.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-navy">
        {children}
      </body>
    </html>
  );
}
