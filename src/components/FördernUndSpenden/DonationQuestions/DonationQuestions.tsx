import Link from "next/link";

export default function DonationQuestions() {
  return (
    <div className="min-h-screen w-full relative flex items-center justify-center">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center p-4 xs:p-5 sm:p-6 md:p-8 tab:p-10 lg:p-12 xl:p-14 2xl:p-16 gap-5 xs:gap-6 sm:gap-7 md:gap-8 lg:gap-10 xl:gap-12">
        {/* Heading */}
        <h2 className="text-[#fcc41b] text-3.5xl xs:text-4xl sm:text-4.5xl md:text-5.5xl tab:text-6xl lg:text-6.5xl xl:text-7xl 2xl:text-8xl font-semibold text-center drop-shadow-sm tracking-tight leading-tight xs:leading-snug sm:leading-normal">
          Häufige Fragen zu Spenden an Ossara
        </h2>

        {/* Description */}
        <p className="max-w-2xl mt-4 xs:mt-5 sm:mt-6 text-black text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl text-center leading-relaxed sm:leading-loose px-2 xs:px-3 sm:px-4">
          Wie lautet das Spendenkonto? Ihr könnt einmalig oder wiederkehrend
          über das Spendenformular spenden. Falls es Euch lieber ist, könnt ihr
          auch die Kontoverbindung verwenden:
        </p>

        {/* Donation Details */}
        <div className="w-full max-w-xl p-5 xs:p-6 sm:p-7 md:p-8 text-center bg-white border border-gray-100">
          <p className="text-xl xs:text-2xl sm:text-3xl font-bold text-black uppercase tracking-wide">
            Ossara e.V.
          </p>

          <div className="mt-3 xs:mt-4 sm:mt-5 space-y-2 xs:space-y-3">
            <p className="text-base xs:text-lg sm:text-xl font-semibold text-gray-800">
              Steuernummer:{" "}
              <span className="font-medium">17 / 451 / 09817</span>
            </p>
            <p className="text-base xs:text-lg sm:text-xl font-semibold text-gray-800">
              Spendenkonto:{" "}
              <span className="font-medium">Hamburger Volksbank</span>
            </p>
            <p className="text-base xs:text-lg sm:text-xl font-semibold text-gray-800">
              IBAN:{" "}
              <span className="font-mono font-medium">
                DE68 2019 0003 0006 0538 07
              </span>
            </p>
            <p className="text-base xs:text-lg sm:text-xl font-semibold text-gray-800">
              Amtsgericht Hamburg: <span className="font-medium">VR 23447</span>
            </p>
          </div>
        </div>

        {/* Contact Details */}
        <div className="mt-5 xs:mt-6 sm:mt-8 md:mt-10 text-center">
          <p className="text-xl xs:text-2xl sm:text-3xl font-bold text-black mb-3 xs:mb-4 sm:mb-5">
            Kontakt
          </p>
          <div className="space-y-2 xs:space-y-3">
            <p className="text-base xs:text-lg sm:text-xl font-semibold text-gray-800">
              Tel.:{" "}
              <Link
                href="tel:+4915213062798"
                className="font-medium hover:underline hover:text-[#ba334b] transition-colors duration-200"
              >
                (+49) 152 1306 2798
              </Link>
            </p>
            <p className="text-base xs:text-lg sm:text-xl font-semibold text-gray-800">
              E-Mail:{" "}
              <Link
                href="mailto:info@ossara.de"
                className="font-medium hover:underline hover:text-[#ba334b] transition-colors duration-200"
              >
                info@ossara.de
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
