import Footer from "@/components/Footer/Footer";
import {NavBar} from "@/components/NavBar/NavBar";
import Projects from "@/components/Projects/Projects";

export default function Page() {
  return (
    <div>
      <main className="bg-[#fad6bb">
        <NavBar/>
        <Projects/>
        <Footer/>
      </main>
    </div>
  );
}
