import Image from "next/image";

import ContactPerson from "@/components/ContactPerson/ContactPerson";
import Promo from "@/components/EineWeltPromotorinnen/Promo/Promo";
import Sponsors from "@/components/Sponsors/Sponsors";

export default function EineWeltPromotorinnen() {
  return (
    <>
      <div>
        {/* Header Section */}
        <header
          className="w-full relative bg-center bg-cover h-[50vh] 
    xs:h-[55vh] xs2:h-[58vh] sm:h-[60vh] md:h-[65vh] lg:h-[75vh] 
    xl:h-[85vh] 2xl:h-[95vh] 3xl:h-screen"
          style={{
            backgroundImage: "url(/sections/eine-welt-fach-promotorinnen.jpg)",
          }}
        >
          <div className="absolute bottom-3 left-4">
            <h1
              className="text-[#eb7b24] font-extrabold leading-tight uppercase text-2xl xs:text-3xl xs2:text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
        xl:text-8xl 2xl:text-9xl 3xl:text-[10rem] pl-4 pt-10"
            >
              Perspektiven.
            </h1>
          </div>
        </header>

        <section className="relative w-full min-h-screen text-[#eb7b24] pb-20">
          <div className="basis-full mx-auto">
            <p
              className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
                font-semibold leading-normal tracking-normal
                pb-20 p-6"
            >
              Dekoloniale Perspektiven durchbrechen anhaltenden koloniale
              Machtstrukturen und eröffnen neue Wege des Denkens und Handelns,
              die Vielfalt und Gerechtigkeit in den Mittelpunkt stellen.
            </p>
          </div>
          <div className="flex md:flex-grow flex-row gap-10 pt-20 pb-20 m-8 mt-20 text-black">
            <div className="basis-1/2">
              <p className="text-lg">
                Obwohl die meisten ehemaligen Kolonien schon vor Jahrzehnten
                ihre Freiheit erlangt haben, gibt es immer noch koloniale
                Kontinuitäten, die weltweit das kollektive Gedächtnis der weißen
                Mehrheitsgesellschaft prägen und ebenso in gesellschaftlichen
                Strukturen tief verankert sind. Letztere sind getarnt durch
                Machtasymmetrien, Ausbeutung und das Fortbestehen des
                strukturellen und institutionellen Rassismus, der insbesondere
                Menschen aus dem Globalen Süden und solche, die in der Diaspora
                leben, betrifft. Als Hafenstadt war Hamburg viele Jahrhunderte
                lang eine der bedeutendsten Kolonialmetropolen in Europa und
                auch heute noch erinnern zahlreiche Orte an ihre
                Kolonialgeschichte. Die Stadt muss sich deshalb dazu
                verpflichten, die vielfältigen kolonialen Verflechtungen und
                ihre Auswirkungen auf unsere heutige Gesellschaft zu
                hinterfragen und der Öffentlichkeit zu vermitteln.
              </p>
            </div>
            <div className="basis-1/2">
              <p className="text-lg">
                Als Eine Welt-Promotorinnen für Dekolonisierung wollen wir uns
                dafür engagieren, Partizipationsprozesse zu fördern und
                postkoloniale, dekoloniale und diasporische Stimmen
                zusammenzubringen. Darüber hinaus wollen wir das
                zivilgesellschaftliche Engagement für eine global nachhaltigere
                und gerechtere Weltordnung im städtischen Raum sichtbarer machen
                und neue regionale und überregionale Kooperationen anstoßen. Mit
                unserer Arbeit tragen wir auch zur Implementierung der 17
                UN-Nachhaltigkeitsziele bei, wobei ein Schwerpunkt auf den Kampf
                gegen weniger Ungleichheit (Ziel 10) auf der Welt liegt. Die
                Fachstelle Dekoloniserung ist Teil des bundeweiten Eine
                Welt-Promotor*innen- Programm das in Hamburg von der
                Netzwerkstelle von hamburg.global koordiniert wird. Aktuell gibt
                es neben unseren Stellen Promotor*innen in den Bereichen Fairer
                Handel, Globales Lernen und Klima- und Ressourcengerechtigkeit.
              </p>
            </div>
          </div>
        </section>

        {/* Vernetzung & Beratung */}
        <section className="relative w-full min-h-screen">
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="flex md:flex-grow flex-row gap-10 mt-20 pt-20 pb-20">
              {/* Vernetzung Content */}
              <div className="basis-1/2">
                <h3 className="text-[#eb7b24] text-3xl md:text-4xl lg:text-5xl mb-2 font-semibold text-center leading-tight">
                  Vernetzung
                </h3>
                <hr className="w-24 border-2 mx-auto border-[#eb7b24]" />
                <p className="max-w-xl text-xl leading-tight mt-10">
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
                  <h3 className="text-[#eb7b24] text-3xl md:text-4xl lg:text-5xl font-semibold mb-2">
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
            {/* Beratung Content */}
            <div className="flex md:flex-grow flex-row gap-10 pb-20 pt-20 mt-20">
              {/* Contact Section */}
              <div className="basis-1/2">
                <div className="text-center">
                  <h3 className="text-[#eb7b24] text-3xl md:text-4xl lg:text-5xl font-semibold mb-2">
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
                <h3 className="text-[#eb7b24] text-3xl md:text-4xl lg:text-5xl mb-2 font-semibold text-center leading-tight">
                  Beratung
                </h3>
                <hr className="w-24 border-2 mx-auto border-[#eb7b24]" />
                <p className="max-w-xl text-xl leading-tight mt-10">
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

        {/* Photo Carousel Section */}
        <section className="w-full overflow-hidden py-12 md:py-16 px-4">
          <div className="max-w-6xl mx-auto pt-20 pb-20 mt-40">
            <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-8 scrollbar-hide">
              {Array.from({ length: 10 }).map((_, index) => (
                <div
                  key={index}
                  className="relative h-48 w-[40vw] flex-shrink-0 snap-center sm:h-56 md:h-64 lg:h-72 lg:w-[30vw]"
                >
                  {/* <img
                    src={`https://picsum.photos/seed/${index}/400`}
                    alt={`Gallery ${index + 1}`}
                    className="h-full w-full rounded-xl object-cover shadow-lg"
                    loading="lazy"
                  /> */}
                  <Image
                    src={`/images/carousel/image-${index + 1}.jpg`}
                    alt={`Carousel image ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 60vw, 50vw"
                    className="object-cover shadow-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Downloads Section */}
        <section className="relative w-full text-[#eb7b24]">
          <div className="mx-auto px-4 py-12 md:py-16 lg:py-20">
            {/* Header */}
            <div className="text-center mb-12 md:mb-16 lg:mb-20">
              <h3 className="text-4xl font-bold md:text-5xl lg:text-6xl">
                Downloads
              </h3>
            </div>

            {/* Promo Component */}
            <div className="max-w-7xl mx-auto">
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
