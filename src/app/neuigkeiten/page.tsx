import { bebasNeue } from "@/app/fonts";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import News from "@/components/Neuigkeiten/Neuigkeiten";

export default function Page() {
  return (
    <div>
      <main className="bg-[#fff6ea]">
        <NavBar />
        <News />
        <Footer />
      </main>
    </div>
  );
}
