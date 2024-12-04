import Jobs from "@/components/Engagieren/Jobs/Jobs";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";


export default function Page() {
	return (
		<div>
			<main className="p-6">
				<NavBar />
				<Jobs />
				<Footer />
			</main>
		</div>
	);
}
