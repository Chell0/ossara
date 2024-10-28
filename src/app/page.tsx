import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";

export default function Home() {
	return (
		<div>
			<main className="p-6">
				<NavBar />
				<h1 className="text-black text-xl py-2 px-4 sm:text-md md:text-xl lg:text-2xl font-semibold text-center">Welcome to OSSARA!</h1>
				<Footer />
			</main>
		</div>
	);
}
