import Link from "next/link";

export default function DonationQuestions() {
  return (
    <>
      <div className="bg-gray-100 text-gray-800 py-16 px-6 sm:px-12 lg:px-24 mt-20 rounded-xl shadow-xl">
        <div className="max-w-3xl mx-auto text-center">
          <h3
            className={`text-[#ffb400] text-5xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center drop-shadow-sm`}
          >
            Häufige fragen zu spenden an Ossara
          </h3>
          <p className="mt-2 text-base">
            Wie lautet das Spendenkonto? Ihr könnt einmalig oder wiederkehrend
            über das Spendenformular spenden. Falls es Euch lieber ist, könnt
            ihr auch die Kontoverbindung verwenden:
          </p>
          <div className="p-6 text-center">
            <p className="text-lg font-bold text-gray-950 uppercase">
              Ossara e.V.
            </p>
            <p className="text-lg font-bold text-orange-500">
              Steuernummer:{" "}
              <span className="text-lg font-semibold text-blue-500">
                17 / 451 / 09817
              </span>
            </p>
            <p className="text-lg font-semibold text-orange-500">
              Spendenkonto:{" "}
              <span className="text-lg font-semibold text-blue-500">
                Hamburger Volksbank
              </span>
            </p>
            <p className="text-lg font-semibold text-orange-500">
              IBAN:{" "}
              <span className="text-lg font-semibold text-blue-500">
                DE68 2019 0003 0006 0538 07
              </span>
            </p>
            <p className="text-lg font-semibold text-orange-500">
              Amtsgericht Hamburg:{" "}
              <span className="text-lg font-semibold text-blue-500">
                VR 23447
              </span>
            </p>
          </div>
          <div className="mt-6 text-center">
            <p className="text-lg font-bold text-gray-950">Kontakt</p>
            <p className="text-lg font-semibold text-orange-500">
              Tel.:{" "}
              <Link
                href="tel:+4915213062798"
                className="text-lg font-semibold text-blue-500 hover:underline"
              >
                (+49) 152 1306 2798
              </Link>
            </p>
            <p className="text-lg font-semibold text-orange-500">
              E-Mail:{" "}
              <Link
                href="mailto:spenden@eoto-archiv.de"
                className="text-lg font-semibold text-blue-500 hover:underline"
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
