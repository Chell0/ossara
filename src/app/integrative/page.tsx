import Footer from "@/components/Footer/Footer";
import Integrative from "@/components/Integrative/Integrative";
import NavBar from "@/components/NavBar/NavBar";

export default function Page() {
  return (
    <div>
      <main className="bg-[#fef5db]">
        <NavBar />
        <Integrative />
        <Footer />
      </main>
    </div>
  );
}
