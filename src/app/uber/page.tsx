
import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";

export default function Page() {
	return (
		<div>
			<main className="p-6">
				<NavBar />
				<Banner />
				<Footer />
			</main>
		</div>
	);
}
