import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";

export default function Page() {
  return (
    <div>
      <main className="p-6">
        <NavBar />
        <section className="mt-10 py-6 text-center text-[#ffb400]">
          <h2
            className={`font-bold text-6xl uppercase leading-tight drop-shadow-xl sm:text-4xl md:text-5xl lg:text-6xl`}
          >
            Neu im Team Ossara- Hamburg
          </h2>
        </section>
        <Footer />
      </main>
    </div>
  );
}
