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
              className={`text-[#eb7b24] drop-shadow-xl text-7xl font-extrabold leading-tight uppercase ml-5 mt-20`}
            >
              Fachpromotorinnen.
              <br />
              Dekoloniale.
              <br />
              Perspektiven.
              <br />
              im.
              <br />
              entwicklungspolitischen.
              <br />
              Engagement.
            </h1>
          </div>
        </header>

        <section className="relative w-full min-h-screen text-[#eb7b24]">
          <div className="flex flex-col md:flex-row md:flex-grow">
            <div className="basis-full m-4">
              <p className="text-3xl md:text-4xl leading-tight font-semibold">
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
            <div className="basis-2/3 p-2 text-gray-700">
              <p className="mt-4 text-md">
                Als Hafenstadt war Hamburg viele Jahrhunderte lang eine der
                bedeutendsten Kolonialmetropolen in Europa und auch heute noch
                erinnern zahlreiche Orte an ihre Kolonialgeschichte. Die Stadt
                muss sich deshalb dazu verpflichten, die vielfältigen kolonialen
                Verflechtungen und ihre Auswirkungen auf unsere heutige
                Gesellschaft zu hinterfragen und der Öffentlichkeit zu
                vermitteln.
              </p>
              <p className="mt-2 text-md">
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
              <p className="mt-2 text-md">
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
        <section className="relative w-full min-h-[60vh] flex items-center py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
              {/* Vernetzung Content */}
              <div className="w-full lg:w-1/2 p-4 space-y-6">
                <h2 className="text-[#eb7b24] text-5xl md:text-6xl lg:text-7xl font-semibold text-left leading-tight">
                  Vernetzung
                </h2>
                <p className="text-3xl md:text-4xl leading-tight">
                  Aufbau von einem Netzwerk und Unterstützung von Akteur*innen
                  deren Fokus auf der aktiven Mitgestaltung des
                  gesamtstädtischen Dekolonisierungsprozess und dekolonialen
                  entwicklungspolitischen Bildungs- und Informationsarbeit
                  liegt.
                </p>
              </div>

              {/* Contact Section */}
              <div className="w-full lg:w-1/2 p-4">
                <div className="text-center mb-8">
                  <h3 className="text-[#eb7b24] text-4xl md:text-5xl font-semibold mb-4">
                    Kontaktperson
                  </h3>
                  <hr className="w-24 border-2 mx-auto bg-[#eb7b24]" />
                </div>
                <div className="flex justify-center">
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
          </div>
        </section>

        {/* Beratung */}
        <section className="relative w-full min-h-[60vh] flex items-center py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
              {/* Contact Section */}
              <div className="w-full lg:w-1/2 p-4">
                <div className="text-center mb-8">
                  <h3 className="text-[#eb7b24] text-4xl md:text-5xl font-semibold mb-4">
                    Kontaktperson
                  </h3>
                  <hr className="w-24 border-2 mx-auto" />
                </div>
                <div className="flex justify-center">
                  <ContactPerson
                    name="Catherine Schlüter"
                    position="Projektkoordination"
                    email="catherine.schlueter[a]ossara.de"
                    phone="(+49) 157-3572-2762"
                    imageSrc="/team/catherine.jpg"
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2 p-4 space-y-6">
                <h2 className="text-[#eb7b24] text-5xl md:text-6xl lg:text-7xl font-semibold text-left leading-tight">
                  Beratung
                </h2>
                <p className="text-3xl md:text-4xl leading-tight">
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
        <section className="relative w-full min-h-screen text-[#eb7b24]">
          <div className="flex md:flex-grow flex-row pt-10 mt-10 mb-10">
            <div className="basis-full text-center">
              <h3
                className={`mt-20 text-6xl sm:text-4xl md:text-5xl lg:text-7xl font-bold`}
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
