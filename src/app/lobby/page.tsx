import Footer from "@/components/Footer/Footer";
import Lobby from "@/components/Lobby/Lobby";
import NavBar from "@/components/NavBar/NavBar";

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
