import Image from "next/image";

import ContactPerson from "@/components/ContactPerson/ContactPerson";
import YouTubeSection from "@/components/Integrative/YouTubeSection/YouTubeSection";

export default function Integrative() {
  return (
    <>
      <div>
        <header
          className="h-screen w-full bg-cover bg-center relative p-10"
          style={{ backgroundImage: "url(/bgs/img1.jpg)" }}
        >
          <div
            className={`absolute top-0 left-0 right-0 inset-0 bg-black bg-opacity-60 flex items-start justify-start`}
          >
            <h1
              className={`text-[#fcc41b] drop-shadow-xl text-[8rem] font-extrabold leading-tight uppercase p-6 ml-10 mt-20`}
            >
              Stadtteil. <br />
              arbeit.
            </h1>
          </div>
        </header>

        <section className="relative w-full min-h-screen text-[#fcc41b] p-8">
          {/* Heading Section */}
          <div className="flex flex-col md:flex-row md:flex-grow">
            <div className="basis-full">
              <h2 className="text-6xl md:text-7xl font-semibold leading-tight">
                Mit niederschwelliger Beratung und praxisnaher Unterstützung
                schaffen wir berufliche Perspektiven und fördern erfolgreiche
                Integration.
              </h2>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex flex-col md:flex-row gap-8 mt-8">
            {/* YouTube Video Section */}
            <div className="basis-1/2 flex justify-center items-center h-[360px] md:h-[480px] mt-2">
              <YouTubeSection videoId="xpWWgOP5QuE" />
            </div>

            {/* Text Section */}
            <div className="basis-1/2 p-4">
              <p className="text-lg text-gray-700">
                Ossara e.V. bietet eine niedrigschwellige Sozialberatung und
                Bewerbungshilfe für Geflüchtete und Interessierte. In
                wöchentlichen Terminen unterstützen wir bei der Orientierung im
                deutschen Arbeitsmarkt, der Erstellung von Bewerbungsunterlagen
                und der Jobsuche. Darüber hinaus bieten wir Sprachförderung und
                Prüfungsvorbereitung, die Teilnehmer*innen gezielt auf
                Abschlussprüfungen wie das Zertifikat Deutsch Telc und Goethe
                vorbereiten. Unser Ziel ist es, formale Sprachkenntnisse zu
                vermitteln, die schriftliche Kompetenz zu stärken und
                gleichzeitig eine interkulturelle Austauschplattform zu bieten.
                Mit diesen Angeboten möchten wir den Teilnehmenden die nötigen
                Fähigkeiten und das Selbstvertrauen für eine erfolgreiche
                Integration und berufliche Perspektiven in Deutschland
                vermitteln.
              </p>
            </div>
          </div>
        </section>

        {/* Bewerbungstraining */}
        <section className="h-screen w-full relative">
          <div className="absolute inset-0 flex flex-col items-center justify-center pl-10 gap-8">
            <h2 className="text-[#fcc41b] text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight">
              Beratungs- und Bewerbungstraining
            </h2>

            <div className="flex flex-col items-center">
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-semibold text-[#fcc41b] mb-4">
                  Kontaktperson
                </h3>
                <hr className="w-16 border-2 border-[#fcc41b] mx-auto" />
              </div>

              <ContactPerson
                name="Katja Heyn"
                position="Beratungs- und Bewerbungstrainerin"
                email="Bewerbungstraining[at]ossara.de"
                phone="(+49) 1575 1406 184"
                imageSrc="/contact-person/contact_person.jpg"
              />
            </div>
          </div>
        </section>

        <section className="flex min-h-screen flex-col items-center justify-center gap-8 px-4 py-12 md:flex-row md:gap-12 md:px-8">
          {/* Image Container */}
          <div className="flex flex-1 items-center justify-center md:w-1/2">
            <div className="relative h-[60vh] w-full max-w-2xl md:h-[70vh]">
              <Image
                src="/bgs/img1.jpg"
                alt="Integrative Photo"
                fill
                quality={100}
                className="rounded-xl object-cover shadow-2xl"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-1 flex-col justify-center md:w-1/2">
            <p className="text-3xl md:text-4xl text-gray-700 leading-tight">
              Ossara e.V. bietet einmal wöchentlich eine niedrigschwellige
              Sozialberatung bzw. Orientierungshilfe an und unterstützt
              Interessierte bei Bewerbungen.
            </p>

            <div className="space-y-3">
              <div>
                <p className="mt-2 text-xl md:text-2xl text-gray-700">
                  <strong className="block">Wo:</strong>
                  <span className="text-[#fcc41b]">
                    In den Räumlichkeiten des Sportvereins SV Groß Borstel am
                    Brödermannsweg 31, 22453 Hamburg und digital
                  </span>
                </p>
              </div>

              <div>
                <p className="text-xl md:text-2xl text-gray-700">
                  <strong className="block mb-1">Wann:</strong>
                  <span className="text-[#fcc41b]">
                    Freitags von 10:00 - 13:00 Uhr und nach Vereinbarung
                  </span>
                </p>
              </div>

              <div>
                <p className="text-xl md:text-2xl text-gray-700">
                  <strong className="block mb-1">Für wen:</strong>
                  <span className="text-[#fcc41b]">
                    Geflüchtete aus naheliegenden Unterkünften und Interessierte
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sprachförderung */}
        <section className="h-screen w-full relative">
          <div className="absolute inset-0 flex flex-col items-center justify-center pl-10 gap-8">
            <h2
              className={`text-[#fcc41b] text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight`}
            >
              Sprachförderung- und Prüfungsvorbereitung
            </h2>

            <div className="flex flex-col items-center">
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-semibold text-[#fcc41b] mb-4">
                  Kontaktperson
                </h3>
                <hr className="w-16 border-2 border-[#fcc41b] mx-auto" />
              </div>

              <ContactPerson
                name="Hayford Anyidoho"
                position="Deutschtrainer für Sprachförderung und Prüfungsvorbereitung"
                email="sprachfoerderung[at]ossara.de"
                phone="(+49) 1590 6737147"
                imageSrc="/contact-person/contact_person.jpg"
              />
            </div>
          </div>
        </section>

        <section className="flex min-h-screen flex-col items-center justify-center gap-8 px-4 py-12 md:flex-row md:gap-12 md:px-8">
          {/* Image Container */}
          <div className="flex flex-1 items-center justify-center md:w-1/2">
            <div className="relative h-[60vh] w-full max-w-2xl md:h-[70vh]">
              <Image
                src={`/bgs/img1.jpg`}
                alt="About Photo"
                fill
                quality={100}
                className="rounded-xl object-cover shadow-2xl"
                priority
              />
            </div>
          </div>
          <div className="flex flex-1 flex-col justify-center md:w-1/2">
            <p className="text-lg leading-tight text-gray-700 md:text-xl">
              Mit unserer Sprachförderung möchten wir den Teilnehmenden helfen,
              ihre Sprachkenntnisse im formellen Kontext zu verbessern, ihre
              schriftliche Kompetenz zu fördern und einen Raum für
              interkulturellen Austausch zu bieten.
            </p>
            <p className="mt-4 text-lg md:text-xl leading-tight text-gray-700">
              Die Prüfungsvorbereitung findet montags und dienstags von 10:00
              bis 13:00 Uhr statt. Unser Ziel ist es, die Teilnehmenden gezielt
              auf ihre Abschlussprüfungen vorzubereiten, indem wir sowohl
              schriftliche als auch mündliche Prüfungsfähigkeiten trainieren. In
              Kleingruppen werden Prüfungssituationen simuliert und das richtige
              Verhalten in Prüfungen geübt.
            </p>
            <p className="mt-4 text-lg leading-tight md:text-xl text-gray-700">
              Die gängigen Prüfungen umfassen:
            </p>
            <ul className="text-lg md:text-xl pl-5 mt-2 space-y-2 font-semibold text-[#fcc41b] list-disc">
              <li>Zertifikat Deutsch Telc A1, A2, B1, DTZ, B2, C1</li>
              <li>Goethe Zertifikat A1, A2, B1, B2, C1</li>
            </ul>
            <p className="mt-4 text-lg leading-tight md:text-xl text-gray-700">
              <b>PS :</b>{" "}
              <span className="text-lg leading-tight md:text-xl text-gray-700">
                Wir führen keine Prüfungen durch und übernehmen keine
                Prüfungsgebühren.
              </span>
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
