import Engagieren from "@/components/Engagieren/Engagieren";
import Footer from "@/components/Footer/Footer";
import {NavBar} from "@/components/NavBar/NavBar";

export default function Page() {
  return (
    <div>
      <main className="bg-[#fef5db]">
        <NavBar/>
        <Engagieren/>
        <Footer/>
      </main>
    </div>
  );
}
