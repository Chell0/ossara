import AboutPage from "@/components/AboutPage/AboutPage";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";

export default function Page() {
  return (
    <div>
      <main className="bg-[#fef5db]">
        <NavBar />
        <AboutPage />
        <Footer />
      </main>
    </div>
  );
}
