import Link from "next/link";

export default function DonationForm() {
  return (
    <section
      className="w-full 
        min-h-[50vh] xs:min-h-[55vh] sm:min-h-[60vh] md:min-h-[65vh] md2:min-h-[70vh] tab:min-h-[85vh] tab-xl:min-h-[90vh] lg:min-h-[95vh] xl:min-h-screen 2xl:min-h-screen 
        relative bg-[#fcc41b] 
        overflow-hidden"
    >
      <div
        id="donate"
        className="absolute inset-0 flex flex-col items-center justify-center 
          p-2 xs:p-3 sm:p-4 md:p-5 md2:p-6 tab:p-8 tab-xl:p-10 lg:p-12 xl:p-14 2xl:p-16 
          gap-3 xs:gap-4 sm:gap-5 md:gap-6 md2:gap-7 tab:gap-8 tab-xl:gap-10 lg:gap-12 xl:gap-14 2xl:gap-16 
          max-h-full overflow-auto"
      >
        {/* Heading */}
        <h2
          className="text-[#fef5db] font-semibold text-center drop-shadow-sm 
            text-2xl xs:text-3xl sm:text-4xl md:text-5xl md2:text-6xl tab:text-7xl tab-xl:text-8xl lg:text-8xl xl:text-9xl 2xl:text-[10rem]"
        >
          Deine Spende
        </h2>

        {/* Description */}
        <p
          className="max-w-md xs:max-w-lg sm:max-w-xl md:max-w-2xl md2:max-w-3xl tab:max-w-4xl tab-xl:max-w-5xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-7xl 
            mt-2 xs:mt-3 sm:mt-4 md:mt-5 md2:mt-6 tab:mt-8 tab-xl:mt-10 lg:mt-12 xl:mt-14 2xl:mt-16 
            text-black text-[9px] xs:text-[10px] sm:text-xs md:text-sm md2:text-base tab:text-lg tab-xl:text-xl lg:text-xl xl:text-2xl 2xl:text-2xl 
            text-center"
        >
          Mit Deiner Hilfe können wir wichtige Arbeit leisten, die sonst nicht
          möglich wäre. <b>OSSARA e.V.</b> empowert Schwarze Menschen, Menschen
          afrikanischer Herkunft. Dafür brauchen wir einen langen Atem! Hier
          kannst Du uns einmalig mit Deiner Spende oder regelmäßig als{" "}
          <b>OSSARA Community Support</b> unterstützen:
        </p>

        {/* Paypal Link */}
        <Link
          href="#paypal"
          aria-label="Paypal Link"
          className="px-3 xs:px-4 sm:px-5 md:px-6 md2:px-7 tab:px-8 tab-xl:px-10 lg:px-12 xl:px-14 2xl:px-16 
            py-1 xs:py-2 sm:py-3 md:py-3.5 md2:py-4 tab:py-5 tab-xl:py-6 lg:py-7 xl:py-8 2xl:py-9 
            text-[10px] xs:text-xs sm:text-sm md:text-base md2:text-lg tab:text-xl tab-xl:text-2xl lg:text-2xl xl:text-3xl 2xl:text-3xl 
            font-medium text-[#fcc41b] bg-[#fef5db] rounded-lg hover:bg-[#e6a200] transition-colors"
        >
          Spenden
        </Link>
      </div>
    </section>
  );
}
