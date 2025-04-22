import Image from "next/image";

import ContactPerson from "@/components/ContactPerson/ContactPerson";
import Promo from "@/components/EineWeltPromotorinnen/Promo/Promo";
import Sponsors from "@/components/Sponsors/Sponsors";

export default function EineWeltPromotorinnen() {
  return (
    <>
      <div>
        {/* Header Section */}
        <header className="relative w-full h-screen overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/Bildungsarbeit/eine-welt-fach-promotorinnen.jpg"
              fill
              alt="Home Page Header image"
              className="object-cover w-full h-full"
              priority
              sizes="100vw"
            />
          </div>

          {/* Text Content */}
          <div className="absolute bottom-6 left-2 xs:bottom-8 xs:left-3 xs2:bottom-9 xs2:left-4 sm:bottom-10 sm:left-6 md:bottom-11 md:left-7 lg:bottom-12 lg:left-8 xl:bottom-13 xl:left-9 2xl:bottom-14 2xl:left-10">
            <div
              className="space-y-2 xs:space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8 xl:space-y-10 2xl:space-y-12 3xl:space-y-13
              "
            >
              <h1 className="text-[#eb7b24] font-extrabold uppercase leading-[1.1]text-3xl xs:text-4xl xs2:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[140px] 3xl:text-[160px]">
                <span className="block">Dekoloniale.</span>
                <span className="block">Perspektiven.</span>
              </h1>
            </div>
          </div>
        </header>
        <section className="relative w-full min-h-screen text-[#eb7b24] px-8">
          {/* BIG TEXT */}
          <div className="mx-auto pt-8 mb-12 xs:mb-14 sm:mb-16 md:mb-20 lg:mb-36 xl:mb-40 2xl:mb-48 3xl:mb-52">
            <p className="text-2xl xs:text-3xl xs2:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-[5rem] 3xl:text-[10rem] font-semibold leading-tight tracking-normal mx-auto">
              Dekoloniale Perspektiven durchbrechen anhaltenden koloniale
              Machtstrukturen und eröffnen neue Wege des Denkens und Handelns,
              die Vielfalt und Gerechtigkeit in den Mittelpunkt stellen.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-8 xs2:gap-10 py-16 xs2:py-20 px-4 sm:px-6 lg:px-8 text-black">
            <div className="w-full lg:basis-1/2">
              <p className="text-base xs2:text-lg leading-relaxed">
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
            <div className="w-full lg:basis-1/2">
              <p className="text-base xs2:text-lg leading-relaxed">
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
                Welt-Promotor*innen-Programm das in Hamburg von der
                Netzwerkstelle von hamburg.global koordiniert wird. Aktuell gibt
                es neben unseren Stellen Promotor*innen in den Bereichen Fairer
                Handel, Globales Lernen und Klima- und Ressourcengerechtigkeit.
              </p>
            </div>
          </div>
        </section>

        {/* Vernetzung */}
        <section className="w-full py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center mt-24">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row gap-10 w-full">
              {/* Vernetzung Content */}
              <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center text-left">
                <h3 className="text-[#eb7b24] text-2xl xs2:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-2">
                  Vernetzung
                </h3>
                <hr className="w-24 border-2 mb-6 lg:mx-0 mx-auto border-[#eb7b24]" />
                <p className="max-w-xl text-base xs2:text-lg lg:text-xl leading-relaxed mt-6">
                  Aufbau von einem Netzwerk und Unterstützung von Akteur*innen,
                  deren Fokus auf der aktiven Mitgestaltung des
                  gesamtstädtischen Dekolonisierungsprozesses und dekolonialen
                  entwicklungspolitischen Bildungs- und Informationsarbeit
                  liegt.
                </p>
              </div>

              {/* Kontaktperson */}
              <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center text-center lg:text-left mt-12 lg:mt-0">
                <h3 className="text-[#eb7b24] text-2xl xs2:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-2">
                  Kontaktperson
                </h3>
                <hr className="w-24 border-2 mb-6 lg:mx-0 mx-auto border-[#eb7b24]" />
                <ContactPerson
                  name="Sonia Octavio"
                  position="Fachpromotorin Dekolonisierung mit dem Schwerpunkt Vernetzung"
                  email="sonia.octavio[at]ossara.de"
                  phone="(+49) 157-3572-1433"
                  imageSrc="/images/UberUns/Team/Sonia.jpg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Beratung */}
        <section className="w-full py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center mt-28">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row gap-10 w-full">
              {/* Kontaktperson */}
              <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center text-center lg:text-left">
                <h3 className="text-[#eb7b24] text-2xl xs2:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-2">
                  Kontaktperson
                </h3>
                <hr className="w-24 border-2 mb-6 lg:mx-0 mx-auto border-[#eb7b24]" />
                <ContactPerson
                  name="Catherine Schlüter"
                  position="Fachpromotorin Dekolonisierung mit dem Schwerpunkt Beratung"
                  email="catherine.schlueter[a]ossara.de"
                  phone="(+49) 157-3572-2762"
                  imageSrc="/images/UberUns/Team/CatherineSchlueter.jpg"
                />
              </div>

              {/* Beratung Content */}
              <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center text-center lg:text-left mt-12 lg:mt-0">
                <h3 className="text-[#eb7b24] text-2xl xs2:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-2">
                  Beratung
                </h3>
                <hr className="w-24 border-2 mb-6 lg:mx-0 mx-auto border-[#eb7b24]" />
                <p className="max-w-xl text-base xs2:text-lg lg:text-xl leading-relaxed mt-6">
                  Beratung von zivilgesellschaftlichen Initiativen und
                  Multiplikator*innen, die sich über bisherige Akteur*innen und
                  deren Projekte im gesamtstädtischen Dekolonisierungsprozess
                  informieren wollen und das Thema (Post-)Kolonialismus in ihre
                  Arbeit und Abläufe verankern wollen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Photo Carousel Section */}
        <section className="w-full overflow-hidden py-12 xs2:py-16 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto pt-16 pb-20 mt-20 max-w-7xl xl:max-w-8xl">
            <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-8 scrollbar-hide">
              {Array.from({ length: 10 }).map((_, index) => (
                <div
                  key={index}
                  className="relative h-48 xs2:h-56 sm:h-64 md:h-72 lg:h-80 2xl:h-[22rem] 3xl:h-[25rem] 
                     w-[75vw] xs2:w-[65vw] sm:w-[50vw] md:w-[40vw] lg:w-[30vw] xl:w-[25vw] 
                     flex-shrink-0 snap-center overflow-hidden shadow-md"
                >
                  <Image
                    src={`/images/carousel/image-${index + 1}.jpg`}
                    alt={`Carousel image ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 80vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Downloads Section */}
        <section className="relative w-full text-[#eb7b24]">
          <div className="container mx-auto py-section md:py-section-lg">
            {/* Header */}
            <div className="text-center mb-12 md:mb-16">
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
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
