import Footer from "@/components/Footer/Footer";
import {NavBar} from "@/components/NavBar/NavBar";
import Neuigkeiten from "@/components/Neuigkeiten/Neuigkeiten";

export default function Page() {
  return (
    <div>
      <main className="bg-[#fff6ea]">
        <NavBar/>
        <Neuigkeiten/>
        <Footer/>
      </main>
    </div>
  );
}
