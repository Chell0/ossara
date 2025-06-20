import Image from "next/image";

import ContactPerson from "@/components/ContactPerson/ContactPerson";
import Promo from "@/components/EineWeltPromotorinnen/Promo/Promo";
import Sponsors from "@/components/Sponsors/Sponsors";

export default function EineWeltPromotorinnen() {
  return (
    <>
      <div>
        {/* Header Section */}
        <header className="relative h-screen w-full overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/Bildungsarbeit/eine-welt-fach-promotorinnen.jpg"
              fill
              alt="Home Page Header image"
              className="h-full w-full object-cover"
              priority
              sizes="100vw"
            />
          </div>

          {/* Text Content */}
          <div className="absolute bottom-6 xs2:bottom-9 xs:bottom-8 left-2 xs2:left-4 xs:left-3 sm:bottom-10 sm:left-6 md:bottom-11 md:left-7 lg:bottom-12 lg:left-8 xl:bottom-13 xl:left-9 2xl:bottom-14 2xl:left-10">
            <div className="3xl:space-y-13 space-y-2 xs:space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8 xl:space-y-10 2xl:space-y-12 ">
              <h1 className="font-extrabold 3xl:text-[160px] text-[#eb7b24] xs2:text-5xl xs:text-4xl uppercase leading-[1.1]text-3xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[140px]">
                <span className="block">Dekoloniale.</span>
                <span className="block">Perspektiven.</span>
              </h1>
            </div>
          </div>
        </header>
        <section className="relative min-h-screen w-full px-8 text-[#eb7b24]">
          {/* BIG TEXT */}
          <div className="mx-auto 3xl:mb-52 mb-12 xs:mb-14 pt-8 sm:mb-16 md:mb-20 lg:mb-36 xl:mb-40 2xl:mb-48">
            <p className="mx-auto font-semibold 3xl:text-[10rem] text-2xl xs2:text-4xl xs:text-3xl leading-tight tracking-normal sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-[5rem]">
              Dekoloniale Perspektiven durchbrechen anhaltenden koloniale Machtstrukturen und
              eröffnen neue Wege des Denkens und Handelns, die Vielfalt und Gerechtigkeit in den
              Mittelpunkt stellen.
            </p>
          </div>
          <div className="flex flex-col gap-8 xs2:gap-10 px-4 py-16 xs2:py-20 text-black sm:px-6 lg:flex-row lg:px-8">
            <div className="w-full lg:basis-1/2">
              <p className="text-base xs2:text-lg leading-relaxed">
                Obwohl die meisten ehemaligen Kolonien schon vor Jahrzehnten ihre Freiheit erlangt
                haben, gibt es immer noch koloniale Kontinuitäten, die weltweit das kollektive
                Gedächtnis der weißen Mehrheitsgesellschaft prägen und ebenso in gesellschaftlichen
                Strukturen tief verankert sind. Letztere sind getarnt durch Machtasymmetrien,
                Ausbeutung und das Fortbestehen des strukturellen und institutionellen Rassismus,
                der insbesondere Menschen aus dem Globalen Süden und solche, die in der Diaspora
                leben, betrifft. Als Hafenstadt war Hamburg viele Jahrhunderte lang eine der
                bedeutendsten Kolonialmetropolen in Europa und auch heute noch erinnern zahlreiche
                Orte an ihre Kolonialgeschichte. Die Stadt muss sich deshalb dazu verpflichten, die
                vielfältigen kolonialen Verflechtungen und ihre Auswirkungen auf unsere heutige
                Gesellschaft zu hinterfragen und der Öffentlichkeit zu vermitteln.
              </p>
            </div>
            <div className="w-full lg:basis-1/2">
              <p className="text-base xs2:text-lg leading-relaxed">
                Als Eine Welt-Promotorinnen für Dekolonisierung wollen wir uns dafür engagieren,
                Partizipationsprozesse zu fördern und postkoloniale, dekoloniale und diasporische
                Stimmen zusammenzubringen. Darüber hinaus wollen wir das zivilgesellschaftliche
                Engagement für eine global nachhaltigere und gerechtere Weltordnung im städtischen
                Raum sichtbarer machen und neue regionale und überregionale Kooperationen anstoßen.
                Mit unserer Arbeit tragen wir auch zur Implementierung der 17
                UN-Nachhaltigkeitsziele bei, wobei ein Schwerpunkt auf den Kampf gegen weniger
                Ungleichheit (Ziel 10) auf der Welt liegt. Die Fachstelle Dekoloniserung ist Teil
                des bundeweiten Eine Welt-Promotor*innen-Programm das in Hamburg von der
                Netzwerkstelle von hamburg.global koordiniert wird. Aktuell gibt es neben unseren
                Stellen Promotor*innen in den Bereichen Fairer Handel, Globales Lernen und Klima-
                und Ressourcengerechtigkeit.
              </p>
            </div>
          </div>
        </section>

        {/* Vernetzung */}
        <section className="mt-24 flex w-full items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="flex w-full flex-col gap-10 lg:flex-row">
              {/* Vernetzung Content */}
              <div className="flex w-full flex-col items-center justify-center text-left lg:w-1/2 lg:items-start">
                <h3 className="mb-2 font-semibold text-2xl text-[#eb7b24] xs2:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">
                  Vernetzung
                </h3>
                <hr className="mx-auto mb-6 w-24 border-2 border-[#eb7b24] lg:mx-0" />
                <p className="mt-6 max-w-xl text-base xs2:text-lg leading-relaxed lg:text-xl">
                  Aufbau von einem Netzwerk und Unterstützung von Akteur*innen, deren Fokus auf der
                  aktiven Mitgestaltung des gesamtstädtischen Dekolonisierungsprozesses und
                  dekolonialen entwicklungspolitischen Bildungs- und Informationsarbeit liegt.
                </p>
              </div>

              {/* Kontaktperson */}
              <div className="mt-12 flex w-full flex-col items-center justify-center text-center lg:mt-0 lg:w-1/2 lg:items-start lg:text-left">
                <h3 className="mb-2 font-semibold text-2xl text-[#eb7b24] xs2:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">
                  Kontaktperson
                </h3>
                <hr className="mx-auto mb-6 w-24 border-2 border-[#eb7b24] lg:mx-0" />
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
        <section className="mt-28 flex w-full items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="flex w-full flex-col gap-10 lg:flex-row">
              {/* Kontaktperson */}
              <div className="flex w-full flex-col items-center justify-center text-center lg:w-1/2 lg:items-start lg:text-left">
                <h3 className="mb-2 font-semibold text-2xl text-[#eb7b24] xs2:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">
                  Kontaktperson
                </h3>
                <hr className="mx-auto mb-6 w-24 border-2 border-[#eb7b24] lg:mx-0" />
                <ContactPerson
                  name="Catherine Schlüter"
                  position="Fachpromotorin Dekolonisierung mit dem Schwerpunkt Beratung"
                  email="catherine.schlueter[a]ossara.de"
                  phone="(+49) 157-3572-2762"
                  imageSrc="/images/UberUns/Team/CatherineSchlueter.jpg"
                />
              </div>

              {/* Beratung Content */}
              <div className="mt-12 flex w-full flex-col items-center justify-center text-center lg:mt-0 lg:w-1/2 lg:items-start lg:text-left">
                <h3 className="mb-2 font-semibold text-2xl text-[#eb7b24] xs2:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">
                  Beratung
                </h3>
                <hr className="mx-auto mb-6 w-24 border-2 border-[#eb7b24] lg:mx-0" />
                <p className="mt-6 max-w-xl text-base xs2:text-lg leading-relaxed lg:text-xl">
                  Beratung von zivilgesellschaftlichen Initiativen und Multiplikator*innen, die sich
                  über bisherige Akteur*innen und deren Projekte im gesamtstädtischen
                  Dekolonisierungsprozess informieren wollen und das Thema (Post-)Kolonialismus in
                  ihre Arbeit und Abläufe verankern wollen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Photo Carousel Section */}
        <section className="w-full overflow-hidden px-4 py-12 xs2:py-16 sm:px-6 lg:px-8">
          <div className="mx-auto mt-20 max-w-7xl pt-16 pb-20 xl:max-w-8xl">
            <div className="scrollbar-hide flex snap-x snap-mandatory gap-6 overflow-x-auto pb-8">
              {Array.from({ length: 10 }).map((_, index) => (
                <div
                  key={index}
                  className="relative 3xl:h-[25rem] h-48 xs2:h-56 w-[75vw] xs2:w-[65vw] flex-shrink-0 snap-center overflow-hidden shadow-md sm:h-64 sm:w-[50vw] md:h-72 md:w-[40vw] lg:h-80 lg:w-[30vw] xl:w-[25vw] 2xl:h-[22rem]"
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
            <div className="mb-12 text-center md:mb-16">
              <h3 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                Downloads
              </h3>
            </div>

            {/* Promo Component */}
            <div className="mx-auto max-w-7xl">
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
