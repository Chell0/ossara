import Downloads from "@/components/Downloads/Downloads";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";

export default function Page() {
  return (
    <div>
      <main className="p-6">
        <NavBar />
        <Downloads />
        <Footer />
      </main>
    </div>
  );
}
