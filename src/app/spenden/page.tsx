import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import Spenden from "@/components/Spenden/Spenden";

export default function Page() {
  return (
    <div>
      <main className="bg-[#fef5db]">
        <NavBar />
        <Spenden />
        <Footer />
      </main>
    </div>
  );
}
