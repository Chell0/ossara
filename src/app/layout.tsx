import { manrope } from "@/app/fonts";
import "@fortawesome/fontawesome-free/css/all.min.css";
import type { Metadata } from "next";
import React from "react";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Ossara",
  description:
    "Welcome to Ossara!  Highlighting engagement and projects in Hamburg's decolonization process.",
  keywords: [
    "machtbewusst",
    "decolonization",
    "Hamburg",
    "civil society",
    "engagement",
    "projects",
    "power-critical perspectives",
    "decolonial perspectives",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.className} antialiased`}>{children}</body>
    </html>
  );
}
