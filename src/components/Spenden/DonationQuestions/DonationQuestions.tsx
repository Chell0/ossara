import Link from "next/link";

export default function DonationQuestions() {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center">
      <div className="container flex flex-col items-center justify-center gap-section">
        {/* Heading */}
        <h2 className="text-center font-semibold text-2xl text-[#fcc41b] xs:text-3xl leading-tight xs:leading-snug drop-shadow-sm sm:text-4xl sm:leading-normal md:text-5xl lg:text-6xl">
          Häufige Fragen zu Spenden an Ossara
        </h2>

        {/* Description */}
        <p className="mt-header max-w-prose text-center text-black text-sm xs:text-base leading-relaxed sm:text-lg sm:leading-loose md:text-xl">
          Wie lautet das Spendenkonto? Ihr könnt einmalig oder wiederkehrend über das
          Spendenformular spenden. Falls es Euch lieber ist, könnt ihr auch die Kontoverbindung
          verwenden:
        </p>

        {/* Donation Details */}
        <div className="w-full max-w-prose rounded-lg border border-gray-100 bg-white p-4 text-center shadow-md sm:p-6 md:p-8 lg:p-10">
          <p className="font-bold text-black text-lg uppercase sm:text-xl md:text-2xl lg:text-3xl">
            Ossara e.V.
          </p>

          <div className="mt-4 space-y-3 sm:mt-6 sm:space-y-4">
            <p className="font-semibold text-gray-800 text-sm sm:text-base md:text-lg">
              Steuernummer: <span className="font-medium">17 / 451 / 09817</span>
            </p>
            <p className="font-semibold text-gray-800 text-sm sm:text-base md:text-lg">
              Spendenkonto: <span className="font-medium">Hamburger Volksbank</span>
            </p>
            <p className="font-semibold text-gray-800 text-sm sm:text-base md:text-lg">
              IBAN: <span className="font-mono">DE68 2019 0003 0006 0538 07</span>
            </p>
            <p className="font-semibold text-gray-800 text-sm sm:text-base md:text-lg">
              Amtsgericht Hamburg: <span className="font-medium">VR 23447</span>
            </p>
          </div>
        </div>

        {/* Contact Details */}
        <div className="mt-section text-center">
          <p className="mb-4 font-bold text-black text-xl sm:mb-6 sm:text-2xl md:text-3xl">
            Kontakt
          </p>
          <div className="space-y-3 sm:space-y-4">
            <p className="font-semibold text-gray-800 text-sm sm:text-base md:text-lg">
              Tel.:{" "}
              <Link
                href="tel:+4915213062798"
                className="font-medium transition-colors hover:text-[#ba334b] hover:underline"
              >
                (+49) 152 1306 2798
              </Link>
            </p>
            <p className="font-semibold text-gray-800 text-sm sm:text-base md:text-lg">
              E-Mail:{" "}
              <Link
                href="mailto:info@ossara.de"
                className="font-medium transition-colors hover:text-[#ba334b] hover:underline"
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
