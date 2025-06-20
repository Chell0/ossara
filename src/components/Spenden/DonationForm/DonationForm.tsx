import Link from "next/link";

export default function DonationForm() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#fcc41b]">
      <div
        id="donate"
        className="absolute inset-0 flex flex-col items-center justify-center 3xl:gap-section-lg gap-4 overflow-auto 3xl:px-section-lg px-4 sm:gap-6 sm:px-6 md:gap-8 md:px-8 lg:gap-10 lg:px-10 xl:gap-12 xl:px-12 2xl:gap-section 2xl:px-section "
      >
        {/* Heading */}
        <h2 className="text-center font-semibold 3xl:text-8xl text-2xl text-[#fef5db] drop-shadow-sm sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl ">
          Deine Spende
        </h2>

        {/* Description */}
        <p className="mt-header 3xl:max-w-6xl max-w-prose text-left 3xl:text-3xl text-black text-xs sm:text-sm md:max-w-3xl md:text-base lg:text-lg xl:max-w-4xl xl:text-xl 2xl:max-w-5xl 2xl:text-2xl ">
          Mit deiner Spende unterstützt du vielfältige Projekte für soziale Gerechtigkeit, Bildung,
          Empowerment und nachhaltige Entwicklung – lokal wie global. Insbesondere fördern wir die
          dekoloniale internationale Zusammenarbeit, die auf Gleichberechtigung, respektvollen
          Austausch und den Abbau struktureller Ungerechtigkeiten abzielt. Dein Beitrag hilft uns,
          Projekte zu stärken, die den Austausch von Wissen und Ressourcen auf Augenhöhe ermöglichen
          und die historischen Lasten der Kolonialisierung überwinden. Vielen Dank für dein
          Engagement und deine Unterstützung!
        </p>

        {/* PayPal Link */}
        <Link
          href="https://www.paypal.com/donate?hosted_button_id=EXAMPLE"
          aria-label="Donate via PayPal"
          className="rounded-lg bg-[#fef5db] 3xl:px-section-lg px-4 3xl:py-8 py-2 font-medium 3xl:text-3xl text-[#fcc41b] text-sm transition-colors hover:bg-[#e6a200] sm:px-6 sm:py-3 sm:text-base md:px-8 md:py-4 md:text-lg lg:px-10 lg:py-5 lg:text-xl xl:px-12 xl:py-6 xl:text-2xl 2xl:px-section 2xl:py-7 2xl:text-2xl "
        >
          Spenden
        </Link>
      </div>
    </section>
  );
}
