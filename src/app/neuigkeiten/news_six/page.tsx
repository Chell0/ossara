import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";

export default function Page() {
  return (
    <div>
      <main className="p-6">
        <NavBar />
        <section className="text-[#ffb400] text-center py-6 mt-10">
          <h2
            className={`drop-shadow-xl text-6xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight uppercase`}
          >
            Neu im Team Ossara- Hamburg
          </h2>
        </section>
        <Footer />
      </main>
    </div>
  );
}
