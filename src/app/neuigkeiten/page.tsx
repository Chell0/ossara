import { acme } from "@/app/layout";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import News from "@/components/Neuigkeiten/Neuigkeiten";

export default function Page() {
	return (
		<div>
			<main className="p-6">
				<NavBar />
				<header
                    className="text-[#ffb400] py-12 text-center">
                    <h1 className={`${acme.className} text-[185px] font-bold leading-tight uppercase`}>Neuigkeiten</h1>
                </header>
				<News />
				<Footer />
			</main>
		</div>
	);
}
