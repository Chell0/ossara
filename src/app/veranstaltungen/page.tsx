import Footer from "@/components/Footer/Footer";
import {NavBar} from "@/components/NavBar/NavBar";
import Veranstaltungen from "@/components/Veranstaltungen/Veranstaltungen";

export default function Page() {
  return (
    <div>
      <main className="bg-[#fff6ea]">
        <NavBar/>
        <Veranstaltungen/>
        <Footer/>
      </main>
    </div>
  );
}
