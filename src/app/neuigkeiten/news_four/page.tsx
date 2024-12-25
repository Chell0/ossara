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
          <p className="text-base font-semibold">10. November 2023</p>
        </section>
        {/* Title */}
        <section className="text-[#ffb400] text-center py-6 mt-5">
          <h2
            className={`${bebasNeue.className} drop-shadow-xl text-6xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight uppercase`}
          >
            Vielfalt im Fokus
          </h2>
        </section>
        {/* Image */}
        <section className="flex items-center justify-center mt-20">
          <div className="relative rounded-xl shadow-xl overflow-hidden max-h-[480px]">
            <Image
              src={`/news/picture-3.png`}
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
              <b>Rückblick:</b>
            </p>
            <p className="mt-2 text-base text-gray-800">
              ✨Vielfalt im Fokus: Perspektiven und Erfahrungen von
              Migrantenselbstorganisationen✨
            </p>
            <p className="mt-4 text-base text-gray-800">
              Vielfalt als Statussymbol? Wer kommt zu kurz und welche Stimmen
              müssen mehr gehört werden? In einem interaktiven Live Podcast
              kommen Expert*innen zu Wort, die Perspektiven von
              Migrantenselbstorganisationen zum Thema Vielfalt in Hamburg in den
              Blick nehmen. Welche Herausforderungen bringt die Thematik für
              Person of Color? Welche Dimensionen finden bis jetzt weniger
              Achtung oder werden in der Diskussion um das Thema nicht
              berücksichtigt?
            </p>
            <p className="mt-4 text-base text-gray-800">
              Am 10. November 2023 haben sich, im Rahmen der Woche der Vielfalt
              des Bezirkes Hamburg Nord, vier Expert*innen dieser Thematik
              gewidmet und in einem Live Podcast über relevante Themen
              diskutiert.
            </p>
            <p className="mt-4 text-base text-gray-800">
              Die Veröffentlichung des Live Podcast folgt in Kürze.
            </p>
            <p className="mt-4 text-base text-gray-800">Mit dabei waren:</p>
            <ul className="mt-4 ml-10 space-y-2 text-sm font-semibold text-[#ffb400] list-disc">
              <li>
                Tina Banze, Gründerin der Initiative intersektional deutsch
              </li>
              <li>
                Nicolas S. Moumouni, Vorsitzender und Gründer des Vereins OSSARA
                e.V.
              </li>
              <li>
                Sally Riedel, Initiatorin und geschäftsführende Vorsitzende des
                Vereins MOSAIQ e.V
              </li>
              <li>
                Konstantin Ulmer, Referent für PR, Ausstellungen und
                Veranstaltungen in der Staats- und Universitätsbibliothek,
                begleitet uns als Moderator durch den Abend
              </li>
            </ul>
            <p className="mt-4 text-base text-gray-800">
              Gefördert wurde diese Veranstaltung durch das Bezirksamt Hamburg
              Nord.
            </p>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
}
