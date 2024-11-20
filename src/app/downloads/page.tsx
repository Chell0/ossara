import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import Downloads from "@/components/Downloads/Downloads";

export default function Page() {
    return (
        <div>
            <main className="p-6">
                <NavBar/>
                <Downloads/>
                <Footer/>
            </main>
        </div>
    );
}
