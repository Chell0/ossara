import Link from "next/link";

export default function DonationForm() {
  return (
    <>
      <section className="h-screen w-full relative bg-[#fcc41b]">
        <div
          id="donation-form"
          className="absolute inset-0 flex flex-col items-center justify-center pl-10 gap-8"
        >
          <h2
            className={`text-[#fef5db] text-6xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold text-center drop-shadow-sm`}
          >
            Deine Spende
          </h2>
          <p className="max-w-xl mt-4 text-black text-base">
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
            className="px-8 py-4 text-xl font-medium text-[#fcc41b] bg-[#fef5db] rounded-lg hover:bg-[#e6a200] transition-colors"
          >
            Spenden
          </Link>
        </div>
      </section>
    </>
  );
}
