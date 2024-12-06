import { bebasNeue } from "@/app/fonts";
import Promo from "@/components/Dekolonisierung/Dekolonisierung";
import Sponsors from "@/components/Sponsors/Sponsors";
import Image from "next/image";

export default function EineWeltPromotorinnen() {
  return (
    <>
      <div className="container mx-auto p-6">
        <section className="flex flex-col items-center justify-center text-center mx-4 sm:mx-10 py-10 sm:py-20">
          <h1
            className={`${bebasNeue.className} drop-shadow-xl text-[140px] leading-normal font-bold text-[#ffb400] uppercase`}
          >
            Fachpromotorinnen Dekoloniale Perspektiven im
            entwicklungspolitischen Engagement
          </h1>
        </section>

        <section className="flex flex-col md:flex-row items-center gap-10 py-10 mx-10 mt-20 mb-20">
          <div className="w-full md:w-1/2">
            <p className="mt-4 text-gray-700">
              Obwohl die meisten ehemaligen Kolonien schon vor Jahrzehnten ihre
              Freiheit erlangt haben, gibt es immer noch koloniale
              Kontinuitäten, die weltweit das kollektive Gedächtnis der weißen
              Mehrheitsgesellschaft prägen und ebenso in gesellschaftlichen
              Strukturen tief verankert sind. Letztere sind getarnt durch
              Machtasymmetrien, Ausbeutung und das Fortbestehen des
              strukturellen und institutionellen Rassismus, der insbesondere
              Menschen aus dem Globalen Süden und solche, die in der Diaspora
              leben, betrifft.
              <br />
              <br />
              Als Hafenstadt war Hamburg viele Jahrhunderte lang eine der
              bedeutendsten Kolonialmetropolen in Europa und auch heute noch
              erinnern zahlreiche Orte an ihre Kolonialgeschichte. Die Stadt
              muss sich deshalb dazu verpflichten, die vielfältigen kolonialen
              Verflechtungen und ihre Auswirkungen auf unsere heutige
              Gesellschaft zu hinterfragen und der Öffentlichkeit zu vermitteln.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <p className="mt-4 text-gray-700">
              Als Eine Welt-Promotorinnen für Dekolonisierung wollen wir uns
              dafür engagieren, Partizipationsprozesse zu fördern und
              postkoloniale, dekoloniale und diasporische Stimmen
              zusammenzubringen. Darüber hinaus wollen wir das
              zivilgesellschaftliche Engagement für eine global nachhaltigere
              und gerechtere Weltordnung im städtischen Raum sichtbarer machen
              und neue regionale und überregionale Kooperationen anstoßen. Mit
              unserer Arbeit tragen wir auch zur Implementierung der 17
              UN-Nachhaltigkeitsziele bei, wobei ein Schwerpunkt auf den Kampf
              gegen weniger Ungleichheit (Ziel 10) auf der Welt liegt.
              <br />
              <br />
              Die Fachstelle Dekoloniserung ist Teil des bundeweiten Eine
              Welt-Promotor*innen- Programm das in Hamburg von der
              Netzwerkstelle von hamburg.global koordiniert wird. Aktuell gibt
              es neben unseren Stellen Promotor*innen in den Bereichen Fairer
              Handel, Globales Lernen und Klima- und Ressourcengerechtigkeit.
            </p>
          </div>
        </section>

        {/* Vernetzung */}
        <section className="w-full flex items-center justify-center sm:px-2">
          <div className="max-w-md">
            <h2
              className={`${bebasNeue.className} mt-20 text-[#ffb400] text-6xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-center drop-shadow-md`}
            >
              Vernetzung
            </h2>
          </div>
        </section>

        <section className="flex flex-col md:flex-row items-center gap-10 mx-10 mt-5 mb-20">
          <div className="w-full md:w-1/2">
            <p className="mt-4 text-xl text-gray-800">
              Aufbau von einem Netzwerk und Unterstützung von Akteur*innen deren
              Fokus auf der aktiven Mitgestaltung des gesamtstädtischen
              Dekolonisierungsprozess und dekolonialen entwicklungspolitischen
              Bildungs- und Informationsarbeit liegt.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex-shrink-0">
            <section className="flex flex-col md:flex-row items-center gap-10 mt-10 mx-5 mb-20">
              <div className="w-full md:w-1/2 flex-shrink-0 flex justify-center">
                <Image
                  src={`/team/sonia.jpg`}
                  alt="About Photo"
                  width={360}
                  height={720}
                  quality={100}
                  className="rounded-xl shadow-xl object-cover sm:w-40 sm:h-40 md:w-72 md:h-72 lg:w-84 lg:h-84"
                />
              </div>
              <div className="w-full md:w-1/2 bg-gray-200 rounded-lg">
                <div
                  className={`max-w-lg space-y-2 px-0 sm:px-1 md:px-2 lg:px-4 p-1 sm:p-2 md:p-3 lg:p-6`}
                >
                  <p className={`text-md font-semibold`}>
                    Kontakt:{" "}
                    <span className={`text-xs text-orange-600`}>
                      Sonia Octavio
                    </span>
                  </p>
                  <p className={`text-md font-semibold`}>
                    Email:{" "}
                    <span className={`text-xs text-orange-600`}>
                      sonia.octavio[a]ossara.de
                    </span>
                  </p>
                  <p className={`text-md font-semibold`}>
                    Phone:{" "}
                    <span className={`text-xs text-orange-600`}>
                      (+49) 157-3572-1433
                    </span>
                  </p>
                </div>
              </div>
            </section>
          </div>
        </section>

        {/* Beratung */}
        <section className="w-full flex items-center justify-center sm:px-2">
          <div className="max-w-md">
            <h2
              className={`${bebasNeue.className} mt-20 text-[#ffb400] text-6xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-center drop-shadow-md`}
            >
              Beratung
            </h2>
          </div>
        </section>

        <section className="flex flex-col md:flex-row items-center gap-10 mx-10 mt-10 mb-20">
          <div className="w-full md:w-1/2 flex-shrink-0">
            <section className="flex flex-col md:flex-row items-center gap-10 mx-5 mt-10 mb-20">
              <div className="w-full md:w-1/2 bg-gray-200 rounded-lg">
                <div
                  className={`max-w-lg space-y-2 px-0 sm:px-1 md:px-2 lg:px-4 p-1 sm:p-2 md:p-3 lg:p-6`}
                >
                  <p className={`text-md font-semibold`}>
                    Kontakt:{" "}
                    <span className={`text-xs text-orange-600`}>
                      Catherine Schlüter
                    </span>
                  </p>
                  <p className={`text-md font-semibold`}>
                    Email:{" "}
                    <span className={`text-xs text-orange-600`}>
                      catherine.schlueter[a]ossara.de
                    </span>
                  </p>
                  <p className={`text-md font-semibold`}>
                    Phone:{" "}
                    <span className={`text-xs text-orange-600`}>
                      (+49) 157-3572-2762
                    </span>
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 flex-shrink-0 flex justify-center">
                <Image
                  src={`/team/catherine.jpg`}
                  alt="About Photo"
                  width={400}
                  height={400}
                  className="rounded-xl shadow-xl object-cover sm:w-40 sm:h-40 md:w-72 md:h-72 lg:w-84 lg:h-84"
                />
              </div>
            </section>
          </div>
          <div className="w-full md:w-1/2">
            <p className="mt-4 text-xl text-gray-800">
              Beratung von zivilgesellschaftlichen Initiativen und
              Multiplikator*innen, die sich über bisherige Akteur*innen und
              deren Projekte im gesamtstädtischen Dekolonisierungsprozess
              informieren wollen und das Thema (Post-) Kolonialismus in ihre
              Arbeit und Abläufe verankern wollen.
            </p>
          </div>
        </section>

        {/* Downloads */}
        <section className="w-full flex items-center justify-center mt-28 sm:px-2">
          <div className="bg-blended-gradient shadow-lg rounded-lg max-w-md sm:px-4">
            <h2 className="text-white text-xl py-4 px-4 sm:text-2xl md:text3xl lg:text-4xl font-semibold text-center">
              Downloads
            </h2>
          </div>
        </section>
        <section className="mt-20">
          <Promo />
        </section>

        {/* Sponsors*/}
        <section className="mt-36">
          <Sponsors />
        </section>
      </div>
    </>
  );
}
