import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Color Studio | Build with intention",
  description: "A focused workspace for creating and testing color systems.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
