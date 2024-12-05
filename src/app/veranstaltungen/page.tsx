import { bebasNeue } from "@/app/layout";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import Veranstaltungen from "@/components/Veranstaltungen/Veranstaltungen";

export default function Page() {
	return (
		<div>
			<main className="p-6">
				<NavBar />
				{/* Title Section */}
				<header
					className="text-[#ffb400] py-12 text-center mt-20">
					<h1 className={`${bebasNeue.className} text-[160px] font-bold leading-tight uppercase`}>
						Veranstaltungen
					</h1>
				</header>
				<Veranstaltungen />
				<Footer />
			</main>
		</div>
	);
}
