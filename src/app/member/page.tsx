import BecomeMember from "@/components/BecomeMember/BecomeMember";
import Footer from "@/components/Footer/Footer";
import {NavBar} from "@/components/NavBar/NavBar";

export default function Page() {
  return (
    <div>
      <main className="bg-[#fef5db]">
        <NavBar/>
        <BecomeMember/>
        <Footer/>
      </main>
    </div>
  );
}
