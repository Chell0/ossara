import Link from "next/link";

export default function DonationQuestions() {
  return (
    <>
      <div className="h-screen w-full relative">
        <div className="absolute inset-0 flex flex-col items-center justify-center pl-10 gap-8">
          <h2
            className={`text-[#fcc41b] text-6xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold text-center drop-shadow-sm`}
          >
            Häufige fragen zu spenden an Ossara
          </h2>
          <p className="max-w-2xl mt-4 text-black text-lg">
            Wie lautet das Spendenkonto? Ihr könnt einmalig oder wiederkehrend
            über das Spendenformular spenden. Falls es Euch lieber ist, könnt
            ihr auch die Kontoverbindung verwenden:
          </p>
          <div className="p-6 text-center">
            <p className="text-lg font-bold text-black uppercase">
              Ossara e.V.
            </p>
            <p className="text-lg font-bold text-black">
              Steuernummer:{" "}
              <span className="text-lg font-semibold text-black">
                17 / 451 / 09817
              </span>
            </p>
            <p className="text-lg font-semibold text-black">
              Spendenkonto:{" "}
              <span className="text-lg font-semibold text-black">
                Hamburger Volksbank
              </span>
            </p>
            <p className="text-lg font-semibold text-black">
              IBAN:{" "}
              <span className="text-lg font-semibold text-black">
                DE68 2019 0003 0006 0538 07
              </span>
            </p>
            <p className="text-lg font-semibold text-black">
              Amtsgericht Hamburg:{" "}
              <span className="text-lg font-semibold text-black">VR 23447</span>
            </p>
          </div>
          <div className="mt-6 text-center">
            <p className="text-lg font-bold text-black">Kontakt</p>
            <p className="text-lg font-semibold text-black">
              Tel.:{" "}
              <Link
                href="tel:+4915213062798"
                className="text-lg font-semibold text-black hover:underline"
              >
                (+49) 152 1306 2798
              </Link>
            </p>
            <p className="text-lg font-semibold text-black">
              E-Mail:{" "}
              <Link
                href="mailto:spenden@eoto-archiv.de"
                className="text-lg font-semibold text-black hover:underline"
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
