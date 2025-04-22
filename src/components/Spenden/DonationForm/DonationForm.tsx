import Link from "next/link";

export default function DonationForm() {
  return (
    <section className="w-full min-h-screen relative bg-[#fcc41b] overflow-hidden">
      <div
        id="donate"
        className="
          absolute inset-0
          flex flex-col items-center justify-center
          px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-section 3xl:px-section-lg
          gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-section 3xl:gap-section-lg
          overflow-auto
        "
      >
        {/* Heading */}
        <h2
          className="
            text-[#fef5db] font-semibold text-center drop-shadow-sm
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl
          "
        >
          Deine Spende
        </h2>

        {/* Description */}
        <p
          className="
            text-black
            text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl
            text-left mt-header
            max-w-prose md:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl 3xl:max-w-6xl
          "
        >
          Mit deiner Spende unterstützt du vielfältige Projekte für soziale
          Gerechtigkeit, Bildung, Empowerment und nachhaltige Entwicklung –
          lokal wie global. Insbesondere fördern wir die dekoloniale
          internationale Zusammenarbeit, die auf Gleichberechtigung,
          respektvollen Austausch und den Abbau struktureller Ungerechtigkeiten
          abzielt. Dein Beitrag hilft uns, Projekte zu stärken, die den
          Austausch von Wissen und Ressourcen auf Augenhöhe ermöglichen und die
          historischen Lasten der Kolonialisierung überwinden. Vielen Dank für
          dein Engagement und deine Unterstützung!
        </p>

        {/* PayPal Link */}
        <Link
          href="https://www.paypal.com/donate?hosted_button_id=EXAMPLE"
          aria-label="Donate via PayPal"
          className="
            px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-section 3xl:px-section-lg
            py-2 sm:py-3 md:py-4 lg:py-5 xl:py-6 2xl:py-7 3xl:py-8
            text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl 3xl:text-3xl
            font-medium text-[#fcc41b] bg-[#fef5db] rounded-lg hover:bg-[#e6a200] transition-colors
          "
        >
          Spenden
        </Link>
      </div>
    </section>
  );
}
