import Footer from "@/components/Footer/Footer";
import FördernUndSpenden from "@/components/FördernUndSpenden/FördernUndSpenden";
import NavBar from "@/components/NavBar/NavBar";

export default function Page() {
  return (
    <div>
      <main className="bg-[#fef5db]">
        <NavBar />
        <FördernUndSpenden />
        <Footer />
      </main>
    </div>
  );
}
