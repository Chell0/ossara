import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import Bildungsarbeit from "@/components/Bildungsarbeit/Bildungsarbeit";

export default function Page() {
    return (
        <div>
            <main className="p-6">
                <NavBar/>
                <Bildungsarbeit/>
                <Footer/>
            </main>
        </div>
    );
}
