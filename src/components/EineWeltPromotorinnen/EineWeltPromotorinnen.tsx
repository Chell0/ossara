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
              className={`text-[#eb7b24] drop-shadow-xl text-[8rem] font-extrabold leading-tight uppercase ml-10 mt-20`}
            >
              Dekoloniale.
              <br />
              Perspektiven.
            </h1>
          </div>
        </header>

        <section className="relative w-full min-h-screen text-[#eb7b24] pb-20">
          <div className="flex flex-col md:flex-row md:flex-grow">
            <div className="basis-full">
              <p className="text-[4rem] font-semibold leading-none p-2 mb-20">
                Dekoloniale Perspektiven durchbrechen anhaltenden koloniale
                Machtstrukturen und eröffnen neue Wege des Denkens und Handelns,
                die Vielfalt und Gerechtigkeit in den Mittelpunkt stellen.
              </p>
            </div>
          </div>
          <div className="flex md:flex-grow flex-row gap-10 pt-10 mx-6 mt-20 text-black">
            <div className="basis-1/2">
              <p className="text-base">
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
              <p className="mt-4 text-base">
                Als Hafenstadt war Hamburg viele Jahrhunderte lang eine der
                bedeutendsten Kolonialmetropolen in Europa und auch heute noch
                erinnern zahlreiche Orte an ihre Kolonialgeschichte. Die Stadt
                muss sich deshalb dazu verpflichten, die vielfältigen kolonialen
                Verflechtungen und ihre Auswirkungen auf unsere heutige
                Gesellschaft zu hinterfragen und der Öffentlichkeit zu
                vermitteln.
              </p>
            </div>
            <div className="basis-1/2">
              <p className="text-base">
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
              <p className="mt-4 text-base">
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
        <section className="relative w-full min-h-screen pb-20">
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="flex md:flex-grow flex-row gap-6 md:gap-10 mt-10">
              {/* Vernetzung Content */}
              <div className="basis-1/2">
                <h3 className="text-[#eb7b24] text-2xl md:text-3xl lg:text-4xl mb-2 font-semibold text-center leading-tight">
                  Vernetzung
                </h3>
                <hr className="w-24 border-2 mx-auto border-[#eb7b24]" />
                <p className="max-w-xl text-lg leading-tight mt-10">
                  Aufbau von einem Netzwerk und Unterstützung von Akteur*innen
                  deren Fokus auf der aktiven Mitgestaltung des
                  gesamtstädtischen Dekolonisierungsprozess und dekolonialen
                  entwicklungspolitischen Bildungs- und Informationsarbeit
                  liegt.
                </p>
              </div>

              {/* Contact Section */}
              <div className="basis-1/2">
                <div className="text-center">
                  <h3 className="text-[#eb7b24] text-2xl md:text-3xl lg:text-4xl font-semibold mb-2">
                    Kontaktperson
                  </h3>
                  <hr className="w-24 border-2 mx-auto border-[#eb7b24]" />
                  <ContactPerson
                    name="Sonia Octavio"
                    position="Projektkoordination"
                    email="sonia.octavio[at]ossara.de"
                    phone="(+49) 157-3572-1433"
                    imageSrc="/uber-uns/team/sonia2.jpg"
                  />
                </div>
              </div>
            </div>
            {/* Beratung */}
            <div className="flex md:flex-grow flex-row gap-8 md:gap-12 mt-16 m-2">
              {/* Contact Section */}
              <div className="basis-1/2">
                <div className="text-center">
                  <h3 className="text-[#eb7b24] text-2xl md:text-3xl lg:text-4xl font-semibold mb-2">
                    Kontaktperson
                  </h3>
                  <hr className="w-24 border-2 mx-auto border-[#eb7b24]" />
                  <ContactPerson
                    name="Catherine Schlüter"
                    position="Projektkoordination"
                    email="catherine.schlueter[a]ossara.de"
                    phone="(+49) 157-3572-2762"
                    imageSrc="/uber-uns/team/catherine.jpg"
                  />
                </div>
              </div>
              <div className="basis-1/2">
                <h3 className="text-[#eb7b24] text-2xl md:text-3xl lg:text-4xl mb-2 font-semibold text-center leading-tight">
                  Beratung
                </h3>
                <hr className="w-24 border-2 mx-auto border-[#eb7b24]" />
                <p className="max-w-xl text-lg leading-tight mt-10">
                  Beratung von zivilgesellschaftlichen Initiativen und
                  Multiplikator*innen, die sich über bisherige Akteur*innen und
                  deren Projekte im gesamtstädtischen Dekolonisierungsprozess
                  informieren wollen und das Thema (Post-) Kolonialismus in ihre
                  Arbeit und Abläufe verankern wollen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Downloads */}
        <section className="relative w-full min-h-fit text-[#eb7b24]">
          <div className="flex md:flex-grow flex-row pt-10 mt-10 mb-10">
            <div className="basis-full text-center">
              <h3 className={`text-5xl md:text-4xl lg:text-6xl font-bold`}>
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
        <Sponsors />
      </div>
    </>
  );
}
