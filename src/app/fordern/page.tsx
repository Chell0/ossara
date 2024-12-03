import Footer from "@/components/Footer/Footer";
import FördernUndSpenden from "@/components/FördernUndSpenden/FördernUndSpenden";
import NavBar from "@/components/NavBar/NavBar";

export default function Page() {
	return (
		<div>
			<main className="p-6">
				<NavBar />
				<FördernUndSpenden />
				<Footer />
			</main>
		</div>
	);
}
