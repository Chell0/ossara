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
            id="integrative"
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

        <section className="relative w-full min-h-screen text-[#fcc41b]">
          <div className="flex md:flex-grow flex-row pt-5">
            <div className="basis-full">
              <p className="text-[5rem] font-semibold leading-none p-2">
                Mit niederschwelliger Beratung und praxisnaher Unterstützung
                schaffen wir berufliche Perspektiven und fördern erfolgreiche
                Integration.
              </p>
            </div>
          </div>
          <div className="flex md:flex-grow flex-row gap-10 mt-20 m-6">
            <div className="basis-1/2 flex justify-center items-center mx-3 h-[360px] md:h-[480px]">
              <YouTubeSection videoId="xpWWgOP5QuE" />
            </div>
            <div className="basis-1/2 mt-20 pt-10">
              <p className="text-md text-black">
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
        <section
          id="bewerbungstraining"
          className="relative w-full min-h-screen text-[#fcc41b]"
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center pt-20">
            {/* Heading Section */}
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-4">
              Beratungs- und Bewerbungstraining
            </h2>

            {/* Content Section */}
            <div className="flex md:flex-grow flex-row gap-6 mt-20 m-6">
              {/* Left Column - Text Content */}
              <div className="basis-1/2">
                <div className="space-y-1 p-4">
                  <p className="text-md md:text-lg text-black leading-relaxed">
                    Ossara e.V. bietet einmal wöchentlich eine niedrigschwellige
                    Sozialberatung bzw. Orientierungshilfe an und unterstützt
                    Interessierte bei Bewerbungen.
                  </p>
                  <div>
                    <strong className="block text-md md:text-lg text-black">
                      Wo:
                    </strong>
                    <p className="text-md md:text-lg">
                      In den Räumlichkeiten des Sportvereins SV Groß Borstel am
                      Brödermannsweg 31, 22453 Hamburg und digital
                    </p>
                  </div>

                  <div>
                    <strong className="block text-base md:text-md text-black">
                      Wann:
                    </strong>
                    <p className="text-md md:text-lg">
                      Freitags von 10:00 - 13:00 Uhr und nach Vereinbarung
                    </p>
                  </div>

                  <div>
                    <strong className="block text-md md:text-lg text-black">
                      Für wen:
                    </strong>
                    <p className="text-md md:text-lg">
                      Geflüchtete aus naheliegenden Unterkünften und
                      Interessierte
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column - Contact Card */}
              <div className="basis-1/2 mt-4">
                <div className="text-center">
                  <h3 className="text-black text-3xl md:text-4xl font-semibold mb-4">
                    Kontaktperson
                  </h3>
                  <hr className="w-16 border-2 mx-auto border-black" />

                  <ContactPerson
                    name="Katja Heyn"
                    position="Beratungs- und Bewerbungstrainerin"
                    email="Bewerbungstraining[at]ossara.de"
                    phone="(+49) 1575 1406 184"
                    imageSrc="/contact-person/contact_person.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sprachförderung */}
        <section className="relative w-full min-h-screen text-[#fcc41b]">
          <div
            id="sprachforderung"
            className="absolute inset-0 flex flex-col items-center justify-center pt-20"
          >
            {/* Heading Section */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-4">
              Sprachförderung- und Prüfungsvorbereitung
            </h2>

            {/* Content Section */}
            <div className="flex md:flex-grow flex-row gap-3 mt-20">
              {/* Left Column - Text Content */}
              <div className="basis-1/2 p-8">
                <div>
                  <p className="text-base leading-relaxed text-black md:text-md">
                    Mit unserer Sprachförderung möchten wir den Teilnehmenden
                    helfen, ihre Sprachkenntnisse im formellen Kontext zu
                    verbessern, ihre schriftliche Kompetenz zu fördern und einen
                    Raum für interkulturellen Austausch zu bieten.
                  </p>
                  <p className="mt-2 text-base md:text-md leading-tight text-black">
                    Die Prüfungsvorbereitung findet montags und dienstags von
                    10:00 bis 13:00 Uhr statt. Unser Ziel ist es, die
                    Teilnehmenden gezielt auf ihre Abschlussprüfungen
                    vorzubereiten, indem wir sowohl schriftliche als auch
                    mündliche Prüfungsfähigkeiten trainieren. In Kleingruppen
                    werden Prüfungssituationen simuliert und das richtige
                    Verhalten in Prüfungen geübt.
                  </p>
                  <p className="mt-2 text-base leading-tight md:text-md text-black">
                    Die gängigen Prüfungen umfassen:
                  </p>
                  <ul className="text-base md:text-md pl-5 mt-2 space-y-1 font-semibold text-[#fcc41b] list-disc">
                    <li>Zertifikat Deutsch Telc A1, A2, B1, DTZ, B2, C1</li>
                    <li>Goethe Zertifikat A1, A2, B1, B2, C1</li>
                  </ul>
                  <p className="mt-2 text-base leading-tight md:text-md text-black">
                    <b>PS :</b>{" "}
                    <span className="text-base leading-tight md:text-md text-black">
                      Wir führen keine Prüfungen durch und übernehmen keine
                      Prüfungsgebühren.
                    </span>
                  </p>
                </div>
              </div>

              {/* Right Column - Contact Card */}
              <div className="basis-1/2 mt-8">
                <div className="text-center">
                  <h3 className="text-black text-3xl md:text-4xl font-semibold mb-4">
                    Kontaktperson
                  </h3>
                  <hr className="w-16 border-2 mx-auto border-black" />
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
          </div>
        </section>
      </div>
    </>
  );
}
