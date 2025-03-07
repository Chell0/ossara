import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import Stadtteilarbeit from "@/components/Stadtteilarbeit/Stadtteilarbeit";

export default function Page() {
  return (
    <div>
      <main className="bg-[#fef5db]">
        <NavBar />
        <Stadtteilarbeit />
        <Footer />
      </main>
    </div>
  );
}
