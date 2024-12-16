import { bebasNeue } from "@/app/fonts";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";

export default function Page() {
  return (
    <div>
      <main className="p-6">
        <NavBar />
        <section className="text-[#ffb400] text-center py-12 mt-10">
          <h1
            className={`${bebasNeue.className} drop-shadow-xl text-8xl font-bold leading-tight uppercasez`}
          >
            Datenschutz
          </h1>
        </section>
        <Footer />
      </main>
    </div>
  );
}
