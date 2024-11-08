import type { Metadata } from "next";
import "./universal.scss";
import { primary, secondary } from "@/public/fonts/fonts";

export const metadata: Metadata = {
  title: "The InfoSphere - keep yourself updated with world!",
  description: "Stay informed with the latest news and current events. Discover top stories, breaking news headlines, and in-depth news articles.",
};

export default function RootLayout({
  children, 
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body className={`${primary.className} ${secondary.variable}`}>{children}</body>
    </html>
  );
}
