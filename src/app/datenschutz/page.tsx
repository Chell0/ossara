import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";

export default function Page() {
  return (
    <div>
      <main className="bg-[#fef5db]">
        <NavBar />
        <header
          className="relative h-screen w-full bg-center bg-cover p-10"
          style={{ backgroundImage: "url(/bgs/img1.jpg)" }}
        >
          <div
            className={`absolute inset-0 top-0 right-0 left-0 flex items-start justify-start bg-black bg-opacity-70`}
          >
            <h1
              className={`mt-20 ml-10 p-6 font-extrabold text-[#fcc41b] text-[8rem] uppercase leading-tight drop-shadow-xl`}
            >
              Datenschutz.
            </h1>
          </div>
        </header>
        <Footer />
      </main>
    </div>
  );
}
