import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import Dekoloniale from "@/components/Dekoloniale/Dekoloniale";

export default function Page() {
	return (
		<div>
			<main className="p-6">
				<NavBar />
				<Dekoloniale />
				<Footer />
			</main>
		</div>
	);
}
