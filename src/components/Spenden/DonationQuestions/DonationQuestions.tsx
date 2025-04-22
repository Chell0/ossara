import Link from "next/link";

export default function DonationQuestions() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center relative">
      <div className="container flex flex-col items-center justify-center gap-section">
        {/* Heading */}
        <h2
          className="text-[#fcc41b] font-semibold text-center drop-shadow-sm 
          text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl
          leading-tight xs:leading-snug sm:leading-normal"
        >
          Häufige Fragen zu Spenden an Ossara
        </h2>

        {/* Description */}
        <p
          className="text-black text-center max-w-prose
          text-sm xs:text-base sm:text-lg md:text-xl
          mt-header leading-relaxed sm:leading-loose"
        >
          Wie lautet das Spendenkonto? Ihr könnt einmalig oder wiederkehrend
          über das Spendenformular spenden. Falls es Euch lieber ist, könnt ihr
          auch die Kontoverbindung verwenden:
        </p>

        {/* Donation Details */}
        <div
          className="w-full max-w-prose bg-white border border-gray-100 rounded-lg shadow-md 
          p-4 sm:p-6 md:p-8 lg:p-10 text-center"
        >
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-black uppercase">
            Ossara e.V.
          </p>

          <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
            <p className="text-sm sm:text-base md:text-lg font-semibold text-gray-800">
              Steuernummer:{" "}
              <span className="font-medium">17 / 451 / 09817</span>
            </p>
            <p className="text-sm sm:text-base md:text-lg font-semibold text-gray-800">
              Spendenkonto:{" "}
              <span className="font-medium">Hamburger Volksbank</span>
            </p>
            <p className="text-sm sm:text-base md:text-lg font-semibold text-gray-800">
              IBAN:{" "}
              <span className="font-mono">DE68 2019 0003 0006 0538 07</span>
            </p>
            <p className="text-sm sm:text-base md:text-lg font-semibold text-gray-800">
              Amtsgericht Hamburg: <span className="font-medium">VR 23447</span>
            </p>
          </div>
        </div>

        {/* Contact Details */}
        <div className="text-center mt-section">
          <p className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-4 sm:mb-6">
            Kontakt
          </p>
          <div className="space-y-3 sm:space-y-4">
            <p className="text-sm sm:text-base md:text-lg font-semibold text-gray-800">
              Tel.:{" "}
              <Link
                href="tel:+4915213062798"
                className="font-medium hover:underline hover:text-[#ba334b] transition-colors"
              >
                (+49) 152 1306 2798
              </Link>
            </p>
            <p className="text-sm sm:text-base md:text-lg font-semibold text-gray-800">
              E-Mail:{" "}
              <Link
                href="mailto:info@ossara.de"
                className="font-medium hover:underline hover:text-[#ba334b] transition-colors"
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
