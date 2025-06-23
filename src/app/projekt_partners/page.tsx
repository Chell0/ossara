import Footer from "@/components/Footer/Footer";
import {NavBar} from "@/components/NavBar/NavBar";
import Projektpartners from "@/components/Projektpartners/Projektpartners";

export default function Page() {
  return (
    <div>
      <main className="bg-[#fad6bb">
        <NavBar/>
        <Projektpartners/>
        <Footer/>
      </main>
    </div>
  );
}
