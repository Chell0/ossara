import { bebasNeue } from "@/app/fonts";
import YouTubeSection from "@/components/Integrative/YouTubeSection/YouTubeSection";
import Image from "next/image";

export default function Integrative() {
  return (
    <>
      <section className="text-[#ffb400] text-center py-12 mt-10">
        <h1
          className={`${bebasNeue.className} drop-shadow-xl text-8xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight uppercase`}
        >
          Integrative Stadtteilarbeit
        </h1>
      </section>

      <section className="flex flex-col items-center gap-20 py-10 mx-10 mt-20 md:flex-row">
        <div className="flex-shrink-0 w-full md:w-1/2">
          <Image
            src={`/bgs/img1.jpg`}
            alt="Integrative Photo"
            width={480}
            height={520}
            quality={100}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2">
          <p className="text-base text-gray-800">
            Ossara e.V. bietet eine niedrigschwellige Sozialberatung und
            Bewerbungshilfe für Geflüchtete und Interessierte. In wöchentlichen
            Terminen unterstützen wir bei der Orientierung im deutschen
            Arbeitsmarkt, der Erstellung von Bewerbungsunterlagen und der
            Jobsuche. Darüber hinaus bieten wir Sprachförderung und
            Prüfungsvorbereitung, die Teilnehmer*innen gezielt auf
            Abschlussprüfungen wie das Zertifikat Deutsch Telc und Goethe
            vorbereiten. Unser Ziel ist es, formale Sprachkenntnisse zu
            vermitteln, die schriftliche Kompetenz zu stärken und gleichzeitig
            eine interkulturelle Austauschplattform zu bieten. Mit diesen
            Angeboten möchten wir den Teilnehmenden die nötigen Fähigkeiten und
            das Selbstvertrauen für eine erfolgreiche Integration und berufliche
            Perspektiven in Deutschland vermitteln.
          </p>
        </div>
      </section>

      {/* Video Section */}
      <section className="flex items-center justify-center w-full mt-20 sm:px-2">
        <YouTubeSection videoId="xpWWgOP5QuE" />
      </section>

      {/* Bewerbungstraining */}
      <section className="flex items-center justify-center w-full mt-20">
        <div>
          <h2
            className={`${bebasNeue.className} text-[#ffb400] text-6xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold text-center drop-shadow-md`}
          >
            Beratungs- und Bewerbungstraining
          </h2>
        </div>
      </section>

      <section className="flex flex-col items-center gap-10 py-10 mx-10 mt-10 mb-20 md:flex-row">
        <div className="flex justify-center flex-shrink-0 w-full md:w-1/2">
          <Image
            src={`/bgs/img1.jpg`}
            alt="About Photo"
            width={400}
            height={400}
            quality={100}
            className="object-cover shadow-xl rounded-xl sm:w-40 sm:h-40 md:w-72 md:h-72 lg:w-84 lg:h-84"
          />
        </div>
        <div className="w-full max-w-lg p-1 rounded-md shadow-md bg-gray-50 md:w-1/2">
          <div className={`space-y-2 p-1 sm:p-2 md:p-3 lg:p-6`}>
            <p className={`text-base font-semibold`}>
              Name:{" "}
              <span className={`font-semibold text-base text-blue-500`}>
                Katja Heyn
              </span>
            </p>
            <p className={`text-base font-semibold`}>
              Position:{" "}
              <span className={`font-semibold text-blue-500`}>
                Beratungs- und Bewerbungstrainerin
              </span>
            </p>
            <p className={`text-base font-semibold`}>
              Kontakt:{" "}
              <span className={`font-semibold text-blue-500`}>
                bewerbungstraining[a]ossara.de
              </span>
            </p>
            <p className={`text-md font-bold`}>
              Telefon:{" "}
              <span className={`font-semibold text-blue-500`}>
                (+49) 1575 1406184
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center gap-20 py-10 mx-10 mt-20 md:flex-row">
        <div className="flex-shrink-0 w-full md:w-1/2">
          <Image
            src={`/bgs/img1.jpg`}
            alt="Integrative Photo"
            width={520}
            height={480}
            quality={100}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2">
          <p className="text-base text-gray-800">
            Ossara e.V. bietet einmal wöchentlich eine niedrigschwellige
            Sozialberatung bzw. Orientierungshilfe an und unterstützt
            Interessierte bei Bewerbungen.
          </p>
          <p className="mt-4 text-base text-gray-800">
            <b>Wo : </b>
            <span className="font-medium text-[#ffb400]">
              In den Räumlichkeiten des Sportvereins SV Groß Borstel am
              Brödermannsweg 31, 22453 Hamburg und digital
            </span>
          </p>
          <p className="mt-4 text-base text-gray-800">
            <b>Wann : </b>
            <span className="font-medium text-[#ffb400]">
              Freitags von 10:00 - 13:00 Uhr und nach Vereinbarung
            </span>
          </p>
          <p className="mt-4 text-base text-gray-800">
            <b>Für wen : </b>
            <span className="font-medium text-[#ffb400]">
              Geflüchtete aus naheliegenden Unterkünften und Interessierte
            </span>
          </p>
        </div>
      </section>

      {/* Sprachförderung */}
      <section className="flex items-center justify-center w-full mt-20">
        <div>
          <h2
            className={`${bebasNeue.className} text-[#ffb400] text-6xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold text-center drop-shadow-md`}
          >
            Sprachförderung- und Prüfungsvorbereitung
          </h2>
        </div>
      </section>

      <section className="flex flex-col items-center gap-10 py-10 mx-10 mt-10 mb-20 md:flex-row">
        <div className="flex justify-center flex-shrink-0 w-full md:w-1/2">
          <Image
            src={`/bgs/img1.jpg`}
            alt="About Photo"
            width={400}
            height={400}
            quality={100}
            className="object-cover shadow-xl rounded-xl sm:w-40 sm:h-40 md:w-72 md:h-72 lg:w-84 lg:h-84"
          />
        </div>
        <div className="w-full max-w-2xl p-1 mr-10 rounded-md shadow-md bg-gray-50 md:w-1/2">
          <div className={`space-y-2 p-1 sm:p-2 md:p-3 lg:p-6`}>
            <p className={`text-base font-semibold`}>
              Name:{" "}
              <span className={`font-semibold text-base text-blue-500`}>
                Hayford Anyidoho
              </span>
            </p>
            <p className={`text-base font-semibold`}>
              Position:{" "}
              <span className={`font-semibold text-blue-500`}>
                Deutschtrainer für Sprachförderung und Prüfungsvorbereitung
              </span>
            </p>
            <p className={`text-base font-semibold`}>
              Kontakt:{" "}
              <span className={`font-semibold text-blue-500`}>
                sprachfoerderung[a]ossara.de
              </span>
            </p>
            <p className={`text-base font-semibold`}>
              Telefon:{" "}
              <span className={`font-semibold text-blue-500`}>
                (+49) 1590 6737147
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center gap-10 py-10 mx-10 mt-20 md:flex-row">
        <div className="flex-shrink-0 w-full md:w-1/2">
          <Image
            src={`/bgs/img1.jpg`}
            alt="Integrative Photo"
            width={520}
            height={480}
            quality={100}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2">
          <p className="text-base text-gray-800">
            Mit unserer Sprachförderung möchten wir den Teilnehmenden helfen,
            ihre Sprachkenntnisse im formellen Kontext zu verbessern, ihre
            schriftliche Kompetenz zu fördern und einen Raum für
            interkulturellen Austausch zu bieten.
          </p>
          <p className="mt-4 text-base text-gray-800">
            Die Prüfungsvorbereitung findet montags und dienstags von 10:00 bis
            13:00 Uhr statt. Unser Ziel ist es, die Teilnehmenden gezielt auf
            ihre Abschlussprüfungen vorzubereiten, indem wir sowohl schriftliche
            als auch mündliche Prüfungsfähigkeiten trainieren. In Kleingruppen
            werden Prüfungssituationen simuliert und das richtige Verhalten in
            Prüfungen geübt.
          </p>
          <p className="mt-4 text-base text-gray-800">
            Die gängigen Prüfungen umfassen:
            <ul className="pl-5 mt-2 space-y-2 text-xs font-semibold text-yellow-500 list-disc">
              <li>Zertifikat Deutsch Telc A1, A2, B1, DTZ, B2, C1</li>
              <li>Goethe Zertifikat A1, A2, B1, B2, C1</li>
            </ul>
          </p>
          <p className="mt-4 text-base text-gray-800">
            <b>PS :</b>{" "}
            <span className="font-bold text-blue-500">
              Wir führen keine Prüfungen durch und übernehmen keine
              Prüfungsgebühren.
            </span>
          </p>
        </div>
      </section>
    </>
  );
}
