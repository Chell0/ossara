import Image from "next/image";

import ContactPerson from "@/components/ContactPerson/ContactPerson";
import YouTubeSection from "@/components/Stadtteilarbeit/YouTubeSection/YouTubeSection";

export default function Stadtteilarbeit() {
  return (
    <>
      <div>
        {/* Header Section */}
        <header className="relative w-full h-screen overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/IntegrativeStadtteilarbeit/INTEGRATIVESTADTTEILARBEIT_STADTTEIL_ARBEIT.jpg"
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
              <h1 className="text-[#fcc41b] font-extrabold uppercase leading-[1.1]text-3xl xs:text-4xl xs2:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[140px] 3xl:text-[160px]">
                <span className="block">Stadtteil.</span>
                <span className="block">Arbeit.</span>
              </h1>
            </div>
          </div>
        </header>

        <section className="relative w-full min-h-screen text-[#fcc41b] pb-8 xs:pb-10 sm:pb-12 md:pb-16 lg:pb-20 xl:pb-24 2xl:pb-28 3xl:pb-32 px-6">
          {/* BIG TEXT */}
          <div className="mx-auto pt-8 xs:mb-10 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24 2xl:mb-28 3xl:mb-32">
            <p className="text-xl xs:text-2xl xs2:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl 3xl:text-[8rem] font-semibold leading-normal tracking-normal text-left">
              Mit niederschwelliger Beratung und praxisnaher Unterstützung
              schaffen wir berufliche Perspektiven und fördern erfolgreiche
              Integration.
            </p>
          </div>

          {/* Section two bottom half */}
          <div className="flex flex-col md:flex-row gap-4 xs:gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-14 2xl:gap-16 3xl:gap-20 mt-8 xs:mt-10 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24 2xl:mt-28 3xl:mt-32 px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14 2xl:px-16 3xl:px-20">
            {/* YouTube Video Section */}
            <div className="w-full md:w-1/2 pt-8 xs:pt-10 sm:pt-12 md:pt-14 lg:pt-16 xl:pt-18 2xl:pt-20 3xl:pt-22">
              <YouTubeSection videoId="xpWWgOP5QuE" />
            </div>

            {/* Text Section */}
            <div className="w-full md:w-1/2 pt-8 xs:pt-10 sm:pt-12 md:pt-14 lg:pt-16 xl:pt-18 2xl:pt-20 3xl:pt-24 mb-8 xs:mb-10 sm:mb-12 md:mb-0">
              <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl 3xl:text-2xl leading-snug text-black mx-auto max-w-prose">
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

        {/* Stadtteilarbeit */}
        <section
          id="stadtteilarbeit"
          className="relative w-full min-h-screen text-[#fcc41b] flex items-center justify-center py-section"
        >
          <div className="container flex flex-col items-center justify-center">
            <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-10">
              {/* Left Column - Text Content */}
              <div className="w-full lg:w-1/2 px-4 md:px-0">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight text-left">
                  Integrative Stadtteilarbeit
                </h2>
                <div className="space-y-4 mt-6">
                  {[
                    "Unsere integrative Stadtteilarbeit in Hamburg-Nord – mit einem besonderen Fokus auf Groß Borstel – schafft Räume, in denen sich alle Menschen willkommen fühlen.",
                    "Besonders wichtig ist uns, dass auch Schwarze Menschen und People of Color sich gesehen, gehört und vertreten fühlen.",
                    "Wir gestalten Angebote, die Begegnung, Austausch und Empowerment ermöglichen. In enger Zusammenarbeit mit anderen Akteur:innen im Stadtteil sind wir an Runden Tischen beteiligt, entwickeln gemeinsame Projekte und organisieren eigene Veranstaltungen.",
                    "<strong>Unser Ziel:</strong> Braver Spaces und Safer Spaces im Stadtteil zu etablieren. Räume, in denen Erfahrungen geteilt, Perspektiven sichtbar gemacht und neue Formen des Miteinanders erprobt werden können.",
                    "<strong>Wir glauben:</strong> Stadtteilarbeit ist dann wirklich integrativ, wenn sie Strukturen hinterfragt, Zugangshürden abbaut und aktiv dazu beiträgt, dass marginalisierte Stimmen gehört werden.",
                  ].map((text, index) => (
                    <p
                      key={index}
                      className="text-sm sm:text-base md:text-lg text-black"
                      dangerouslySetInnerHTML={{ __html: text }}
                    />
                  ))}
                </div>
              </div>

              {/* Right Column - Contact Card */}
              <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center text-center lg:text-left pt-8 lg:pt-0">
                <h3 className="text-[#fcc41b] text-xl xs:text-2xl xs2:text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl font-semibold mb-4">
                  Kontaktperson
                </h3>
                <hr className="w-24 border-2 mx-auto lg:mx-0 border-[#fcc41b] mb-6" />
                <ContactPerson
                  name="Rita Zulu-Diawara"
                  position="Projektkoordination Integrative Stadtteilarbeit"
                  email="info[at]ossara.de"
                  phone="(+49) 152 13062798"
                  imageSrc="/images/IntegrativeStadtteilarbeit/RitaZulu_Diawara.jpg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Bewerbungstraining */}
        <section
          id="bewerbungstraining"
          className="relative w-full min-h-screen text-[#fcc41b] flex items-center justify-center py-section"
        >
          <div className="container flex flex-col items-center justify-center">
            <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-10">
              {/* Left Column - Text Content */}
              <div className="w-full lg:w-1/2 px-4 md:px-0">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight text-left">
                  Beratungs- und Bewerbungstraining
                </h2>

                <div className="space-y-4 mt-6">
                  <p className="text-sm sm:text-base md:text-lg text-black">
                    Du hast Fragen zu Arbeit, Ausbildung, Schule oder Studium?
                    Du brauchst Hilfe beim Schreiben von Bewerbungen oder beim
                    Ausfüllen von Formularen?
                  </p>

                  <p className="text-black text-sm sm:text-base md:text-lg">
                    Dann bist du bei uns richtig.
                  </p>

                  <p className="text-black text-sm sm:text-base md:text-lg">
                    Ossara e.V. bietet einmal pro Woche eine offene Beratung an.
                    Wir nehmen uns Zeit für dich. Gemeinsam schauen wir, was du
                    brauchst und wie wir dich unterstützen können.
                  </p>

                  <p className="text-black text-sm sm:text-base md:text-lg">
                    Wir helfen dir zum Beispiel bei:
                  </p>

                  <ul className="text-sm sm:text-base md:text-lg leading-relaxed pl-6 space-y-2 font-semibold text-[#fcc41b] list-disc">
                    <li>
                      der Suche nach Arbeit, Praktikum, Ausbildung oder Schule
                    </li>
                    <li>dem Schreiben von Lebenslauf und Bewerbung</li>
                    <li>Formularen vom Amt oder für Anträge</li>
                  </ul>

                  <div className="space-y-4">
                    <p className="text-sm sm:text-base md:text-lg">
                      <span className="text-black font-bold block">Wann?</span>
                      Montags von 10:00 bis 14:00 Uhr - nach Vereinbarung
                    </p>

                    <p className="text-sm sm:text-base md:text-lg">
                      <span className="text-black font-bold block">Wo?</span>
                      In den Räumen des SV Groß Borstel Brödermannsweg 31, 22453
                      Hamburg und digital
                    </p>

                    <p className="text-sm sm:text-base md:text-lg">
                      <span className="text-black font-bold block">
                        Für wen?
                      </span>
                      Das Angebot ist für geflüchtete Menschen aus Unterkünften
                      in der Nähe – und für alle, die Unterstützung brauchen.
                    </p>
                  </div>

                  <p className="text-black text-sm sm:text-base md:text-lg">
                    Wir sprechen einfaches Deutsch. Bei Bedarf organisieren wir
                    eine Übersetzung. Du bist herzlich willkommen.
                  </p>
                </div>
              </div>

              {/* Right Column - Contact Card */}
              <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center text-center lg:text-left pt-8 lg:pt-0">
                <h3 className="text-[#fcc41b] text-xl xs:text-2xl xs2:text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl font-semibold mb-4">
                  Kontaktperson
                </h3>
                <hr className="w-24 border-2 mx-auto lg:mx-0 border-[#fcc41b] mb-6" />
                <ContactPerson
                  name="Katja Heyn"
                  position="Leitung Beratungs- und Bewerbungstrainerin"
                  email="Bewerbungstraining[at]ossara.de"
                  phone="(+49) 1575 1406 184"
                  imageSrc="/images/IntegrativeStadtteilarbeit/KatjaHeyn.jpg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Sprachförderung */}
        <section
          id="sprachforderung"
          className="relative w-full min-h-[30vh] md:min-h-screen text-[#fcc41b] flex items-center justify-center py-section"
        >
          <div className="container flex flex-col items-center justify-center">
            <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-10">
              {/* Left Column - Text Content */}
              <div className="w-full lg:w-1/2 px-4 md:px-0">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight text-left">
                  Sprachförderung und Prüfungsvorbereitung
                </h2>

                <div className="space-y-4 mt-6">
                  <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed italic">
                    Gemeinsam sicherer in der Sprache – für Alltag, Ausbildung
                    und Prüfungen
                  </p>

                  <p className="text-black text-sm sm:text-base md:text-lg">
                    Mit unserem Sprachförderangebot unterstützen wir dich dabei,
                    deine Deutschkenntnisse zu verbessern – besonders für
                    wichtige Gespräche, Bewerbungen und Prüfungen.
                  </p>

                  <p className="text-black text-sm sm:text-base md:text-lg">
                    Wir helfen dir:
                  </p>

                  <ul className="text-sm sm:text-base md:text-lg leading-relaxed pl-5 space-y-2 font-semibold text-[#fcc41b] list-disc">
                    <li>Besser auf Deutsch zu schreiben</li>
                    <li>Dich in Prüfungen gut auszudrücken</li>
                    <li>Dich sicherer im formellen Deutsch zu fühlen</li>
                    <li>
                      Andere Menschen kennenzulernen und dich auszutauschen
                    </li>
                  </ul>

                  <p className="text-black text-sm sm:text-base md:text-lg">
                    Unser Ziel ist es, dich gut auf deine Abschlussprüfungen
                    vorzubereiten. In kleinen Gruppen üben wir Prüfungsfragen,
                    schreiben Texte und trainieren das freie Sprechen. Du kannst
                    lernen, wie Prüfungen ablaufen – und was du dabei beachten
                    musst.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <p className="text-sm sm:text-base md:text-lg">
                        <span className="text-black font-bold block">
                          Wann?
                        </span>
                        Montags und dienstags
                        <br />
                        von 10:00 bis 13:00 Uhr
                      </p>
                    </div>

                    <div>
                      <p className="text-black text-sm sm:text-base md:text-lg">
                        <span className="font-bold block">Was wird geübt?</span>
                        Wir bereiten dich auf viele bekannte Prüfungen vor, zum
                        Beispiel:
                      </p>
                      <ul className="text-sm sm:text-base md:text-lg font-semibold pl-5 space-y-2 mt-2 list-disc">
                        <li>telc A1, A2, B1, B2, C1</li>
                        <li>DTZ – Deutsch-Test für Zuwanderer</li>
                        <li>Goethe-Zertifikate A1 bis C1</li>
                      </ul>
                    </div>

                    <p className="text-sm sm:text-base md:text-lg">
                      <span className="text-black font-bold block">
                        Wichtig:
                      </span>
                      Wir führen keine Prüfungen selbst durch und übernehmen
                      keine Prüfungsgebühren. Wir helfen dir aber bei der
                      Vorbereitung und können dir sagen, wo du dich anmelden
                      kannst.
                    </p>
                    <p className="text-black text-sm sm:text-base md:text-lg">
                      Melde dich gerne, wenn du mitmachen möchtest – wir freuen
                      uns auf dich!
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column - Contact Card */}
              <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center text-center lg:text-left pt-8 lg:pt-0">
                <h3 className="text-[#fcc41b] text-xl xs:text-2xl xs2:text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl font-semibold mb-4">
                  Kontaktperson
                </h3>
                <hr className="w-24 border-2 mx-auto lg:mx-0 border-[#fcc41b] mb-6" />
                <ContactPerson
                  name="Hayford Anyidoho"
                  position="Leitung Sprachförderung und Prüfungsvorbereitung"
                  email="sprachfoerderung[at]ossara.de"
                  phone="(+49) 1590 6737147"
                  imageSrc="/images/IntegrativeStadtteilarbeit/HayfordAnyidoho.jpg"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
