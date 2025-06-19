import Image from "next/image";

import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";

export default function Page() {
  return (
    <div className="relative bg-white">
      <main className="p-6">
        <NavBar />
        <div className="container mx-auto mt-20 max-w-screen-md rounded-lg bg-[#fff6ea] p-10 shadow-sm">
          {/* News Date */}
          <h3 className="mb-5 text-center text-gray-500 uppercase">
            11. März 2024
          </h3>

          {/* News Title */}
          <h1
            className={`mb-10 text-center font-bold text-2xl text-[#eb7b24] uppercase leading-8 tracking-wide sm:text-lg md:text-xl lg:text-3xl`}
          >
            Decolonize Schönheit
          </h1>

          {/* News Image */}
          <div className="mt-10 mb-5 flex max-w-screen-lg items-center justify-center">
            <Image
              src={`/news/picture-5.png`}
              alt={`Neu im Team Ossara- Hamburg photo`}
              width="1080"
              height="872"
              priority
              quality={100}
              className={`rounded-md object-contain object-center`}
              style={{ maxHeight: "640px" }}
            />
          </div>

          {/* News Content */}
          <section className="prose prose-sm prose-stone prose-a:target:_blank prose-a:rel:noreferrer mx-auto mt-20 max-w-screen-md prose-headings:font-semibold prose-a:text-orange-500 prose-headings:text-2xl prose-headings:text-orange-500">
            <p className="mt-4 text-base text-gray-800">
              Save the Date: Podiumsdiskussion: Decolonize Schönheit
              <br />
              Montag, 11.03.2024, 18.30-20:00 Uhr, online mit Anmeldung
            </p>
            <p className="mt-4 text-base text-gray-800">
              Die Vorstellung von Körperidealen ist eng mit dem Kolonialismus
              verbunden, da die koloniale Herrschaft oft mit der Verbreitung
              westlicher Schönheitsstandards einherging. Während des
              Kolonialismus wurden die Körper und Erscheinungsbilder der
              kolonisierten Völker oft als minderwertig angesehen und westliche
              Schönheitsideale wurden als überlegen propagiert. Dies führte
              dazu, dass viele Menschen in den kolonisierten Gebieten begannen,
              ihre natürlichen körperlichen Merkmale zu verbergen oder zu
              verändern, um den westlichen Standards zu entsprechen. Dies konnte
              sich in Form von Hautbleichung, Haarglättung oder anderen
              kosmetischen Eingriffen manifestieren.
            </p>
            <p className="mt-4 text-base text-gray-800">
              Darüber hinaus wurden auch die körperlichen Merkmale der indigenen
              Völker von den Kolonisatoren oft exotisiert und fetischisiert.
              Dies führte dazu, dass bestimmte körperliche Merkmale als
              attraktiv oder wünschenswert angesehen wurden, während andere als
              abstoßend oder minderwertig betrachtet wurden. In vielen
              postkolonialen Gesellschaften haben diese Vorstellungen von
              Körperidealen weiterhin einen starken Einfluss und führen zu einer
              internalisierten Ablehnung der eigenen natürlichen Merkmale.
            </p>
            <p className="mt-4 text-base text-gray-800">
              Unsere *Decolonize-Veranstaltungsreihe* geht in die nächste Runde
              und widmet sich dem Thema Schönheits- und Körperideale und die
              tief verwurzelte koloniale Definition von gesellschaftlichen
              Schönheitsvorstellungen. Wie wird „Schönheit“ in unseren
              Biografien vorgelebt und verankert? Wo kollidieren
              Schönheitsideale mit bestehenden Machtstrukturen? Wie können diese
              durch Empowerment und dekoloniale Positionen aufgebrochen werden?
              Welche Entwicklungen zeichnen sich ab und was ist für einen
              gesellschaftlichen Wandel notwendig?
            </p>
            <p className="mt-4 text-base text-gray-800">Panelbesetzung:</p>
            <ul className="mt-2 ml-10 list-disc space-y-2 text-[#eb7b24] text-sm">
              <li>
                <b>Beatrace Angut Oola:</b> Kuratorin, Fashion Stylistin,
                Cultural Creative Consulatant, Speaker, sowie Gastdozentin an
                der Hochschule für Künste in Bremen und Universität der Künste
                Berlin und Beiratsmitglied von Dekolonisierung.
              </li>
              <li>
                <b>Ginnie Bekoe (keine Pronomen):</b> schreibt Texte, macht
                Poetry, Workshops, Vorträge und sich viele Gedanken zu den
                Verwobenheiten von Schwarzsein, beHinderung, Fatness &
                Queerness.
              </li>
              <li>
                <b>Mauricio Pereyra:</b> Pantomime und Theaterpädagoge aus
                Bolivien, Mitarbeiter und Berliner Fachpromotor für Globales
                Lernen im EPIZ e.V. Berlin.
              </li>
            </ul>
            <p className="mt-4 text-base text-gray-800">Moderation:</p>
            <ul className="mt-2 ml-10 list-disc space-y-2 text-[#eb7b24] text-sm">
              <li>
                <b>Maya Zaheer (sie/ihr):</b> studiert Visuelle Kommunikation an
                der Kunsthochschule Berlin Weißensee, Grafikdesignerin und
                Redakteurin des Community-Podcasts „curry on!“.
              </li>
            </ul>
            <p className="mt-4 text-base text-gray-800">
              Dies ist die zweite Veranstaltung einer Decolonize-Reihe von
              Ossara e.V., die den interkulturellen Dialog und den Austausch von
              verschiedenen Stimmen und Perspektiven aus der Community fördert.
              Die Veranstaltungsreihe wird in Kooperation mit den Eine
              Welt-Promotorinnen für Dekolonisierung organisiert. Diese
              Veranstaltung wird durch die Norddeutsche Stiftung für Umwelt und
              Entwicklung und Brot für die Welt gefördert.
            </p>
          </section>
        </div>
        <Footer />
      </main>
    </div>
  );
}
