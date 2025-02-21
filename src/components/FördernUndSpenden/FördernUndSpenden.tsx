import Link from "next/link";

import DonationForm from "@/components/FördernUndSpenden/DonationForm/DonationForm";
import DonationQuestions from "@/components/FördernUndSpenden/DonationQuestions/DonationQuestions";

export default function FördernUndSpenden() {
  return (
    <>
      <div>
        {/* Banner Section */}
        <header
          className="min-h-screen w-full bg-cover bg-center relative p-4 sm:p-6 md:p-8 lg:p-10"
          style={{ backgroundImage: "url(/bgs/donate.jpg)" }}
        >
          <div
            id="fordern"
            className={`absolute inset-0 bg-black bg-opacity-70 flex items-start justify-start`}
          >
            <h1
              className={`text-[#fcc41b] drop-shadow-xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight uppercase p-4 sm:p-6 ml-4 sm:ml-6 md:ml-8 lg:ml-10 mt-20 sm:mt-26`}
            >
              Fördern.
              <br /> und.
              <br /> Spenden.
            </h1>
          </div>
        </header>

        {/* Help Us Section */}
        <section className="min-h-screen w-full relative">
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 gap-4 sm:gap-6 md:gap-8">
            <h2
              className={`text-[#fcc41b] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-center drop-shadow-sm`}
            >
              Hilf uns mit Deiner Spende
            </h2>
            <p className="max-w-xl mt-4 text-black text-sm sm:text-base md:text-lg text-center">
              Einmalige und regelmäßige Spenden der{" "}
              <span className="font-bold text-[#fcc41b]">OSSARA Community</span>{" "}
              ermöglichen unsere Arbeit. Durch Deinen Beitrag stellst Du sicher,
              dass wir uns auf unsere Arbeit konzentrieren und diese auch in
              Zukunft unabhängig gestalten können.
            </p>
            <Link
              href="#donate"
              aria-label="Donate"
              className="px-6 py-3 sm:px-8 sm:py-4 text-lg sm:text-xl font-medium text-white bg-[#ffb400] rounded-lg hover:bg-[#e6a200] transition-colors"
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
