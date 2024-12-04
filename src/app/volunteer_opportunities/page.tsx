import VolunteerOpportunities from "@/components/Engagieren/VolunteerOpportunities/VolunteerOpportunities";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";


export default function Page() {
	return (
		<div>
			<main className="p-6">
				<NavBar />
				<VolunteerOpportunities />
				<Footer />
			</main>
		</div>
	);
}
