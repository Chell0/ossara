import Dekoloniale from "@/components/Dekoloniale/Dekoloniale";
import Footer from "@/components/Footer/Footer";
import {NavBar} from "@/components/NavBar/NavBar";

export default function Page() {
  return (
    <div>
      <main className="bg-[#fad6bb]">
        <NavBar/>
        <Dekoloniale/>
        <Footer/>
      </main>
    </div>
  );
}
