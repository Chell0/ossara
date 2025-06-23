import Footer from "@/components/Footer/Footer";
import {NavBar} from "@/components/NavBar/NavBar";
import UberUns from "@/components/UberUns/UberUns";

export default function Page() {
  return (
    <div>
      <main className="bg-[#fef5db]">
        <NavBar/>
        <UberUns/>
        <Footer/>
      </main>
    </div>
  );
}
