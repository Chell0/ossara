import Link from "next/link";

import DonationForm from "@/components/FördernUndSpenden/DonationForm/DonationForm";
import DonationQuestions from "@/components/FördernUndSpenden/DonationQuestions/DonationQuestions";

export default function FördernUndSpenden() {
  return (
    <>
      <div>
        {/* Banner Section */}
        <header
          className="h-screen w-full bg-cover bg-center relative p-10"
          style={{ backgroundImage: "url(/bgs/donate.jpg)" }}
        >
          <div
            id="fordern"
            className={`absolute top-0 left-0 right-0 inset-0 bg-black bg-opacity-70 flex items-start justify-start`}
          >
            <h1
              className={`text-[#fcc41b] drop-shadow-xl text-[8rem] font-extrabold leading-tight uppercase p-6 ml-10 mt-20`}
            >
              Fördern.
              <br /> und.
              <br /> Spenden.
            </h1>
          </div>
        </header>

        <section className="h-screen w-full relative">
          <div className="absolute inset-0 flex flex-col items-center justify-center pl-10 gap-8">
            <h2
              className={`text-[#fcc41b] text-6xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold text-center drop-shadow-sm`}
            >
              Hilf uns mit Deiner Spende
            </h2>
            <p className="max-w-xl mt-4 text-black text-base">
              Einmalige und regelmäßige Spenden der{" "}
              <span className="font-bold text-[#fcc41b]">OSSARA Community</span>{" "}
              ermöglichen unsere Arbeit. Durch Deinen Beitrag stellst Du sicher,
              dass wir uns auf unsere Arbeit konzentrieren und diese auch in
              Zukunft unabhängig gestalten können.
            </p>
            <Link
              href="#donate"
              aria-label="Donate"
              className="px-8 py-4 text-xl font-medium text-white bg-[#ffb400] rounded-lg hover:bg-[#e6a200] transition-colors"
            >
              Jetzt Spenden
            </Link>
          </div>
        </section>

        {/* Donation Form */}
        <DonationForm />
        {/* Donation Questions */}
        <DonationQuestions />
      </div>
    </>
  );
}
