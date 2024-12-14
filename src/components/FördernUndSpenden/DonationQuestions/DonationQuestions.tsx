import { bebasNeue } from "@/app/fonts";
import Link from "next/link";

export default function DonationQuestions() {
  return (
    <>
      <div className="bg-[#e8f4f6] text-gray-500 py-16 px-6 sm:px-12 lg:px-24 mt-20 rounded-xl shadow-xl">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className={`${bebasNeue.className} text-6xl font-semibold mb-6 uppercase text-[#ffb400]`}
          >
            Häufige fragen zu spenden an Ossara
          </h2>
          <p className="mb-6 text-base">
            Wie lautet das Spendenkonto? Ihr könnt einmalig oder wiederkehrend
            über das Spendenformular spenden. Falls es Euch lieber ist, könnt
            ihr auch die Kontoverbindung verwenden:
          </p>
          <div className="p-6 text-center">
            <p className="text-lg font-semibold text-black uppercase">
              Ossara e.V.
            </p>
            <p className="text-lg font-semibold text-yellow-500">
              Steuernummer:{" "}
              <span className="text-lg font-semibold text-black">
                17 / 451 / 09817
              </span>
            </p>
            <p className="text-lg font-semibold text-yellow-500">
              Spendenkonto:{" "}
              <span className="text-lg font-semibold text-black">
                Hamburger Volksbank
              </span>
            </p>
            <p className="text-lg font-semibold text-yellow-500">
              IBAN:{" "}
              <span className="text-lg font-semibold text-black">
                DE68 2019 0003 0006 0538 07
              </span>
            </p>
            <p className="text-lg font-semibold text-yellow-500">
              Amtsgericht Hamburg:{" "}
              <span className="text-lg font-semibold text-black">VR 23447</span>
            </p>
          </div>
          <div className="mt-6 text-center">
            <p className="text-lg font-bold text-black">Kontakt</p>
            <p className="text-lg font-semibold text-yellow-500">
              Tel.:{" "}
              <Link
                href="tel:+4915213062798"
                className="text-lg font-semibold text-black hover:underline"
              >
                (+49) 152 1306 2798
              </Link>
            </p>
            <p className="text-lg font-semibold text-yellow-500">
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
