import Link from "next/link";

export default function DonationQuestions() {
  return (
    <>
      <div className="min-h-screen w-full relative">
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 gap-4 sm:gap-6 md:gap-8">
          {/* Heading */}
          <h2
            className={`text-[#fcc41b] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-center drop-shadow-sm`}
          >
            Häufige Fragen zu Spenden an Ossara
          </h2>

          {/* Description */}
          <p className="max-w-2xl mt-4 text-black text-sm sm:text-base md:text-lg text-center">
            Wie lautet das Spendenkonto? Ihr könnt einmalig oder wiederkehrend
            über das Spendenformular spenden. Falls es Euch lieber ist, könnt
            ihr auch die Kontoverbindung verwenden:
          </p>

          {/* Donation Details */}
          <div className="p-4 sm:p-6 text-center bg-white rounded-lg shadow-xl">
            <p className="text-lg font-bold text-black uppercase">
              Ossara e.V.
            </p>
            <p className="text-sm sm:text-base font-semibold text-black mt-2">
              Steuernummer:{" "}
              <span className="text-sm sm:text-base font-semibold text-black">
                17 / 451 / 09817
              </span>
            </p>
            <p className="text-sm sm:text-base font-semibold text-black mt-2">
              Spendenkonto:{" "}
              <span className="text-sm sm:text-base font-semibold text-black">
                Hamburger Volksbank
              </span>
            </p>
            <p className="text-sm sm:text-base font-semibold text-black mt-2">
              IBAN:{" "}
              <span className="text-sm sm:text-base font-semibold text-black">
                DE68 2019 0003 0006 0538 07
              </span>
            </p>
            <p className="text-sm sm:text-base font-semibold text-black mt-2">
              Amtsgericht Hamburg:{" "}
              <span className="text-sm sm:text-base font-semibold text-black">
                VR 23447
              </span>
            </p>
          </div>

          {/* Contact Details */}
          <div className="mt-4 sm:mt-6 text-center">
            <p className="text-lg font-bold text-black">Kontakt</p>
            <p className="text-sm sm:text-base font-semibold text-black mt-2">
              Tel.:{" "}
              <Link
                href="tel:+4915213062798"
                className="text-sm sm:text-base font-semibold text-black hover:underline"
              >
                (+49) 152 1306 2798
              </Link>
            </p>
            <p className="text-sm sm:text-base font-semibold text-black mt-2">
              E-Mail:{" "}
              <Link
                href="mailto:info@ossara.de"
                className="text-sm sm:text-base font-semibold text-black hover:underline"
              >
                info@ossara.de
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
