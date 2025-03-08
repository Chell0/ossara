import Footer from "@/components/Footer/Footer";
import Korabi from "@/components/Korabi/Korabi";
import NavBar from "@/components/NavBar/NavBar";

export default function Page() {
  return (
    <div>
      <main className="bg-[#fff6ea]">
        <NavBar />
        <Korabi />
        <Footer />
      </main>
    </div>
  );
}
