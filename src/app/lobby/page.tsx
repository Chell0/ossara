import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import Lobby from "@/components/Lobby/Lobby";

export default function Page() {
  return (
    <div>
      <main className="bg-[#f7e6ca]">
        <NavBar />
        <Lobby />
        <Footer />
      </main>
    </div>
  );
}
