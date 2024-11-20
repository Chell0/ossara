import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import Engagieren from "@/components/Engagieren/Engagieren";

export default function Page() {
    return (
        <div>
            <main className="p-6">
                <NavBar/>
                <Engagieren/>
                <Footer/>
            </main>
        </div>
    );
}
