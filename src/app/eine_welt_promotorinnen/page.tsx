import EineWeltPromotorinnen from "@/components/EineWeltPromotorinnen/EineWeltPromotorinnen";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";

export default function Page() {
  return (
    <div>
      <main className="bg-[#fff6ea]">
        <NavBar />
        <EineWeltPromotorinnen />
        <Footer />
      </main>
    </div>
  );
}
