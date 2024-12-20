import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import EineWeltPromotorinnen from "@/components/EineWeltPromotorinnen/EineWeltPromotorinnen";

export default function Page() {
    return (
        <div>
            <main className="p-6">
                <NavBar/>
                <EineWeltPromotorinnen/>
                <Footer/>
            </main>
        </div>
    );
}
