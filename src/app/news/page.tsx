import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import News from "@/components/News/News";

export default function Page() {
	return (
		<div>
			<main className="p-6">
				<NavBar />
				<News />
				<Footer />
			</main>
		</div>
	);
}
