import ContactPerson from "@/components/ContactPerson/ContactPerson";
import Promo from "@/components/Dekolonisierung/Dekolonisierung";
import Sponsors from "@/components/Sponsors/Sponsors";

export default function EineWeltPromotorinnen() {
  return (
    <>
      <div className="mx-auto">
        <header
          className="h-screen w-full bg-cover bg-center relative mb-10 p-10"
          style={{ backgroundImage: "url(/bgs/img1.jpg)" }}
        >
          <div
            className={`absolute top-0 left-0 right-0 inset-0 bg-black bg-opacity-60 flex items-start justify-start text-left`}
          >
            <h1
              className={`text-[#eb7b24] drop-shadow-xl text-[5rem] font-extrabold leading-tight uppercase ml-5 mt-20`}
            >
              Fachpromotorinnen Dekoloniale Perspektiven im
              entwicklungspolitischen Engagement
            </h1>
          </div>
        </header>

        <section className="relative w-full min-h-screen text-[#eb7b24]">
          <div className="flex md:flex-grow flex-row mb-10">
            <div className="basis-full p-4">
              <p className="text-4xl md:text-5xl leading-tight">
                Obwohl die meisten ehemaligen Kolonien schon vor Jahrzehnten
                ihre Freiheit erlangt haben, gibt es immer noch koloniale
                Kontinuitäten, die weltweit das kollektive Gedächtnis der weißen
                Mehrheitsgesellschaft prägen und ebenso in gesellschaftlichen
                Strukturen tief verankert sind. Letztere sind getarnt durch
                Machtasymmetrien, Ausbeutung und das Fortbestehen des
                strukturellen und institutionellen Rassismus, der insbesondere
                Menschen aus dem Globalen Süden und solche, die in der Diaspora
                leben, betrifft.
              </p>
            </div>
          </div>
          <div className="flex md:flex-grow flex-row justify-end pb-20">
            <div className="basis-2/3 p-4 mr-5">
              <p className="mt-4 text-lg">
                Als Hafenstadt war Hamburg viele Jahrhunderte lang eine der
                bedeutendsten Kolonialmetropolen in Europa und auch heute noch
                erinnern zahlreiche Orte an ihre Kolonialgeschichte. Die Stadt
                muss sich deshalb dazu verpflichten, die vielfältigen kolonialen
                Verflechtungen und ihre Auswirkungen auf unsere heutige
                Gesellschaft zu hinterfragen und der Öffentlichkeit zu
                vermitteln.
              </p>
              <p className="text-lg mt-4">
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
              <p className="text-lg mt-4">
                Die Fachstelle Dekoloniserung ist Teil des bundeweiten Eine
                Welt-Promotor*innen- Programm das in Hamburg von der
                Netzwerkstelle von hamburg.global koordiniert wird. Aktuell gibt
                es neben unseren Stellen Promotor*innen in den Bereichen Fairer
                Handel, Globales Lernen und Klima- und Ressourcengerechtigkeit.
              </p>
            </div>
          </div>
        </section>

        {/* Vernetzung */}
        <section className="relative w-full min-h-fit flex justify-center items-center">
          <div className="flex md:flex-grow flex-row gap-10 p-4 mt-20 text-[#eb7b24]">
            <div className="basis-1/2 p-4">
              <h3
                className={`text-6xl sm:text-3xl md:text-4xl lg:text-7xl font-semibold text-left drop-shadow-sm`}
              >
                Vernetzung
              </h3>
              <p className="mt-4 text-2xl">
                Aufbau von einem Netzwerk und Unterstützung von Akteur*innen
                deren Fokus auf der aktiven Mitgestaltung des gesamtstädtischen
                Dekolonisierungsprozess und dekolonialen entwicklungspolitischen
                Bildungs- und Informationsarbeit liegt.
              </p>
            </div>
            <div className="basis-1/2 p-2">
              <div className="flex flex-col items-center w-full">
                <h3 className="text-5xl font-semibold text-[#eb7b24] mb-2">
                  Kontaktperson
                </h3>
                <hr className="w-20 border-2 border-[#eb7b24] mb-6" />
              </div>
              <div className="flex flex-col items-center w-full">
                <ContactPerson
                  name="Sonia Octavio"
                  position="Projektkoordination"
                  email="sonia.octavio[a]ossara.de"
                  phone="(+49) 157-3572-1433"
                  imageSrc="/team/sonia.jpg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Beratung */}
        <section className="relative w-full min-h-fit flex justify-center items-center">
          <div className="flex md:flex-grow flex-row gap-6 mt-20 text-[#eb7b24]">
            <div className="basis-1/2 p-2">
              <div className="flex flex-col items-center w-full">
                <h3 className="text-5xl font-semibold text-[#eb7b24] mb-2">
                  Kontaktperson
                </h3>
                <hr className="w-20 border-2 border-[#eb7b24] mb-6" />
              </div>
              <div className="flex flex-col items-center w-full">
                <ContactPerson
                  name="Catherine Schlüter"
                  position="Projektkoordination"
                  email="catherine.schlueter[a]ossara.de"
                  phone="(+49) 157-3572-2762"
                  imageSrc="/team/catherine.jpg"
                />
              </div>
            </div>
            <div className="basis-1/2 p-2">
              <h3
                className={`text-6xl sm:text-3xl md:text-4xl lg:text-7xl font-semibold text-left drop-shadow-sm`}
              >
                Beratung
              </h3>
              <p className="mt-4 text-2xl">
                Beratung von zivilgesellschaftlichen Initiativen und
                Multiplikator*innen, die sich über bisherige Akteur*innen und
                deren Projekte im gesamtstädtischen Dekolonisierungsprozess
                informieren wollen und das Thema (Post-) Kolonialismus in ihre
                Arbeit und Abläufe verankern wollen.
              </p>
            </div>
          </div>
        </section>

        {/* Downloads */}
        <section className="relative w-full min-h-screen text-[#eb7b24]">
          <div className="flex md:flex-grow flex-row pt-10 mt-10 mb-10">
            <div className="basis-full text-center">
              <h3
                className={`mt-20 text-6xl sm:text-4xl md:text-5xl lg:text-7xl font-bold drop-shadow-md`}
              >
                Downloads
              </h3>
            </div>
          </div>
          <div className="flex md:flex-grow flex-row">
            <div className="basis-full">
              <Promo />
            </div>
          </div>
        </section>

        {/* Sponsors*/}
        <section className="-mt-10">
          <Sponsors />
        </section>
      </div>
    </>
  );
}
