import Link from "next/link";

export default function DonationForm() {
  return (
    <>
      <section className="min-h-screen w-full relative bg-[#fcc41b]">
        <div
          id="donate"
          className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 gap-4 sm:gap-6 md:gap-8"
        >
          {/* Heading */}
          <h2
            className={`text-[#fef5db] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-center drop-shadow-sm`}
          >
            Deine Spende
          </h2>

          {/* Description */}
          <p className="max-w-xl mt-4 text-black text-sm sm:text-base md:text-lg text-center">
            Mit Deiner Hilfe können wir wichtige Arbeit leisten, die sonst nicht
            möglich wäre. <b>OSSARA e.V.</b> empowert Schwarze Menschen,
            Menschen afrikanischer Herkunft. Dafür brauchen wir einen langen
            Atem! Hier kannst Du uns einmalig mit Deiner Spende oder regelmäßig
            als <b>OSSARA Community Support</b> unterstützen:
          </p>

          {/* Paypal Link */}
          <Link
            href="#paypal"
            aria-label="Paypal Link"
            className="px-6 py-3 sm:px-8 sm:py-4 text-lg sm:text-xl font-medium text-[#fcc41b] bg-[#fef5db] rounded-lg hover:bg-[#e6a200] transition-colors"
          >
            Spenden
          </Link>
        </div>
      </section>
    </>
  );
}
