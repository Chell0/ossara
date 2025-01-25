import Bildungsarbeit from "@/components/Bildungsarbeit/Bildungsarbeit";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";

export default function Page() {
  return (
    <div>
      <main className="bg-[#fff6ea]">
        <NavBar />
        <Bildungsarbeit />
        <Footer />
      </main>
    </div>
  );
}
