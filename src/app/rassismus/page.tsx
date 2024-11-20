import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import Rassismus from "@/components/Rassismus/Rassismus";

export default function Page() {
	return (
		<div>
			<main className="p-6">
				<NavBar />
				<Rassismus />
				<Footer />
			</main>
		</div>
	);
}
