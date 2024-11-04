import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import Veranstaltungen from "@/components/Veranstaltungen/Veranstaltungen";

export default function Page() {
	return (
		<div>
			<main className="p-6">
				<NavBar />
				<Veranstaltungen />
				<Footer />
			</main>
		</div>
	);
}
