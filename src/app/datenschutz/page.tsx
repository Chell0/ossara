import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";

export default function Page() {
  return (
    <div>
      <main className="bg-[#fef5db]">
        <NavBar />
        <header
          className="h-screen w-full bg-cover bg-center relative p-10"
          style={{ backgroundImage: "url(/bgs/img1.jpg)" }}
        >
          <div
            className={`absolute top-0 left-0 right-0 inset-0 bg-black bg-opacity-70 flex items-start justify-start`}
          >
            <h1
              className={`text-[#fcc41b] drop-shadow-xl text-[8rem] font-extrabold leading-tight uppercase p-6 ml-10 mt-20`}
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
