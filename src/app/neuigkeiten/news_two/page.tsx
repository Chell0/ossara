import { bebasNeue } from "@/app/fonts";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import Image from "next/image";

export default function Page() {
  return (
    <div>
      <main className="p-6">
        <NavBar />
        {/* Date */}
        <section className="text-center text-gray-800">
          <p className="text-base font-semibold">11. März 2024</p>
        </section>
        {/* Title */}
        <section className="text-[#ffb400] text-center py-6 mt-5">
          <h2
            className={`${bebasNeue.className} drop-shadow-xl text-6xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight uppercase`}
          >
            Decolonize Schönheit
          </h2>
        </section>
        {/* Image */}
        <section className="flex items-center justify-center mt-20">
          <div className="relative rounded-xl shadow-xl overflow-hidden max-h-[480px]">
            <Image
              src={`/news/picture-5.png`}
              alt={`Neu im Team Ossara- Hamburg photo`}
              width={400}
              height={400}
              className={`object-cover object-center`}
              quality={100}
            />
          </div>
        </section>
        {/* Text */}
        <section className="flex flex-col items-center justify-center mt-10">
          <div className="w-full md:w-1/2">
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
              Schönheitsideale wurden als überlegen propagiert.
            </p>
            <p className="mt-4 text-base text-gray-800">
              Dies führte dazu, dass viele Menschen in den kolonisierten
              Gebieten begannen, ihre natürlichen körperlichen Merkmale zu
              verbergen oder zu verändern, um den westlichen Standards zu
              entsprechen. Dies konnte sich in Form von Hautbleichung,
              Haarglättung oder anderen kosmetischen Eingriffen manifestieren.
            </p>
            <p className="mt-4 text-base text-gray-800">
              Darüber hinaus wurden auch die körperlichen Merkmale der indigenen
              Völker von den Kolonisatoren oft exotisiert und fetischisiert.
              Dies führte dazu, dass bestimmte körperliche Merkmale als
              attraktiv oder wünschenswert angesehen wurden, während andere als
              abstoßend oder minderwertig betrachtet wurden.
            </p>
            <p className="mt-4 text-base text-gray-800">
              In vielen postkolonialen Gesellschaften haben diese Vorstellungen
              von Körperidealen weiterhin einen starken Einfluss und führen zu
              einer internalisierten Ablehnung der eigenen natürlichen Merkmale.
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
            <ul className="mt-2 ml-10 space-y-2 text-sm list-disc">
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
            <ul className="mt-2 ml-10 space-y-2 text-sm list-disc">
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
            </p>
            <p className="mt-4 text-base text-gray-800">
              Die Veranstaltungsreihe wird in Kooperation mit den Eine
              Welt-Promotorinnen für Dekolonisierung organisiert.
            </p>
            <p className="mt-4 text-base text-gray-800">
              Diese Veranstaltung wird durch die Norddeutsche Stiftung für
              Umwelt und Entwicklung und Brot für die Welt gefördert.
            </p>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
}
