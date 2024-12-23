import { bebasNeue } from "@/app/fonts";
import Promo from "@/components/Dekolonisierung/Dekolonisierung";
import Sponsors from "@/components/Sponsors/Sponsors";
import Image from "next/image";

export default function EineWeltPromotorinnen() {
  return (
    <>
      <div className="container p-6 mx-auto">
        <section className="flex flex-col items-center justify-center mx-4 mt-10 text-center sm:mx-10">
          <h1
            className={`${bebasNeue.className} drop-shadow-xl text-8xl leading-tight font-bold text-[#ffb400] uppercase`}
          >
            Fachpromotorinnen Dekoloniale Perspektiven im
            entwicklungspolitischen Engagement
          </h1>
        </section>

        <section className="flex flex-col items-center py-10 mx-10 mb-20 md:flex-row gap-20">
          <div className="w-full md:w-1/2">
            <p className="text-gray-800 text-base">
              Obwohl die meisten ehemaligen Kolonien schon vor Jahrzehnten ihre
              Freiheit erlangt haben, gibt es immer noch koloniale
              Kontinuitäten, die weltweit das kollektive Gedächtnis der weißen
              Mehrheitsgesellschaft prägen und ebenso in gesellschaftlichen
              Strukturen tief verankert sind. Letztere sind getarnt durch
              Machtasymmetrien, Ausbeutung und das Fortbestehen des
              strukturellen und institutionellen Rassismus, der insbesondere
              Menschen aus dem Globalen Süden und solche, die in der Diaspora
              leben, betrifft.
            </p>
            <p className="mt-4 text-base text-gray-800">
              Als Hafenstadt war Hamburg viele Jahrhunderte lang eine der
              bedeutendsten Kolonialmetropolen in Europa und auch heute noch
              erinnern zahlreiche Orte an ihre Kolonialgeschichte. Die Stadt
              muss sich deshalb dazu verpflichten, die vielfältigen kolonialen
              Verflechtungen und ihre Auswirkungen auf unsere heutige
              Gesellschaft zu hinterfragen und der Öffentlichkeit zu vermitteln.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-gray-800 text-base">
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
            </p>
            <p className="text-base mt-4 text-gray-800">
              Die Fachstelle Dekoloniserung ist Teil des bundeweiten Eine
              Welt-Promotor*innen- Programm das in Hamburg von der
              Netzwerkstelle von hamburg.global koordiniert wird. Aktuell gibt
              es neben unseren Stellen Promotor*innen in den Bereichen Fairer
              Handel, Globales Lernen und Klima- und Ressourcengerechtigkeit.
            </p>
          </div>
        </section>

        {/* Vernetzung */}
        <section className="flex items-center justify-center w-full py-10">
          <div className="max-w-3xl mx-auto">
            <h2
              className={`${bebasNeue.className} text-[#ffb400] text-6xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-center drop-shadow-md`}
            >
              Vernetzung
            </h2>
          </div>
        </section>

        <section className="flex flex-col items-center mx-10 mt-5 mb-20 md:flex-row gap-20">
          <div className="w-full md:w-1/2">
            <p className="text-lg text-gray-800">
              Aufbau von einem Netzwerk und Unterstützung von Akteur*innen deren
              Fokus auf der aktiven Mitgestaltung des gesamtstädtischen
              Dekolonisierungsprozess und dekolonialen entwicklungspolitischen
              Bildungs- und Informationsarbeit liegt.
            </p>
          </div>
          <div className="flex-shrink-0 w-full md:w-1/2">
            <div className="flex flex-col items-center max-w-xs p-6 mx-auto bg-gray-50 shadow-md rounded-xl">
              {/* Profile Image */}
              <div className="w-32 h-32 mb-4 overflow-hidden rounded-3xl">
                <Image
                  src={`/team/sonia.jpg`}
                  alt="Sonia's Photo"
                  width={560}
                  height={720}
                  quality={100}
                  className="object-cover"
                />
              </div>

              {/* Profile Text */}
              <div className="mt-4">
                <p className="text-base font-semibold text-[#ffb400]">
                  Name:{" "}
                  <span className={`text-base text-gray-600`}>
                    Sonia Octavio
                  </span>
                </p>
                <p className="mt-2 text-base font-semibold tracking-wider text-[#ffb400]">
                  Email:{" "}
                  <span className={`text-base text-gray-600`}>
                    sonia.octavio[a]ossara.de
                  </span>
                </p>
                <p className="mt-2 text-base font-semibold tracking-wider text-[#ffb400]">
                  Telefon:{" "}
                  <span className={`text-base text-gray-600`}>
                    (+49) 157-3572-1433
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Beratung */}
        <section className="flex items-center justify-center w-full py-10 mt-10">
          <div className="max-w-3xl mx-auto">
            <h2
              className={`${bebasNeue.className} mt-20 text-[#ffb400] text-6xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-center drop-shadow-md`}
            >
              Beratung
            </h2>
          </div>
        </section>

        <section className="flex flex-col items-center mx-10 mt-5 mb-20 md:flex-row gap-20">
          <div className="flex-shrink-0 w-full md:w-1/2">
            <div className="flex flex-col items-center max-w-sm p-6 mx-auto bg-gray-50 shadow-md rounded-xl">
              {/* Profile Image */}
              <div className="w-32 h-32 mb-4 overflow-hidden rounded-3xl">
                <Image
                  src={`/team/catherine.jpg`}
                  alt="Catherine's Photo"
                  width={560}
                  height={720}
                  quality={100}
                  className="object-cover"
                />
              </div>
              {/* Profile Text */}
              <div className="mt-4">
                <p className="text-base font-semibold text-[#ffb400]">
                  Name:{" "}
                  <span className={`text-base text-gray-600`}>
                    Catherine Schlüter
                  </span>
                </p>
                <p className="mt-2 text-base font-semibold tracking-wider text-[#ffb400]">
                  Email:{" "}
                  <span className={`text-base text-gray-600`}>
                    catherine.schlueter[a]ossara.de
                  </span>
                </p>
                <p className="mt-2 text-base font-semibold tracking-wider text-[#ffb400]">
                  Telefon:{" "}
                  <span className={`text-base text-gray-600`}>
                    (+49) 157-3572-2762
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-lg text-gray-800">
              Beratung von zivilgesellschaftlichen Initiativen und
              Multiplikator*innen, die sich über bisherige Akteur*innen und
              deren Projekte im gesamtstädtischen Dekolonisierungsprozess
              informieren wollen und das Thema (Post-) Kolonialismus in ihre
              Arbeit und Abläufe verankern wollen.
            </p>
          </div>
        </section>

        {/* Downloads */}
        <section className="flex items-center justify-center w-full mt-20 sm:px-2">
          <div className="max-w-3xl mx-auto">
            <h2
              className={`${bebasNeue.className} mt-20 text-[#ffb400] text-6xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-center drop-shadow-md`}
            >
              Downloads
            </h2>
          </div>
        </section>
        <section className="mt-20">
          <Promo />
        </section>

        {/* Sponsors*/}
        <section className="mt-20">
          <Sponsors />
        </section>
      </div>
    </>
  );
}
