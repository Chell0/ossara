import "@fortawesome/fontawesome-free/css/all.min.css";
import type { Metadata } from "next";
import {
  Acme,
  Bebas_Neue,
  Fjalla_One,
  Galdeano,
  Marko_One,
  Open_Sans,
  Roboto_Serif,
  Rubik,
} from "next/font/google";
import React from "react";
import "../styles/globals.css";

const acme = Acme({
  subsets: ["latin"],
  weight: "400",
});

const openSans = Open_Sans({ subsets: ["latin"] });

const fjallaOne = Fjalla_One({
  subsets: ["latin"],
  weight: "400",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

const markoOne = Marko_One({
  subsets: ["latin"],
  weight: "400",
});

const galdeano = Galdeano({
  subsets: ["latin"],
  weight: "400",
});

const robotoSerif = Roboto_Serif({
  subsets: ["latin"],
  weight: "400",
});

const rubik = Rubik({
  subsets: ["latin"],
  weight: "400",
});

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
      <body className={fjallaOne.className}>{children}</body>
    </html>
  );
}
