import Footer from "@/components/Footer/Footer";
import Lokal from "@/components/Lokal/Lokal";
import {NavBar} from "@/components/NavBar/NavBar";

export default function Page() {
  return (
    <div>
      <main className="bg-[#f7e6ca]">
        <NavBar/>
        <Lokal/>
        <Footer/>
      </main>
    </div>
  );
}
