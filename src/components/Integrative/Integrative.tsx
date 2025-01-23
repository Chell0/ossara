import ContactPerson from "@/components/ContactPerson/ContactPerson";
import YouTubeSection from "@/components/Integrative/YouTubeSection/YouTubeSection";
import Image from "next/image";

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

        <section className="relative w-full min-h-screen text-[#fcc41b]">
          <div className="flex md:flex-grow flex-row">
            <div className="basis-full">
              <h2 className="text-[5rem] font-semibold leading-tight p-8">
                Mit niederschwelliger Beratung und praxisnaher Unterstützung
                schaffen wir berufliche Perspektiven und fördern erfolgreiche
                Integration.
              </h2>
            </div>
          </div>
          <div className="flex md:flex-grow flex-row gap-10 m-8">
            <div className="basis-1/2 flex justify-center items-center mx-3 h-[360px] md:h-[480px]">
              <YouTubeSection videoId="xpWWgOP5QuE" />
            </div>
            <div className="basis-1/2 p-4 mt-10">
              <p className="text-lg text-[#5a8e8e]">
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
        <section className="relative w-full min-h-screen">
          <div className="flex md:flex-grow flex-row">
            <div className="basis-full">
              <h2
                className={`text-[#fcc41b] text-6xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight p-8 mt-10`}
              >
                Beratungs- und Bewerbungstraining
              </h2>
            </div>
          </div>

          <div className="flex md:flex-grow flex-row justify-center items-center text-center mt-10">
            <div className="basis-full">
              <div className="flex flex-col items-center w-full">
                <h3 className="text-5xl font-semibold text-[#fcc41b] mb-2">
                  Kontaktperson
                </h3>
                <hr className="w-16 border-2 border-[#fcc41b] mb-6" />
              </div>
              <div className="flex flex-col items-center w-full">
                <ContactPerson
                  name="Katja Heyn"
                  position="Beratungs- und Bewerbungstrainerin"
                  email="Bewerbungstraining[@]ossara.de"
                  phone="(+49) 1575 1406 184"
                  imageSrc="/contact-person/contact_person.jpg"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="relative w-full min-h-fit">
          <div className="flex md:flex-grow flex-row gap-10 pb-10">
            <div className="flex justify-center items-center basis-1/2 h-[240px] md:h-[280px] p-4">
              <Image
                src={`/bgs/img1.jpg`}
                alt="Integrative Photo"
                width={480}
                height={280}
                quality={100}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="basis-1/2 p-4">
              <p className="text-md text-[#5a8e8e]">
                Ossara e.V. bietet einmal wöchentlich eine niedrigschwellige
                Sozialberatung bzw. Orientierungshilfe an und unterstützt
                Interessierte bei Bewerbungen.
              </p>
              <p className="mt-4 text-md text-[#5a8e8e]">
                <b>Wo : </b>
                <span className="font-medium text-[#fcc41b]">
                  In den Räumlichkeiten des Sportvereins SV Groß Borstel am
                  Brödermannsweg 31, 22453 Hamburg und digital
                </span>
              </p>
              <p className="mt-4 text-md text-[#5a8e8e]">
                <b>Wann : </b>
                <span className="font-medium text-[#fcc41b]">
                  Freitags von 10:00 - 13:00 Uhr und nach Vereinbarung
                </span>
              </p>
              <p className="mt-4 text-md text-[#5a8e8e]">
                <b>Für wen : </b>
                <span className="font-medium text-[#fcc41b]">
                  Geflüchtete aus naheliegenden Unterkünften und Interessierte
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* Sprachförderung */}
        <section className="relative w-full min-h-screen">
          <div className="flex md:flex-grow flex-row">
            <div className="basis-full">
              <h2
                className={`text-[#fcc41b] text-5xl sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-tight p-8 mt-10`}
              >
                Sprachförderung- und Prüfungsvorbereitung
              </h2>
            </div>
          </div>
          <div className="flex md:flex-grow flex-row">
            <div className="basis-full">
              <div className="flex flex-col items-center w-full">
                <h3 className="text-5xl font-semibold text-[#fcc41b] mb-2 mt-10">
                  Kontaktperson
                </h3>
                <hr className="w-16 border-2 border-[#fcc41b] mb-6" />
              </div>

              <div className="flex flex-col items-center w-full">
                <ContactPerson
                  name="Hayford Anyidoho"
                  position="Deutschtrainer für Sprachförderung und Prüfungsvorbereitung"
                  email="sprachfoerderung[a]ossara.de"
                  phone="(+49) 1590 6737147"
                  imageSrc="/contact-person/contact_person.jpg"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="relative w-full min-h-fit">
          <div className="flex md:flex-grow flex-row gap-3">
            <div className="flex justify-center items-center basis-1/2 p-4 h-[360px] md:h-[400px]">
              <Image
                src={`/bgs/img1.jpg`}
                alt="Integrative Photo"
                width={480}
                height={400}
                quality={100}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="basis-1/2 p-8">
              <p className="text-md text-[#5a8e8e]">
                Mit unserer Sprachförderung möchten wir den Teilnehmenden
                helfen, ihre Sprachkenntnisse im formellen Kontext zu
                verbessern, ihre schriftliche Kompetenz zu fördern und einen
                Raum für interkulturellen Austausch zu bieten.
              </p>
              <p className="mt-4 text-md text-[#5a8e8e]">
                Die Prüfungsvorbereitung findet montags und dienstags von 10:00
                bis 13:00 Uhr statt. Unser Ziel ist es, die Teilnehmenden
                gezielt auf ihre Abschlussprüfungen vorzubereiten, indem wir
                sowohl schriftliche als auch mündliche Prüfungsfähigkeiten
                trainieren. In Kleingruppen werden Prüfungssituationen simuliert
                und das richtige Verhalten in Prüfungen geübt.
              </p>
              <p className="mt-4 text-md text-[#5a8e8e]">
                Die gängigen Prüfungen umfassen:
              </p>
              <ul className="text-md pl-5 mt-2 space-y-2 font-semibold text-[#fcc41b] list-disc">
                <li>Zertifikat Deutsch Telc A1, A2, B1, DTZ, B2, C1</li>
                <li>Goethe Zertifikat A1, A2, B1, B2, C1</li>
              </ul>
              <p className="mt-4 text-md text-[#5a8e8e]">
                <b>PS :</b>{" "}
                <span className="text-md text-[#5a8e8e]">
                  Wir führen keine Prüfungen durch und übernehmen keine
                  Prüfungsgebühren.
                </span>
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
