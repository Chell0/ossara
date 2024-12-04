import '@fortawesome/fontawesome-free/css/all.min.css';
import type { Metadata } from "next";
import { Acme, Bebas_Neue, Fjalla_One, Galdeano, Marko_One, Open_Sans, Roboto_Serif, Rubik } from "next/font/google";
import React from "react";
import "../styles/globals.css";

export const acme = Acme({
	subsets: ["latin"],
	weight: "400",
});
export  const openSans = Open_Sans({ subsets: ["latin"] });


export const fjallaOne = Fjalla_One({
	subsets: ["latin"],
	weight: "400",
});

export const bebasNeue = Bebas_Neue({
	subsets: ["latin"],
	weight: "400",
});

export const markoOne = Marko_One({
	subsets: ["latin"],
	weight: "400",
});

export const galdeano = Galdeano({
	subsets: ["latin"],
	weight: "400",
});

export const robotoSerif = Roboto_Serif({
	subsets: ["latin"],
	weight: "400",
});

export const rubik = Rubik({
	subsets: ["latin"],
	weight: "400",
});


export const metadata: Metadata = {
	title: "Ossara",
	description: "Ossara",
};

export default function RootLayout({ children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body	className={fjallaOne.className}>{children}</body>
		</html>
	);
}
